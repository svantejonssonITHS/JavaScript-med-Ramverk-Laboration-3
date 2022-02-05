# Utvecklingsguide

## Navigation
Vårat projekt lever i mappen `project` i repot `JavaScript-med-Ramverk-Laboration-3`. <br />
Detta innebär att vi behöver flytta oss dit i terminalen när vi utvecklar.

För att se vart du står i terminalen just nu, kör följande kommando i **en terminal**
```
pwd
```
**Observera:** Om texten du får tillbaka slutar på `/JavaScript-med-Ramverk-Laboration-3` kör följande kommando i **en terminal**
```
cd project
```

## Installera dependencies
För att installera nödvändiga dependecies, kör följande kommando i **en terminal**
```
npm install
```
**Observera:** Detta behövs göra första gången du clonar projektet (`git clone`) och kan även behöva göras efter en `git pull`.

## Köra projektet i utvecklingsläge
För att starta projektet så den syns i webbläsaren, kör följande kommando i **en terminal**
```
npm run dev
```
Sedan kan du i din webbläsare navigera till [localhost:3000](http://localhost:3000/)

## Köra ESLint
För att kolla om projektet följer ESLint's Regler, kör följande kommando i **en terminal**
```
npm run lint
```
Sedan ser du i terminalen om du får några eventuella fel. Försök att lösa dem innan du gör `git push`.

## Lägga till nya produkter i databasen
För att lägga till nya produkter i projektets databas, kör följande kommando i **en terminal**
```
npm run add
```
Följ sedan instruktionerna i terminalen.
