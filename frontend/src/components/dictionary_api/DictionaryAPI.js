import React, { Component } from 'react'

export default class DictionaryAPI extends Component {

  state = {
    word: '',
    definition: ''
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()

    this.getDefinition(this.state.word)
  }

  getDefinition (word) {
    URL = `https://dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=c1e06fe3-f737-4513-8e9c-237b5f24419f`
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({
      definition: data[0]['shortdef'][0]
    }))
  }

  render() {
    return (
      <div className='dictionary-container'>
        <p>Dictionary</p>
        <form className='dictionary-form' onSubmit={this.handleOnSubmit}>
          <input 
            type='text' 
            name='word'
            autoComplete='off' 
            value={this.state.word}
            onChange={this.handleOnChange}
          />
          <input type='submit' value='Search'/>
        </form>
        {/* <p>Word: {this.state.word}</p> */}
        <p>Definition: </p>
        <p className='dictionary-definition'>{this.state.definition}</p>
        <p>Powered by: <a href='https://www.merriam-webster.com/' target='_blank' rel='noopener noreferrer'>Merriam-Webster</a></p>
      </div>
    )
  }
}
