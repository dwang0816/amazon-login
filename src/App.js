import React, { Component } from 'react'
import './App.scss';
import amazonLogo from './images/amazon.png'

export class App extends Component {

  state = {
    showPasswordError: false
  }

  handleSubmit(event){
    event.preventDefault()
    if(event.target.password.value === event.target.passwordCheck.value){
      console.log("Customer Name: ", event.target.customerName.value)
      console.log("Email: ",event.target.email.value)
      console.log("password: ", event.target.password.value)
    } else { 
      this.setState({
        showPasswordError: true
      })
      
    }

  }

  render() {
    return (
      <div className="app">
        <a href="https://www.amazon.com/ref=ap_frn_logo" className="logo-link">
          <img src={amazonLogo} className="amazon-logo" alt="link to amazon page"/>
        </a>
        <div className="passwordError" style={{display: this.state.showPasswordError ? "block" : "none"}}>
          <h4 className="alert-heading">
            There was a problem
          </h4>
          <p className="alert-content">
            password must match
          </p>
        </div>
        <div className="login-box">
          <form  className="login-form" onSubmit={this.handleSubmit.bind(this)}>
            <h1>Create account</h1>
            <div className="form-field">
              <label htmlFor="name">
                Your name
              </label>
              <input type="text" maxLength="50" name="customerName"/>
            </div>
            <div className="form-field">
              <label htmlFor="email">
                Email
              </label>
              <input type="email" maxLength="64" name="email"/>
            </div>
            <div className="form-field">
              <label htmlFor="password">
                Password
              </label>
              <input type="password" maxLength="1024" placeholder="At least 6 characters" name="password"/>
              <div className="password-alert">
                Passwords must be at least 6 characters.
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="password_check">
                Re-enter password
              </label>
              <input type="password" maxLength="1024" name="passwordCheck" />
            </div>
            <div>
              <input id="submit" type="submit" value="Create your Amazon account"/>
            </div>
            <div className="legal-text-row">
              By creating an account, you agree to Amazon's
              <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088" className="a-link"> Conditions of Use </a>
              and
              <a href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496" className="a-link"> Privacy Notice</a>
              .
            </div>
            <div class="a-divider a-divider-section">
              <div class="a-divider-inner"></div>
            </div>
            <div className="sign-in-link">
              <span>
                Already have an account?
              </span>
              <a className="a-link" href="https://www.amazon.com/ap/signin?clientContext=130-4649631-2400710&openid.return_to=https%3A%2F%2Ftrack.amazon.com%2F&prevRID=Y0PX4X6QC5TA36Y1AF63&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_shippingrecipientcentral_us&openid.mode=checkid_setup&siteState=clientContext%3D133-5959651-2511706%2CsourceUrl%3Dhttps%253A%252F%252Ftrack.amazon.com%252F%2Csignature%3DaIjtVnII3EuhLKiVpJY6BuFeqXYj3D&marketPlaceId=A2BR6UVHX99FEC&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=amzn_shippingrecipientcentral_us_amazon&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"> Sign-In</a>
            </div>
          </form>
        </div>
        <div>
          <div className="a-divider a-divider-section">
            <div className="a-divider-inner"></div>
          </div>
          <div className="a-links">
            <a className="a-link" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=508088">Conditions of Use </a>
            <a className="a-link" href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=468496">Privacy Notice </a>
            <a className="a-link" href="https://www.amazon.com/gp/help/customer/display.html">Help</a>
          </div>
        </div>
        <div>
          <p className="company">
            © 1996-2020, Amazon.com, Inc. or its affiliates
          </p>
        </div>
    </div>
    )
  }
}

export default App
