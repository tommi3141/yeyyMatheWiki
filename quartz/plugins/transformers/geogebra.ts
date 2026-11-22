import { QuartzTransformerPlugin } from "../types"
import { Root } from "mdast"
import { findAndReplace } from "mdast-util-find-and-replace"
import { FullSlug, transformLink } from "../../util/path"
import geogebraScript from "../../components/scripts/geogebra.inline"
import geogebraStyle from "../../components/styles/geogebra.inline.scss"

export interface Options {
  /** Standardgröße des Applets (bestimmt das Seitenverhältnis) */
  defaultWidth: number
  defaultHeight: number
  /**
   * Unter dieser Breite (px) wird das Applet nicht mehr nativ, sondern verkleinert
   * dargestellt (z.B. auf dem Handy). Darüber bleibt es scharf.
   */
  minWidth: number
}

const defaultOptions: Options = {
  defaultWidth: 800,
  defaultHeight: 500,
  minWidth: 500,
}

// ![[datei.ggb]]  oder  ![[datei.ggb|800x450]]
const ggbEmbedRegex = /!\[\[([^\[\]|#]+?\.ggb)(?:\\?\|([^\[\]]*))?\]\]/gi
const sizeRegex = /^\s*(\d+)\s*x\s*(\d+)\s*$/

const escapeAttr = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;")

/**
 * Bindet lokale GeoGebra-Dateien (.ggb) per `![[datei.ggb]]` als interaktives Applet ein.
 * Muss in quartz.config.ts VOR ObsidianFlavoredMarkdown stehen.
 */
export const GeoGebra: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "GeoGebra",
    markdownPlugins(ctx) {
      return [
        () => (tree: Root, file) => {
          const slug = file.data.slug as FullSlug
          let counter = 0
          findAndReplace(tree, [
            [
              ggbEmbedRegex,
              (_value: string, rawFp: string, rawAlias?: string) => {
                const url = transformLink(slug, rawFp.trim(), {
                  strategy: "shortest",
                  allSlugs: ctx.allSlugs,
                })
                const size = sizeRegex.exec(rawAlias ?? "")
                const width = size ? Number(size[1]) : opts.defaultWidth
                const height = size ? Number(size[2]) : opts.defaultHeight
                const id = `ggb-${counter++}`
                return {
                  type: "html",
                  value: `<div class="ggb-embed" style="aspect-ratio: ${width} / ${height}"><div class="ggb-applet" id="${id}" data-filename="${escapeAttr(
                    url,
                  )}" data-width="${width}" data-height="${height}" data-min-width="${opts.minWidth}"></div></div>`,
                }
              },
            ],
          ])
        },
      ]
    },
    externalResources() {
      return {
        js: [
          {
            script: geogebraScript,
            loadTime: "afterDOMReady",
            contentType: "inline",
          },
        ],
        css: [{ content: geogebraStyle, inline: true }],
      }
    },
  }
}
