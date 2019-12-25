import React, {Component} from 'react';
import Crypto from "../../crypto/Crypto";
import Controller from "./Controller";
import FilesGrid from "./FilesGrid";
import GridHeader from "./GridHeader";
import FileService from "../../services/FileService";

class FileExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredFiles: [],
            files: [],
            user: {},
            fileClicked: '',
            cryptingLoading: false,
        };
        this.FileService = new FileService();
        this.Crypto = new Crypto();
    }

    componentDidMount() {
        let user = this.props.location.state.user;
        this.setState({user});
        this.checkLocalFile(user.id);
        this.getUserFiles(user.id);
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
        //this.setState({files, filteredFiles:files});
    }

    checkLocalFile = (userId) => {
        this.FileService.getLocalFile(userId)
            .then(res => {
                if (!res) {
                    this.FileService.createLocalFile(userId)
                        .then(response => {
                            console.log('Your file is not present in memory. New file will be created for future use. All your past files won\'t be accessible for downloading.');
                        })


                }
            });
    };

    getUserFiles = (userId) => {
        this.FileService.getAllFiles(userId)
            .then(res => {
                this.setState({files: res.data, filteredFiles: res.data})
            })
    };


    filterFiles = (e) => {
        let filter = e.target.value;
        let filteredFiles = this.state.files.filter(file =>
            file.name.includes(filter)
        );
        this.setState({filteredFiles})
    };

    getFile = (fileName) => {
        this.setState({cryptingLoading: true});
        this.FileService.getSpecificFile(this.state.user.id, fileName)
            .then(response => {
                let data = response.data;
                this.FileService.findFileInfo(this.state.user.id, fileName)
                    .then(res => {
                        if(res.algorithm === 'simpleSubstitution')
                            data = this.Crypto.decodeSubstitution(data);
                        this.setState({fileName, downloadFile: data, cryptingLoading: false});
                    });

            })
    };

    showFileDetails = (fileName) => {
        this.setState({fileClicked: fileName});

    };

    resetFileClicked = () => {
        this.setState({fileClicked: ''});
    };

    render() {
        return (
            <div className='container-fluid justify-content-center'>
                <div className='row'>
                    <div className='col-md-3 controller align-items-center pt-3 pl-5 pr-5'>
                        <label
                            className="header-title text-light">{this.state.fileClicked ? 'File info' : 'Upload new file'}</label>
                        <Controller getFile={this.getFile} loading={this.state.cryptingLoading}
                                    resetFileClicked={this.resetFileClicked} fileClicked={this.state.fileClicked}
                                    getUserFiles={this.getUserFiles} fileName={this.state.fileClicked}
                                    downloadFile={this.state.downloadFile} user={this.state.user}/>
                    </div>

                    <div className='col-md-9 file-list p-0'>
                        <GridHeader filterFiles={this.filterFiles}/>

                        <FilesGrid showFileDetails={this.showFileDetails} files={this.state.filteredFiles}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FileExplorer;
