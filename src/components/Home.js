import React from 'react'
import About from './about'
import Dashboard from './Dashboard'
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom'
const Home=()=>{
	return(
          <div>
            <BrowserRouter>
             <h1>Welcome To Home Page</h1>
             <ul className="list">
                <li>
                 <Link to="/">Dashboard</Link>
               </li>
               <li>
                 <Link to="/about">About</Link>
                </li>
                
             </ul>
             <Switch>
             <Route exact path="/" component={Dashboard} />
             <Route exact path="/about" component={About} />
             </Switch>
            </BrowserRouter>
           </div>

		)
}
export default Home
