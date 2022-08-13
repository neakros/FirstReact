import React, {Component} from 'react';
import './Counter.scss';

class Counter extends Component {

    state = {
        value:0
    }

    countUp(){
        this.setState((state)=>({value:state.value+1}))
    }

    countDown() {
        this.setState((state)=>({value:state.value-1}))
    }

    render() {
        return (
            <div className={'wrapper'}>
                <h1 className={'number'}>{this.state.value}</h1>
                <div className={'buttons-wrapper'}>
                    <button className={'plus'} onClick={()=>this.countUp()}>Додати</button>
                    <button className={'minus'} onClick={()=>this.countDown()}>Відняти</button>
                </div>
            </div>
        );
    }
}

export default Counter;