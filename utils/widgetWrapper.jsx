import { h, Component } from "preact"
import uuid from "uuid"
import render from "preact-render-to-string"

const script = <script type="text/javascript" src={`${window.location.origin}/script-loader.js`}></script>

class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    render(props, state) {
        const randomId = uuid()

        const { Component } = props
        const componentName = Component.name

        if (state.show) {
            return <div>
                <Component />
                <div>
                    <a href="#" onClick={() => this.setState({ show: !state.show })}>Hide embed code</a>
                    <section>
                        {render(<div init-class={componentName} init-id={randomId} />)}
                        {render(script)}
                        {render(<script>
                            window.waitInflate('{randomId}')
                        </script>)}
                    </section>
                </div>
            </div>
        } else {
            return <div>
                <Component />
                <a href="#" onClick={() => this.setState({ show: !state.show })}>Show embed code</a>
            </div>
        }
    }
}

function wrap(Component) {
    return () => <Wrapper Component={Component} />
}

export default wrap
