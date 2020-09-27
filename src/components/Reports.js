import React from 'react';

class Reports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            report: null,
            week: null
        };
    }

    componentDidMount() {
        var id = this.props.match.params.id;
        var apiUrl = 'https://me-api.mh-jsramverk.me/reports/week/' + id;

        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => {
                this.setState({
                    report: data.data.report,
                    week: data.data.week
                });
            });
    }

    render() {
        var url = window.location.href.slice(0, -1);
        var id = this.props.match.params.id;
        return (
            <div className="App">

            <nav className="reports">
                <a href={`${url}1`}>kmom01</a>
                <a href={`${url}2`}>kmom02</a>
                <a href={`${url}3`}>kmom03</a>
                <a href={`${url}4`}>kmom04</a>
                <a href={`${url}5`}>kmom05</a>
                <a href={`${url}6`}>kmom06</a>
            </nav><br/>
            <a href={"/editreport/" + id} className="button">Redigera innehåll</a>
            <br/><br/>
            <h2>Vecka {this.state.week}</h2>
            <article className="article-standard"
                dangerouslySetInnerHTML={{__html: this.state.report}} >
            </article>
            </div>
        )
    }
}


// ALT2 - ARROW FUNCTIONS:
// const Reports = () => <article className="article-standard"><p>hejsaaan</p></article>

// exporting as default allows us to import with any name in App.js
export default Reports;

// exporting in the same line as function = must use that exact name in App.js
// export const Reports...
// import { Reports } from ...
