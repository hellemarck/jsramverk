import React from 'react';

class EditReports extends React.Component {
    constructor(props) {
        super(props)
        this.routeChange = this.routeChange.bind(this);

        this.state = {
            week: "",
            report: ""
        }
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var apiUrl = 'https://me-api.mh-jsramverk.me/reports/week/' + id;

        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    week: data.data.week,
                    report: data.data.report
                });
            });
    }


    onSubmit = (e) => {
        e.preventDefault();
        const apiUrl = 'https://me-api.mh-jsramverk.me/reports/';
        // const token = localStorage.getItem('token');

        const edit = {
            'week': this.state.week,
            'report': this.state.report
        }

        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'x-access-token': localStorage.getItem('token')
            },
            body: JSON.stringify(edit)
        })
        .then((response) => response.json())
        .then(data => {
            if (data.errors) {
                alert("Du måste vara inloggad för att göra ändringar");
                this.props.history.push("/login")
            } else {
                alert("Ändringar sparade");
            };
        });
        this.routeChange();
    };

    handleInputChange = e => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    routeChange() {
        let path = "/reports/week/" + this.state.week;
        this.props.history.push(path);
    }

    render() {
        return(
            <div className="App">

              <article className="article-standard">
              <h3>Redigera text</h3>
                  <form onSubmit={this.onSubmit}>
                      <p style={{fontSize:"20px"}}>Vecka {this.state.week}</p>
                      <p>Innehåll:</p>
                      <textarea value={this.state.report} name='report' required onChange={this.handleInputChange}/>
                      <br/><br/>
                      <input className='button' type='submit' value='Spara' />
                  </form>
              </article>
            </div>
        );
    }
}

export default EditReports;
