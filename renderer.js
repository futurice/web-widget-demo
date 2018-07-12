import { h, render } from "preact"

import Widget1 from "./widgets/widget1"
import Widget2 from "./widgets/widget2"

function inflate(initId) {
    const widget = document.querySelector(`[init-id="${initId}"]`)
    const widgetType = widget.getAttribute("init-class")
    
    switch(widgetType) {
        case Widget1.name: return render(<Widget1 />, widget)
        case Widget2.name: return render(<Widget2 />, widget)
        default: throw Error("Unknown widget. Please register the widget for rendering.")
    }

}

window.inflate = inflate
