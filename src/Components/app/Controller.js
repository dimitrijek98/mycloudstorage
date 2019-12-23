import React, {Component} from 'react';

class Controller extends Component {
    constructor(props) {
        super(props);
        this.state={
            hidePassword:true
        }
    }

    showAndHide = (e) => {
        e.preventDefault();
        this.setState({hidePassword : !this.state.hidePassword})
    };

    chooseAlgorithm = (e) => {
        console.log(e.target.value);
    };

    render() {
        return (
            <div className="upload-container">
                <label className="input-title">Choose crypto algorithm</label>
                <select className="form-control mb-5" onChange={this.chooseAlgorithm}>
                    <option>Simple Substitution</option>
                    <option>XXTEA</option>
                    <option>Knapsack</option>
                    <option>SH2</option>
                </select>


                <label className="input-title">Input crypto key</label>
                <div className="input-group">
                    <input type={this.state.hidePassword ? "password": "text"} className="form-control" placeholder='Crypto key'/>
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
                <button className="btn upload-button ">Upload</button>
            </div>
        );
    }
}

export default Controller;
