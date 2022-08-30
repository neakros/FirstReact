import {NavLink, Outlet} from "react-router-dom";

const setActive = ({isActive}) => isActive ? 'active' : '';

const Layout = () => {
    return (
        <>
            <header className={'Container'}>
                <NavLink to='/' className={setActive}>Home</NavLink>
                <NavLink to='/news' className={setActive}>News</NavLink>
            </header>
            <Outlet/>
            <footer>2022</footer>
        </>
    )
}

export {Layout}