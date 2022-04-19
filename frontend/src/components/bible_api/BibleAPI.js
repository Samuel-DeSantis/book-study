import React, { Component } from 'react'
// import ScriptureAPI from 'scripture-api'
// const ScriptureAPI = require('scripture-api');
// const scripture_api = new ScriptureAPI('188d484b898780abe077fefa6641187d')
export default class BibleAPI extends Component {

  state = {
      bibles: []
  }

  // componentDidMount () {
  //   URL = `https://api.scripture.api.bible/v1/bibles`
  //   fetch(URL, {
  //     method: 'GET',
  //     headers: {
  //       'api-key': '188d484b898780abe077fefa6641187d',
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     let bibles = []
  //     data.data.forEach(bible => {
  //     if (bible.language.id === 'eng') {
  //       // console.log(
  //       bibles.push({
  //         'id': bible.id,
  //         'name': bible.name,
  //         'abbr': bible.abbreviation,
  //         'language': bible.language.name
  //       })
  //     }
  //   })
  //   this.setState({
  //     bibles: bibles
  //   })
  //   console.log(this.state.bibles)
  //   })
  // }

  fetchBibleAPI () {
    URL = `https://api.scripture.api.bible/v1/bibles`
    fetch(URL, {
      method: 'GET',
      headers: {
        'api-key': '188d484b898780abe077fefa6641187d',
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
  }

  availableBibles (obj) {
    let bibles = []
    obj.data.forEach(bible => {
      if (bible.language.id === 'eng') {
        // console.log(
        bibles.push({
          'id': bible.id,
          'name': bible.name,
          'abbr': bible.abbreviation,
          'language': bible.language.name
        })
      }
    })
    return bibles
  }

  render() {
    return (
      <div>
        <p>BibleAPI</p>
      </div>
    )
  }
}
