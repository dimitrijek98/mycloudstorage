import React, {Component} from 'react';
import Crypto from "../../crypto/Crypto";
import {lorem} from '../../crypto/config';

class FileExplorer extends Component {
    componentDidMount() {
        this.Crypto = new Crypto();
        let coded = this.Crypto.codeWithSubstitution(lorem);
        console.log(coded);
        let decoded = this.Crypto.decodeSubstitution(coded);
        console.log(decoded);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default FileExplorer;
