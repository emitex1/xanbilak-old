import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { UserContext } from './util/userContext'

const App = props => {
    const userInfo = {};

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={userInfo}>
                        {/* <Route exact path="/" component={BuyList} /> */}
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
