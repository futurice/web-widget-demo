import { h } from "preact"
import className from "classname"

import AbstractWidget from "../utils/widget"

class Widget2 extends AbstractWidget {
    constructor(props) {
        super(props)
        this.state = {
            changed: false
        }
    }

    toggle() {
        if (this.state.changed) {
            this.setState({ changed: false })
        } else {
            this.setState({ changed: true })
        }
    }

    render(props, state) {
        const boxClassName = className("box", { "changed": state.changed })

        return <div onClick={this.toggle.bind(this)}>
            <div class={boxClassName} />
        </div>
    }
}

export default Widget2
