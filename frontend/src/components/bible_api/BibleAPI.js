import React, { Component } from 'react'
// import ScriptureAPI from 'scripture-api'
// const ScriptureAPI = require('scripture-api');
// const scripture_api = new ScriptureAPI('188d484b898780abe077fefa6641187d')
export default class BibleAPI extends Component {

  // componentDidMount () {
  //   const params = {
  //     language: 'eng',
  //     abbreviation: 'kjv',
  //     name: 'king james version'
  //   }

  //   scripture_api.getBibles()
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // }
  
  componentDidMount () {

    const bibles ={
      'kjv': 'de4e12af7f28f599-02'
    }


    URL = `https://api.scripture.api.bible/v1/bibles/${bibles['kjv']}/books/GEN/chapters`
    fetch(URL, {
      method: 'GET',
      headers: {
        'api-key': '188d484b898780abe077fefa6641187d',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }
  
    render() {
    return (
      <div>BibleAPI</div>
    )
  }
}
