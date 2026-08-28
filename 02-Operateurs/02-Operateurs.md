## Exercices sur les Opérateurs JavaScript

### Challenge 1 : Calculatrice de Base

Écrivez un programme JavaScript qui demande deux nombres et affiche leur somme, leur différence, leur produit et leur quotient.

<solution>
### Étapes de résolution

1.  **Saisie des nombres** : Utiliser `prompt()` pour demander les nombres et les convertir avec `parseFloat()`.
2.  **Calculs** : Utiliser les opérateurs arithmétiques `+` (somme), `-` (différence), `*` (produit) et `/` (quotient).
3.  **Affichage** : Afficher les résultats proprement avec `console.log()`.

**Code :**
```javascript
// 1. Saisie des nombres
let nb1 = parseFloat(prompt("Entrez le premier nombre :"));
let nb2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// 2. Calculs
let somme = nb1 + nb2;
let difference = nb1 - nb2;
let produit = nb1 * nb2;
let quotient = nb1 / nb2;

// 3. Affichage
console.log(`Résultats pour ${nb1} et ${nb2} :`);
console.log(`Somme : ${somme}`);
console.log(`Différence : ${difference}`);
console.log(`Produit : ${produit}`);
console.log(`Quotient : ${quotient}`);
```
</solution>

### Challenge 2 : Échange de Valeurs

Écrivez un programme JavaScript qui échange les valeurs de deux variables, puis affiche les valeurs avant et après l'échange.

<solution>
### Étapes de résolution

1.  **Déclaration initiale** : Déclarer deux variables `a` et `b`.
2.  **Affichage avant** : Afficher les valeurs actuelles de `a` et `b`.
3.  **L'échange (Swap)** : Pour échanger deux variables sans perdre l'une de leurs valeurs, on utilise une troisième variable temporaire (`temp`).
    - On sauvegarde `a` dans `temp`.
    - On met `b` dans `a`.
    - On met `temp` (l'ancien `a`) dans `b`.
4.  **Affichage après** : Afficher les nouvelles valeurs.

**Code :**
```javascript
// 1. Déclaration
let a = 5;
let b = 10;

// 2. Affichage avant
console.log(`Avant échange : a = ${a}, b = ${b}`);

// 3. Échange avec variable temporaire
let temp = a;  // On met le 5 en sécurité dans temp
a = b;         // a vaut maintenant 10
b = temp;      // b vaut maintenant 5 (l'ancienne valeur de a)

// 4. Affichage après
console.log(`Après échange : a = ${a}, b = ${b}`);
```
</solution>

### Challenge 3 : Opérateurs d'Affectation

Écrivez un programme JavaScript qui utilise les opérateurs d'affectation (`+=`, `-=`, `*=`, `/=`) pour modifier progressivement une variable et afficher sa valeur après chaque opération.

### Challenge 4 : Comparaisons Strictes

Écrivez un programme JavaScript qui demande deux valeurs et indique si elles sont strictement égales, différentes, ou si l'une est supérieure à l'autre.

### Challenge 5 : Conversion de Secondes

Écrivez un programme JavaScript qui demande un nombre de secondes et le convertit en heures, minutes et secondes.

### Challenge 6 : Vérification de Plage

Écrivez un programme JavaScript qui demande un nombre et indique s'il appartient à l'intervalle compris entre 10 et 100.

### Challenge 7 : Calcul de Réduction

Écrivez un programme JavaScript qui demande un prix et un pourcentage de réduction, puis affiche le montant de la réduction et le prix final.

### Challenge 8 : Opérateurs Logiques

Écrivez un programme JavaScript qui demande l'âge et le statut d'une personne, puis indique si elle remplit les conditions d'accès à une activité en utilisant `&&`, `||` et `!`.
