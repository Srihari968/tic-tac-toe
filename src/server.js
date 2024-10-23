import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import Boo from "./Boo";
import Ttt from './Ttt';
function MyApp () {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/Boo' element={<Boo />}/>
                <Route path='/Ttt' element={<Ttt />}/>
            </Routes>
        </Router>
    )
}
export default MyApp;