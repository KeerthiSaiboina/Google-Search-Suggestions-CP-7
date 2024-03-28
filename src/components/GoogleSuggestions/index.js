// Write your code here
import './index.css'

import {Component} from 'react'
import SugguestionItem from '../SugguestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }
  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }
  render() {
    const {searchInput} = this.state
    const {sugguestionList} = this.props
    const searchResults = sugguestionList.filter(eachSuggestion =>
      eachSuggestion.sugguestion
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase()),
    )
    return (
      <div className="app-container">
        <div className="suggestion-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="image"
            alt="image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="search-logo"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search Google"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <ul className="suggestion-list">
            {searchResults.map(eachSuggestion => (
              <SugguestionItem
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                updateSearchInput={this.updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
