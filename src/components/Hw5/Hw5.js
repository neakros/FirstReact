import React, {Component, Fragment} from 'react';
import './Hw5.scss'
import Input1 from '../input1/input1'
import Input2 from '../input2/input2'
import Input3 from '../input3/input3'

class Hw5 extends Component {
    state = {
        input1:'',
        input2:'',
        input3:'',
        // showButton:{
        //     input1: '',
        //     input2: '',
        //     input3: '',
        // }
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
        e.preventDefault()
        // const {input1Text,input2Number,input3Text} = this.state
        // this.setState({
        //     input1Text:'',
        //     input2Number:'',
        //     input3Text:'',
        //     showButton: {
        //         input1:input1Text,
        //         input2:input2Number,
        //         input3:input3Text,
        //     }
        // })
    }

    render() {
        return (
            <div className={'forms'}>
                <form>
                    <Input1 inputHandler1={(e)=>this.inputHandler1(e)} />
                    <Input2 inputHandler2={(e)=>this.inputHandler2(e)} />
                    <Input3 inputHandler3={(e)=>this.inputHandler3(e)} />
                    <input onClick={(e)=>this.showHandler(e)} type='submit'/>
                </form>
                <h1>{this.state.input1}</h1>
                <h1>{this.state.input2}</h1>
                <h1>{this.state.input3}</h1>
            </div>
        );
    }
}

export default Hw5;