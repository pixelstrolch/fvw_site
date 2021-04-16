import React from "react"
import { graphql, StaticQuery } from "gatsby"

import * as style from './events.module.css' 

const Events = ({ data }) => {

  return(
    <StaticQuery
      query={graphql`
        {
          allGoogleSheet {
            nodes {
              Events {
                id
                wann
                was
                wo
              }
            }
          }
        }
      `}
      render={data => (
        <section className={style.events}>
          <h1 id="events">Events</h1>
          <table>
            <tr>
              <th>Was</th>
              <th>Wann</th>
              <th>Wo</th>
            </tr>
            {/* <tr key={data.allGoogleSheet.nodes.Events.id}>
              <td>{data.allGoogleSheet.nodes.Events.was}</td>
              <td>{data.allGoogleSheet.nodes.Events.wann}</td>
              <td>{data.allGoogleSheet.nodes.Events.wo}</td>
            </tr> */}
          </table>
        </section>
      )}
    />
  )
}

export default Events
