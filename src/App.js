import React, { Component } from 'react';
import './index.css';
import Search from './components/search';
import Nav from './components/nav';
import Gallery from './components/photocontainer';
import apiKey from './config.js';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pics: []
    }
  }

  componentDidMount(){
    this.searchQuery()
  }

  searchQuery = (data = 'cats,dogs,birds') => {
    fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${data}&format=json&nojsoncallback=1&per_page=24`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pics: data.photos.photo
      })
    })
    .catch(err => console.log(err))
  }

  searchRoute = ({match}) => {
    this.searchQuery(match.params.q);
    return true
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Search searchFn={this.searchQuery}/>
            <Nav clickLinks={this.searchQuery}/>
            <Gallery data={this.state.pics}/>
            <Route path='/search/:q' render={this.searchRoute} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
