import cookie from 'js-cookie'
import { GoogleLogout } from 'react-google-login';
import UserModel  from '../Model/UserModel'

export const setCookie = (key, value) => {
    if(window !== 'undefined'){
        cookie.set(key, value, {
            expires: 1 //1 day
        })
    }
}

export const removeCookie = key => {
    if(window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        })
    }
}

export const getCookie = key => {
    if(window !== 'undefined') {
        return cookie.get(key)
    }
}

export const setLocalStorage = (key, value) => {
    if(window !== 'undefined'){
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export const removeLocalStorage = key => {
    if(window !== 'undefined') {
        localStorage.removeItem(key)
    }
}

// Auth user after login
export const authenticate = (res, next) => {
    setCookie('token', res.data.token)
    setLocalStorage('user', res.data.user)
    next();
}

export const signout = next => {
    removeCookie('token');
    removeLocalStorage('user');
    next();
}

// Get user info from localstroage
export const isAuth = () => {
    if (window !== 'undefined') {
        const cookieChecked = getCookie('token');
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'));
            } else {
                return false;
            }
        }
    }
};

export const updateUser = (res, next) => {
    if(window !== 'undefined'){
        let auth = JSON.parse(localStorage.getItem('user'))
        auth = res.data
        localStorage.setItem('user', JSON.stringify(auth))
    }
    next()
}

export const userInfoSearch = () => {
    UserModel.search(isAuth()._id).then(user => {
    })
}
