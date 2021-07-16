import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'

const Initial = () => {
   return(
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/sobre">
            <About />
         </Route>
         <Route path="/signin">
            <SignIn></SignIn>
         </Route>
         <Route path="*">
            <h2><strong>ERROR 404</strong>- Página não encontrada</h2>
            <br/>
            <Link to="/">Voltar para a HOME</Link>
         </Route>
      </Switch>
   )
}

export default Initial