import Button from '../components/Button';

const Index = () => {
    return (
        <>
            <section className="py-32 relative z-0">
                <div className='max-w-laptop'>
                    <img src="/svg/pattern-primary-050.svg" alt="Pattern Home Page" className='absolute z--1 t--40 l-150'/>
                    <div className='flex g-64 z-0'>
                        <div className='flex flex-col g-48 py-64'>
                            <div>
                                <p className='font-georama font-600 text-18 letter-spacing-10 text-upper color-secondary-600'>agence de relocation en suisse</p>
                                <h1 className='font-800 text-48 color-primary-900'>Confiez chaque étape de votre relocation à un partenaire de confiance</h1>
                            </div>
                            <p className='text-20'>Depuis 1994, Lodge Relocation <span className='font-700 text-20 text-color-primary-800'>simplifie la mobilité internationale des entreprises</span> en Suisse, de leurs collaborateurs et de leurs familles, avec un accompagnement personnalisé.</p>
                            <div className='heroButtonText flex flex-col g-8 items-start'>
                                <Button onClick={() => { window.scrollTo(0, 0)}} link="contact" text="démarrez votre projet" className="text-16 py-12 px-32"/>
                                <p className='text-color-primary-800'>Notre équipe vous réponds sous 24h</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/switzerland_flag_on_mountain.png" alt="Switzerland Flagn On Mountain"/>
                        </div>
                    </div>
                    <div className='heroRating flex justify-center g-48'>
                        <div className='flex g-8'>
                            <img src="/svg/star.svg" alt="SVG Star" />
                            <p className='text-color-primary-800 py-48'>Noté 4.9/5 par nos clients sur Google</p>
                        </div>
                        <div className='flex g-8'>
                            <img src="/svg/plus-circle.svg" alt="SVG Plus Circle" />
                            <p className='text-color-primary-800 py-48'>+ 70 multinationales partenaires</p>
                        </div>
                        <div className='flex g-8'>
                            <img src="/svg/plus-circle.svg" alt="SVG Plus Circle" />
                            <p className='text-color-primary-800 py-48'>+ 1000 services de relocation/an</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-96 bg-essential-050'>
                <div className='max-w-laptop flex g-64'>
                    <div className='accompaniementColumnLeft flex flex-col g-32'>
                        <div className='flex flex-col g-16'>
                            <img src="/svg/Accompaniment-title.svg" alt="SVG Accompaniment Title" />
                            <p className='text-30 text-color-primary-800'>de relocation.</p>
                        </div>
                        <p className='text-color-primary-800'>Nous gérons l’ensemble des démarches, pour faciliter chaque étape de votre mobilité.</p>
                    </div>
                    <div className='accompaniementColumnRight flex flex-col radius-12 border-color-primary-100 p-32 relative overflow-hidden'>
                        <img src="/svg/pattern-primary-100.svg" alt="SVG Pattern" className='absolute z-0 maxw-240 t--35 r--15'/>
                        <div className='flex flex-col justify-between z-1'>
                            <div className='flex flex-col g-48'>
                                <div className='flex g-16'>
                                    <img src="/svg/map-pin.svg" alt="SVG Map Pin" className='minh-26 maxw-32'/>
                                    <h2 className='text-color-primary-800 font-700 text-24'>Relocation</h2>
                                </div>
                                <div className='flex flex-col g-32'>
                                    <div className='flex flex-col g-4'>
                                        <h3 className='text-color-primary-800 font-600 text-18'>Préparation de l’arrivée et de l’intégration</h3>
                                        <p className='color-essential-300'>Visite de reconnaissance, programme de sensibilisation à la culture Suisse</p>
                                    </div>
                                    <div className='flex flex-col g-4'>
                                        <h3 className='text-color-primary-800 font-600 text-18'>Soutien aux familles</h3>
                                        <p className='color-essential-300'>Recherche d’école et de garde d’enfant, accompagnement du conjoint</p>
                                    </div>
                                    <div className='flex flex-col g-4'>
                                        <h3 className='text-color-primary-800 font-600 text-18'>Recherche de logements </h3>
                                        <p className='color-essential-300'>Temporaires ou permanents, avec services d’aide à l’installation</p>
                                    </div>
                                    <div className='flex flex-col g-4'>
                                        <h3 className='text-color-primary-800 font-600 text-18'>Gestion de la relocation</h3>
                                        <p className='color-essential-300'>Gestion externalisée de la facturation, suivi de la mobilité</p>
                                    </div>
                                </div>
                            </div>
                            <Button onClick={() => { window.scrollTo(0, 0)}} link="relocation" text="planifier votre relocation" className="flex justify-center py-12 px-64"/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-primary-800 py-96'>
                <div className="max-w-laptop flex g-64">
                    <div className='flex flex-col g-64'>
                        <h2 className='font-300 text-32 color-essential-050'><span className='font-700 text-32 color-essential-050'>30 ans d'expertise,</span> au service de la mobilité internationale en Suisse</h2>
                        <div className='grid grid-template-columns-3-1fr grid-template-rows-2-1fr grid-column-g grid-row-g'>
                            <div className='flex flex-col g-24 grid-area-1122'>
                                <img src="/svg/calendar.svg" alt="SVG Calendar" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>Fondée en 1994</h3>
                                <p className='color-essential-200'>L’un des premiers acteurs de la Relocation en Suisse </p>
                            </div>
                            <div className='flex flex-col g-24 grid-area-1223'>
                                <img src="/svg/heart.svg" alt="SVG Heart" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>Top 3</h3>
                                <p className='color-essential-200'>Parmi les 3 agences de relocation les plus reconnues en Suisse</p>
                            </div>
                            <div className='flex flex-col g-24 grid-area-1324'>
                                <img src="/svg/company.svg" alt="SVG Company" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>70 sociétés internationales partenaires</h3>
                                <p className='color-essential-200'>Plus de 1000 services réalisés en 2024</p>
                            </div>
                            <div className='flex flex-col g-24 grid-area-2132'>
                                <img src="/svg/briefcase.svg" alt="SVG Briefcase" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>30 collaborateurs</h3>
                                <p className='color-essential-200'>Très expérimentés et bénéficiant d’un ancrage local très fort</p>
                            </div>
                            <div className='flex flex-col g-24 grid-area-2233'>
                                <img src="/svg/star.svg" alt="SVG Star" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>Service premium</h3>
                                <p className='color-essential-200'>Lodge Relocation propose des prestations personnalisées de haute qualité, alliant réactivité et approche humaine.</p>
                            </div>
                            <div className='flex flex-col g-24 grid-area-2334'>
                                <img src="/svg/userCheck.svg" alt="SVG Usercheck" className='maxw-32'/>
                                <h3 className='font-700 text-24 color-essential-050'>Acteur engagé</h3>
                                <p className='color-essential-200'>Membre des associations de relocation Suisse SARA et Européenne EURA, médaille d’argent Ecovadis</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="/img/staff.png" alt="Staff Lodge Relocation" />
                    </div>
                </div>
            </section>
            <section className='py-96'>
                <div className="max-w-laptop flex g-64">
                    <div className='flex flex-col g-32'>
                        <h2 className='font-300 text-32 text-color-primary-800'>Présents là <span className='font-800 text-32'>où vous en avez besoin</span></h2>
                        <div className='flex flex-col g-32'>
                            <p className='text-color-primary-800'>Avec 4 bureaux dans les villes de Genève, Lausanne, Zug et Zurich, nous assurons une couverture opérationnelle dans tous les cantons. </p>
                            <p className='text-color-primary-800'>Présentes localement, nos consultantes bénéficient d'un ancrage fort avec les partenaires locaux, garantissant ainsi une maîtrise parfaite du marché immobilier et des spécificités cantonales.</p>
                        </div>
                        <Button onClick={() => { window.scrollTo(0, 0)}}
                        link="contact"
                        text={ <>prendre contact<br />avec nos équipes</> } className="flex justify-center text-16 p-64"/>
                    </div>
                    <img src="/img/presence.png" alt="Presence Lodge Relocation" className='flex items-start maxw-320'/>
                </div>
            </section>
        </>
    )
};

export default Index;