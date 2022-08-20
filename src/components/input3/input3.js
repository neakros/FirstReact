import React, {Component} from 'react';

class Input3 extends Component {

    inputHandler(e) {
        this.props.inputHandler3(e.target.value)
    }

    render() {
        return (
            <>
                <input value={this.props.inputValue} onChange={(e)=>this.inputHandler(e)} type={'text'}/>
            </>
        );
    }
}

export default Input3;