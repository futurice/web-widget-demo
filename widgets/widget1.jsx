import { h } from "preact"
import className from "classname"

import AbstractWidget from "../utils/widget"

class Widget1 extends AbstractWidget {

    constructor(props) {
        super(props)
        this.state = {
            switch: false
        }
    }

    toggle() {
        if (this.state.switch) {
            this.setState({ switch: false })
        } else {
            this.setState({ switch: true })
        }
    }

    render(props, state) {
        const switchBarClassName = className("switch-bar", { "on": state.switch })
        const switchSliderClassName = className("switch-slider", { "on": state.switch })

        return <div class="switch" onClick={this.toggle.bind(this)}>
            <div class={switchBarClassName}>
                <div class={switchSliderClassName} />
            </div>
        </div>
    }
}

export default Widget1
