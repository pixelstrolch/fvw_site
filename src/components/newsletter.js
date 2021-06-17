import React from "react"

import * as style from './newsletter.module.css' 

const Newsletter = () => (
  <div className={style.newsletter}>
    <form action="https://familienverein-wahlen.us20.list-manage.com/subscribe/post?u=b253eee6416ea9da8c26e4732&amp;id=a800f2e22b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
      <div class="formElement4-4">
        <label htmlFor="mce-EMAIL">E-Mail-Adresse </label>
        <input type="email" name="EMAIL" class="required email" id="mce-EMAIL" />
      </div>
      <div class="formElement2-4">
        <label htmlFor="mce-FNAME">Vorname </label>
        <input type="text" name="FNAME" class="" id="mce-FNAME" />
      </div>
      <div class="formElement2-4">
        <label htmlFor="mce-LNAME">Nachname </label>
        <input type="text" name="LNAME" class="" id="mce-LNAME" />
      </div>
      <div className={style.hidden} aria-hidden="true">
        <input type="text" name="b_b253eee6416ea9da8c26e4732_a800f2e22b" tabindex="-1" value="" />
      </div>
      <div class="formElement1-4">
        <button type="submit" id="mc-embedded-subscribe">Anmelden</button>
      </div>
      <div id="mce-responses" class="clear">
        <div class="response" id="mce-error-response" className={style.invisible}></div>
        <div class="response" id="mce-success-response" className={style.invisible}></div>
      </div>
    </form>
  </div>
)

export default Newsletter;
