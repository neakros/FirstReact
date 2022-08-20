import React, {Component} from 'react';

class Input1 extends Component {
    inputHandler(e) {
        this.props.inputHandler1(e.target.value)
    }
    render() {
        return (
            <>
                <input placeholder={'Вевіть текст'} value={this.props.inputValue} onChange={(e) => this.inputHandler(e)}
                       type='text'/>
            </>
        );
    }
}

export default Input1;