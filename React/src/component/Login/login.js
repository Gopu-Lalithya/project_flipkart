import React, { Component } from 'react';

const url = "http://localhost:5000/api/auth/login";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      isPrimaryTheme: true,
      email: "nikki@gmail.com",
      password: '12345678',
      message: ''
    };
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isPrimaryTheme: !prevState.isPrimaryTheme
    }));
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    fetch(url, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          this.setState({ message: data.token });
        } else {
          sessionStorage.setItem('ltk', data.token);
          this.props.history.push('/');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div >
            <button onClick={this.toggleTheme}>
              Change Theme
            </button>
            <p>Current Theme: {this.state.isPrimaryTheme ? 'Primary' : 'Secondary'}</p>
          </div>
          <div  className="theme-changer" style={{ backgroundColor: this.state.isPrimaryTheme ? '#000000' : '#ffffff' }}>
            <div className="card-header">
              <h3 style={{ color: this.state.isPrimaryTheme ? '#ffffff' : '#000000' }}>Login</h3>
              <h2>{this.state.message}</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="email" >Email</label>
                  <input type="text" name="email" className="form-control"
                    value={this.state.email} onChange={this.handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" className="form-control"
                    value={this.state.password} onChange={this.handleChange} />
                </div>
              </div>
              <button className="btn btn-success" onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
