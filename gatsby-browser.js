export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Diese Webapp wurde aktualisiert. ` +
      `Willst du sie neu laden um die aktuellste Version anzuzeigen?`
  )
  if (answer === true) {
    window.location.reload()
  }
}