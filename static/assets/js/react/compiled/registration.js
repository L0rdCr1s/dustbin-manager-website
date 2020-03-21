'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DriverNavigatorRegistration = function (_React$Component) {
  _inherits(DriverNavigatorRegistration, _React$Component);

  function DriverNavigatorRegistration() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DriverNavigatorRegistration);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DriverNavigatorRegistration.__proto__ || Object.getPrototypeOf(DriverNavigatorRegistration)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
    }, _this.validateUser = function (event) {
      event.preventDefault();
      _this.loading(true);

      // checking if the user is already registered by IAA
      fetch('api/validatefromiaa', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          license_number: $('#iaa_licence_number').val()
        })
      }).then(function (response) {
        if (response.statusText === "OK") {
          return response.json();
        } else {
          var user_is_not_found = Object.assign({}, _this.state.user_is_not_found);
          user_is_not_found = true;
          _this.setState({
            user_is_not_found: user_is_not_found,
            is_loading: false
          });
        }
      }).then(function (data) {
        var state = Object.assign({}, _this.state);
        state.user = data[0];
        state.is_user_validated = true;
        state.user_is_not_found = false;
        state.is_loading = false;
        _this.setState(state);
      }).catch(function (error) {
        return console.log(error);
      });
    }, _this.loading = function (is_loading) {
      var state = Object.assign({}, _this.state);
      state.is_loading = is_loading;
      _this.setState(state);
    }, _this.register = function (event) {
      event.preventDefault();

      _this.loading(true);

      var password = $('#password1').val();
      var password2 = $('#password2').val();

      if (password === password2) {
        // checking if the user is already registered by IAA
        fetch('api/dn_registration', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            first_name: $('#first_name').val(),
            last_name: $('#last_name').val(),
            email: $('#email').val(),
            license_number: $('#licence_number').val(),
            door_number: $('#door_number').val(),
            password: password
          })
        }).then(function (response) {
          if (response.statusText === "OK") {
            _this.loading(false);
            var state = Object.assign({}, _this.state);
            state.validation_complete = true;
            state.is_user_validated = false;
            _this.setState(state);
          } else {
            var _password = Object.assign({}, _this.state.password);
            _password.do_passwords_match = false;
            _password.password_error = "user with this license number is already registered, please go to login";
            _this.setState({
              password: _password,
              is_loading: false
            });
          }
        });
      } else {
        var _password2 = Object.assign({}, _this.state.password);
        _password2.do_passwords_match = false;
        _password2.password_error = "Passwords do not match, please check your passwords";
        _this.setState({
          password: _password2,
          is_loading: false
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DriverNavigatorRegistration, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        React.Fragment,
        null,
        this.state.is_user_validated ? React.createElement(
          'form',
          { role: 'form', method: 'post', action: './register' },
          this.state.password.do_passwords_match ? React.createElement(
            'div',
            null,
            ' '
          ) : React.createElement(
            'div',
            { className: 'alert alert-danger alert-dismissible fade show', role: 'alert' },
            React.createElement(
              'strong',
              null,
              'REQUEST FAILED!!'
            ),
            ' ',
            this.state.password.password_error,
            React.createElement(
              'button',
              { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
              React.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
              )
            )
          ),
          React.createElement(
            'div',
            { className: 'container-fluid' },
            React.createElement(
              'div',
              { className: 'row' },
              React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Email Address'
                  ),
                  React.createElement('input', { id: 'email', type: 'email', name: 'email', maxlength: '254', required: true,
                    className: 'form-control', placeholder: 'name@address.com' })
                ),
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'First name'
                  ),
                  React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.state.user.first_name,
                    name: 'first_name', maxlength: '60', required: '', id: 'first_name', disabled: true })
                ),
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Last name'
                  ),
                  React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.state.user.last_name,
                    name: 'last_name', maxlength: '60', required: '', id: 'last_name', disabled: true })
                ),
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Licence number'
                  ),
                  React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.state.user.license_number,
                    name: 'last_name', maxlength: '60', required: '', id: 'licence_number', disabled: true })
                )
              ),
              React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'label',
                    null,
                    'Door number'
                  ),
                  React.createElement('input', { className: 'form-control', type: 'text', defaultValue: this.state.user.door_number,
                    name: 'last_name', maxlength: '60', required: '', id: 'door_number', disabled: true })
                ),
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                      'div',
                      { className: 'col' },
                      React.createElement(
                        'label',
                        null,
                        'Password'
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'input-group input-group-merge' },
                    React.createElement('input', { type: 'password', name: 'password1', required: '', id: 'password1',
                      className: 'form-control form-control-appended', placeholder: 'Enter your password' }),
                    React.createElement(
                      'div',
                      { className: 'input-group-append' },
                      React.createElement(
                        'span',
                        { className: 'input-group-text' },
                        React.createElement('i', { className: 'fe fe-eye' })
                      )
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'form-group' },
                  React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                      'div',
                      { className: 'col' },
                      React.createElement(
                        'label',
                        null,
                        'Confirm password'
                      )
                    )
                  ),
                  React.createElement(
                    'div',
                    { className: 'input-group input-group-merge' },
                    React.createElement('input', { type: 'password', name: 'password2', required: '', id: 'password2',
                      className: 'form-control form-control-appended', placeholder: 'Repeat your password' }),
                    React.createElement(
                      'div',
                      { className: 'input-group-append' },
                      React.createElement(
                        'span',
                        { className: 'input-group-text' },
                        React.createElement('i', { className: 'fe fe-eye' })
                      )
                    )
                  )
                )
              )
            )
          ),
          this.state.is_loading ? React.createElement('div', { className: 'loader loader-danger', style: { marginLeft: 16.25 + 'rem' } }) : React.createElement('input', { type: 'submit', value: 'Register', onClick: function onClick(event) {
              return _this2.register(event);
            },
            className: 'btn btn-lg btn-primary btn-block btn-pink theme-background-btn mb-3' })
        ) : this.state.validation_complete ? React.createElement(
          'a',
          { href: '../user/login', className: 'btn btn-lg btn-block btn-pink btn-see-more mb-3 text-white',
            style: { padding: 8 + "px" } },
          'Go to login'
        ) : React.createElement(
          'form',
          { action: '.', method: 'post' },
          this.state.user_is_not_found ? React.createElement(
            'div',
            { className: 'alert alert-danger alert-dismissible fade show', role: 'alert' },
            React.createElement(
              'strong',
              null,
              'USER NOT FOUND!!'
            ),
            ' Are you sure you registered with IAA?',
            React.createElement(
              'button',
              { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
              React.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
              )
            )
          ) : React.createElement(
            'div',
            null,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'form-group' },
            React.createElement('input', { className: 'form-control', placeholder: 'Enter IAA Licence number', type: 'text',
              name: 'first_name', maxLength: '60', required: '', id: 'iaa_licence_number' }),
            React.createElement('input', { type: 'submit', value: this.state.button_value,
              className: 'btn btn-lg btn-primary btn-block btn-pink theme-background-btn mt-3',
              onClick: function onClick(event) {
                return _this2.validateUser(event);
              } })
          )
        )
      );
    }
  }]);

  return DriverNavigatorRegistration;
}(React.Component);

var domContainer = document.querySelector('#driver-nav-react-component');
ReactDOM.render(React.createElement(DriverNavigatorRegistration, null), domContainer);