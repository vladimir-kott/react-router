import NavBar from "./components/navBar"
import {Route} from 'react-router-dom'
import Dashboard from '../app/components/dashboard'
import Login from '../app/components/login'
import Posts from '../app/components/posts'
import Home from '../app/components/home'


function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/login' component={Login}/>
      <Route path='/posts' component={Posts}/>
      <Route path='/' component={Home}/>
    </div>
  );
}

export default App;
