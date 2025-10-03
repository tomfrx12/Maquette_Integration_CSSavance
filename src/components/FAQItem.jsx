const FAQItem = ({title, content}) => {
    return (
        <details className="flex flex-col">
            <summary className="flex justify-between items-center">
                <p className="font-600 text-18">{title}</p>
                <img src="/svg/plus.svg" alt="SVG Plus" />
            </summary>
            <div className="detailsContent flex flex-col g-32">
                {content}
            </div>
        </details>
    )
};

export default FAQItem;