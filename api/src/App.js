import Data from './Component/Data';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom"
function App() {
  return (
    <div>
       <BrowserRouter>
          <Route>
          <Link exact to="/">Data</Link>&nbsp;&nbsp;&nbsp;
          </Route>
          <Switch>
              <Route path="/" exact component={Data}/>
          
          </Switch>
      </BrowserRouter>
      
</div>
     
  );
}

export default App;
