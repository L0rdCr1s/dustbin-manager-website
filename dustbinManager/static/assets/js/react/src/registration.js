'use strict';

class DriverNavigatorRegistration extends React.Component {

    state = {
      is_user_validated: false,
      button_value: 'Validate my number',
      user_is_not_found: false,
      is_loading: false,
      user: {},
      password: {
        do_passwords_match: true,
        password_error: ''
      },
      validation_complete: false
    }

    validateUser = event => {
      event.preventDefault()
      this.loading(true)

      // checking if the user is already registered by IAA
      fetch('api/validatefromiaa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          license_number: $('#iaa_licence_number').val(),
        })
      }).then(response => {
        if (response.statusText === "OK") {
          return response.json()
        } else {
          let user_is_not_found = {
            ...this.state.user_is_not_found
          }
          user_is_not_found = true
          this.setState({
            user_is_not_found: user_is_not_found,
            is_loading: false
          })
        }
      }).then(data => {
        let state = {
          ...this.state
        }
        state.user = data[0]
        state.is_user_validated = true
        state.user_is_not_found = false
        state.is_loading = false
        this.setState(state)
      }).catch(error => console.log(error))
    }

    loading = is_loading => {
      let state = {...this.state}
      state.is_loading = is_loading
      this.setState(state)
    }

    register = event => {
      event.preventDefault()

      this.loading(true)

      const password = $('#password1').val()
      const password2 = $('#password2').val()

      if (password === password2) {
        // checking if the user is already registered by IAA
        fetch('api/dn_registration', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            license_number: $('#licence_number').val(),
            door_number: $('#door_number').val(),
            password: password
          })
        }).then(response => {
          if (response.statusText === "OK") {
            this.loading(false)
            let state = {...this.state}
            state.validation_complete = true 
            state.is_user_validated = false
            this.setState(state)
          } else {
            let password = {
              ...this.state.password
            }
            password.do_passwords_match = false
            password.password_error = "user with this license number is already registered, please go to login"
            this.setState({
              password: password,
              is_loading: false
            })
          }
        })
      } else {
        let password = {
          ...this.state.password
        }
        password.do_passwords_match = false
        password.password_error = "Passwords do not match, please check your passwords"
        this.setState({
          password: password,
          is_loading: false
        })
      }
    }

  render() {
    return (
      <React.Fragment>
        { this.state.is_user_validated ? 
            <form role="form" method="post" action="./register">
                { this.state.password.do_passwords_match ? <div> </div> :
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                      <strong>REQUEST FAILED!!</strong> {this.state.password.password_error}
                      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                          <span aria-hidden="true">×</span>
                      </button>
                  </div> }
                <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-md-6'>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input id="email" type="email" name="email" maxlength="254" required 
                            className="form-control" placeholder="name@address.com"/>
                        </div>
                        <div className="form-group">
                            <label>First name</label>
                            <input className="form-control" type="text" defaultValue={this.state.user.first_name}
                            name="first_name" maxlength="60" required="" id="first_name" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Last name</label>
                            <input className="form-control" type="text" defaultValue={this.state.user.last_name}
                            name="last_name" maxlength="60" required="" id="last_name" disabled/>
                        </div>
                        <div className="form-group">
                            <label>Licence number</label>
                            <input className="form-control" type="text" defaultValue={this.state.user.license_number}
                            name="last_name" maxlength="60" required="" id="licence_number" disabled/>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className="form-group">
                            <label>Door number</label>
                            <input className="form-control" type="text" defaultValue={this.state.user.door_number}
                            name="last_name" maxlength="60" required="" id="door_number" disabled/>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label>Password</label>
                                </div>
                            </div> 
                            <div className="input-group input-group-merge">
                                <input type="password" name="password1" required="" id="password1" 
                                className="form-control form-control-appended" placeholder="Enter your password"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fe fe-eye"></i>
                                    </span>
                                </div>

                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label>Confirm password</label>
                                </div>
                            </div> 
                            <div className="input-group input-group-merge">
                                <input type="password" name="password2" required="" id="password2"
                                className="form-control form-control-appended" placeholder="Repeat your password"/>
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="fe fe-eye"></i>
                                    </span>
                                </div>

                            </div>
                        </div>
                      </div>
                  </div>
                </div>
                { this.state.is_loading ? 
                <div className="loader loader-danger" style={{ marginLeft: 16.25 + 'rem'}}></div> : 
                <input type="submit" value="Register" onClick={event => this.register(event)}
                className="btn btn-lg btn-primary btn-block btn-pink theme-background-btn mb-3"/>
                }
            </form>
        :
                this.state.validation_complete? 
                <a href="../user/login" className="btn btn-lg btn-block btn-pink btn-see-more mb-3 text-white"
                 style={{padding: 8 + "px"}}>
                    Go to login
                </a> :
          <form action="." method="post">
              { this.state.user_is_not_found ? 
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <strong>USER NOT FOUND!!</strong> Are you sure you registered with IAA?
                  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                      <span aria-hidden="true">×</span>
                  </button>
              </div> : <div> </div> }
              <div className="form-group">
                  <input className="form-control" placeholder="Enter IAA Licence number" type="text"
                      name="first_name" maxLength="60" required="" id="iaa_licence_number" />
                  <input type="submit" value={ this.state.button_value }
                    className="btn btn-lg btn-primary btn-block btn-pink theme-background-btn mt-3"
                    onClick={event => this.validateUser(event)}/>
              </div>
          </form> }
      </React.Fragment>
    );
  }
}

let domContainer = document.querySelector('#driver-nav-react-component');
ReactDOM.render(<DriverNavigatorRegistration />, domContainer);

