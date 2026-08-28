## Exercices sur les Conditions

### Challenge 1 : �valuation d'un Pr�t

�crivez un programme JavaScript qui �value l'�ligibilit� pour un pr�t en fonction de :
- Revenu annuel (en euros)
- Score de cr�dit (sur 1000)
- Dur�e du pr�t (en ann�es)

Les conditions pour l'�ligibilit� sont :
- Revenu >= 30 000 � et Score de cr�dit >= 700 et Dur�e du pr�t <= 10 ans : �ligible
- Revenu >= 30 000 � et Score de cr�dit >= 650 et Dur�e du pr�t <= 15 ans : �ligible avec conditions
- Revenu < 30 000 � ou Score de cr�dit < 650 ou Dur�e du pr�t > 15 ans : Non �ligible

Affichez un message en fonction de l'�ligibilit�.

### Challenge 2 : Calcul de Prime d'Assurance Auto

�crivez un programme JavaScript pour calculer la prime d'assurance d'une voiture en fonction de :
- �ge du conducteur (en ann�es)
- Type de voiture (1 pour sportive, 2 pour utilitaire, 3 pour familiale)
- Nombre d'accidents au cours des 5 derni�res ann�es

Les r�gles de calcul sont :
- Conducteur de moins de 25 ans : Prime de base * 1.5
- Conducteur de 25 � 65 ans : Prime de base
- Conducteur de plus de 65 ans : Prime de base * 1.2
- Type de voiture sportive : Prime * 2
- Type de voiture utilitaire : Prime * 1.2
- Type de voiture familiale : Prime * 1.1
- Nombre d'accidents > 1 : Ajoutez 30% � la prime

### Challenge 3 : Gestion des Cong�s

�crivez un programme JavaScript pour d�terminer les jours de cong� restant en fonction de :
- Nombre total de jours de cong�s accord�s
- Nombre de jours de cong�s utilis�s
- Statut de l'employ� (0 pour temps partiel, 1 pour temps plein)

Les r�gles de gestion sont :
- Temps plein : Jours restants = Jours accord�s - Jours utilis�s
- Temps partiel : Jours restants = (Jours accord�s / 2) - Jours utilis�s
- Si les jours utilis�s d�passent les jours accord�s, affichez un message d'alerte.

### Challenge 4 : �valuation de Performance d'Employ�

�crivez un programme JavaScript pour �valuer la performance d'un employ� en fonction de :
- Score de performance (de 0 � 100)
- Anciennet� (en ann�es)
- R�compenses re�ues (0 pour aucune, 1 pour une, 2 pour deux ou plus)

Les �valuations sont :
- Score >= 90 et Anciennet� >= 5 ans : Excellente
- Score >= 75 et Anciennet� >= 3 ans : Bonne
- Score >= 50 et Anciennet� < 3 ans : Satisfaisante
- Score < 50 : Insuffisante
- Ajoutez un bonus si des r�compenses ont �t� re�ues : 10% pour une r�compense, 20% pour deux ou plus.

### Challenge 5 : Planification de Voyage

�crivez un programme JavaScript pour planifier un voyage en fonction de :
- Budget (en euros)
- Destination (1 pour plage, 2 pour montagne, 3 pour ville)
- Nombre de personnes

Les recommandations sont :
- Budget >= 1000 � : Voyage haut de gamme
- Budget entre 500 � et 1000 � : Voyage moyen
- Budget < 500 � : Voyage �conomique

Les destinations recommand�es sont :
- Plage pour un budget >= 1000 � et > 2 personnes
- Montagne pour un budget >= 500 � et <= 2 personnes
- Ville pour tout budget et nombre de personnes

### Challenge 6 : Calcul de la Facture d'�lectricit�

�crivez un programme JavaScript pour calculer la facture d'�lectricit� en fonction de :
- Consommation d'�lectricit� (en kWh)
- Type d'utilisateur (1 pour r�sidentiel, 2 pour commercial)
- Type de contrat (0 pour standard, 1 pour r�duit)

Les tarifs sont :
- R�sidentiel : 0,20 �/kWh pour contrat standard, 0,15 �/kWh pour contrat r�duit
- Commercial : 0,30 �/kWh pour contrat standard, 0,25 �/kWh pour contrat r�duit
- Ajoutez un suppl�ment de 10% si la consommation d�passe 500 kWh.

### Challenge 7 : Calcul des Imp�ts

�crivez un programme JavaScript pour calculer les imp�ts � payer en fonction de :
- Revenu annuel (en euros)
- Statut fiscal (1 pour c�libataire, 2 pour mari�, 3 pour chef de famille)
- D�ductions (en euros)

Les tranches d'imposition sont :
- Revenu <= 20 000 � : 5%
- Revenu > 20 000 � et <= 50 000 � : 10%
- Revenu > 50 000 � : 20%

Les d�ductions sont :
- C�libataire : D�duction de 1 000 �
- Mari� : D�duction de 2 000 �
- Chef de famille : D�duction de 3 000 �

### Challenge 8 : Plan de Sant�

�crivez un programme JavaScript pour d�terminer le plan de sant� en fonction de :
- �ge
- Historique m�dical (0 pour aucun probl�me, 1 pour probl�me mineur, 2 pour probl�me majeur)
- Type de couverture (1 pour de base, 2 pour �tendue)

Les options de plan sont :
- �ge < 30 ans : Plan de base
- �ge >= 30 ans et Historique m�dical = 0 : Plan de base
- �ge >= 30 ans et Historique m�dical >= 1 : Plan �tendu
- Ajoutez une couverture suppl�mentaire pour les probl�mes majeurs.

### Challenge 9 : Calcul du Salaire avec Primes

�crivez un programme JavaScript pour calculer le salaire d'un employ� en fonction de :
- Salaire de base (en euros)
- Nombre d'heures suppl�mentaires
- Type de poste (1 pour junior, 2 pour senior)

Les r�gles de calcul sont :
- Heures suppl�mentaires : 1,5 fois le taux horaire
- Prime pour poste senior : 20% du salaire de base
- Prime pour poste junior : 10% du salaire de base

### Challenge 10 : Plan de Retraite avec �pargne

�crivez un programme JavaScript pour d�terminer le plan de retraite en fonction de :
- �ge
- Ann�es de cotisation
- Montant total �pargn� (en euros)

Les plans sont :
- �ge >= 65 ans et Ann�es de cotisation >= 30 ans et Montant >= 100 000 � : Plan complet avec pension �lev�e
- �ge >= 65 ans et Ann�es de cotisation >= 20 ans et Montant >= 50 000 � : Plan partiel avec pension moyenne
- �ge < 65 ans : Plan �pargne non encore disponible
- Ajoutez un bonus de 5% pour chaque tranche de 10 000 � au-del� de 50 000 � �pargn�s.
