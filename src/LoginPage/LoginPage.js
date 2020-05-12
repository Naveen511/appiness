import React from 'react';
import Dashboard from '../Dashboard/index';
import { Link }  from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import history from '../history';

import './LoginStyle.css';

class LoginPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
            userDetails: [],
            errormessage: '',
        };
    }

   
    /**
     * Update the form values in the state and list of values
     */
    changeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        this.setState({errormessage: err});
        this.setState({[nam]: val});
      }

      /**
       * On submitting the form
       */
      mySubmitHandler = (event) => {
        event.preventDefault();
        const { username, password, userDetails } = this.state;
        if ( (username !== "") && (password !== "") ) {
            document.getElementById("myForm").reset();
            console.log('success');
            history.push("/dashboard");
            userDetails.push({
                username,
                password
            })
        } else {
            alert("Please fill all the fields");
        }
      }

    render() {
        return(
            <>
            <div>
            <form id="myForm" onSubmit={this.mySubmitHandler}>
                    <input
                        type='text'
                        name='username'
                        placeholder="User Name"
                        onChange={this.changeHandler}
                    />
                    <input
                        type='text'
                        name='password'
                        placeholder="Password"
                        onChange={this.changeHandler}
                    />
                    <br/>
                    <input type='submit' />
                    {this.state.errormessage}
                    </form>
            </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    userDetails: state.main.userDetails,
});

export default connect(
  mapStateToProps,
)(LoginPage);