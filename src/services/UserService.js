import axios from 'axios';
import Config from "../config";
export default class UserService {
    constructor() {
        this.config = new Config();
    }

    async login(email, password){
        let encryptedPassword = btoa(password);
        return axios.post(`${this.config.BASE_URL}login`, {
            email,
            password:encryptedPassword
        });
    }
}