## Exercices sur les Boucles `for` et `while`

### Challenge 1 : Table de Multiplication

Écrivez un programme JavaScript qui demande un nombre à l’utilisateur et affiche sa table de multiplication de 1 à 10. Par exemple, pour le nombre 4, affichez :
```
4 * 1 = 4 4 * 2 = 8 4 * 3 = 12 ... 4 * 10 = 40
```

<solution>
### Étapes de résolution

1.  **Saisie** : Demander le nombre de la table souhaitée.
2.  **La boucle** : On a besoin de répéter 10 fois la même opération. La boucle `for` est idéale : on l'initialise à `i = 1`, on continue tant que `i <= 10`, et on incrémente `i` de 1 à chaque tour.
3.  **Affichage** : À l'intérieur de la boucle, on calcule et on affiche la ligne de la table.

**Code :**
```javascript
// 1. Saisie du nombre
let n = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));

console.log(`Table de multiplication de ${n} :`);

// 2. Boucle for de 1 à 10
for (let i = 1; i <= 10; i++) {
    let resultat = n * i;
    
    // 3. Affichage du calcul
    console.log(`${n} * ${i} = ${resultat}`);
}
```
</solution>

### Challenge 2 : Factorielle d'un Nombre

Écrivez un programme JavaScript qui calcule la factorielle d'un nombre entier positif `n` entré par l’utilisateur. La factorielle de `n` est le produit de tous les entiers positifs inférieurs ou égaux à `n`. Par exemple, pour `n` = 5, affichez : `5! = 120`.

<solution>
### Étapes de résolution

1.  **Saisie** : Demander le nombre `n`.
2.  **Variable de stockage** : On initialise une variable `factorielle` à `1` (surtout pas à 0, car toute multiplication par 0 donne 0 !).
3.  **La boucle** : On crée une boucle qui part de `1` jusqu'à `n`.
4.  **Calcul accumulé** : À chaque tour de boucle, on multiplie la variable `factorielle` par `i` (`factorielle = factorielle * i`).

**Code :**
```javascript
// 1. Saisie de n
let n = parseInt(prompt("Entrez un entier positif pour la factorielle :"));

// 2. Initialisation à 1
let factorielle = 1;

// 3. Boucle de 1 à n
for (let i = 1; i <= n; i++) {
    // 4. On multiplie et on accumule
    factorielle *= i; // équivalent à : factorielle = factorielle * i
}

console.log(`${n}! = ${factorielle}`);
```
</solution>

### Challenge 3 : Somme des N Nombres

Écrivez un programme JavaScript qui demande un nombre entier `n` à l’utilisateur et calcule la somme des `n` premiers nombres naturels. Par exemple, pour `n` = 4, la somme est `1 + 2 + 3 + 4 = 10`.

### Challenge 4 : Affichage des N Premiers Nombres Impairs

Écrivez un programme JavaScript qui demande un nombre entier `n` et affiche les `n` premiers nombres impairs. Par exemple, pour `n` = 5, affichez : `1, 3, 5, 7, 9`.

### Challenge 5 : Calcul de la Puissance

Écrivez un programme JavaScript qui calcule la puissance d'un nombre entier `base` élevé à un exposant `exposant`. Utilisez une boucle pour effectuer le calcul. Par exemple, pour `base` = 3 et `exposant` = 4, le résultat est `3^4 = 81`.

### Challenge 6 : Affichage des N Premiers Nombres Pair

Écrivez un programme JavaScript qui demande un nombre entier `n` et affiche les `n` premiers nombres pairs. Par exemple, pour `n` = 4, affichez : `2, 4, 6, 8`.

### Challenge 7 : Inversion d'un Entier

Écrivez un programme JavaScript qui lit un entier à plusieurs chiffres et l'affiche en ordre inverse sans utiliser de tableaux. Par exemple, si l'entrée est 12345, affichez 54321.

### Challenge 8 : Affichage de la Suite de Fibonacci

Écrivez un programme JavaScript qui génère les `n` premiers termes de la suite de Fibonacci, où `n` est entré par l’utilisateur. La suite de Fibonacci est définie comme suit : F(0) = 0, F(1) = 1, et F(n) = F(n-1) + F(n-2).

### Challenge 9 : Compteur de Chiffres

Écrivez un programme JavaScript qui demande à l’utilisateur un entier positif et compte le nombre de chiffres dans cet entier. Par exemple, pour `n` = 12345, affichez : `Nombre de chiffres = 5`.

### Challenge 10 : Calcul de la Somme des N Entiers

Écrivez un programme JavaScript qui demande à l’utilisateur un nombre entier `n` et calcule la somme des `n` premiers entiers naturels en utilisant une boucle. Par exemple, pour `n` = 3, la somme est `1 + 2 + 3 = 6`.
