## Exercices sur les Objets en JavaScript

### Challenge 1 : Création et Utilisation d'un Objet

Écrivez un programme JavaScript qui crée un objet pour représenter une personne avec les propriétés `nom`, `prenom` et `age`. Attribuez des valeurs aux propriétés et affichez-les.

<solution>
### Étapes de résolution

1.  **Création de l'objet** : Déclarer une variable et utiliser les accolades `{}` pour définir un objet littéral.
2.  **Propriétés** : À l'intérieur, définir les paires clé-valeur séparées par des virgules (ex: `nom: "Dupont"`).
3.  **Affichage** : Utiliser la syntaxe par point (ex: `objet.propriete`) pour lire et afficher chaque valeur.

**Code :**
```javascript
// 1 et 2. Création de l'objet
let personne = {
    nom: "Dupont",
    prenom: "Jean",
    age: 30
};

// 3. Affichage
console.log("Informations de la personne :");
console.log(`Nom : ${personne.nom}`);
console.log(`Prénom : ${personne.prenom}`);
console.log(`Âge : ${personne.age} ans`);
```
</solution>

### Challenge 2 : Objet avec Tableau

Écrivez un programme JavaScript qui crée un objet pour représenter un étudiant avec les propriétés `nom`, `prenom` et un tableau de notes. Attribuez des valeurs aux propriétés et aux notes, puis affichez les informations de l'étudiant.

<solution>
### Étapes de résolution

1.  **Création de l'objet** : Créer l'objet avec des clés simples et une clé `notes` qui contiendra un tableau `[]`.
2.  **Affichage classique** : Afficher le nom et le prénom de l'étudiant avec `etudiant.nom`.
3.  **Affichage du tableau** : Utiliser `etudiant.notes` pour accéder au tableau de notes. On peut l'afficher directement, ou utiliser `.join(", ")` pour faire joli.

**Code :**
```javascript
// 1. Création de l'objet étudiant
let etudiant = {
    nom: "Martin",
    prenom: "Sophie",
    notes: [14, 16, 12, 18, 15] // La valeur est un tableau !
};

// 2. Affichage des infos de base
console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);

// 3. Accéder et afficher le tableau
console.log("Liste des notes : " + etudiant.notes.join(", "));

// Bonus : Calculer la moyenne
let somme = 0;
for (let note of etudiant.notes) {
    somme += note;
}
let moyenne = somme / etudiant.notes.length;
console.log(`Moyenne : ${moyenne}`);
```
</solution>

### Challenge 3 : Passage d'un Objet en Argument

Écrivez un programme JavaScript qui crée un objet pour représenter un rectangle avec les propriétés `longueur` et `largeur`. Écrivez une fonction qui prend cet objet en argument et calcule l'aire du rectangle. Affichez l'aire.

### Challenge 4 : Modification des Propriétés d'un Objet

Écrivez un programme JavaScript qui crée un objet pour représenter un point dans un plan avec les propriétés `x` et `y`. Modifiez directement les valeurs de ses propriétés, puis affichez les valeurs du point.

### Challenge 5 : Objet et Fonction de Retour

Écrivez un programme JavaScript qui crée un objet pour représenter un livre avec les propriétés `titre`, `auteur` et `année`. Écrivez une fonction qui retourne un objet initialisé avec des valeurs données. Affichez les informations du livre.
