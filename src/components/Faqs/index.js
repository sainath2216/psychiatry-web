// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'


const Faqs = props => {
    const { faqsList } = props

    return (
        <div className="app-container">
            <div className="bg-container">
                <div className="bg-card">
                    <ul className="faqs-list">
                        <h1 className="why-heading">
                            Why should you choose Ada Psychiatry?
                        </h1>
                        {faqsList.map(eachFaq => (
                            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Faqs
