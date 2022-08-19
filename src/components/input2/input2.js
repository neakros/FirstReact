import React, {Component} from 'react';

class Input2 extends Component {

    state = {
        value:''
    }

    inputHandler(e) {
        this.setState({value:e.target.value})
        this.props.inputHandler2(this.state.value)
    }

    // buttonHandler(e) {
    //     e.preventDefault()
    //
    //     this.setState({value:''})
    // }

    render() {
        return (
            <>
                <input value={this.state.value} onChange={(e)=>{this.inputHandler(e)}} placeholder={'Ведіть число'}
                type={'number'}/>
                {/*<input onClick={(e)=>this.buttonHandler(e)} type={'button'} value={'button2'}/>*/}
            </>
        );
    }
}

export default Input2;