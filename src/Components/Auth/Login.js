import React, {Component} from 'react';

class Login extends Component {



    login = (e) => {
        e.preventDefault();
        this.props.history.push('/fileExplorer');
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'login-card'}>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                                <small id="emailHelp" className="form-text text-light">We'll never share your email with
                                    anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={this.login} type="submit" className="btn btn-light">Submit</button>
                    </form>
                </div>

            </div>
        );
    }
}

export default Login;
