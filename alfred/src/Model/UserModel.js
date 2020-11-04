import axios from 'axios';


class UserModel {
    static search = (userId) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_USER_API_URL}/${userId}`).then(response => response.data)
    }
}

export default UserModel;
