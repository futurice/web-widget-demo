import { h, render } from "preact"

import Widget1 from "./widgets/widget1"
import Widget2 from "./widgets/widget2"

const app = <div>
    <h2>Widget1</h2>
    <Widget1.Wrapper />
    <h2>Widget2</h2>
    <Widget2.Wrapper />
</div>

const root = document.getElementById("root")
render(app, root, root.lastChild)
