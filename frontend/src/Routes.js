import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

const Initial = () => {
   return(
      <Switch>
         <Route exatc path="/">
            <Home />
         </Route>
         <Route path="/sobre">
            <About />
         </Route>
         <Route path="*">
            <h2><strong>ERROR 404</strong> Conteudo não encontrado</h2>
         </Route>
      </Switch>
   )
}

export default Initial