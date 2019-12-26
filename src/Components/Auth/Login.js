import React, {Component} from 'react';
import UserService from "../../services/UserService";

class Login extends Component {
    constructor(props) {
        super(props);
        this.UserService = new UserService();
        this.state = {
            email:'',
            password:'',
        }
    }


    login = (e) => {
        e.preventDefault();
        this.UserService.login(this.state.email, this.state.password)
            .then(res => {
                console.log(res.data[0]);
                this.props.history.push({pathname: '/fileExplorer',state: {user: res.data[0]}});
            });

    };

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
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
                                    <input type="email" className="form-control" name='email' id="exampleInputEmail1"
                                           aria-describedby="emailHelp" onChange={this.handleInput}/>
                                    <small id="emailHelp" className="form-text text-light">We'll never share your email
                                        with
                                        anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" name='password' onChange={this.handleInput} className="form-control"/>
                                </div>

                                <button onClick={this.login} type="submit" className="btn btn-light">Let's go!</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-8 pl-5 '>
                        <p className='login-title-second mb-5 pl-5'>Never worry about privacy of your files again!</p>
                        <img src={require('../../Assets/Images/security.png')} width='400px' height='350px'
                             alt={'security'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
