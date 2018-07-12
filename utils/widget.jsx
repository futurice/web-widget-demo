import { h, Component } from "preact"

import wrap from "./widgetWrapper"

class AbstractWidget extends Component {
    static get Wrapper() {
        return wrap(this)
    }

    render() {
        throw Error("Should be overwritten")
    }
}

export default AbstractWidget
