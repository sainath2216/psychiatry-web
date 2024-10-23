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
