import React, {Component} from 'react';

class SingleFile extends Component {
    render() {
        return (
            <div className='single-file align-items-center'>
                <img alt={this.props.name} src={require('../../Assets/Images/fileIcon.png')} width='80px' height='100px'/>
                <p className='text-light'>{this.props.name}</p>
            </div>
        );
    }
}

export default SingleFile;
