import React, {Component} from 'react';
import './Hw5.scss'
import Input1 from '../input1/input1'
import Input2 from '../input2/input2'
import Input3 from '../input3/input3'

class Hw5 extends Component {
    state = {
        input1:'',
        input2:'',
        input3:'',
        showJson:'',
    }

    inputHandler1 (e) {
        this.setState({input1:e})
    }

    inputHandler2 (e) {
        this.setState({input2:e})
    }

    inputHandler3 (e) {
        this.setState({input3:e})
    }

    showHandler(e) {
        let button = this.state.input1 + this.state.input2 + this.state.input3
        button = JSON.stringify(button)
        this.setState({showJson: button})
        e.preventDefault()
    }

    render() {
        return (
            <div className={'forms'}>
                <form>
                    <Input1 inputHandler1={(e)=>this.inputHandler1(e)} inputValue={this.state.input1} />
                    <Input2 inputHandler2={(e)=>this.inputHandler2(e)} inputValue={this.state.input2} />
                    <Input3 inputHandler3={(e)=>this.inputHandler3(e)} inputValue={this.state.input3} />
                    <input onClick={(e)=>this.showHandler(e)} type='submit'/>
                </form>
                <h1>{this.state.showJson}</h1>

            </div>
        );
    }
}

export default Hw5;