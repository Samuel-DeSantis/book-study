import React, { Component } from 'react'

export default class BibleAPI extends Component {
  
  componentDidMount () {
    URL = `https://api.scripture.api.bible/v1/bibles`
    fetch(URL, {header: {'api-key': '188d484b898780abe077fefa6641187d'}})
    .then(response => response.json())
    .then(data => console.log(data))
  }
  
    render() {
    return (
      <div>BibleAPI</div>
    )
  }
}
