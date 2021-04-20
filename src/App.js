import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShoppingList from './containers/ShoppingList/ShoppingList';
import Login from './containers/Login/Login';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
//import { isMobileByAgent } from './util/detectMobileDevice';
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

    //const isMobile = isMobileByAgent();

    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <UserContext.Provider value={userInfo}>
                {
                    isLoggedIn
                    ? (
                        <Switch>
                            <Route exact path="/" component={ShoppingList} />
                            {/* <Route path="/other-path" component={OtherComponent} /> */}
                            <Route path="/404" component={NotFoundPage} />
                            <Route path="*" component={NotFoundPage} />
                        </Switch>
                    )
                    : (
                        <Switch>
                            <Route exact path="*" component={Login} />
                        </Switch>
                    )
                }
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App
