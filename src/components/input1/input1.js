import React, {Component} from 'react';

class Input1 extends Component {

    state = {
        value: ''
    }

    inputHandler(e) {
        this.setState({value: e.target.value})
        this.props.inputHandler1(this.state.value)
    }

    // buttonHandler(e) {
    //     e.preventDefault()
    //
    //     this.setState({value:''})
    // }

    render() {
        return (
            <>
                <input placeholder={'Вевіть текст'} value={this.state.value} onChange={(e) => this.inputHandler(e)}
                       type='text'/>
                {/*<input onClick={(e) => this.buttonHandler(e)} type='button' value={'Button1'}/>*/}
            </>
        );
    }
}

export default Input1;