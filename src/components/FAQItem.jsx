const FAQItem = ({title, content}) => {
    return (
        <details className="flex flex-col bg-secondary-000 radius-12 border-color-primary-100">
            <summary className="flex justify-between items-center px-24 cursor-pointer minh-74">
                <p className="font-600 text-18">{title}</p>
                <img src="/svg/plus.svg" alt="SVG Plus" className="maxw-16 transition-03-ease-in"/>
            </summary>
            <div className="detailsContent flex flex-col g-32 px-24 pt-12 pb-24">
                {content}
            </div>
        </details>
    )
};

export default FAQItem;