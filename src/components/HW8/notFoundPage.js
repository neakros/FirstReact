import { NavLink} from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <h1>Error 404 <NavLink to='/'>Go main page</NavLink></h1>
        </div>
    )
}

export {NotFound}