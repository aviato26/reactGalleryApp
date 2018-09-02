import React, { Component } from 'react';
import './index.css';
import Search from './components/search';
import Nav from './components/nav';
import Gallery from './components/photocontainer';
import { Config } from './config.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pics: []
    }
  }

  componentDidMount(){
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${Config.key}&tags=cats+dogs&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pics: data.photos.photo
      })
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
          <Search />
          <Nav />
          <Gallery data={this.state.pics[0]}/>
      </div>
    );
  }
}

export default App;
