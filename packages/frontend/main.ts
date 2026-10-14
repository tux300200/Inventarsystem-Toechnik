async function lade() {
  const antwort = await fetch('/api/hello') //Lädt die Serverantwort von der Hello-World-API, die sich im Backend befindet
  const daten: {message: string} = await antwort.json() //Konvertiert die Serverantwort in ein JSON und speichert diese in die Variable "daten". Das {message:string} beschreibt, wie der Typ dieses JSONs ist, also ein Eintrag mit dem Namen "message", der ein String ist. Das {message:string} gibt NUR den Typ (sozusagen die Spielregeln der Antwort) vor und verändert das eigentliche JSON NICHT (!!!). Der Compiler geht davon aus, dass die Form eingehalten wird, überprüft dies aber nicht.
  document.getElementById("text")!.textContent = daten.message //Nimmt aus diesem JSON in der Variable daten den Eintrag "message" und packt diesen String (also "Hello World") in das Textfeld aus der HTML-Datei. Das ! vor .textContent sagt TypeScript, dass es davon ausgehen soll, dass dieses Objekt vorhanden ist (getElementById kann entweder ein HTML-Element oder null (d.h. es gibt nichts) ausgeben. Da man null (also nichts) keinen TextContent geben kann, würde TypeScripts Typenverifizierung hier meckern, da die Codezeile nicht für alle möglichen Ausgabetypen von getElementById funktionieren würde. Mit dem ! skippt man sozusagen diese Überprüfung und sagt TypeScript imgrunde: "Mach dir mal keine Sorgen, das passt dann schon weil dieses Textfeld garantiert existiert". Wenn dieses Textfeld doch nicht exisitieren würde, würde das Programm hier crashen/einen Fehler auslösen.)
  const ui = document.createElement("div") //Erstellt einen neuen Container (sozuzsagen ein Abschnitt) und nennt diesen UI

  const testParagraph = document.createElement("p") //Erstellt einen Paragraph (=Absatz)
  testParagraph.textContent = "Test" //Setzt den Textinhalt des Absatzes auf "Test"

  ui.append(testParagraph) //Hängt der UI den Absatz "unten dran" (append = anhängen)
  document.getElementById('text')!.insertAdjacentElement("afterend", ui) //Fügt den Container UI nach dem HTML-Absatz mit dem Namen "text" am Ende (=afterend) ein.

  /* ToDo:

  1. Forke das Projekt auf GitHub und erstelle dir einen Branch aus Leopold-lernt-Programmieren für dieses Feature (z.B. "RechteckZeichnen")
  2. Erstelle eine lokale Kopie dieses Projektes oder verbinde dich mit einem GitHub Codespace, um dieses Projekt zu bearbeiten.
  3. Starte die Website im localhost
  4. Verstehe jedes (!!) Zeichen von dieser Datei (Ignoriere erstmal die Backend-API, die ist noch ein bisschen komplizierter. Gehe einfach davon aus, dass die API immer "Hello World" zurückgibt). Frage dich überall: Was macht XYZ? Warum brauche ich XYZ?
  5. Füge Tests ein, die Überprüfen ob der HTML-Absatz "test" wirklick exisitiert (ersetze das ! durch etwas anderes). Erzeuge eine Fehlermeldung wenn dieses Objekt nicht exisitiert. Tipp: if (true) {}
  6. Füge ein Rechteck am Ende der Seite ein.
  7. Mache ein PR auf GitHub in den Branch Leopold-lernt-Programmieren

  (Um die Commit-History clean zu halten und nicht unnötige Verwirrung zu stiften, wird diese Programmier-Einführung vom "Hauptprojekt" getrennt)

  Dannach gehts weiter mit CSS :)
  */
}

lade()