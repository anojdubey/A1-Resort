
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import { Route, Routes, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar/>
    <div style={{marginTop:"2rem"}}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route exact path="*" component={Error}/>
      </Switch>
      </div>
    </>
  );
}

export default App;
