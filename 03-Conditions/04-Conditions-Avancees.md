## Exercices sur les Conditions

### Challenge 1 : Évaluation d'un Prêt

Écrivez un programme JavaScript qui évalue l'éligibilité pour un prêt en fonction de :
- Revenu annuel (en euros)
- Score de crédit (sur 1000)
- Durée du prêt (en années)

Les conditions pour l'éligibilité sont :
- Revenu >= 30 000 € et Score de crédit >= 700 et Durée du prêt <= 10 ans : Éligible
- Revenu >= 30 000 € et Score de crédit >= 650 et Durée du prêt <= 15 ans : Éligible avec conditions
- Revenu < 30 000 € ou Score de crédit < 650 ou Durée du prêt > 15 ans : Non éligible

Affichez un message en fonction de l'éligibilité.

<solution>
### Étapes de résolution

1.  **Récupérer les données** : Utiliser `prompt()` et `parseFloat()` pour recueillir les 3 critères (revenu, score, durée).
2.  **Tester les conditions** : Un bloc `if...else if...else` est parfait pour ce genre de test en cascade. 
    On commence par la condition la plus stricte, puis la condition moyenne.
    On utilise l'opérateur ET logique (`&&`) puisque TOUTES les conditions doivent être vraies en même temps.
3.  **Affichage** : Afficher le statut d'éligibilité.

**Code :**
```javascript
// 1. Récupération des informations
let revenu = parseFloat(prompt("Quel est votre revenu annuel ?"));
let score = parseInt(prompt("Quel est votre score de crédit (sur 1000) ?"));
let duree = parseInt(prompt("Quelle est la durée du prêt (en années) ?"));

// 2 & 3. Évaluation de l'éligibilité avec if / else if / else
if (revenu >= 30000 && score >= 700 && duree <= 10) {
    console.log("Statut : Éligible");
} 
else if (revenu >= 30000 && score >= 650 && duree <= 15) {
    console.log("Statut : Éligible avec conditions");
} 
else {
    // Si les deux premières conditions ne sont pas respectées, le prêt est refusé
    console.log("Statut : Non éligible");
}
```
</solution>

### Challenge 2 : Calcul de Prime d'Assurance Auto

Écrivez un programme JavaScript pour calculer la prime d'assurance d'une voiture en fonction de :
- Âge du conducteur (en années)
- Type de voiture (1 pour sportive, 2 pour utilitaire, 3 pour familiale)
- Nombre d'accidents au cours des 5 dernières années

Les règles de calcul sont :
- Conducteur de moins de 25 ans : Prime de base * 1.5
- Conducteur de 25 à 65 ans : Prime de base
- Conducteur de plus de 65 ans : Prime de base * 1.2
- Type de voiture sportive : Prime * 2
- Type de voiture utilitaire : Prime * 1.2
- Type de voiture familiale : Prime * 1.1
- Nombre d'accidents > 1 : Ajoutez 30% à la prime

<solution>
### Étapes de résolution

1.  **Saisie des données et initialisation** : Demander les informations et définir une prime de base fixe (ex: 500€).
2.  **Multiplicateur d'Âge** : On vérifie l'âge avec `if...else if...else` et on met à jour la prime en conséquence.
3.  **Multiplicateur de Véhicule** : On utilise un `switch` ou un `if` pour multiplier la prime selon le type de voiture choisi (1, 2 ou 3).
4.  **Malus d'Accidents** : S'il y a plus de 1 accident, on ajoute 30% (`prime = prime * 1.3`).
5.  **Affichage** : Afficher la prime finale.

