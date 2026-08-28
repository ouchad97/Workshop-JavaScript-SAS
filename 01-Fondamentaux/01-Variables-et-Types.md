## Exercices sur les Variables, Constantes et Types
### Challenge 1 : Affichage Informations
Écrivez un programme JavaScript qui permet d'afficher vos informations personnelles : nom, prénom, âge, sexe et adresse e-mail. Les données sont saisies par l'utilisateur.

<solution>
### Étapes de résolution

1.  **Déclaration des variables** : On utilise `prompt()` pour demander à l'utilisateur de saisir ses informations et on stocke chaque réponse dans une variable (`let` ou `const`).
2.  **Affichage** : On utilise `console.log()` ou `alert()` pour afficher le résultat, en combinant le texte et les variables avec des _template literals_ (les guillemets obliques \` \`).

**Code :**
```javascript
// 1. Saisie des informations
let nom = prompt("Quel est votre nom ?");
let prenom = prompt("Quel est votre prénom ?");
let age = prompt("Quel est votre âge ?");
let sexe = prompt("Quel est votre sexe (M/F) ?");
let email = prompt("Quelle est votre adresse e-mail ?");

// 2. Affichage du résultat
console.log(`Voici vos informations :
- Nom : ${nom}
- Prénom : ${prenom}
- Âge : ${age} ans
- Sexe : ${sexe}
- E-mail : ${email}`);
```
</solution>

### Challenge 2 : Conversion de la température
Écrivez un programme qui demande la température en Celsius et la transforme en Kelvin.
Formule :
```
K = C + 273.15
```

<solution>
### Étapes de résolution

1.  **Saisie** : Demander la température en Celsius avec `prompt()`.
2.  **Conversion en nombre** : La valeur renvoyée par `prompt()` est du texte (une chaîne de caractères). Il faut la convertir en nombre (avec `parseFloat()` ou `Number()`) pour faire un calcul mathématique, sinon JavaScript fera une concaténation au lieu d'une addition.
3.  **Calcul et affichage** : Appliquer la formule et afficher.

**Code :**
```javascript
// 1 et 2. Demander la température et la convertir en nombre
let tempCelsius = parseFloat(prompt("Entrez la température en Celsius :"));

// 3. Calcul de la température en Kelvin
let tempKelvin = tempCelsius + 273.15;

// Affichage
console.log(`${tempCelsius}°C correspond à ${tempKelvin}K`);
```
</solution>

### Challenge 3 : Conversion de la distance
Écrivez un programme qui demande la distance en kilomètres et la transforme en yards.
Formule :
```
Yards = Km * 1093.61
```

### Challenge 4 : Conversion de la vitesse
Écrivez un programme qui demande la vitesse en kilomètres par heure (km/h) et la transforme en mètres par seconde (m/s).
Formule :
```
m/s = km/h * 0.27778
```

### Challenge 5 : Affichage Température
Écrivez un programme qui demande la température en Celsius et affiche l'état de l'eau à cette température (solide, liquide, gaz).
Règle :

* C < 0 : Solide
* 0 <= C < 100 : Liquide
* C >= 100 : Gaz


### Challenge 6 : Calcul et affichage des résultats
Deux nombres réels, a et b, sont saisis au clavier. Calculez et affichez a + b, a - b, a * b, et a / b avec précision décimale.


### Challenge 7 : Moyenne pondérée de trois nombres
Écrivez un programme JavaScript pour calculer la moyenne pondérée de trois nombres donnés par l'utilisateur avec les pondérations suivantes :

* 1er nombre : pondération 2
* 2ème nombre : pondération 3
* 3ème nombre : pondération 5


### Challenge 8 : Calcul de la moyenne géométrique
Écrivez un programme JavaScript pour trouver la moyenne géométrique de trois nombres saisis par l'utilisateur.
Formule :
```
Moyenne géométrique = (a * b * c)^(1/3)
```

### Challenge 9 : Calcul de la distance entre deux points dans un espace 3D
Écrivez un programme JavaScript pour trouver la distance entre deux points donnés dans un espace 3D.
Formule :
```
Distance = √((x2-x1)² + (y2-y1)² + (z2-z1)²)
```

### Challenge 10 : Volume d'une sphère
Écrivez un programme pour trouver le volume d'une sphère. Prenez le rayon de la sphère en entrée de l'utilisateur.
Formule pour le volume d'une sphère :
```
Volume = (4/3) * π * r³
```

### Challenge 11 : Surface d'un rectangle
Écrivez un programme pour trouver la surface d'un rectangle. Prenez la longueur et la largeur du rectangle en entrée de l'utilisateur.
Formule pour la surface d'un rectangle :
```
Surface = longueur * largeur
```

### Challenge 12 : Nombre entier à quatre chiffres en ordre inverse
Écrivez un programme JavaScript pour afficher un nombre entier à quatre chiffres dans l'ordre inverse sans utiliser de boucle. Par exemple, si le nombre entier est 1234, son inverse est 4321.


### Challenge 13 : Affichage des valeurs binaire et hexadécimale équivalentes
Écrivez un programme JavaScript pour afficher la valeur équivalente en binaire et en hexadécimal. Entrez un nombre entier et affichez ses valeurs équivalentes en binaire et en hexadécimal.

