import React from "react"
import {Link} from "gatsby"

import * as style from './navigation.module.css' 

const Navigation = () => (
  <nav className={style.navigation}> 
    <Link to="/#events">Events</Link>
    <Link to="/#beitraege">Beiträge</Link>
    <Link to="/contact">Kontakt</Link>
  </nav>
  
)

export default Navigation;