import React, {Component} from 'react';
import SingleFile from "./SingleFile";

class FilesGrid extends Component {

    render() {
        return (
            <div className='container-fluid pt-5 files-grid'>
                <div className='row align-items-center'>
                    {this.props.files && this.props.files.map((file, index) => {
                        return <div className='col-3 pb-5 single-file-wrapper' key={index} >
                            <SingleFile showFileDetails={this.props.showFileDetails} name={file.name}/>
                        </div>
                    })}
                </div>

            </div>
        );
    }
}

export default FilesGrid;
