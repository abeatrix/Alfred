import { useState, useEffect } from "react";
import UserModel from "../Model/UserModel";

function useFindUserInfo(userId) {
    const [userInfo, setUserInfo] = useState([]);
    function fetchUserInfo(userId) {
        UserModel.search(userId).then((data) => {
            setUserInfo(data);
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
