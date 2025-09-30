import '../styles/contact.css';

const Contact = () => {
    return (
        <div className="formSection">
            <img src="/svg/pattern-primary-050.svg" alt="Pattern Home Page"/>
            <div className="max-w-laptop flex justify-between g-64">
                <div className='flex flex-col g-32'>
                    <div className='formTitle'>
                        <p className='font-georama font-600 text-18 letter-spacing-10 text-upper'>démarrez votre projet</p>
                        <h1 className='font-700 text-48'>Formulaire de contact</h1>
                    </div>
                    <form className='formFields'>
                        <div>
                            <label for="nom">Nom</label>
                            <input id="nom" name="nom" type="text" placeholder="Prénom et nom" required />
                        </div>
                    </form>
                </div>
                <div className='formContainer'>
                    <div className='flex flex-col justify-between g-32'>
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
        </div>
    )
};

export default Contact;