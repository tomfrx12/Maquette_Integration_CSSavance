import '../styles/contact.css';
import Button from '../components/Button';
import { useState } from 'react';

function Contact() {
    const [FormArea, setFormArea] = useState(true);

    let content;
    if (FormArea) {
        content = (
            <form className='formFields flex flex-col g-16'>
                <div className='informationFields'>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="who">Vous êtes*</label>
                        <select id="who" name="who" required defaultValue="">
                            <option value="" className='optionDisabled' disabled hidden>Vous êtes</option>
                            <option value="entreprise">Une entreprise</option>
                            <option value="particulier">Un particulier</option>
                            <option value="proprietaire">Un propriétaire</option>
                        </select>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="gender">Civilité*</label>
                        <select id="gender" name="gender" required defaultValue="">
                            <option value="" className='optionDisabled' disabled hidden>Civilité</option>
                            <option value="Monsieur">Monsieur</option>
                            <option value="Madame">Madame</option>
                        </select>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="firstname">Prénom*</label>
                        <input type="text" id="firstname" name="firstname" placeholder='Prénom' required/>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="surname">Nom*</label>
                        <input type="text" id="surname" name="surname" placeholder='Nom' required/>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="email">Email*</label>
                        <input type="email" id="email" name="email" placeholder='Email' required/>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="phonenumber">Numéro de téléphone*</label>
                        <input type="phonenumber" id="phonenumber" name="phonenumber" placeholder='Numéro de téléphone' required/>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="officenumber">Numéro de l'entreprise*</label>
                        <input type="officenumber" id="officenumber" name="officenumber" placeholder="Numéro de l'entreprise" required/>
                    </div>
                    <div className='flex flex-col g-8'>
                        <label className='text-12' htmlFor="office">Bureau*</label>
                        <select id="office" name="office" required defaultValue="">
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
                    <textarea type="demande" id="demande" name="demande" placeholder="Votre demande" required />
                </div>
                <div className='formButtonText flex flex-col items-start g-8'>
                    <Button link="contact" onClick={() => setFormArea(!FormArea)} text="envoyer votre demande" className="text-16 buttonContact"/>
                    <p>Notre équipe répond sous 24h</p>
                </div>
            </form>
        );
    } else {
        content = (
            <div className='thanksArea flex flex-col g-8'>
                <p className='font-700 text-20'>Merci d’avoir pris rendez-vous</p>
                <p>Un expert Lodge vous rappellera sous 24h</p>
            </div>
        );
    }

    return (
        <section className="formSection">
            <div className="max-w-laptop flex justify-between">
                <img src="/svg/pattern-primary-050.svg" alt="Pattern Home Page" className='pattern'/>
                <div className='form flex flex-col g-32'>
                    <div className='formTitle'>
                        <p className='font-georama font-600 text-18 letter-spacing-10 text-upper'>démarrez votre projet</p>
                        <h1 className='font-700 text-48'>Formulaire de contact</h1>
                    </div>
                    {content}
                </div>
                <div className='formContainer flex flex-col justify-between'>
                    <div className='flex flex-col g-32'>
                        <div className='ratingContainer flex items-center'>
                            <img src="/svg/star-primary-500.svg" alt="SVG Star" />
                            <p className='font-600 text-18'>Noté 4.9/5 par nos clients sur Google</p>
                        </div>
                        <div className='ratingContainer flex items-center'>
                            <img src="/svg/partners.svg" alt="SVG Partners" />
                            <p className='font-600 text-18'>+ 70 multinationales partenaires</p>
                        </div>
                        <div className='ratingContainer flex items-center'>
                            <img src="/svg/partners.svg" alt="SVG Partners" />
                            <p className='font-600 text-18'>+ 100 services de relocation/an</p>
                        </div>
                    </div>
                    <img src="/svg/alternative-text-2-primary-800.svg" alt="All you need is Lodge typo Golden Dreams" />
                </div>
            </div>
        </section>
    )
};

export default Contact;