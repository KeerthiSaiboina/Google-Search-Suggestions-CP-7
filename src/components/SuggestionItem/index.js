// Write your code here
import './index.css'

const SugguestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-list">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={onClickSuggestion}>
        <img
          alt="arrow"
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        />{' '}
      </button>
    </li>
  )
}

export default SugguestionItem
