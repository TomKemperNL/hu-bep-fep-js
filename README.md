# Client en Serverside javascript

Het is niet heel erg intuïtief hoe de server~ en clientside javascript werelden van elkaar verschillen.

Vandaar dit demo projectje. Hoe gebruik je het?

# Setup

Het zijn javascript projecten. Dus `npm install` zowel in de **server** als in de **client** folder.

# Productie

Om het geheel op de simpelste manier te draaien ga je eerst naar de **client** folder en runt daar `npm run build`. 
Dit bundle't alle javascript met *Rollup* zodat het in een normale browser-omgeving gaat draaien. Alternatieven voor rollup zijn libraries als *Webpack*.

In dit voorbeeld doen we geen fancy zaken zoals minificatie. Maar 'in het echt' run je hier ook je minifiers, linters, tree-shakers en wat-nog-meer.
Let hier op de rollup-replace plugin, die er voor zorgt dat alle Ajax-requests een andere kant op gaan.

Vervolgens kun je naar de **server**-folder gaan om daar `npm start` aan te roepen en de express app te starten. De zojuist gebuilde clientside code wordt nu door de Express-static middleware geserveerd.

# Development

Uiteraard werkt de bovenstaande manier totaal niet voor development. Elke keer als je een stukje javascript aanpast moet je dan helemaal opnieuw bundelen en daar wordt je helemaal kriegel van.

Dus voor development werkt het anders:

* Eerst starten we de server-code met `npm start` in de server directory
* Daarna starten we de client-code binnen *es-dev-server* met `npm start` in de client directory

Er zijn dus nu twee actieve webservers die met elkaar moeten kletsen (eentje op poort 3000, en de ander op 8000). Standaard mogen deze niet met elkaar praten vanwege CORS, dus daarom enablen we die *cors*-middleware aan de server kant.