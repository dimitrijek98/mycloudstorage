import React, {Component} from 'react';
import Crypto from "../../crypto/Crypto";
import {lorem} from '../../crypto/config';
import Controller from "./Controller";
import FilesGrid from "./FilesGrid";
import GridHeader from "./GridHeader";

class FileExplorer extends Component {
    constructor(props) {
        super(props);
        this.state={
            filteredFiles:[],
            files:[]
        }
    }
    componentDidMount() {
        let files = [
            {name: 'File 1'},
            {name: 'File 2'},
            {name: 'File 3'},
            {name: 'File 4'},
            {name: 'File 5'},
            {name: 'File 6'},
            {name: 'File 7'},
            {name: 'File 8'},
            {name: 'File 9'},
            {name: 'File 10'},
            {name: 'File 11'},
            {name: 'File 12'},
            {name: 'File 13'},
            {name: 'File 14'},
            {name: 'File 15'},
            {name: 'File 16'},
            {name: 'File 17'},
            {name: 'File 18'},
            {name: 'File 19'},
            {name: 'File 20'},
            {name: 'File 21'},
            {name: 'File 22'},
            {name: 'File 23'},
            {name: 'File 24'},
            {name: 'File 25'},
            {name: 'File 26'},
            {name: 'File 27'},
            {name: 'File 28'},
            {name: 'File 29'},
            {name: 'File 30'},
        ];
        this.setState({files, filteredFiles:files});
        this.Crypto = new Crypto();
        let coded = this.Crypto.codeWithSubstitution(lorem);
        console.log(coded);
        let decoded = this.Crypto.decodeSubstitution(coded);
        console.log(decoded);
    }


    filterFiles = (e) => {
      let filter = e.target.value;
        let filteredFiles = this.state.files.filter(file =>
            file.name.includes(filter)
        );
        this.setState({filteredFiles})
    };

    render() {
        return (
            <div className='container-fluid justify-content-center'>
                <div className='row'>
                    <div className='col-md-3 controller align-items-center pt-3 pl-5 pr-5'>
                        <label className="header-title text-light">Upload new file</label>
                        <Controller/>
                    </div>

                    <div className='col-md-9 file-list p-0'>
                        <GridHeader />

                        <FilesGrid files={this.state.filteredFiles}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileExplorer;
