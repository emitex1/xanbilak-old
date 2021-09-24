import React, { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShoppingList from './containers/ShoppingList/ShoppingList';
import Login from './containers/Login/Login';
import NotFoundPage from './containers/NotFoundPage/NotFoundPage';
//import { isMobileByAgent } from './util/detectMobileDevice';
import { UserContext } from './util/userContext';
import Messenger from './containers/Messenger/Messenger';
import Settings from './containers/Settings/Settings';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState<any>(null)

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
                                <Route exact path="/messenger" component={Messenger} />
                                <Route exact path="/settings" component={Settings} />
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
                    <ToastContainer
                        rtl draggable closeOnClick position="bottom-center"
                        className="toast-box"
                    />
                </UserContext.Provider>
            </BrowserRouter>
        </div>
    )
}

export default App
