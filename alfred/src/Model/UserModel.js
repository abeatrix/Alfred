import axios from 'axios';


class UserModel {
    static search = (query) => {
      return axios.get(`${process.env.REACT_APP_BACKEND_USER_API_URL}/${query}`).then(response => response.data)
    }
}

export default UserModel;
