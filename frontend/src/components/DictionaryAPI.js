import React, { Component } from 'react'

export default class DictionaryAPI extends Component {

  componentDidMount () {
    URL = 'https://dictionaryapi.com/api/v3/references/collegiate/json/purpose?key=c1e06fe3-f737-4513-8e9c-237b5f24419f'
    fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div>DictionaryAPI</div>
    )
  }
}
