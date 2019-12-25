import axios from 'axios';

import Config from '../config'

export default class FileService {
    constructor() {
        this.config = new Config();
    }

    async uploadFile(userId, fileName, fileData){
       return axios.post(`${this.config.BASE_URL}file`, {
            fileCoded: fileData,
            fileName:fileName,
            userId: userId
        }, {
            headers: {'Content-Type': 'application/json'}
        });
    }

    async getAllFiles(userId){
        return axios.get(`${this.config.BASE_URL}allFiles`, {
            params:{
                userId
            }
        })
    }

    async getLocalFile(userId){
        return localStorage.getItem(userId.toString());
    }

    async createLocalFile(userId){
       return localStorage.setItem(userId.toString(), JSON.stringify({}));
    }

    async findFileInfo(userId, fileName){
        let myFileJson = await localStorage.getItem(userId);
        let myFile = JSON.parse(myFileJson);
        let fileDataObj = myFile[btoa(fileName)];
        console.log(fileDataObj);
        return {algorithm: atob(fileDataObj.algorithm)}
    };

    async updateLocalFile(userId, fileName, algorithm){
        let myFileJson = await localStorage.getItem(userId);
        let myFile = JSON.parse(myFileJson);
        myFile[btoa(fileName)] = {name: btoa(fileName), algorithm: btoa(algorithm)};
        return localStorage.setItem(userId.toString(), JSON.stringify(myFile));
    }

    getSpecificFile(userId, fileName){
        return axios.get(`${this.config.BASE_URL}files/${userId}/${fileName}` );
    }
}