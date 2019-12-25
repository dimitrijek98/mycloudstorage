import React, {Component} from 'react';

class GridHeader extends Component {
    render() {
        return (

            <nav className="navbar navbar-light bg-light topbar pl-5 pr-5">
                <label className="header-title">My Files</label>
                <form className="form-inline">
                    <input className="form-control mr-sm-2 search " type="search"
                           placeholder="Search for file..."
                           aria-label="Search"
                           onChange={this.props.filterFiles}/>
                    <button className="btn avatar-button my-2 my-sm-0 ml-2"><i className="fas fa-user"></i>
                    </button>
                </form>
            </nav>

        );
    }
}

export default GridHeader;
