import React from 'react';


class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:1337/';
        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => {
                this.setState({ data });
                console.log(this.state.data);
            });
    }

    render() {
        return <article className="article-standard"
            dangerouslySetInnerHTML={{__html: this.state.data}} >
        </article>
    }
}

export default Home;
