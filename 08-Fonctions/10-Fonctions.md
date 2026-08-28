## Exercices sur les Fonctions en JavaScript

### Challenge 1 : Fonction de Somme

Écrivez une fonction JavaScript qui prend deux nombres en paramètres et retourne leur somme. Utilisez cette fonction pour afficher la somme de deux nombres.

<solution>
### Étapes de résolution

1.  **Déclaration de la fonction** : Créer une fonction nommée `somme` (ou `addition`) en utilisant le mot-clé `function`.
2.  **Paramètres** : Entre les parenthèses de la fonction, définir deux paramètres, par exemple `(a, b)`.
3.  **Valeur de retour** : À l'intérieur de la fonction, utiliser le mot-clé `return` pour renvoyer le résultat de l'addition `a + b`.
4.  **Appel de la fonction** : Appeler cette fonction en lui passant des valeurs réelles (les "arguments") et afficher le résultat.

**Code :**
```javascript
// 1, 2 et 3. Création de la fonction
function additionner(a, b) {
    return a + b;
}

// 4. Utilisation de la fonction
let resultat = additionner(5, 7);
console.log(`La somme est : ${resultat}`);

// Test avec d'autres valeurs
console.log(`Autre test (10 + 20) = ${additionner(10, 20)}`);
```
</solution>

### Challenge 2 : Fonction de Multiplication

Écrivez une fonction JavaScript qui prend deux nombres en paramètres et retourne leur produit. Utilisez cette fonction pour afficher le produit de deux nombres.

<solution>
### Étapes de résolution

1.  **Fonction classique ou fléchée** : On peut utiliser une fonction classique ou s'entraîner avec la syntaxe moderne des "fonctions fléchées" (arrow functions).
2.  **Paramètres** : Définir deux paramètres.
3.  **Retourner le produit** : Multiplier les deux nombres et utiliser `return`.
4.  **Affichage** : Appeler la fonction et afficher.

**Code :**
```javascript
// Méthode 1 : Fonction classique
function multiplier(x, y) {
    return x * y;
}

// Méthode 2 (Bonus) : Fonction fléchée
const multiplierModerne = (x, y) => x * y;

// Utilisation
let a = 4;
let b = 5;

console.log(`Le produit de ${a} par ${b} donne : ${multiplier(a, b)}`);
console.log(`Avec la fonction fléchée : ${multiplierModerne(a, b)}`);
```
</solution>

### Challenge 3 : Fonction de Maximum

Écrivez une fonction JavaScript qui prend deux nombres en paramètres et retourne le plus grand des deux. Utilisez cette fonction pour afficher le maximum entre deux nombres.

### Challenge 4 : Fonction de Minimum

Écrivez une fonction JavaScript qui prend deux nombres en paramètres et retourne le plus petit des deux. Utilisez cette fonction pour afficher le minimum entre deux nombres.

### Challenge 5 : Fonction de Factorielle

Écrivez une fonction JavaScript qui calcule la factorielle d'un entier positif. La fonction doit prendre un entier en paramètre et retourner sa factorielle. Utilisez cette fonction pour afficher la factorielle d'un nombre donné.

### Challenge 6 : Fonction de Fibonacci

Écrivez une fonction JavaScript qui calcule le n-ième terme de la suite de Fibonacci. La fonction doit prendre un entier en paramètre et retourner le n-ième terme. Utilisez cette fonction pour afficher le terme de Fibonacci demandé.

### Challenge 7 : Fonction d'Inversion de Chaîne

Écrivez une fonction JavaScript qui inverse une chaîne de caractères. La fonction doit prendre une chaîne en paramètre et retourner la chaîne inversée. Utilisez cette fonction pour afficher une chaîne inversée.

### Challenge 8 : Fonction de Vérification de Parité

Écrivez une fonction JavaScript qui vérifie si un entier est pair ou impair. La fonction doit prendre un entier en paramètre et retourner `true` si l'entier est pair et `false` s'il est impair. Utilisez cette fonction pour afficher si un nombre est pair ou impair.
