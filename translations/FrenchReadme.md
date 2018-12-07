# gci18.fossasia.org
FOSSASIA Google Code-In Website 2018
[gci18.fossasia.org](https://gci18.fossasia.org)

Ceci est le référentiel du site web de FOSSASIA pour Google Code-In 2018,Chez FOSSASIA, nous avons l’intention de le développer en collaboration au cours de ce concours par les étudiants participants. Déchiffrez le référentiel avant d'effectuer des modifications et assurez-vous de lire [FOSSASIA Best Practices](https://blog.fossasia.org/open-source-developer-guide-and-best-practices-at-fossasia/)

## Communication

- S'il vous plaît rejoindre notre **[mailing list](https://groups.google.com/forum/#!forum/fossasia)** discuter des questions concernant le projet.

  > https://groups.google.com/forum/#!forum/fossasia

- Notre canal de discussion est sur **[Gitter](https://gitter.im/fossasia/gci16.fossasia.org)**

  > [gitter.im/fossasia/gci16.fossasia.org](https://gitter.im/fossasia/gci16.fossasia.org)

## Ce que vous devez savoir avant de contribuer:
- Toutes les demandes d'extraction doivent être associées à un problème.
- Tous les RP doivent être attribués à la personne qui y travaille.
- Si un problème ne peut pas être résolu en moins d'une journée, il doit être divisé en plusieurs problèmes.
- Faites des requêtes d'extraction depuis vos propres fourchettes (même si vous avez des droits en écriture sur le référentiel, ne créez pas de nouvelles branches, développez sur vos propres branches).
- Indiquez le changement ou l'amélioration dans le message de validation des PR (ne vous contentez pas d'indiquer «Résolution du problème n ° 123»).
- Ajoutez le numéro du problème dans la description (cela accélère les révisions, les relecteurs pouvant simplement cliquer pour obtenir plus d’informations sur le problème).
- Écrire des messages clairs et significatifs de git commit (Lire http://chris.beams.io/posts/git-commit/).
- Faites correspondre les demandes d'extraction avec les problèmes et assurez-vous que la description de celles-ci contient les références de mot-clé spéciales de GitHub qui clôturent automatiquement le problème associé lorsque la demande d'extraction est fusionnée. (Plus d'infos sur https://github.com/blog/1506-closing-issues-via-pull-requests).
- Lorsque vous apportez des modifications très mineures à une demande d'extraction de votre part (par exemple, en corrigeant une construction de travis défaillante ou quelques corrections de style mineures ou des modifications mineures demandées par les réviseurs), assurez-vous de réduire ensuite vos commits de manière à ne pas avoir un nombre absurde. des commits pour un très petit correctif (apprendre à écraser àhttps://davidwalsh.name/squash-commits-git).
- Ajoutez une capture d'écran si vous avez modifié quoi que ce soit dans l'interface utilisateur d'un projet. Lorsque vous soumettez une demande d'extraction pour un problème lié à l'interface utilisateur, ajoutez une capture d'écran de votre modification ou un lien vers un déploiement où il peut être testé avec votre demande d'extraction. Cela facilite beaucoup les choses pour les examinateurs et aide à accélérer le processus. Vous obtiendrez également des critiques plus rapidement.
-Ajoutez un lien vers votre déploiement du projet, où les réviseurs peuvent vérifier ce que vous avez modifié (en particulier pour les modifications plus petites, cela est très utile car il se peut que le réviseur n'ait même pas besoin de configurer le système et de le tester. processus de révision beaucoup).
- Assurez-vous toujours que le CI et les tests sont réussis.
- Aide à la résolution des conflits de fusion (en particulier s'il existe plusieurs RP simultanément, les conflits de fusion sont courants. Aidez les réviseurs et résolvez les conflits de fusion pour accélérer le processus.).
- Les demandes d'attraction de fusion ne doivent se produire que si au moins deux contributeurs ont examiné le PR et l'ont approuvé.

## Comment courir localement?
- Il est facile de fonctionner localement. N'aie pas peur! :D
- Si vous avez déjà installé Git, ignorez l’étape 3. Si vous avez cloné votre fork, ignorez les étapes 4 et 5. 
1. Tout d'abord, vous devez remplir certaines conditions. Installez-les si vous n'avez pas de choses dans [this documentation](https://jekyllrb.com/docs/installation/).
2. Ouvrez votre terminal et installez jekyll `gem install jekyll bundler`.
3. Téléchargez et installez git sur votre ordinateur.
4. Aller à [gci18.fossasia.org site](https://github.com/fossasia/gci18.fossasia.org) faites une fourchette si vous ne l'avez pas déjà fait.
5. Ouvrez Git Bash et clonez votre référentiel dans votre ordinateur. `git clone https://github.com/<_your-name-here_>/gci18.fossasia.org`.
6. Allez à l'intérieur de votre dépôt cloné et ouvrez Git Bash.(Si vous avez fait la 5ème étape faites ceci `cd gci18.fossasia.org`).
7. Type `bundle install` installer des dépendances.
8. Type `bundle exec jekyll serve`. 
9. Vous verrez une adresse de serveur. Pour voir le site gci18.fossasia.org, allez à `localhost:4000` depuis votre navigateur préféré.

- Maintenant, le travail est terminé.

## Comment ajouter votre photo Nick sur le site:
- Choisissez une photo(ou représentation comme une image "pseudo") et définir la taille à 240x240 px
- Téléchargez votre photo sur le img/students dossier, avec un nom acceptable :)
- Ajoutez-vous à la _data/students.yml fichier comme indiqué ci-dessous
```yaml
- name: Nom de l'étudiant
  github: Nom d'utilisateur Github de l'étudiant
  image: Votre image (ou représentation comme une image "nick") - le nom doit correspondre à celui que vous avez chargé dans le dossier
```

## Comment ajouter un mentor au site Web:
- Choisissez un mentor actuel de GCI et demandez la permission avant de l'ajouter.
- Demandez une photo ou prenez-la dans github et définissez la taille sur 240x240 px
-Téléchargez la photo sur le img/mentors dossier - avec un nom approprié
- Ajouter le mentor au _data/metors.yml fichier comme indiqué ci-dessous
```yaml
- name: Nom du mentor
  github: Lien github du mentor
  img: Img de mentor
  
```

## Comment ajouter un marqueur de position sur la carte
**Lieu de l'étudiant:**
- Obtenez vos coordonnées géographiques en utilisant un [geolocation finder](https://fossasia.github.io/geolocation/) (si vous ne voulez pas fournir vos coordonnées exactes, vous pouvez utiliser [this one](https://www.latlong.net/) obtenir les coordonnées générales de votre ville ou pays) 
- Copiez vos latitude et longitude et collez-les dans les lignes respectives de votre profil d’étudiant dans _data/students.yml file
```yaml
  lat: votre latitude
  lng: votre longitude 
```
- Le marqueur doit apparaître à l’emplacement donné, avec votre nom / pseudo que vous avez fourni dans votre profil d’étudiant

**Lieu de mentor:**
- Choisissez un mentor de GCI et contactez-le pour lui demander sa permission avant d'ajouter sa position
- Demander au mentor ses coordonnées (latitude et longitude)
- Collez leurs latitude et longitude et collez-les dans les lignes respectives de leur profil de mentor dans _data/mentors.yml file
```yaml
  lat: latitude du mentor
  lng: longitude du mentor
```
- Le marqueur doit apparaître à l'emplacement indiqué et contenir le nom du mentor.

## Comment ajouter un nouveau projet au site Web
-  Choisissez un projet FOSSASIA

- Demandez une photo ou prenez-la dans github et définissez la taille sur 1366x566 px
- Téléchargez la photo sur le img folder - avec un nom approprié
- Ajouter le projet à la _data/orgprojects.yml fichier comme indiqué ci-dessous

```yaml
- title: Nom du projet
  img: Capture d'écran du projet
  desc: Description du projet
  github: Lien du projet github
  try: URL où le projet est hébergé 
```

## Comment ajouter votre vidéo à la section Vidéos:
- Faites votre vidéo, vous pouvez rechercher un logiciel de montage vidéo open source
- Une fois votre vidéo prête, postez-la sur votre chaîne YouTube. (if don't have one - create it!)
- Après avoir téléchargé la vidéo sur votre chaîne, ajoutez-la à la _data/videos.yml fichier comme indiqué ci-dessous:

```yaml
- name: Titre que vous voulez voir apparaître sur le site Web gci18.fossasia.org (il est recommandé d'utiliser le même titre que le titre youtube de la vidéo, mais vous pouvez en choisir un autre)
  id: The YouTube ID of your video , it's the 11 characters after the v= in your video's link (e.g. for this link: https://www.youtube.com/watch?v=NFCcqIq84UI the id is: NFCcqIq84UI )
  user: Votre nom qui sera affiché sur la page
```
Note: Votre vidéo doit être téléchargée après le 1er janvier 2018 pour s'afficher correctement sur la page gci18.fossasia.org.

## Comment ajouter une langue à la section Merci:
- Choisissez une langue (probablement une langue que vous connaissez bien)
- Choisissez la phrase "Merci pour vos contributions" ou "Merci pour votre contribution" et traduisez-la
- Ajouter la traduction au `var items = [];` dans le js/thankyou.js file

## Available Gradients
- `gradient-pink-light` =  #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%
<img src="https://webgradients.com/public/webgradients_png/001%20Warm%20Flame.png"
     alt="Warm Flame"
     width = 100%
     height= 50px/>
- `gradient-pink` = #ff758c, #ff7eb3
<img src="https://webgradients.com/public/webgradients_png/080%20Passionate%20Bed.png"
     alt="Ripe Malinka"
     width= 100%
     height= 50px/>
- `gradient-cyan-light` = #84fab0 0%, #8fd3f4 100%
<img src="https://webgradients.com/public/webgradients_png/012%20Tempting%20Azure.png"
     alt="Tempting Azure"
     width = 100%
     height= 50px/>
- `gradient-cyan` = #43e97b 0%, #38f9d7 100%
<img src="https://webgradients.com/public/webgradients_png/020%20New%20Life.png"
     alt="New Life"
     width= 100%
     height= 50px/>
- `gradient-blue-light` = #a1c4fd 0%, #c2e9fb 100%
<img src="https://webgradients.com/public/webgradients_png/010%20Winter%20Neva.png"
     alt="Winter Neva"
     width= 100%
     height = 50px/>
- `gradient-blue` = #4facfe,#00f2fe
<img src="https://webgradients.com/public/webgradients_png/019%20Malibu%20Beach.png"
     alt="Malibu Beach"
     width= 100%
     height = 50px />
- `gradient-multi-cool` =  #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%
<img src="https://webgradients.com/public/webgradients_png/152%20Sea%20Lord.png"
     alt="Sea Lord"
     width= 100%
     height = 100px />
- `gradient-multi-hot` = #FFE29F 0%, #FFA99F 48%, #FF719A 100%
<img src="https://webgradients.com/public/webgradients_png/158%20Angel%20Care.png"
     alt="Angel Care"
     width= 100%
     height = 100px />
