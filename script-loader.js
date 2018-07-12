function loadCss() {
    const linkId = "widget-style"
    if (document.getElementById(linkId)) {
        console.log("already have style")
    } else {
        const link = document.createElement("link")
        link.id = linkId
        link.rel = "stylesheet"
        link.type = "text/css"
        link.media = "screen"
        link.href = "http://localhost:1234/main.css"

        document.head.appendChild(link)
    }
}

function loadScript() {
    const scriptId = "widget-script"
    if (document.getElementById(scriptId)) {
        console.log("already have script")
    } else {
        const script = document.createElement("script")
        script.id = scriptId
        script.type = "text/javascript"
        script.src = "http://localhost:1234/renderer.js"

        document.head.appendChild(script)
    }
}

loadCss()
loadScript()
