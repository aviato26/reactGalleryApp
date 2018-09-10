import React, { Component } from 'react';
import './index.css';
import Search from './components/search';
import Nav from './components/nav';
import Gallery from './components/photocontainer';
import apiKey from './config.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pics: []
    }
  }

// once the components are mounted make api call
componentDidMount(){
  this.searchQuery()
}

// function for making api call for photos
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

  // function for custom searching (the match object has several properties on it including the url params which are put into the searchQuery function)
  searchRoute = ({match}) => {
   this.searchQuery(match.params.q);
   return true
 }

/* once the api call is made it is set to our state object which is then passed
   down to our components via props which they will then re-render */

 home = () => {
   return(
     <div className='App'>
       <h3>For custom search type search in URL bar</h3>
       <Nav clickLinks={this.searchQuery}/>
       <Gallery data={this.state.pics}/>
     </div>
   )
 }

 searchLink = () => {
   return(
     <div className='App'>
       <Search searchFn={this.searchQuery} />
       <Nav clickLinks={this.searchQuery}/>
       <Gallery data={this.state.pics}/>
     </div>
   )
 }


  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Switch>
            <Route path='/search' component={this.searchLink} />
            <Route path='/' component={this.home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
