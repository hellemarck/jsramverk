import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// import reports from './reports.js';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">> hem</Link>
            </li>
            <li>
              <Link to="/reports/week/1">> redovisning</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact strict path="/" component={Home}/>
          <Route exact strict path="/reports/week/1" component={Reports}/ >
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
    return (
      <div className="App">
        <header className="App-header">
        <p><i>En sida byggd i React för kursen jsramverk, BTH.</i></p>
          <img src={require('./me.jpg')} className="App-logo" alt="mette" />
          <p>
            Hej hopp, Mette heter jag!
          </p>
        </header>
        <article className="article-standard">
        <p>Jag är student i webbprogrammering på Blekinge Tekniska Högskola, 28 år gammal och bor i Malmö.</p>

        <p>Förutom att programmera gillar jag att vara kreativ på andra sätt: främst inom foto och grafisk design, det senare har jag lagt tid på att lära mig lite mer av under sommaren som gått, och när jag bara slappar gör jag det helst i soffan framför fotboll eller en bra film. Jag tycker också mycket om att laga mat, och så fort möjlighet ges reser jag och min kille runt i vår renoverade campingvan, allra helst bland alla uuunderbara vingårdar i norra Italien.</p>

        <p>Tidigare har jag jobbat inom bar/restaurang och butik, bott i Oslo och i Rom för att plugga språk, och så har jag läst två år på juristprogrammet innan jag insåg att det praktiskt problemlösande och kreativa är vad jag hellre sysslar med! Därav webbprogrammering - och jag är inte besviken, även om studierna kräver en heeeel del tid för att jag ska hänga med!</p>

        <p>Efter ett intensivt första år på utbildningen, och en välbehövd sommarledighet är det nu alltså dags igen! Pepp! Vi hörs mer under fliken “Redovisning”.</p>

        <p>/Mette</p>
        </article>
      </div>
    );
}

function Reports() {
  return (
        <article className="article-standard">
            <p>about/reports will go here</p>;
        </article>
    )
}


export default App;
