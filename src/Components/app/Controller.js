import React, {Component} from 'react';
import axios from 'axios';
import Crypto from "../../crypto/Crypto";

axios.defaults.headers.common['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.common['Accept'] = 'application/json';


class Controller extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidePassword: true,
            selectedFile: null
        };

        this.crypto = new Crypto();

        this.fileChangeHandler = this.fileChangeHandler.bind(this);
        this.decodeFile = this.decodeFile.bind(this);
    }

    showAndHide = (e) => {
        e.preventDefault();
        this.setState({hidePassword: !this.state.hidePassword})
    };

    chooseAlgorithm = (e) => {
        console.log(e.target.value);
    };

    submitFile() {
        // const data = new FormData();
        // data.append('file', this.state.selectedFile);  // DEFAULT UPLOADER

        if (this.state.selectedFile) {
            let reader = new FileReader();
            reader.readAsBinaryString(this.state.selectedFile);
            reader.onload = (e) => {
                console.log('START');
                let encodedString = btoa(e.target.result);
                // let encodedContent = this.crypto.codeWithSubstitution(encodedString);
                let encodedContent = encodedString;
                // data.append('file', encodedContent);
                // data.append('something', 'asdasd');
                console.log('END');

                axios.post("http://localhost:4000/file", {
                    fileCoded: encodedContent
                }, {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(res => {},
                        err => console.log(err)
                    ).catch(err => console.log(err));
            };
        //
        //     let codedContent = 'LOREM IPSUM';
        //     data.append('file', this.state.selectedFile);
        }
        //
        // data.append('someStr', 'qweqwe');


    }

    fileChangeHandler(event) {
        console.log(event.target.files[0]);


        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0
        })
    }

    render() {
        return (
            <div className="upload-container">
                <input type="file" name="file" onChange={this.fileChangeHandler}/>

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
                <button className="btn upload-button " onClick={() => this.submitFile()}>Upload</button>


                <input type='file' onChange={this.decodeFile} />
                <a href={"data:application/octet-stream," + this.state.org}
                    download='org.docx'
                >DOWNLOAD</a>
            </div>
        );
    }

    decodeFile(event) {
        let reader = new FileReader();
        reader.readAsBinaryString(event.target.files[0]);
        reader.onload = (e) => {
            console.log('START');
            // let decodedFile = this.crypto.decodeSubstitution(e.target.result);
            let decodedFile = e.target.result;
            console.log('END');
            let originalFile = atob(decodedFile);
            this.setState({org: originalFile});
        };
    }
}

export default Controller;
