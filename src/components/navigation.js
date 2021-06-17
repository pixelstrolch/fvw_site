import React from "react"
import { Link } from "gatsby"

import * as style from './navigation.module.css' 

const Navigation = () => (
  <nav className={style.navigation}> 
    <Link to="/ueber-uns">Über uns</Link>
    <Link to="/#events">Events</Link>
    <Link to="/#newsletter">Newsletter</Link>
    <Link to="/#beitraege">Beiträge</Link>
    <Link to="/kontakt">Kontakt</Link>
  </nav>
)

export default Navigation;