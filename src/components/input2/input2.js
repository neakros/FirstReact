import React, {Component} from 'react';

class Input2 extends Component {

  inputHandler(e) {
        this.props.inputHandler2(e.target.value)
    }

    render() {
        return (
            <>
                <input value={this.props.inputValue} onChange={(e)=>{this.inputHandler(e)}} placeholder={'Ведіть число'}
                type={'number'}/>
            </>
        );
    }
}

export default Input2;