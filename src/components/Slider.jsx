import { useState } from "react";
import Button from "./Button";

export default function Slider() {
    const data = {
        Préparation: {
            h2: "Préparer votre arrivée et votre intégration",
            card: [
                { 
                    icon: "/svg/book.svg",
                    titre: "Programme de sensibilisation à la culture Suisse",
                    texte: "Ce programme a été pensé pour relever les défis de votre intégration en Suisse. Quelques heures qui vous feront gagner un temps précieux pour bien démarrer votre nouvelle vie !",
                    liste: [
                        "Véritable immersion dans la culture locale : fonctionnement économique, politique, habitudes de vie, etc.",
                        "Conçu pour être suivi à distance avant votre arrivée",
                        "Répond à vos questions et réduit le stress lié à la relocation"
                    ]
                },
                { 
                    icon: "/svg/map.svg",
                    titre: "Visite de reconnaissance",
                    texte: "La visite de reconnaissance est l’étape incontournable pour choisir où poser vos valises.",
                    liste: [
                        "Echange d’information avec votre consultante dans une ambiance conviviale",
                        "Découverte des quartiers d’habitation, du canton et de la Suisse",
                        "Précision de vos attentes en matière de localisation et de logement"
                    ]
                },
                { 
                    icon: "/svg/log-in.svg",
                    titre: "Transfert aéroport/gare",
                    texte: "Nous coordonnons et planifions votre arrivée",
                    liste: [
                        "Transfert avec chauffeur de l’aéroport ou de la gare jusqu’à votre destination finale",
                        "Prise en charge de votre transfert par nos partenaires de confiance",
                        "Prise en charge de vos bagages de la sortie du terminal jusqu’à votre appartement"
                    ]
                },
            ],
        },
        Famille: {
            h2: "Soutien aux familles",
            card: [
                { 
                    icon: "/svg/heart.svg",
                    titre: "Recherche d’école et de garde d’enfant",
                    texte: "Le programme « Education et Garde d’enfant » facilite l’intégration de votre famille en assurant une adéquation optimale entre le système éducatif suisse et les besoins de vos enfants. Une consultante dédiée vous accompagne à chaque étape :",
                    liste: [
                        "Conseil personnalisé",
                        "Présentation des options scolaires (publiques, privées, internationales)",
                        "Organisation de rendez-vous et visites des établissements scolaires",
                        "Assistance aux entretiens et inscriptions"
                    ]
                },
                { 
                    icon: "/svg/user-plus.svg",
                    titre: "Accompagnement du conjoint",
                    texte: "Le programme « Accompagnement du conjoint » complète le voyage de reconnaissance en accompagnant votre partenaire dans la découverte de son nouvel environnement.",
                    liste: [
                        "Facilitation de l’intégration grâce à un soutien personnalisé",
                        "Informations sur la vie quotidienne, activités sportives, culturelles, clubs, cours de langues, emploi, démarches administratives, etc."
                    ]
                },
                { 
                    icon: "/svg/gitlab.svg",
                    titre: "Formalités des animaux de compagnie",
                    texte: "Nous vous accompagnons dans les démarches liées à l’arrivée de votre animal de compagnie en Suisse.",
                    liste: [
                        "Respect des règles d'importation suisses",
                        "Assistance pour les formalités administratives avant votre arrivée",
                        "Assistance pour les formalités administratives locales"
                    ]
                },
            ],
        },
        Logement: {
            h2: "Recherche de logements",
            card: [
                { 
                    icon: "/svg/loader.svg",
                    titre: "Recherche de logement temporaire",
                    texte: "La solution idéale pour une période transitoire. Nous recherchons pour vous un logement meublé adapté à vos besoins, avec un accompagnement personnalisé :",
                    liste: [
                        "Définition des critères désirés",
                        "Sélection et visite de biens, aide à la décision,",
                        "Gestion du dossier de location (négociation, bail, garantie)",
                        "Coordination des états des lieux, de l’accueil, du ménage et du départ"
                    ]
                },
                { 
                    icon: "/svg/home.svg",
                    titre: "Recherche de logement permanent",
                    texte: "Ce programme vous accompagne de A à Z dans la recherche de votre futur domicile. Nous mettons toute notre expertise à votre service pour vous accompagner dans cette étape clé.",
                    liste: [
                        "Présentons du marché immobilier",
                        "Définition et précision de vos critères",
                        "Sélection de biens pertinents et organisation des visites",
                        "Conseils personnalisés, suivi complet du dossier (négociation, bail, garanties, assurances), et assistance jusqu’à la remise des clés"
                    ]
                },
                { 
                    icon: "/svg/log-in.svg",
                    titre: "Aide à l’installation dans le logement",
                    texte: "Indissociable de la recherche du logement permanent, ce service facilite votre emménagement dans votre nouveau chez-vous.",
                    liste: [
                        "Réalisation de l’état des lieux d’entrée",
                        "Assistance pour la souscription des assurances liées au logement",
                        "Gestion des contrats de maintenance et des abonnements essentiels (électricité, Internet, eau, etc.)",
                        "Fourniture de toutes les informations essentielles pour bien démarrer votre arrivée en Suisse"
                    ]
                },
                { 
                    icon: "/svg/company.svg",
                    titre: "Recherche de logements",
                    texte: "Nous vous accompagnons dans la recherche de bureaux adaptés à vos besoins.",
                    liste: [
                        "Définition et précision de vos critères : emplacement, surface, budget et style souhaité",
                        "Proposition de solutions immobilières alignées avec l’image, la culture et les objectifs de votre organisation",
                        "Suivi complet du dossier (négociation, bail, garanties, assurances), et assistance jusqu’à la remise des clés"
                    ]
                },
                { 
                    icon: "/svg/user-plus.svg",
                    titre: "Recherche à l’achat",
                    texte: "Dans un marché immobilier compétitif, Lodge Relocation vous accompagne dans la recherche et l’acquisition d’un bien qui correspond pleinement à vos attentes.",
                    liste: [
                        "Accompagnement à chaque étape par une consultante dédiée qui supervise l’ensemble du projet",
                        "Définition et précision des critères : emplacement, surface, budget et style souhaité",
                        "Accès aux meilleures opportunités du marché via à nos relations étroites avec les régies immobilières et les propriétaires"
                    ]
                },
                { 
                    icon: "/svg/plus-circle.svg",
                    titre: "Autres services d’accompagnement aux démarches administratives",
                    texte: "Notre équipe organise les rendez-vous, prépare les documents nécessaires et vous accompagne à chaque étape de vos démarches administratives.",
                    liste: [
                        "Enregistrement à la commune",
                        "Choix d’une assurance maladie",
                        "Ouverture d’un compte bancaire, etc."
                    ]
                },
            ],
        },
        Déménagement: {
            h2: "Services de déménagement",
            card: [
                { 
                    icon: "/svg/truck.svg",
                    titre: "Coordination du déménagement",
                    texte: "Grâce à nos partenariats privilégiés avec plusieurs sociétés de déménagements, nous organisons et coordonnons le transfert de vos biens. Nous assurons la gestion complète et fluide de votre déménagement.",
                    liste: [
                        "Demande de devis comparatifs",
                        "Mise en relation avec plusieurs sociétés de déménagements, suisses et internationales, sérieuses et rigoureusement sélectionnées",
                        "Coordination et suivi jusqu’à l’installation finale"
                    ]
                },
                { 
                    icon: "/svg/archive.svg",
                    titre: "Location de meubles",
                    texte: "Lodge Relocation offre une solution rapide pour meubler votre résidence finale en attendant l'arrivée de vos meubles ou à plus long terme.",
                    liste: [
                        "Coordination avec nos partenaires spécialisés",
                        "Livraison et installation rapide de meubles de qualité",
                        "Transition fluide dans votre nouveau chez-vous sans avoir besoin de logement temporaire"
                    ]
                },
                { 
                    icon: "/svg/log-in.svg",
                    titre: "Formalités liées au véhicule et permis de conduire",
                    texte: "Nous vous accompagnons dans les démarches liées à votre véhicule ou votre permis de conduire :",
                    liste: [
                        "Assistance dans votre demande ou votre changement de permis de conduire",
                        "Assistance dans les formalités d’importation et d’immatriculation du véhicule",
                        "Accompagnement au Service des Automobiles pour l’enregistrement"
                    ]
                },
            ],
        },
        Départ: {
            h2: "Services de départ",
            card: [
                { 
                    icon: "/svg/user-check.svg",
                    titre: "Avec ou sans recherche de nouveaux locataires",
                    texte: "Nos consultantes accompagnent les collaborateurs et leurs familles à chaque étape de leur départ, afin de clôturer leur séjour en Suisse en toute sérénité et de manière anticipée.",
                    liste: [
                        "Résiliation du bail et contrats",
                        "Organisation des états des lieux",
                        "Récupération du dépôt de garantie",
                        "Prise en charge de la recherche d’un nouveau locataire en cas de résiliation anticipée du bail"
                    ]
                },
            ],
        },
        "Client B2B": {
            h2: "Gestion de la relocation pour les entreprises",
            card: [
                { 
                    icon: "/svg/dollar-sign.svg",
                    titre: "Gestion externalisée de la facturation",
                    texte: "Nous centralisons et gérons toutes les dépenses liées à la relocation de vos collaborateurs, en accord avec la politique de prise en charge définie par l’entreprise :",
                    liste: [
                        "Pris en charge pour votre compte des frais liés à la relocation : frais de déplacement, loyers des logements temporaires, nettoyages, émoluments des permis, etc.",
                        "Facturation claire et centralisée, sans contrainte de création de nouveau compte fournisseur"
                    ]
                },
                { 
                    icon: "/svg/activity.svg",
                    titre: "Gestion des appartements d'entreprise",
                    texte: "Lodge Relocation gère pour les entreprises des parcs d'appartements meublés destinés aux séjours temporaires de leurs collaborateurs.",
                    liste: [
                        "Sélection de logements",
                        "Gestion des baux",
                        "Optimisation du planning de remplissage",
                        "Logistique liée au logement : accueil, kit d’accueil, ménage, états des lieux"
                    ]
                },
                { 
                    icon: "/svg/award.svg",
                    titre: "Group move",
                    texte: "Lodge Relocation est spécialisée dans la gestion des Group Moves, qu’il s’agisse de relocalisations de sièges depuis l’étranger vers la Suisse ou de transferts intercantonaux.",
                    liste: [
                        "Expertise reconnue, avec accompagnement de dizaines d’entreprises dans plusieurs cantons, et jusqu’à 200 familles par Group Move",
                        "Conception conjointe de votre accompagnement, adapté aux besoins spécifiques",
                        "Garanti du meilleur soutien aux collaborateurs"
                    ]
                },
                { 
                    icon: "/svg/folder-plus.svg",
                    titre: "Suivi mobilité",
                    texte: "Lodge Relocation collabore étroitement avec les équipes RH, afin d’assurer un suivi clair et efficace tout au long du processus.",
                    liste: [
                        "Suivi hebdomadaire détaillé de l’avancement des services de relocation pour chaque collaborateur",
                        "Accès à notre plateforme digital pour un suivi en temps réel",
                        "Communication réactive, fluide et transparente, garantissant une parfaite coordination"
                    ]
                },
            ],
        },
    };

    const sections = Object.keys(data);
    const [activeSection, setActiveSection] = useState(sections[0] || '');
    const [page, setPage] = useState(0);

    const cardsPerPage = 3;

    const cards = data[activeSection]?.card || [];

    let totalPages = 1;
    if (cards.length > 0) {
        totalPages = parseInt(cards.length / cardsPerPage, 10);
        if (cards.length % cardsPerPage !== 0) {
            totalPages = totalPages + 1;
        }
    }

    const startIndex = page * cardsPerPage;
    const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

    const nextPage = () => {
        if (page < totalPages - 1) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    if (!sections.length) return null;


    return (
        <div className="max-w-laptop flex flex-col g-64">
            <div className="headerSlider flex justify-between g-8 radius-round sticky">
                {sections.map(s => (
                    <button className="buttonSlider text-center bg-primary-800 bg-essential-050-hover font-georama font-500 text-18 color-primary-800-hover color-essential-100 transition-03-ease-in cursor-pointer radius-round w-170 justify-center" key={s} onClick={() => { setActiveSection(s); setPage(0); }}>
                        {s}
                    </button>
                ))}
            </div>
            <h2 className="font-800 text-32 color-primary-900 text-center">{data[activeSection]?.h2}</h2>
            <div>
                <button onClick={prevPage} disabled={page === 0}>&lt;</button>
                <button onClick={nextPage} disabled={page >= totalPages - 1}>&gt;</button>
            </div>
            <div className="flex">
                {visibleCards.map((c, i) => (
                    <div className="flex flex-col g-24 bg-essential-050 border-color-primary-100" key={i}>
                        <img className="maxw-32" src={c.icon} alt="SVG" />
                        <div className="flex flex-col g-8">
                            <h3 className="font-700 text-24 color-primary-900">{c.titre}</h3>
                            <p className="color-essential-400">{c.texte}</p>
                        </div>
                        <ul className="flex flex-col g-12 ">
                            {c.liste.map((item, j) => (
                                <li className="line-h-24 color-essential-400" key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <Button link="contact" text="prendre contact avec nos équipes" className="text-center"/>
        </div>
    );
}