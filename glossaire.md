# Glossaire JavaScript

Cette fiche rassemble les mots et notions essentiels rencontrés dans le workshop.

## Variables et valeurs

### `let`
Déclare une variable dont la valeur peut changer pendant l'exécution du programme.

```javascript
let age = 20;
age = 21;
```

### `const`
Déclare une variable qui ne peut pas être réaffectée après son initialisation.

```javascript
const pays = "France";
```

### Variable
Un nom associé à une valeur. Elle permet de conserver une information et de la réutiliser.

### Type
La nature d'une valeur. Les types de base étudiés sont notamment `number`, `string`, `boolean` et `undefined`.

### `typeof`
Retourne le type d'une valeur.

```javascript
typeof 42; // "number"
typeof "bonjour"; // "string"
```

## Conditions et répétitions

### `if`
Exécute un bloc de code seulement si une condition est vraie.

```javascript
if (age >= 18) {
    console.log("Majeur");
}
```

### `else`
Exécute un autre bloc lorsque la condition du `if` est fausse.

### `else if`
Teste une nouvelle condition si les conditions précédentes sont fausses.

### `switch`
Compare une valeur à plusieurs cas possibles.

### `for`
Répète un bloc de code un nombre de fois connu ou contrôlé par une condition.

```javascript
for (let compteur = 1; compteur <= 3; compteur++) {
    console.log(compteur);
}
```

### `while`
Répète un bloc tant qu'une condition reste vraie.

### Boucle imbriquée
Une boucle placée à l'intérieur d'une autre boucle.

### `break`
Arrête immédiatement la boucle ou le `switch` en cours.

### `continue`
Passe directement à l'itération suivante d'une boucle.

## Fonctions

### Fonction
Bloc de code réutilisable qui réalise une tâche.

```javascript
function saluer() {
    console.log("Bonjour");
}
```

### Paramètre
Variable déclarée entre les parenthèses d'une fonction. Elle reçoit une valeur lors de l'appel.

### Argument
Valeur réellement transmise à une fonction lorsqu'elle est appelée.

### `return`
Renvoie une valeur depuis une fonction et termine son exécution.

```javascript
function additionner(a, b) {
    return a + b;
}
```

### Fonction fléchée
Écriture courte d'une fonction, avec la syntaxe `=>`.

```javascript
const doubler = nombre => nombre * 2;
```

## Données structurées

### Chaîne (`string`)
Suite de caractères entourée par des guillemets simples, doubles ou obliques.

```javascript
const message = "Bonjour";
```

### Tableau (`array`)
Collection ordonnée de valeurs. Les index commencent à `0`.

```javascript
const nombres = [10, 20, 30];
console.log(nombres[0]); // 10
```

### Index
Position d'une valeur dans une chaîne ou un tableau. La première position est `0`.

### `length`
Propriété qui donne le nombre de caractères d'une chaîne ou le nombre d'éléments d'un tableau.

### Objet (`object`)
Ensemble de propriétés organisées sous forme de paires clé-valeur.

```javascript
const personne = {
    nom: "Martin",
    age: 30
};
```

### Propriété
Information stockée dans un objet. Elle est généralement consultée avec la notation par point, comme `personne.nom`.

## Opérateurs utiles

### Opérateur d'affectation (`=`)
Place une valeur dans une variable.

### Opérateurs de comparaison
Les opérateurs `===`, `!==`, `>`, `<`, `>=` et `<=` comparent des valeurs et produisent `true` ou `false`.

### Opérateurs logiques
`&&` signifie « et », `||` signifie « ou » et `!` inverse une valeur booléenne.

### Incrémentation (`++`)
Augmente une valeur de `1`.

```javascript
compteur++;
```

## Valeurs booléennes

### `true` et `false`
Les deux valeurs possibles d'un booléen. Elles servent notamment à représenter une condition vraie ou fausse.

### `undefined`
Valeur d'une variable qui existe mais à laquelle aucune valeur n'a encore été affectée.

### `null`
Valeur utilisée pour représenter volontairement l'absence de valeur.
