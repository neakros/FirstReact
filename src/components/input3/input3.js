import React, {Component} from 'react';

class Input3 extends Component {

    state = {
        value:''
    }

    inputHandler(e) {
        this.setState({value:e.target.value})
        this.props.inputHandler3(this.state.value)
    }

    // buttonHandler(e) {
    //     e.preventDefault()
    //
    //     this.setState({value:''})
    // }

    render() {
        return (
            <>
                <input value={this.state.value} onChange={(e)=>this.inputHandler(e)} type={'text'}/>
                {/*<input onClick={(e)=>this.buttonHandler(e)} type={'button'} value={'Button3'}/>*/}
            </>
        );
    }
}

export default Input3;