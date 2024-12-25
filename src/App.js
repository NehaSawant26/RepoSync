import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import RepositoryList from './Components/RepositoryList';
import Saas from './Components/Saas';
import Hosted from './Components/Hosted';

const App = () => {
    return (
        <div className=" app md:flex h-screen">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Saas />} />
                    <Route exact path="/repo" element={<RepositoryList />} />
                    <Route exact path="/hosted" element={<Hosted />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
