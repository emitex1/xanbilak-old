import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import BuyList from './containers/BuyList/BuyList';
import Login from './containers/Login/Login';
import { UserContext } from './util/userContext'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null)

    const checkLogin = () => {
        const userInfoResult = {
            id: 1,
            userName: 'emit',
            firstName: 'عماد',
            lastName: 'آرمون'
        };
        setUserInfo(userInfoResult);

        setIsLoggedIn(true);
    }

    useEffect(() => {
        checkLogin();

        return () => {
            //cleanup
        }
    }, [])

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Switch>
                    <UserContext.Provider value={userInfo}>
                        {
                            isLoggedIn
                            ? (
                                <Route exact path="/" component={BuyList} />
                                // <Route path="/other-path" component={OtherComponent} />
                            )
                            : (
                                <Route exact path="*" component={Login} />
                            )
                        }
                    </UserContext.Provider>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
