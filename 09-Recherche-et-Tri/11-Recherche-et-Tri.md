## Exercices sur les Algorithmes de Tri et de Recherche

## Algorithmes de Tri

### Challenge 1 : Tri à Bulles

Écrivez un programme JavaScript qui implémente l'algorithme de tri à bulles pour trier un tableau d'entiers. Affichez le tableau avant et après le tri.

<solution>
### Étapes de résolution

Le **tri à bulles** (Bubble Sort) compare chaque élément adjacent et les échange s'ils sont dans le mauvais ordre.

1.  **Tableau de départ** : Créer un tableau désordonné.
2.  **Double boucle** : On utilise deux boucles imbriquées.
    - La première (externe) permet de passer sur tout le tableau plusieurs fois.
    - La deuxième (interne) compare l'élément actuel avec le suivant.
3.  **L'échange** : Si l'élément actuel est plus grand que le suivant, on les inverse grâce à une variable temporaire.
4.  **Affichage** : Afficher le tableau avant et après le tri.

**Code :**
```javascript
let nombres = [34, 12, 5, 9, 42, 1];
console.log("Avant le tri : " + nombres.join(", "));

// Boucle externe : nombre de passages
for (let i = 0; i < nombres.length - 1; i++) {
    // Boucle interne : comparaison des éléments
    for (let j = 0; j < nombres.length - 1 - i; j++) {
        // Si l'élément de gauche est plus grand que celui de droite
        if (nombres[j] > nombres[j + 1]) {
            // On échange (Swap)
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
        }
    }
}

console.log("Après le tri : " + nombres.join(", "));
```
</solution>

### Challenge 2 : Tri par Insertion

Écrivez un programme JavaScript qui implémente l'algorithme de tri par insertion pour trier un tableau d'entiers. Affichez le tableau avant et après le tri.

<solution>
### Étapes de résolution

Le **tri par insertion** (Insertion Sort) construit le tableau trié un élément à la fois, en l'insérant à sa place correcte parmi les éléments déjà triés.

1.  **Boucle principale** : On commence à partir du deuxième élément (`i = 1`), car le premier est déjà considéré comme trié.
2.  **Sélection** : On sauvegarde l'élément actuel dans une variable `cle`.
3.  **Boucle interne (recul)** : On utilise une boucle `while` pour remonter en arrière dans la partie triée du tableau. Tant que l'élément testé est plus grand que `cle`, on le décale d'une case vers la droite.
4.  **Insertion** : Une fois la bonne place trouvée, on y place `cle`.

**Code :**
```javascript
let nombres = [8, 3, 5, 1, 9, 2];
console.log("Avant le tri : " + nombres.join(", "));

// On commence au 2ème élément (index 1)
for (let i = 1; i < nombres.length; i++) {
    let cle = nombres[i]; // L'élément à insérer
    let j = i - 1;

    // On recule et on décale les éléments plus grands que la clé
    while (j >= 0 && nombres[j] > cle) {
        nombres[j + 1] = nombres[j];
        j--; // On passe au précédent
    }
    
    // On insère la clé à sa position correcte
    nombres[j + 1] = cle;
}

console.log("Après le tri : " + nombres.join(", "));
```
</solution>

### Challenge 3 : Tri par Sélection

Écrivez un programme JavaScript qui implémente l'algorithme de tri par sélection pour trier un tableau d'entiers. Affichez le tableau avant et après le tri.

### Challenge 4 : Tri Rapide

Écrivez un programme JavaScript qui implémente l'algorithme de tri rapide pour trier un tableau d'entiers. Affichez le tableau avant et après le tri.

### Challenge 5 : Tri Fusion

Écrivez un programme JavaScript qui implémente l'algorithme de tri fusion pour trier un tableau d'entiers. Affichez le tableau avant et après le tri.

### Challenge 6 : Tri Par Comptage

Écrivez un programme JavaScript qui implémente l'algorithme de tri par comptage pour trier un tableau d'entiers. Assurez-vous que les valeurs sont dans une plage prédéfinie. Affichez le tableau avant et après le tri.

### Challenge 7 : Tri et Recherche de Sous-tableau

Écrivez un programme JavaScript qui utilise un algorithme de tri rapide pour trier un tableau d'entiers, puis implémente une recherche binaire pour trouver un sous-tableau trié donné.

## Exercices sur les Algorithmes de Recherche

### Challenge 1 : Recherche Linéaire

Écrivez un programme JavaScript qui implémente l'algorithme de recherche linéaire pour trouver un élément dans un tableau d'entiers. Affichez si l'élément est trouvé ou non.

### Challenge 2 : Recherche Binaire

Écrivez un programme JavaScript qui implémente l'algorithme de recherche binaire pour trouver un élément dans un tableau d'entiers trié. Affichez l'index de l'élément recherché ou un message indiquant que l'élément n'est pas trouvé.

### Challenge 3 : Recherche de l'Élément Minimum

Écrivez un programme JavaScript qui utilise une recherche linéaire pour trouver le minimum dans un tableau d'entiers. Affichez la valeur minimale et son index.

### Challenge 4 : Recherche de l'Élément Maximum

Écrivez un programme JavaScript qui utilise une recherche linéaire pour trouver le maximum dans un tableau d'entiers. Affichez la valeur maximale et son index.

### Challenge 5 : Recherche d'une Sous-chaîne

Écrivez un programme JavaScript qui utilise la recherche linéaire pour trouver une sous-chaîne dans une chaîne de caractères. Affichez l'index de la première occurrence de la sous-chaîne ou un message indiquant que la sous-chaîne n'est pas trouvée.

### Challenge 6 : Recherche de Duplication

Écrivez un programme JavaScript qui implémente une recherche linéaire pour vérifier si un tableau d'entiers contient des doublons. Affichez un message indiquant s'il y a des doublons ou non.

### Challenge 7 : Recherche Binaire sur une Liste Chaînée

Écrivez un programme JavaScript qui implémente une recherche binaire sur une liste chaînée triée. Affichez l'index de l'élément recherché ou un message indiquant que l'élément n'est pas trouvé.

### Challenge 8 : Recherche de Mot dans un Texte

Écrivez un programme JavaScript qui utilise la recherche de sous-chaîne pour trouver la première occurrence d'un mot dans un texte donné. Affichez la position de la première occurrence ou un message indiquant que le mot n'est pas trouvé.

