import Color from "../Color/Color";

const About = () => {
    return (
        <div>
            <h1>This is home page</h1>
            <Color name={"Компонент меняющий цвет"} colorArr={["red","grey","orange","purple"]}/>
        </div>
    )
}

export {About}