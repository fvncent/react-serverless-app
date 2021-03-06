import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import Navbar from './components/Navbar';
import GameOver from './pages/GameOver';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

function App() {
  return (
    <Router>
      <Global/>
        <Main>
        <Container>
        <Navbar/>
          <Switch>
            <Route path="/game" component ={Game}/>
            <Route path="/highScores" component ={HighScores}/>
            <Route path="/gameOver" component ={GameOver}/>
            <Route exact path="/" component ={Home}/>
          </Switch>
        </Container>
        </Main>
    </Router>
  );
}

export default App;
