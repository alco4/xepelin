import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MoviesCatalogPage from "./pages/MoviesCatalogPage";
import {HOME} from './routes/paths'

function App() {
    return (
        <Router>
            <Routes>
                <Route path={HOME} element={<MoviesCatalogPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
