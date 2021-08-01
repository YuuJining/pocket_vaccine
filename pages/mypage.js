import React, { useState } from 'react';
import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';


const Mypage = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <AppLayout>
            {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn}/> : <LoginForm setIsLoggedIn={setIsLoggedIn}/> }
        </AppLayout>
    );
}

export default Mypage;