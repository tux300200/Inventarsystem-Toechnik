async function lade() {
  const antwort = await fetch('/api/hello')
  const daten: { message: string } = await antwort.json()
  document.getElementById('text')!.textContent = daten.message
}

lade()