**Code :**
```javascript
// 1. Déclarations
let primeDeBase = 500; // on part d'une base de 500€
let age = parseInt(prompt("Âge du conducteur :"));
let type = parseInt(prompt("Type (1: sportive, 2: utilitaire, 3: familiale) :"));
let accidents = parseInt(prompt("Nombre d'accidents (5 dernières années) :"));

// 2. Calcul selon l'âge
if (age < 25) {
    primeDeBase *= 1.5;
} else if (age > 65) {
    primeDeBase *= 1.2;
} // si entre 25 et 65, on ne change rien

// 3. Calcul selon le type
if (type === 1) {
    primeDeBase *= 2;
} else if (type === 2) {
    primeDeBase *= 1.2;
} else if (type === 3) {
    primeDeBase *= 1.1;
}

// 4. Calcul des accidents
if (accidents > 1) {
    primeDeBase *= 1.3; // +30%
}

// 5. Résultat
console.log(`Votre prime d'assurance sera de : ${primeDeBase} €`);
```
</solution>

### Challenge 3 : Gestion des Congés

Écrivez un programme JavaScript pour déterminer les jours de congé restant en fonction de :
- Nombre total de jours de congés accordés
- Nombre de jours de congés utilisés
- Statut de l'employé (0 pour temps partiel, 1 pour temps plein)

Les règles de gestion sont :
- Temps plein : Jours restants = Jours accordés - Jours utilisés
- Temps partiel : Jours restants = (Jours accordés / 2) - Jours utilisés
- Si les jours utilisés dépassent les jours accordés, affichez un message d'alerte.

### Challenge 4 : Évaluation de Performance d'Employé

Écrivez un programme JavaScript pour évaluer la performance d'un employé en fonction de :
- Score de performance (de 0 à 100)
- Ancienneté (en années)
- Récompenses reçues (0 pour aucune, 1 pour une, 2 pour deux ou plus)

Les évaluations sont :
- Score >= 90 et Ancienneté >= 5 ans : Excellente
- Score >= 75 et Ancienneté >= 3 ans : Bonne
- Score >= 50 et Ancienneté < 3 ans : Satisfaisante
- Score < 50 : Insuffisante
- Ajoutez un bonus si des récompenses ont été reçues : 10% pour une récompense, 20% pour deux ou plus.

### Challenge 5 : Planification de Voyage

Écrivez un programme JavaScript pour planifier un voyage en fonction de :
- Budget (en euros)
- Destination (1 pour plage, 2 pour montagne, 3 pour ville)
- Nombre de personnes

Les recommandations sont :
- Budget >= 1000 € : Voyage haut de gamme
- Budget entre 500 € et 1000 € : Voyage moyen
- Budget < 500 € : Voyage économique

Les destinations recommandées sont :
- Plage pour un budget >= 1000 € et > 2 personnes
- Montagne pour un budget >= 500 € et <= 2 personnes
- Ville pour tout budget et nombre de personnes

### Challenge 6 : Calcul de la Facture d'Électricité

Écrivez un programme JavaScript pour calculer la facture d'électricité en fonction de :
- Consommation d'électricité (en kWh)
- Type d'utilisateur (1 pour résidentiel, 2 pour commercial)
- Type de contrat (0 pour standard, 1 pour réduit)

Les tarifs sont :
- Résidentiel : 0,20 €/kWh pour contrat standard, 0,15 €/kWh pour contrat réduit
- Commercial : 0,30 €/kWh pour contrat standard, 0,25 €/kWh pour contrat réduit
- Ajoutez un supplément de 10% si la consommation dépasse 500 kWh.

### Challenge 7 : Calcul des Impôts

Écrivez un programme JavaScript pour calculer les impôts à payer en fonction de :
- Revenu annuel (en euros)
- Statut fiscal (1 pour célibataire, 2 pour marié, 3 pour chef de famille)
- Déductions (en euros)

Les tranches d'imposition sont :
- Revenu <= 20 000 € : 5%
- Revenu > 20 000 € et <= 50 000 € : 10%
- Revenu > 50 000 € : 20%

Les déductions sont :
- Célibataire : Déduction de 1 000 €
- Marié : Déduction de 2 000 €
- Chef de famille : Déduction de 3 000 €

### Challenge 8 : Plan de Santé

Écrivez un programme JavaScript pour déterminer le plan de santé en fonction de :
- Âge
- Historique médical (0 pour aucun problème, 1 pour problème mineur, 2 pour problème majeur)
- Type de couverture (1 pour de base, 2 pour étendue)

Les options de plan sont :
- Âge < 30 ans : Plan de base
- Âge >= 30 ans et Historique médical = 0 : Plan de base
- Âge >= 30 ans et Historique médical >= 1 : Plan étendu
- Ajoutez une couverture supplémentaire pour les problèmes majeurs.

### Challenge 9 : Calcul du Salaire avec Primes

Écrivez un programme JavaScript pour calculer le salaire d'un employé en fonction de :
- Salaire de base (en euros)
- Nombre d'heures supplémentaires
- Type de poste (1 pour junior, 2 pour senior)

Les règles de calcul sont :
- Heures supplémentaires : 1,5 fois le taux horaire
- Prime pour poste senior : 20% du salaire de base
- Prime pour poste junior : 10% du salaire de base

### Challenge 10 : Plan de Retraite avec Épargne

Écrivez un programme JavaScript pour déterminer le plan de retraite en fonction de :
- Âge
- Années de cotisation
- Montant total épargné (en euros)

Les plans sont :
- Âge >= 65 ans et Années de cotisation >= 30 ans et Montant >= 100 000 € : Plan complet avec pension élevée
- Âge >= 65 ans et Années de cotisation >= 20 ans et Montant >= 50 000 € : Plan partiel avec pension moyenne
- Âge < 65 ans : Plan épargne non encore disponible
- Ajoutez un bonus de 5% pour chaque tranche de 10 000 € au-delà de 50 000 € épargnés.
