// Lädt die GeoGebra-Bibliothek erst, wenn eine Seite tatsächlich ein Applet enthält,
// und initialisiert die Applets bei jeder (SPA-)Navigation neu.

// In eine Funktion gekapselt, weil Quartz Inline-Skripte global einbindet und
// die minifizierten Variablennamen sonst mit anderen Skripten kollidieren.
;(() => {
  const ggbWindow = window as Window & { GGBApplet?: any }

  const DEPLOY_URL = "https://www.geogebra.org/apps/deployggb.js"
  let deployPromise: Promise<void> | null = null

  function loadDeployScript(): Promise<void> {
    if (ggbWindow.GGBApplet) return Promise.resolve()
    if (!deployPromise) {
      deployPromise = new Promise((resolve, reject) => {
        const s = document.createElement("script")
        s.src = DEPLOY_URL
        s.async = true
        s.onload = () => resolve()
        s.onerror = () => {
          deployPromise = null
          reject(new Error("GeoGebra konnte nicht geladen werden"))
        }
        document.head.appendChild(s)
      })
    }
    return deployPromise
  }

  async function setupGeoGebra() {
    const applets = [
      ...document.querySelectorAll<HTMLElement>(".ggb-applet:not([data-ggb-loaded])"),
    ]
    if (applets.length === 0) return

    try {
      await loadDeployScript()
    } catch (err) {
      for (const el of applets) {
        el.textContent = "GeoGebra-Applet konnte nicht geladen werden."
        el.classList.add("ggb-error")
      }
      return
    }

    for (const el of applets) {
      el.dataset.ggbLoaded = "true"
      const filename = new URL(el.dataset.filename!, window.location.href).href
      const container = el.parentElement!
      const ratio = Number(el.dataset.height) / Number(el.dataset.width)
      const minWidth = Number(el.dataset.minWidth)

      const sizeFor = () => {
        const w = Math.floor(container.clientWidth)
        return [w, Math.round(w * ratio)] as const
      }
      const [containerWidth] = sizeFor()

      // Normalfall: Das Applet bekommt genau die Breite des Containers in echten Pixeln und
      // bleibt dadurch scharf. GeoGebras eigene Skalierung (CSS-transform) macht es unscharf
      // und wird nur genutzt, wenn der Platz zu schmal ist (z.B. auf dem Handy).
      const native = containerWidth >= minWidth
      const width = native ? containerWidth : minWidth
      const height = Math.round(width * ratio)

      let api: any = null
      let lastWidth = width
      if (native) {
        const observer = new ResizeObserver(() => {
          const [w, h] = sizeFor()
          if (!api || w === lastWidth || w < minWidth) return
          lastWidth = w
          api.setSize(w, h)
        })
        observer.observe(container)
        window.addCleanup(() => observer.disconnect())
      }

      const params = {
        appName: "classic",
        filename,
        width,
        height,
        ...(native ? {} : { scaleContainerClass: "ggb-embed", allowUpscale: false }),
        appletOnLoad: (loadedApi: any) => {
          api = loadedApi
          if (!native) return
          const [w, h] = sizeFor()
          if (w !== width && w >= minWidth) {
            lastWidth = w
            api.setSize(w, h)
          }
        },
        // Skriptfehler aus der .ggb-Datei nicht als Popup anzeigen
        errorDialogsActive: false,
        showToolBar: false,
        showMenuBar: false,
        showAlgebraInput: false,
        showResetIcon: true,
        showFullscreenButton: true,
        enableShiftDragZoom: true,
        enableRightClick: false,
        enableLabelDrags: false,
        useBrowserForJS: false,
        language: "de",
      }
      new ggbWindow.GGBApplet(params, true).inject(el.id)
    }
  }

  document.addEventListener("nav", () => {
    setupGeoGebra()
  })
})()

// Nur für TypeScript: Der Inline-Loader entfernt diese Zeile beim Bundeln
export default ""
