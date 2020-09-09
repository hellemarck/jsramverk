import React from 'react';

function Register() {
    return (
      <div className="App">

        <article className="article-standard">
            <h3>Registrera ny användare</h3>
                <form onSubmit="">
                    <p>E-post:</p>
                    <input type='text' name='email' required/>
                    <p>Lösenord:</p>
                    <input type='text' name='pass' required/>
                    <br/>
                    <input className='button' type='submit'/>
                </form>
        </article>
      </div>
    );
}

export default Register;
