import React, { Component } from 'react'

class A extends Component {
    render() {
        return (
            <div>
                A, x = {this.props.x}
                <button onClick={this.props.incrementX}>Increment X</button>
            </div>
        )
    }
}

// export
export default A;