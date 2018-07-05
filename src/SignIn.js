import React, {Component} from 'react'

class SignIn extends Component {
    handleSubmit = (ev)  => {
        ev.preventDefault();
        this.props.setState({user: ev.target.value})
    }

    render() {
        <form onSubmit={this.handleSubmit}>
              <input
                autoFocus
                required
                type="text"
                name="body"
                placeholder="Type username"
                />
        </form>
    }
}

export default SignIn;