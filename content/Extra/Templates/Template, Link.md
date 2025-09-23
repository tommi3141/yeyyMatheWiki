<%*
let url = await tp.system.prompt("Gib die URL ein:")
let name = await tp.system.prompt("Gib den Anzeigenamen ein:")

tR += `<div class="my-link"><a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a></div>`
%>
