import axios from 'axios';
import constants from '../constants/constants';

class API {
  static getTodos = () => {
    return axios.get(constants.serverUrl).then(res => {
      return res.data;
    });
  };

  static createTodo = todo => {
    return axios.post(constants.serverUrl, todo).then(res => {
      return res.data;
    });
  };

  static deleteTodo = todoId => {
    return axios.delete(constants.serverUrl + '/' + todoId).then(res => {
      return res.data;
    });
  };
}

export default API;
