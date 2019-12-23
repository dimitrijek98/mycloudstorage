import React, {Component} from 'react';

class Login extends Component {


    login = (e) => {
        e.preventDefault();
        this.props.history.push('/fileExplorer');
    };

    render() {
        return (
            <div className='container-fluid login-container align-items-center'>
                <div className='d-flex justify-content-center'>
                    <p className='login-header'>Start your secure journey</p>
                </div>
                <div className='row login-row'>

                    <div className={'col-md-4'}>
                        <div className='login-card'>
                            <form>
                                <p className='create-acc'>Create account</p>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp"/>
                                    <small id="emailHelp" className="form-text text-light">We'll never share your email
                                        with
                                        anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button onClick={this.login} type="submit" className="btn btn-light">Create</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-8 pl-5 '>
                        <p className='login-title mb-5 pb-5'>Never worry about privacy of your files again!</p>
                        <img src={require('../../Assets/Images/security.png')} width='400px' height='350px'
                             alt={'security'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
