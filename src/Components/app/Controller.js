import React, {Component} from 'react';
import axios from 'axios';
import Crypto from "../../crypto/Crypto";
import FileService from "../../services/FileService";
import {Spinner} from 'react-bootstrap';

axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';


class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            selectedFile: null,
            loading: false,
        };
        this.crypto = new Crypto();
        this.FileService = new FileService();
    }

    showAndHide = (e) => {
        e.preventDefault();
        this.setState({hidePassword: !this.state.hidePassword})
    };

    chooseAlgorithm = (e) => {
        console.log(e.target.value);
    };

    submitFile() {
        this.setState({loading: true});
        if (this.state.selectedFile) {
            let reader = new FileReader();
            reader.readAsBinaryString(this.state.selectedFile);
            reader.onload = (e) => {
                let encodedContent = this.crypto.codeWithSubstitution(e.target.result);
                this.FileService.uploadFile(this.props.user.id, this.state.selectedFile.name, encodedContent)
                    .then(response => {
                        this.setState({loading: false});
                        this.props.getUserFiles(this.props.user.id);
                        this.FileService.updateLocalFile(this.props.user.id, this.state.selectedFile.name,'simpleSubstitution')
                            .then()
                            .catch(err => {
                                console.log(err);
                            })
                    });

            };

        }

    }

    fileChangeHandler = (event) => {
        console.log(event.target.files[0]);


        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
    };

    getDownloadLink = () => {
        const file = new Blob([this.props.downloadFile.toString()], {type: 'text/plain'});
        return URL.createObjectURL(file);
    };

    render() {
        return (
            <div className="upload-container">
                {this.props.fileClicked ?
                    <React.Fragment>
                        <img alt='File Icon' src={require('../../Assets/Images/fileIcon.png')}
                             style={{width: 200, height: 250}}/>
                        <div className='pt-2 pb-5'>
                            <p className='input-title'>{`File Name: ${this.props.fileClicked}`}</p>
                        </div>
                        <div className='pb-5'>
                            <button className="btn upload-button mb-2"
                                    onClick={() => this.props.getFile(this.props.fileClicked)}>{this.props.loading ?
                                <Spinner animation="border"/> : 'Encrypt'}</button>
                            {this.props.downloadFile && <a href={this.getDownloadLink()}
                                                           download={this.props.fileName}
                            >
                                <button className="btn upload-button">
                                    {this.props.loading ?
                                    <Spinner animation="border"/> : 'Download'}</button>
                            </a>}
                        </div>
                        <div className='pt-5 pb-5'>
                            <button className="btn upload-button"
                                    onClick={() => this.props.resetFileClicked()}> Upload new File
                            </button>

                        </div>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <input type="file" name="file" className='form-control mb-5' onChange={this.fileChangeHandler}/>

                        <label className="input-title">Choose crypto algorithm</label>
                        <select className="form-control mb-5" onChange={this.chooseAlgorithm}>
                            <option>Simple Substitution</option>
                            <option>XXTEA</option>
                            <option>Knapsack</option>
                            <option>SH2</option>
                        </select>


                        <label className="input-title">Input crypto key</label>
                        <div className="input-group">
                            <input type={this.state.hidePassword ? "password" : "text"} className="form-control"
                                   placeholder='Crypto key'/>
                            <div className="input-group-append">
                                <button className="btn btn-white" onClick={this.showAndHide} type="button"
                                        id="button-addon2">
                                    {this.state.hidePassword ?
                                        <i className="fas fa-eye"></i>
                                        :
                                        <i className="fas fa-eye-slash"></i>
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="flex-row align-content-start mb-5">
                            <i className="fas fa-info-circle text-light mr-1"></i>
                            <small className='text-light text-left'>This key will be used to encrypt your file and
                                will be stored in your config file so you don't have to remember it.</small>
                        </div>
                        {this.state.selectedFile &&
                        <button className="btn upload-button " disabled={this.state.loading}
                                onClick={() => this.submitFile()}>{this.state.loading ?
                            <Spinner animation="border"/> : 'Upload'}</button>
                        }


                    </React.Fragment>}
            </div>
        );
    }

}

export default Controller;
