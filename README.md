MD-Blog
---

Créez un mini blog (un seul post au début). 
Pour commencer, forkez ce repo, puis clonez le, une fois ceci fait  `npm install` pour récuperer les dépendances. (jquery et semantic-ui-css)
Votre code JS doit aller dans `js/app.js`, votre CSS dans `css/style.css`

NB: n'oubliez pas de lancez Caddy (sans quoi les fichiers liés ne marcheront pas) et Browser-Sync

## Etape 1
- Récuperez le fichier markdown `/example.md` du serveur distant  
- transformez le en HTML grace à showdown
- insérez le dans votre page html dans un element `<div id="md">` que vous aurez créé auparavant

## Etape 2
Vous récuperez également un fichier JSON accessible à l'URL `/menu.json` qui contient les liens et titres de plusieurs posts, vous insérez le contenu dans votre page HTML pour créer un menu.

## Etape 3
Vous devrez recréer le serveur localement grace au paquet [Express](http://expressjs.com/fr/)

[Des applications ultra-rapides avec Node.js - OpenClassroom](https://openclassrooms.com/courses/des-applications-ultra-rapides-avec-node-js/le-framework-express-js)


### Bonus mode

Sur votre serveur, créez une page HTML qui permet d'éditer les posts et une autre qui permet d'ajouter un nouveau post (cette route doit également mettre à jour le fichier menu.json)

La page d'édition dispose de trois champs, un champ `<input type="hidden'>` qui contient le nom du fichier à éditer, unn champ `<input type="text">` qui permet de mettre à jour le titre du post, et un champ `<textarea>` qui permet de modifier le contenu du fichier.

Pour le formulaire d'ajout, la seule différence réside dans le type du champs qui contient le nom du fichier à créer est de type text.



npm init
git init
npm install moment --save
touch index.html
touch app.js
subl .
caddy & bs