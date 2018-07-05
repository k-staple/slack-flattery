import React, {Component} from 'react'

class SignIn extends Component {
    state = {
        email: '',
    }

    handleSubmit = (ev)  => {
        ev.preventDefault();
        this.props.handleAuth({
            uid: `${this.state.email}-;lksv;lkjs`,
            email: this.state.email,
            displayName: this.state.email,
        })
    }

    handleChange = (ev) => {
        this.setState({email: ev.target.value})
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">Email</label>
              <input
                autoFocus
                required
                type="email"
                name="email"               
                />
       
        <button
            type="submit"
        >
          Sign In
        </button>
        </form>

        );
    }
}

export default SignIn;