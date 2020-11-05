
import Landing from '../Components/Landing/index';
import Footer from '../Components/Footer/index'
import { isAuth } from '../config/auth'
import useFindUserInfo from '../hooks/userFindUserInfo'

const LandingPage= () => {

    const user = isAuth();
    const [userInfo, setUserInfo] = useFindUserInfo();

    function userDetail (){
        if (user){
            setUserInfo(user._id)
            console.log(userInfo)
            return userInfo
        }
    }

    return (
        <>
            <Landing user={user._id} />
            <Footer />
        </>
    )
}

export default LandingPage;
