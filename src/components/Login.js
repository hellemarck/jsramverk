import React from 'react';

function logOut() {
    localStorage.clear();
    alert("Du har loggats ut")

    // var article = document.getElementByClassName("article-standard");
    // var loggedOutText = document.createTextNode("Du har loggats ut.");
    // article.appendChild(loggedOutText);
}

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            pw: ""
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const apiUrl = 'https://me-api.mh-jsramverk.me/login/';

        const login = {
            'email': this.state.email,
            'pw': this.state.pw
        }

        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(login)
        })
        .then((response) => response.json())
        .then(data => {
            if (data.data) {
                localStorage.setItem('token', data.data.token);
                alert("Du är nu inloggad");
                this.props.history.push("/reports/week/1");

            } else {
                alert("Fel användare eller lösenord, försök igen.");
            }
        });
    };

    handleInputChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }


    render() {
        return(
            <div className="App">

              <article className="article-standard">
              <h3>Logga in</h3>
                  <form onSubmit={this.onSubmit}>
                      <p>E-post:</p>
                      <input type='text' name='email' required onChange={this.handleInputChange}/>
                      <p>Lösenord:</p>
                      <input type='password' name='pw' required onChange={this.handleInputChange}/>
                      <br/><br/><br/>
                      <input className='button' type='submit' value='Logga in'/>
                  </form><br/><br/>
                  <input className='button' type='submit' value='Logga ut' onClick={logOut}/>
              </article>
            </div>
        );
    }
}


export default Login;
