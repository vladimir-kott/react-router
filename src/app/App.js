import NavBar from "./components/navBar"
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../app/components/dashboard'
import Login from '../app/components/login'
import Posts from '../app/components/posts'
import Home from '../app/components/home'

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route 
          path='/dashboard' 
          component={Dashboard}
        />
        <Route path='/login' component={Login}/>
        <Route path='/posts/:postId?' component={Posts}/>
        <Route path='/' exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
