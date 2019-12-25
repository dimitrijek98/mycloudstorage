import React, {Component} from 'react';
import FileService from "../../services/FileService";
import Crypto from "../../crypto/Crypto";

class SingleFile extends Component {
    constructor(props) {
        super(props);
        this.FileService = new FileService();
        this.Crypro = new Crypto();
    }

    render() {
        return (
            <div className='single-file align-items-center flex-wrap' onClick={() => this.props.showFileDetails(this.props.name)}>
                <img alt={this.props.name} src={require('../../Assets/Images/fileIcon.png')} width='80px' height='100px'/>
                <label>{this.props.name}</label>
            </div>

        );
    }
}

export default SingleFile;
