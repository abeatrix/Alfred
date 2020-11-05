import { useState, useEffect } from "react";
import UserModel from "../Model/UserModel";
import { useRecoilState } from "recoil";
import {userState} from '../recoil/atoms'


function useFindUserInfo(userId) {
    // console.log(userId)
    const [user, setUser] = useRecoilState(userState);

    const [userInfo, setUserInfo] = useState([]);

    function fetchUserInfo(id) {
        UserModel.search(id).then((data) => {
            // console.log('finding User Info')
            setUserInfo(data);
            setUser(data)

        });
    }


    useEffect(
        function () {
            fetchUserInfo(userId);
        },
        []
    );

    return [userInfo, fetchUserInfo];
}

export default useFindUserInfo;
