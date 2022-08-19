import React, {Component} from 'react';
import './Hw4.scss'
import img from '../../Cat-photo.jpeg';

class Hw4 extends Component {
    state = {
        showProps: true,
    }

    hidePropsHandler() {
        this.setState({showProps: !this.state.showProps})
        if (this.state.showProps) {
            this.componentWillUnmount()
        } else {
            this.componentDidMount()
        }
    }

    componentDidMount() {
        alert('Компонент відкрився')
    }

    componentWillUnmount() {
        alert('Компонент закрився')
    }

    render() {
        const {isVisible} = this.props;
        return isVisible&&(
            <div className={'cat'}>
                {this.state.showProps && <img src={img} alt="Cat"/>}
                <button className={'deleteBtn'} onClick={() => this.hidePropsHandler()}>Сlick on me and the cat will disappear</button>
            </div>
        );
    }
}

export default Hw4;