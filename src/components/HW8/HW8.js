import {Routes, Route} from 'react-router-dom'
import {About} from './HomePage'
import {News} from './NewsPage'
import {NotFound} from './notFoundPage'
import {Layout} from "../Layout/Layout";
import './App.scss'


function App () {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={<About/>}/>
                    <Route path='news' element={<News/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App