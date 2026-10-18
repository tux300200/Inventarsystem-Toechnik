# Inventarsystem-Töchnik
Ein Inventarsystem, das Kabel und andere Techniksachen der Technik-AG managen und per Barcode an den jeweiligen Geräten identifizieren soll. 

Das Projekt soll hauptsächlich neuen Technikern dabei helfen, Kabeltypen zu identifizieren und dabei helfen, die richtigen Lagerplätze für jedes Gerät zu finden. Der Lerneffekt, wie man ein solches Projekt programmiert steht dabei im Vordergrund.

Das Projekt ist hauptsächlich für die Verwendung webbasierte auf Mobilgeräten gedacht, eine Desktop-Version ist denkbar. 

In der Programmierung sollte berücksichtigt werden, dass der User zeitweise keine oder eine sehr eingeschränkte Internetverbindung hat. Daher sollte das Programm beim erstmaligen Laden der Website alle wichtigen Datein herunterladen und diese kontinuierlich aktualisieren. Das Herunterladen von nicht unbedingt benötigten Dateien (wie z.B. von Bildern) sollte vermieden werden.

<br>

Lichthammer auf die 1; alle Lichthammerrechte vorbehalten.

<br>
<br>

# Zu diesem Projekt beitragen

Nach dem Klonen dieses Projekts bzw. dem Verbinden mit einem Codespace, kann die Website lokal wie folgt gesartet werden:

Zuerst muss im Projektverzeichnis die im Lockfile festgehaltenen Abhängigkeiten installiert werden:

`npm ci`

Danach können die Server <b> in 2 seperaten Terminals </b> gestartet werden:

`npm run dev -w backend` (Standardmäßig auf Port 3000) <br>
`npm run dev -w frontend` (Standardmäßig auf Port 5173)

Die Website kann dann unter `http://localhost:5173/` geöffnet werden. <br>
Um die Website auf Mobilgeräten testen zu können, kann der Port mit einem Devtunnel öffentlich gemacht werden.

Es wird empfohlen, das Projekt vorher zu forken und pro Feature auf einem eigenen Branch zu arbeiten.

Da dieses Projekt eher zum Programmierenlernen dienen soll, sollte KI richtig verwendet werden. Das heißt: Statt KI ganze Features im Alleingang programmieren zu lassen, sollte man KI lieber nutzen, um sich unklare Sachen erklären zu lassen oder um sich Tipps für eine richtige Vorgehensweise geben zu lassen.