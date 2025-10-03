import Button from "../components/Button";
import FAQItem from "../components/FAQItem";
import Slider from "../components/Slider";
import "../styles/relocation.css"

const Relocation = () => {
    return (
        <>
        <section className="relocationSection">
            <div className="max-w-laptop">
                <img src="/svg/pattern-primary-050.svg" alt="Pattern Home Page" className='pattern'/>
                <div className="mainContent flex g-64">
                    <div className="flex flex-col g-32 items-start">
                        <div className="mainContentTitle flex flex-col g-8">
                            <p className="text-upper font-600 font-georama text-18 letter-spacing-10">Parce que chaque situation est unique.</p>
                            <h1 className="font-300 text-48">Nous vous proposons une gamme de <span className="font-800 text-48">services de relocation sur mesure.</span></h1>
                        </div>
                        <div className="mainContentSubtitle flex flex-col g-32">
                            <p>Depuis 1994, nous vous accompagnons partout en Suisse grâce à une présence nationale, alliant expertise locale et étroite collaboration avec les partenaires locaux.</p>
                            <p>Nous construisons avec vous un programme personnalisé, conçu pour répondre précisément à vos besoins spécifiques et garantir une installation en toute sérénité.</p>
                        </div>
                    <Button link="contact" text="Démarrez votre projet" className="buttonRelocationSection text-16"/>
                    </div>
                    <div className="mainContentColumnRight flex flex-col g-24">
                        <p>Nous prenons en charge la coordination complète du projet afin de :</p>
                        <div className="flex justify-center g-16">
                            <img src="/svg/check-circle.svg" alt="SVG Check Circle" />
                            <p className="text-18">vous <span className="font-700 text-18">libérer de toute contrainte</span> logistique,</p>
                        </div>
                        <div className="flex justify-center g-16">
                            <img src="/svg/check-circle.svg" alt="SVG Check Circle" />
                            <p className="text-18">vous <span className="font-700 text-18">assurer une installation rapide,</span></p>
                        </div>
                        <div className="flex justify-center g-16">
                            <img src="/svg/check-circle.svg" alt="SVG Check Circle" />
                            <p className="text-18">et une <span className="font-700 text-18">intégration sereine.</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="additionalSection">
            <Slider />
        </section>
        <section className="testimonialSection">
            <div className="max-w-laptop flex flex-col g-64">
                <h2 className="text-upper font-georama font-600 text-18 letter-spacing-10">Avis client</h2>
                <div className="flex g-64">
                    <div className="testimonialSectionFirstColumn flex flex-col g-16">
                        <img src="/svg/quote.svg" alt="SVG Quote" />
                        <div className="flex flex-col g-16">
                            <p className="font-700 text-20">Chaque étape, de la recherche du logement au soutien pour la gestion des formalités administratives, a été prise en charge avec une efficacité remarquable.</p>
                            <p className="font-400">Nous avons fait appel à Lodge Relocation pour notre déménagement et nous sommes très satisfaits de leurs services !</p>
                        </div>
                    </div>
                    <div className="testimonialSectionLastColumn flex flex-col g-16">
                        <div className="flex flex-col g-32">
                            <p className="font-400">Dès le début, Virginie a su se montrer disponible, professionnelle et à l’écoute de nos besoins spécifiques et nous tenons également à la remercier chaleureusement pour sa gentillesse.</p>
                            <p className="font-400">Grâce à leur expertise, notre transition s’est déroulée avec le minimum possible de stress et nous avons pu nous installer sereinement dans notre nouveau domicile.</p>
                            <p className="font-400">Un grand merci pour leur accompagnement personnalisé et leur dévouement et nous recommandons bien entendu leurs services !</p>
                        </div>
                        <p className="font-300 italic text-end">David</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="FAQSection">
            <div className="max-w-laptop flex flex-col g-32">
                <img src="/svg/pattern-primary-600.svg" alt="Pattern Home Page" className='pattern' />
                <h2 className="font-300 text-32">Vos questions sur <span className="font-800 text-32">la relocation</span></h2>
                <div className="FAQItems flex flex-col g-24">
                    <FAQItem title="Quel est le délai moyen pour trouver un logement avec votre accompagnement ?" content = {
                        <>
                        <p>Le temps nécessaire dépend de chaque situation (composition de la famille, taille du logement souhaité, budget…) et de la période de l’année. En moyenne, il faut compter 1 mois et demi, avec une fourchette de 2 semaines à 4 mois.</p>
                        <p>Grâce à notre connaissance du marché et à nos partenariats avec les régies, nous trouvons généralement un logement pour nos clients en quelques jours à quelques semaines, selon la ville, la période et les critères spécifiques.</p>
                        </>
                    } />
                    <FAQItem title="Quels sont les étapes pour trouver un logement ?" content = {
                        <>
                        <p>Dès la validation de votre dossier, nous échangeons avec vous pour définir vos besoins et vos priorités (type de logement, localisation, budget, etc.).</p>
                        <p>Nous sélectionnons ensuite des biens ciblés, organisons les visites (en votre présence ou à distance), vous accompagnons dans le dépôt des candidatures, et vous conseillons jusqu’à la signature du bail.</p>
                        </>
                    } />
                    <FAQItem title="Combien coute une recherche de logement ?" content = {
                        <>
                        <p>Chaque situation étant unique, nous ne publions pas de tarifs en ligne. Nous privilégions une approche personnalisée, avec un devis clair après un premier échange.</p>
                        </>
                    } />
                    <FAQItem title="Faut-il un garant pour obtenir un logement ?" content = {
                        <>
                        <p>Dans la majorité des cas, il n’est pas nécessaire d’avoir un garant pour trouver un logement. Toutefois certaines régies ou propriétaires peuvent le demander, surtout si vos revenus sont jugés insuffisants ou si vous êtes nouvellement arrivé en Suisse. Le garant sert à couvrir les risques de non-paiement du loyer.</p>
                        <p>Notre équipe vous accompagne pour maximiser vos chances et constituer un dossier attractif, même sans garant.</p>
                        </>
                    } />
                    <FAQItem title="Et si je ne trouve pas de logement ?" content = {
                        <>
                        <p>Grâce à notre réseau et notre expertise du marché, les situations de non-placement sont extrêmement rares. Si aucune solution ne correspond immédiatement à vos critères, nous ajustons la recherche en continu, explorons des options temporaires et restons pleinement engagés jusqu’à l’obtention d’un logement adapté.</p>
                        <p>Dans certains cas spécifiques, des remboursements partiels peuvent être envisagés, en fonction des conditions contractuelles et du niveau de service déjà délivré.</p>
                        <p>Votre satisfaction reste notre priorité, en toute transparence.</p>
                        </>
                    } />
                    <FAQItem title="Offrez-vous un suivi après l'installation ?" content = {
                        <>
                        <div>
                            <p>Nous utilisons une approche multicanale et proactive pour identifier les logements correspondant à votre profil :</p>
                            <ul>
                                <li>Contact direct avec les régies immobilières locales</li>
                                <li>Réseau de propriétaires privés et partenaires de confiance</li>
                                <li>Surveillance des plateformes en ligne (Homegate, ImmoScout24, etc.)</li>
                                <li>Accès à certaines opportunités avant leur mise en ligne (grâce à notre présence active sur le marché)</li>
                            </ul>
                        </div>
                        <p>Nous filtrons les logements selon vos critères (localisation, budget, accessibilité, écoles, etc.) et vous présentons uniquement des biens pertinents.</p>
                        </>
                    } />
                    <FAQItem title="Mon dossier est-il solvable ?" content = {
                        <>
                        <p>Avant d'entamer les démarches de recherche de logement, nous évaluons ensemble votre dossier pour nous assurer qu’il est conforme aux exigences des régies et propriétaires suisses.</p>
                        <div>
                            <p>Nous vérifions notamment :</p>
                            <ul>
                                <li>Vos revenus (généralement, le loyer ne doit pas dépasser un tiers du revenu net)</li>
                                <li>La stabilité de votre situation professionnelle</li>
                                <li>Les pièces justificatives requises (contrat de travail, pièce d'identité, extrait de poursuites, etc.)</li>
                            </ul>
                        </div>
                        <p>Si nécessaire, nous vous aidons à optimiser votre dossier et à le rendre plus attractif (garants, explication de votre profil, lettres de motivation, etc.). Notre but est de maximiser vos chances d’obtenir un logement rapidement.</p>
                        </>
                    } />
                    <FAQItem title = {
                        <>
                        <span className="font-600 text-18">Comment Lodge organise ses recherches (internet, régie, …) ?</span>
                        <span className="font-600 text-18">Proposez-vous des appartements hors marché ?</span>
                        </>
                    } content = {
                        <>
                        <div>
                            <p>Nous utilisons une approche multicanale et proactive pour identifier les logements correspondant à votre profil :</p>
                            <ul>
                                <li>Contact direct avec les régies immobilières locales</li>
                                <li>Réseau de propriétaires privés et partenaires de confiance</li>
                                <li>Surveillance des plateformes en ligne (Homegate, ImmoScout24, etc.)</li>
                                <li>Accès à certaines opportunités avant leur mise en ligne (grâce à notre présence active sur le marché)</li>
                            </ul>
                        </div>
                        <p>Nous filtrons les logements selon vos critères (localisation, budget, accessibilité, écoles, etc.) et vous présentons uniquement des biens pertinents.</p>
                        </>
                    } />
                    <FAQItem title="Est-ce que les visites sont accompagnées ? Comment suis-je accompagnée durant ma relocation ?" content = {
                        <>
                        <div>
                            <p>Oui, les visites sont accompagnées par une consultante relocation, en fonction de votre disponibilité et de votre localisation. Nous proposons :</p>
                            <ul>
                                <li>Visites physiques en votre présence</li>
                                <li>Visites en visioconférence si vous n’êtes pas encore sur place</li>
                                <li>Rapports détaillés avec photos et recommandations si vous ne pouvez pas vous déplacer</li>
                            </ul>
                        </div>
                        <p>Dans le cas de certains mandats, le client se rend seul aux visites après que celle-ci ait été organisées par la consultante.</p>
                        </>
                    } />
                    <FAQItem title="Comment éviter les arnaques à la location ?" content = {
                        <>
                        <p>En général, les régies mettent entre 3 et 10 jours ouvrables pour traiter un dossier. Cependant, ce délai peut varier en fonction du temps pris par le propriétaire pour analyser les dossiers et du nombre de candidats.</p>
                        <p>Nous faisons un suivi régulier pour maximiser vos chances et vous informer dès qu’une réponse est disponible.</p>
                        </>
                    } />
                    <FAQItem title="Quel est le délai de réponse de la régie sur mon dossier de candidature ?" content = {
                        <>
                        <p>En général, les régies mettent entre 3 et 10 jours ouvrables pour traiter un dossier. Cependant, ce délai peut varier en fonction du temps pris par le propriétaire pour analyser les dossiers et du nombre de candidats.</p>
                        <p>Nous faisons un suivi régulier pour maximiser vos chances et vous informer dès qu’une réponse est disponible.</p>
                        </>
                    } />
                    <FAQItem title="Quand dois-je régler mon loyer ?" content = {
                        <>
                        <p>Le loyer est généralement dû au début de chaque mois, souvent le 1er. Il est recommandé de mettre en place un ordre permanent pour éviter les oublis. Certaines régies peuvent fixer des conditions spécifiques indiquées dans votre contrat de bail.</p>
                        </>
                    } />
                    <FAQItem title="Comment obtenir mon attestation de non-poursuite ?" content = {
                        <>
                        <p>Les agences immobilières et les propriétaires de biens immobiliers ont besoin d'une « attestation de non-poursuite », qui indique que vous n'avez pas de dettes en suspens, pour examiner votre demande.</p>
                        <p>Cette attestation est nécessaire pour une demande de propriété, même si vous venez d'arriver en Suisse. Suivant le canton où vous souhaitez résider la procédure n’est pas la même, nous vous indiquerons la vôtre dès nos premiers échanges.</p>
                        </>
                    } />
                </div>
            </div>
        </section>
        </>
    )
};

export default Relocation;