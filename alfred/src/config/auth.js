import cookie from 'js-cookie'

// Set in Cookie
export const setCookie = (key, value) => {
    if(window !== 'undefined'){
        cookie.set(key, value, {
            expires: 1 //1day
        })
    }
}

// Remove from cookie
export const removeCookie = key => {
    if(window !== 'undefined') {
        cookie.remove(key, {
            expires: 1
        })
    }
}

// Get from cookie like token
export const getCookie = key => {
    if(window !== 'undefined') {
        return cookie.get(key)
    }
}

// Set in localstorage
export const setLocalStorage = (key, value) => {
    if(window !== 'undefined'){
        localStorage.removeItem(key)
    }
}


// Remove from localstorage
export const removeLocalStorage = key => {
    if(window !== 'undefined') {
        localStorage.removeItem(key)
    }
}
// Auth user after login
export const authenticate = (res, next) => {
    setCookie('token', res.data.token)
    setLocalStorage('user', res.data.user)
    next()
}

// Signout
export const signout = next => {
    removeCookie('token')
    removeLocalStorage('user')
}

// Get user info from localstroage
export const isAuth = () => {
    if(window !== 'undefined'){
        const cookieChecked = getCookie('token')
        if(cookieChecked){
            if(localStorage.getItem('user')){
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}

// Update user data in localstorage
export const updateUser = (res, next) => {
    if(window !== 'undefined'){
        let auth = JSON.parse(localStorage.getItem('user'))
        auth = res.data
        localStorage.setItem('user', JSON.stringify(auth))
    }
    next()
}
