
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import Home from './pages/Home';
import Cidade from './pages/Cidade';
import Musica from './pages/Musica';
function App() {
  document.title="Atividade Router"
  return (
    <div className="conteudo">
      <header>
        <nav>
          <Link className="links" to="/">Home</Link>
          <Link className="links" to="/cidade">Cidade</Link>
          <Link className="links" to="/musica">Musica</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/cidade" component={Cidade}/>
          <Route path="/musica" component={Musica}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
