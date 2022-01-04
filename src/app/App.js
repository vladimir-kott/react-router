import NavBar from "./components/navBar"
import {Route, Switch, Redirect} from 'react-router-dom'
import Dashboard from '../app/components/dashboard'
import Login from '../app/components/login'
import Posts from '../app/components/posts'
import Home from '../app/components/home'
import NotFound from "./components/not-found"

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route 
          path='/dashboard' 
          component={Dashboard}
        />
        <Route path='/login' component={Login}/>
        <Route path='/posts/:postId?' component={Posts}/>
        <Route path='/404' component={NotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </div>
  );
}

export default App;
