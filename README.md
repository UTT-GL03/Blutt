# Réduction de l'impact numérique d'un service numérique de covoiturage quotidien.

## Choix du sujet

Une portion non négligeable d'étudiants ont une voiture, et l'utilisent pour aller en cours. Les applications de covoiturage journaliers gagnent en popularité avec par exemple BlaBlaCar daily ou bien Karos (surtout dans le cadre de l'UTT où les trajets Karos sont remboursés par le département de l'Aube). Il nous semble utile de contribuer à cet essor des applications de covoiturage en proposant une application qui non seulement permet à ses utilisateurs de partager leurs trajets, mais est aussi soucieuse de l'impact environnemental de ses services numériques.

## Utilité sociale

En 2017, 74% des actifs en emploi qui déclarent se déplacer pour rejoindre leur lieu de travail utilisent leur voiture ([source : Insee](<https://www.insee.fr/fr/statistiques/5013868#:~:text=La%20voiture%20est%20le%20mode%20de%20transport%20privil%C3%A9gi%C3%A9%20pour%20aller,de%20personnes%20(figure%201).>)). De plus, Sur plus d’un million de véhicules passés au crible de mai à juin 2022 sur 13 axes autoroutiers, **14,8 % seulement contenaient plus d’une personne, contre 17,4 % en 2021** ([source: roole.fr](https://media.roole.fr/transition/nouveaux-usages/autosolisme-85-des-francais-se-deplacent-seuls-en-voiture)) L'objectif est donc d'essayer de maximiser les trajets en voiture avec des passagers, en proposant aux conducteurs de prendre des passagers sur leur chemin en échange de rémunération. Augmenter le nombre de passagers moyens par voiture présente de multiples avantages sociaux et environnementaux, notamment :

- Les coûts d'opération de la voiture (essence, maintenance, assurance) sont réduits pour le conducteur.
- Les personnes sans voiture peuvent profiter de déplacements en voiture, qui peuvent être plus pratiques que les transports en communs ou les mobilités douces comme le vélo.
- Le nombre total de voitures est réduit (deux personnes avec voiture peuvent choisir de covoiturer)

## Effets de la numérisation

De nos jours, la compétition dans le secteur des applications mobiles est rude et les fournisseurs d'application rivalisent de nouvelles fonctionnalités afin de gagner une place dans le téléphone des utilisateurs. Cette course aux fonctionnalités mène bien souvent à une grande augmentation des impacts environnementaux de l'activité de ces applications, on le voit par exemple avec la multiplication des fonctionnalités d'intelligence artificielle dans toutes les applications. D'après les chercheurs d'Open IA, la puissance de calcul requise pour l'entraînement des nouveaux modèles d'IA a doublé tout les 3.4 mois depuis 2012 ([source: earth.org](https://earth.org/the-green-dilemma-can-ai-fulfil-its-potential-without-harming-the-environment/)). Dans notre cas, nous cherchons donc à développer le minimum de fonctionnalités requises pour permettre au utilisateurs de Blutt de covoiturer correctement, tout en proposant une expérience utilisateur intuitive et agréable.

Les critères pour le développement sont les suivants :

- L'application ne doit pas chercher à remplacer des fonctionnalités déjà fournies par d'autre applications plus établies (exemple : pas de carte interactive, pas de fonctionnalité de messages intégrée...)
- L'application ne doit pas mener à une augmentation de l'usage de la voiture. Les trajets sur une distance aisément parcourue à pied doivent être découragés.
- L'impact général des systèmes numériques de l'application doit être le plus faible possible : pas d'intelligence artificielle pour faciliter les interactions ou d'algorithmes coûteux pour calculer les routes optimales.
