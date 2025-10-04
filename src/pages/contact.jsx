import Button from '../components/Button';
import { useState } from 'react';

function Contact() {
    const [FormArea, setFormArea] = useState(true);

    let content;
    if (FormArea) {
        content = (
            <form className='formFields flex flex-col g-16'>
                <div className='grid grid-template-columns-2-1fr grid-template-rows-4-1fr grid-column-g-1 grid-row-g-1'>
                    <div className='flex flex-col g-8 grid-area-1122'>
                        <label className='text-12' htmlFor="who">Vous êtes*</label>
                        <select id="who" name="who" required defaultValue="" className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'>
                            <option value="" className='optionDisabled' disabled hidden>Vous êtes</option>
                            <option value="entreprise">Une entreprise</option>
                            <option value="particulier">Un particulier</option>
                            <option value="proprietaire">Un propriétaire</option>
                        </select>
                    </div>
                    <div className='flex flex-col g-8 grid-area-1223'>
                        <label className='text-12' htmlFor="gender">Civilité*</label>
                        <select id="gender" name="gender" required defaultValue="" className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'>
                            <option value="" className='optionDisabled' disabled hidden>Civilité</option>
                            <option value="Monsieur">Monsieur</option>
                            <option value="Madame">Madame</option>
                        </select>
                    </div>
                    <div className='flex flex-col g-8 grid-area-2132'>
                        <label className='text-12' htmlFor="firstname">Prénom*</label>
                        <input type="text" id="firstname" name="firstname" placeholder='Prénom' required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'/>
                    </div>
                    <div className='flex flex-col g-8 grid-area-2233'>
                        <label className='text-12' htmlFor="surname">Nom*</label>
                        <input type="text" id="surname" name="surname" placeholder='Nom' required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'/>
                    </div>
                    <div className='flex flex-col g-8 grid-area-3142'>
                        <label className='text-12' htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" placeholder='Email' required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'/>
                    </div>
                    <div className='flex flex-col g-8 grid-area-3243'>
                        <label className='text-12' htmlFor="phonenumber">Numéro de téléphone*</label>
                        <input type="phonenumber" id="phonenumber" name="phonenumber" placeholder='Numéro de téléphone' required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'/>
                    </div>
                    <div className='flex flex-col g-8 grid-area-4153'>
                        <label className='text-12' htmlFor="officenumber">Numéro de l'entreprise*</label>
                        <input type="officenumber" id="officenumber" name="officenumber" placeholder="Numéro de l'entreprise" required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'/>
                    </div>
                    <div className='flex flex-col g-8 grid-area-4253'>
                        <label className='text-12' htmlFor="office">Bureau*</label>
                        <select id="office" name="office" required defaultValue="" className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16'>
                            <option value="" className='optionDisabled' disabled hidden>Bureau</option>
                            <option value="geneve">Bureau de Genève</option>
                            <option value="lausanne">Bureau de Lausanne</option>
                            <option value="zoug">Bureau de Zoug</option>
                            <option value="zurich">Bureau de Zurich</option>
                        </select>
                    </div>
                </div>
                <div className='textArea flex flex-col g-8'>
                    <label className='text-12' htmlFor="demande">Votre demande*</label>
                    <textarea type="demande" id="demande" name="demande" placeholder="Votre demande" required className='color-gray-800 bg-color-essential-050 border-color-primary-100 radius-8 p-12 text-16 minh-64 resize-none' />
                </div>
                <div className='flex flex-col items-start g-8'>
                    <Button link="contact" onClick={() => { setFormArea(!FormArea); window.scrollTo(0, 0) }} text="envoyer votre demande" className="text-16 py-12 px-32"/>
                    <p className='color-essential-300'>Notre équipe répond sous 24h</p>
                </div>
            </form>
        );
    } else {
        content = (
            <div className='thanksArea flex flex-col g-8'>
                <p className='font-700 text-20'>Merci d’avoir pris rendez-vous</p>
                <p className='color-essential-300'>Un expert Lodge vous rappellera sous 24h</p>
            </div>
        );
    }

    return (
        <section className="pt-96 pb-28 bg-secondary-000">
            <div className="max-w-laptop flex justify-between minh-684 relative z-0">
                <img src="/svg/pattern-primary-050.svg" alt="Pattern Home Page" className='absolute z--1 t--40 l--150'/>
                <div className='minw-589 flex flex-col g-32'>
                    <div>
                        <p className='font-georama font-600 text-18 letter-spacing-10 text-upper color-secondary-600'>démarrez votre projet</p>
                        <h1 className='font-700 text-48 color-primary-900'>Formulaire de contact</h1>
                    </div>
                    {content}
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col g-32'>
                        <div className='flex items-center g-12'>
                            <img src="/svg/star-primary-500.svg" alt="SVG Star" className='w-32'/>
                            <p className='font-600 text-18 color-essential-500'>Noté 4.9/5 par nos clients sur Google</p>
                        </div>
                        <div className='flex items-center g-12'>
                            <img src="/svg/partners.svg" alt="SVG Partners" className='w-32'/>
                            <p className='font-600 text-18 color-essential-500'>+ 70 multinationales partenaires</p>
                        </div>
                        <div className='flex items-center g-12'>
                            <img src="/svg/partners.svg" alt="SVG Partners" className='w-32'/>
                            <p className='font-600 text-18 color-essential-500'>+ 100 services de relocation/an</p>
                        </div>
                    </div>
                    <img src="/svg/alternative-text-2-primary-800.svg" alt="All you need is Lodge typo Golden Dreams" className='pb-40'/>
                </div>
            </div>
        </section>
    )
};

export default Contact;