import React, {Component} from 'react';
import "./MySecondComponent.scss"
import img from "../../ZiClJf-1920w.jpg";

class MySecondComponent extends Component {
    render() {
        return (
            <div>
                <h2>Nature image</h2>
                <img src={img} alt="nature"/>
            </div>
        );
    }
}

export default MySecondComponent;