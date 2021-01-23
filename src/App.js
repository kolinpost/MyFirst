import React from 'react';
import style from './App.css';
import ProfileContainer from './components/Content/ProfileContainer';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
    return (< BrowserRouter >
        <div className='appGroup' >
            <HeaderContainer />
            <Menu />
            <div className='appContent'>
                <Route path='/profile/:userId' render={() => <ProfileContainer />} />
                <Route path='/dialogs' render={() => <DialogsContainer />} />
                <Route path='/news' render={() => <News />} />
                <Route path='/users' render={()=><UsersContainer />} />
            </div >
        </div >
    </BrowserRouter>
    )
}

export default App;