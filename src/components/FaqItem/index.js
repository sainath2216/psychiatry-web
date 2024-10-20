import {Component} from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import './index.css'


const pluseIcon =
    <h1><FaPlus /></h1>

const minusIcon =
    <h1><FaMinus /></h1>


class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <p className="answer">{answerText}</p>
          <hr className="line" />
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveIcon = () => {
    const {isActive} = this.state
    const icon = isActive ? minusIcon : pluseIcon
    

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <h1>{icon}</h1>
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="faq-item">
        <div className="q-container">
        {this.renderActiveIcon()}
        
          <h1 className="question">{questionText}</h1>

        </div>
        <hr className="line2" />
        {this.renderAnswer()}
      </li>
    )
  }
}

export default FaqItem
