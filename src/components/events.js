import React from 'react'

const EventRows = ({ event }) => (
  <tr>
    <td>{event.was}</td>
    <td>{event.wann}</td>
    <td>{event.wer}</td>
  </tr>
)

export default EventRows