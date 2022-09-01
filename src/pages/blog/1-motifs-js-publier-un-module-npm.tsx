import React from "react";
import Layout from "../../components/Layout";
import PageHeader from "../../components/PageHeader";
import Row from "../../components/Row";
import { ARTICLES_DATA } from "../../data/articles";

const { title, description } = ARTICLES_DATA[0];

function Article1() {
  return (
    <Layout
      head={{
        title,
        description,
      }}
    >
      <>
        <PageHeader title={title} subtitle={""} />
        <Row>
          <>
            <p>L'abstraction est l'une des compétence-clé du programmeur.</p>
            <p>
              Il existe plusieurs façons de partager du code à travers ses
              projets : du simple copié-collé au partage de modules sur des
              registres publics dédiés à un langage (npm pour le JavaScript,
              Composer pour PHP, Maven etc.).
            </p>
            <p>
              Dans cet article, j'aborde le sujet de la{" "}
              <b>publication de module npm sur le registre public</b>.
            </p>
            <p>
              Je l'illustre avec le processus de mise au point, de partage et
              d'intégration de{" "}
              <b>
                mon framework{" "}
                <a href="https://https://github.com/Skaant/motifs-js">
                  motifs-js
                </a>
              </b>
              , dont je me sers pour le "test" et le "build" de mes différents
              sites internet (<a href="https://rimarok.com">RIMAROK.com</a>,{" "}
              <a href="https://imrok.fr">IMROK.fr</a>,{" "}
              <a href="https://highbs-bok.art">HIGHBS-BOK.art</a> ou encore{" "}
              <a href="https://motifs-js-website.vercel.app/">
                le site de la documentation du module
              </a>
              ).
            </p>
          </>
        </Row>
        <Row
          header={{
            level: 2,
            content: "Pourquoi sortir du détails / du spécifique ?",
          }}
        >
          <>
            <p>
              Le problème à être toujours la tête dans le guidon c'est qu'on
              risque de ne pas correctement percevoir l'environnement alentour.
            </p>
            <p>
              Nous ratons alors l'opportunité de dériver des motifs (
              <em>patterns</em>) à la fois <strong>plus pertinents</strong> (car
              ceux dans lesquels l'application va véritablement évoluer) et{" "}
              <strong>plus ré-utilisables</strong>.
            </p>
            <p>
              Cette seconde préoccupation ne présente réellement un intérêt que
              dans la perspective d'industrialiser des parties d'un produit, en
              repliquant des concepts (et éventuellement leur implémentation)
              d'un contexte à l'autre.
            </p>
            <p>
              Voyant le temps nécessaire pour développer et tester le contenu
              commun qu'est <code>motifs-js</code>, je ne pourrais que trop
              mettre en garde sur le fait que{" "}
              <strong>
                le travail requis pour la mise-au-point d'un module npm ne se
                justifie que s'il en économise d'avantage à moyen et long termes
              </strong>
              .
            </p>
            <p>Alors, quand est-ce le bon moment ?</p>
          </>
        </Row>
        <Row
          header={{
            level: 2,
            content: "Identifier le besoin d'abstraction",
          }}
        >
          <>
            <p>Prenons pour exemple l'historique de ma flotille de sites.</p>
            <ol>
              <li>
                Initialement, j'ai l'envie de partager mes créations artistiques
                avec <a href="https://imrok.fr">imrok.fr</a>,
              </li>
              <li>
                Rapidement, je cherche à isoler une partie de ma production (un
                livre et ses storyboards) sur{" "}
                <a href="https://highbs-bok.art">highbs-bok.art</a>, et à me
                constituer une <em>landing page</em> professionnelle sur{" "}
                <a href="rimarok.com">rimarok.com</a>.
              </li>
            </ol>
            <p>
              Déjà à ce moment, je me retrouve à copier-coller des parties du
              code du premier projet au second.
            </p>
            <p>
              Mais bien évidemment lorsque j'améliore, corrige ou étend, une
              fonctionnalité sur un projet je suis{" "}
              <strong>
                obligé de répercuter les modifications sur l'autre manuellement
              </strong>
              .
            </p>
            <p>
              Toutefois, voilà une bonne illustration de l'
              <strong>émergence du besoin d'abstraction</strong> : quand deux
              consommateurs (au moins) commencent à partager le même bloc
              logique.
            </p>
            <p>
              Dans la section suivante, nous nous servirons des fonctionnalités{" "}
              <code>motifs-js</code> pour continuer à imager le partage de
              concepts entre projets.
            </p>
          </>
        </Row>
        <Row
          header={{
            level: 3,
            content: "Grands blocs logiques de motifs-js",
          }}
        >
          <>
            <p>
              Reprenons l'historique commencé plus haut pour re-tracer
              l'acquisition de nouvelles fonctionnalités par le framework.
            </p>
            <p>À ce stade, je développe en commun :</p>
            <ul>
              <li>Un builder de site statique,</li>
              <li>Une interface en ligne de commande,</li>
              <li>Des outils de manipulation du file-system,</li>
              <li>
                Un moteur de tests unitaires pour les spécifications des blocs
                précédents.
              </li>
            </ul>
            <p>
              <em>
                Les raisons pour lesquelles j'ai fait le choix de développer la
                racine du framework sans en intégrer d'autres (ex:{" "}
                <code>jest</code> pour les tests, <code>gatsby</code> pour la
                génération de site) seront détaillées dans un autre article.
              </em>
            </p>
            <p>
              En partant d'une approche UX / DX (developer experience),
              l'objectif est de{" "}
              <strong>
                réduire au maximum les points de résistance lors de l'usage de
                l'outil
              </strong>
              , notamment en évitant de ré-écrire (et de maintenir) le même
              contenu.
            </p>
            <p>
              Conjointement, d'autres fonctionnalités génériques moins visibles
              sont également présentes :
            </p>
            <ul>
              <li>Un serveur de développement local,</li>
              <li>Un builder de README,</li>
              <li>Une commande pour la création de nouveaux motifs.</li>
            </ul>
            <p>
              À ceci s'ajoute la difficulté de pouvoir lancer le framework en{" "}
              <em>standalone</em> (lorsqu'on développe le framework lui-même) et
              comme dépendance d'autres projets.
            </p>
            <p>
              La somme des problématiques soulevées et partagées par ces
              fonctionnalités mènent à dériver des concepts encore plus
              abstraits, tels que :
            </p>
            <ul>
              <li>Les énumérations,</li>
              <li>Les types de contenu et leurs occurences,</li>
              <li>
                Les divers états d'une instance (<em>runtime</em>,{" "}
                <em>fichier texte</em>, <em>fichier interprété</em> …),
              </li>
              <li>
                Le cache (ou <em>memoization</em>),
              </li>
              <li>Et bien d'autres encores.</li>
            </ul>
          </>
        </Row>
        <Row header={{ level: 2, content: "La forme d'un module npm" }}>
          <>
            <p>La façon minimale pour publier un module est :</p>
            <pre>
              <code className="bash language-bash">
                npm init npm login npm publish
              </code>
            </pre>
            <p>
              De là, il nous serait possible, après un{" "}
              <code>npm install &lt;nom-du-module&gt;</code> dans le projet
              concerné, d'importer le module depuis n'importe quel fichier avec
              la ligne (exemple) :
            </p>
            <pre>
              <code className="javascript language-javascript">
                import motifsJs from 'motifs-js'
              </code>
            </pre>
            <p>
              Cependant, comme je vais m'en apercevoir, entre{" "}
              <a href="https://github.com/Skaant/motifs-js">
                le répertoire GitHub
              </a>{" "}
              que je clonais à la racine de chaque projet et la publication d'un
              module npm, il y a quelques subtilités.
            </p>
            <p>
              Intéressons-nous donc aux quelques contraintes apportées par le
              format du module npm.
            </p>
          </>
        </Row>
        <Row
          header={{
            level: 3,
            content: "Le point d'entrée",
          }}
        >
          <>
            <p>
              Un module npm est (re)présenté par le fichier{" "}
              <code>package.json</code>, obtenu lors de l'execution du script{" "}
              <code>npm init</code>.
            </p>
            <p>
              Pour le moment c'est un point qui souffre encore de ne pas être
              inclus dans un motif du framework, mais envisagé (avec l'ajout de
              PROJECT).
            </p>
            <p>
              Cependant, même s'il faut la copier manuellement, tous les projets
              partagent la même implémentation de leur point d'entrée avec un{" "}
              <code>index.js</code> qui importe <code>motifs-js</code> pour
              l'initialiser et ouvrir le "réceptionneur" du CLI.
            </p>
            <p>
              Par exemple, dans{" "}
              <a href="https://github.com/Skaant/rimarok">
                le projet-source du site rimarok
              </a>
              , on a{" "}
              <a href="https://github.com/Skaant/rimarok/blob/master/index.js">
                pour index
              </a>{" "}
              :
            </p>
            <pre>
              <code className="javascript language-javascript">
                import motifsJs from 'motifs-js' motifsJs( import.meta.url,
                {"{ log: true }"}) .cli( process.argv.slice(3),
                {"{ log: true }"})
              </code>
            </pre>
            <p>
              Le fichier <code>index.js</code> est le{" "}
              <strong>point d'entrée de chaque projet</strong>, et{" "}
              <code>motifs-js</code> n'y échappe pas (<em>standalone</em>).
            </p>
            <p>
              Le sens donné à cette notion dans le framework est renforcé par la
              necessité de <code>motifs-js</code> d'être initialisé avant d'être
              utilisable.
            </p>
            <p>
              De là, on récupère MOTIF (ou <code>motifMotif</code>), qui nous
              permet d'accéder aux fonctionnalités principales du framework.
            </p>
            <p>
              Comme la racine d'un backend API REST,{" "}
              <strong>
                le point d'entrée d'un module, doit contenir tous les outils
                nécessaires à l'usage des fonctionnalités que ce module propose
              </strong>
              , documentation comprise.
            </p>
            <p>Passons à la considération suivante.</p>
          </>
        </Row>
        <Row
          header={{
            level: 2,
            content: "Affiner le coeur générique du framework",
          }}
        >
          <>
            <p>
              Le module doit être minimaliste :{" "}
              <strong>
                il ne doit emporter avec lui que les fonctionnalités qui vont
                être utilisées par ses consommateurs
              </strong>
              .
            </p>
            <p>
              Avec ça en tête, je décide d'
              <strong>
                externaliser le site de la documentation dans un répertoire
                auxiliaire
              </strong>{" "}
              afin de ne pas le voir dupliquer dans chaque projet.
            </p>
            <p>
              Cela met en relief l'accessibilité des consommateurs par rapport
              au module : elle est nulle.
            </p>
            <p>
              Pour dériver ainsi le nombre d'instances de PROJET, de MOTIFS
              spécifiques, d'ARTICLES et de contenu en général, il faudra cloner
              les consommateurs identifiés.
            </p>
          </>
        </Row>
        <Row header={{ level: 3, content: "Tester en local : comment ?" }}>
          <>
            <p>
              Avant de publier, il semble de bon sens de tester le module
              localement.
            </p>
            <p>
              Or, on sera surpris que l'installation d'un module local, bien que
              possible, ne s'effectue pas dans les mêmes conditions qu'on module
              externe.
            </p>
            <p>
              En effet, lorsqu'on lance{" "}
              <code>npm i &lt;chemin-relatif-vers-le-module&gt;</code>{" "}
              <strong>
                npm ne copie pas le contenu du module mais référence simplement
                son chemin
              </strong>{" "}
              dans <code>package.json</code>.
            </p>
            <p>
              Dans mon projet, j'ai besoin de récupérer le contenu du répertoire
              du module pour, entre autres, lister les fichiers qu'il contient :
              c'est là la seule problématique majeure que j'ai rencontre durant
              cette migration.
            </p>
            <p>
              Pour l'heure, dans les tests du module, je vérifiais
              l'accessibilité du dossier <code>node_modules/motifs-js</code>{" "}
              lorsque le projet ne tourne pas en standalone (donc mode
              consommateur) … sauf qu'avec l'installation locale ce dossier
              n'existe pas.
            </p>
            <p>
              L'astuce un peu sale que j'ai trouvé pour le moment est de cloner
              le répertoire de <code>motifs-js</code> dans les{" "}
              <code>node_modules</code> des projets dont sur lesquels je teste
              l'intégration du framework.
            </p>
            <p>
              Bien entendu, et comme toujours,{" "}
              <strong>à différents niveaux de tests, différents besoins</strong>
              .
            </p>
            <p>
              Il est tout à faire possible de copier-coller le dossier, mais
              l'avantage du git c'est de pouvoir récupérer les modifications
              automatiquement lors de la mise à jour du répertoire ainsi que de
              travailler sur des branches de développement.
            </p>
          </>
        </Row>
        <Row header={{ level: 2, content: "Conclusion" }}>
          <>
            <p>
              Il est tout à faire possible de copier-coller le dossier, mais
              l'avantage du git c'est de pouvoir récupérer les modifications
              automatiquement lors de la mise à jour du répertoire ainsi que de
              travailler sur des branches de développement.
            </p>
            <p>
              En plus de rendre simplement accessible les fichiers du module,
              comme avec ces lignes de <code>mapping.util.js</code> :
            </p>
            <pre>
              <code className="javascript language-javascript">
                import WEBSITE_PAGE from
                'motifs-js/_motifs/website-page/website-page.motif.js' import
                FOLDER from 'motifs-js/_motifs/folder/folder.motif.js'
              </code>
            </pre>
            <p>
              … le module dispose d'un point d'entrée autour duquel maximiser
              les accès aux fonctionnalités.
            </p>
            <p>
              On cherche{" "}
              <strong>
                au maximum à encapsuler les blocs derrière des abstractions
              </strong>
              , ainsi que leurs implémentations.
            </p>
            <p>
              Une attention particulière sera portée à la pertinence des
              fonctionnalités embarquées dans le module :{" "}
              <strong>
                seulement le contenu partagé par les consommateurs
              </strong>
              .
            </p>
            <p>
              On vérifiera également que ces consommateurs intègrent
              correctement le framework, bien que la façon de tester nécessite
              un point de vue méta que je n'ai pas encore poussé.
            </p>
            <p>
              <em>
                La roadmap est infinie, les fonctionnalités critiques à
                développer puis à fiabiliser nombreuses !
              </em>
              *
            </p>
            <p>
              À bientôt pour des nouvelles de mes projets de développement, et
              d'autres réflexions sur le code.
            </p>
          </>
        </Row>
      </>
    </Layout>
  );
}

export default Article1;
