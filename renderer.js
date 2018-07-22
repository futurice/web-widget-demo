import { h, render } from "preact"

import Widget1 from "./widgets/widget1"
import Widget2 from "./widgets/widget2"

function inflate(element) {
    const widgetType = element.getAttribute("init-class")
    
    switch(widgetType) {
        case Widget1.name: return render(<Widget1 />, element)
        case Widget2.name: return render(<Widget2 />, element)
        default: throw Error(`Unknown widget. Please register widget ${widgetType} for rendering.`)
    }

}

function inflateAll() {
    const widgets = document.querySelectorAll("[data-widget]")
    widgets.forEach(inflate)
}

document.addEventListener("DOMContentLoaded", function(event) { 
    inflateAll()
})
