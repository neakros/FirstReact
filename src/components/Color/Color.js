import React, {Component} from 'react';
import './Color.scss'

class Color extends Component {

    state = {
        color: "red",
        colorNum: 0
    }


    colorHandler() {
        if (this.state.colorNum < this.props.colorArr.length - 1) {
            this.setState((s)=>({colorNum: s.colorNum + 1}))
            this.setState({color: this.props.colorArr[this.state.colorNum + 1]})
        } else {
            this.setState({colorNum: 0})
            this.setState({color: this.props.colorArr[0]})
        }

    }
    render() {

        const style = {
            color: this.props.color || this.state.color
        }
        return (
            <div>
                <p onClick={() => this.colorHandler()} style={style} className={"p"}> {this.props.name} </p>
            </div>
        );
    }
}

export default Color;