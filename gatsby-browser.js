export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Die Website des Familienvereins wurde aktualisiert. ` +
      `Auf deinem Computer ist aber noch die alte Version gespeichert.` +
        `Bitte klicke OK um die Daten zu aktualisieren und die neuste Version anzuzeigen.`
  )
  if (answer === true) {
    window.location.reload()
  }
}