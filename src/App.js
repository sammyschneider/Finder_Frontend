import React from 'react'
import './App.css';
import axios from 'axios';
import Form from './components/Form'
import Nav from './components/Nav'
import Card from './components/Card'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
import Landing from './components/Landing'

class App extends React.Component {
  state = {
    searchedData:[],
    favorites: [],
    favoritesData: [],
    food_id: '',
    showSearch: false,
    locationInput: '',
    radiusInput:'',
    termInput:'',
    showCards: false,
    id: 0,
    showFavorites: false,
    emptyArray: [],
    showLanding: true
  }
  // MAKE A REQUEST TO THE BACKEND TO PUSH TO FAVORITES
  componentDidMount = () => {
    axios.get('https://fnder.herokuapp.com/api/foods').then(
        (response) => {
            this.setState({
              favorites: response.data
            })
            this.yelpRESTById();
            console.log(this.state.favorites)

        }
    )

  }
  getData = () => {
    axios.get('https://fnder.herokuapp.com/api/foods').then(
        (response) => {
            this.setState({
              favorites: response.data
            })
            this.yelpRESTById();

        }
    )
  }

  // TOGGLE SEARCH FORM
  toggleSearch = (event) => {
    this.setState({
      showSearch: !this.state.showSearch,
      showFavorites: false,
      showLanding: false
    });
  }
  // MAKE GET REQUEST TO YELP API
   yelpREST = () => {
       axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search',
        {
         headers: {
           Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
         params: {
           location: this.state.locationInput , radius: this.state.radiusInput , term: this.state.termInput, limit: 20
        }
      }
    )
       .then((res) => {
        this.setState({
          searchedData: res.data.businesses,
          showCards: true,
          showSearch: false,
          food_id: res.data.businesses[this.state.id].id
        })
       console.log(this.state.searchedData);
       console.log(this.state.food_id);
    })
      .catch((err) => {
     console.log ('error')
   })
  }
  // MAKE A YELP REQUEST FOR FAVORITES
  yelpRESTById = () => {
    let emptyArray = this.state.favorites;
    for(let i = 0; i < this.state.favorites.length ;i++){

      axios.get("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/" + (this.state.favorites[i].food_id),
                   {
                    headers: {
                      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
                   }
                 }
               )
                  .then((res) => {

                  console.log(res.data);
                  emptyArray[i].key = res.data

               })
                 .catch((err) => {
                console.log ('error')
              })
    }
    this.setState({
      favoritesData: emptyArray
    })
    console.log(emptyArray);
 }
  // MAKE A POST TO THE BACKEND
  addFavoriteToBackend = () => {
    axios.post('https://fnder.herokuapp.com/api/foods',  {food_id: this.state.food_id}).then((res) => {
            this.componentDidMount()
          })
          console.log(this.state.food_id);
  }

  //CHANGE ID FOR CARDS
  changeID = (event) => {
    if (this.state.id >= 50) {
      this.setState({
        id: 0
      })
      this.yelpREST()
    } else {
      this.setState({
        id: this.state.id + 1
      })
      this.yelpREST()
    }
  }
  //RECORD THE ID FOR FAVORITES TAB
  recordFavorites = () => {
    this.state.favorites.push(this.state.food_id)
    console.log(this.state.favorites);
  }
  //WHEN A USER SWIPES RIGHT ON FOOD
  theSumOfTwoFunctions = () => {
    this.changeID()
    this.addFavoriteToBackend()
  }
  // CHANGE LOCATION INPUT BASED ON USER INPUT
  updateLocation = (event) => {
    this.setState({
      locationInput: event.target.value
    })
  }
  // CHANGE RADIUS INPUT BASED ON USER INPUT
  updateRadius = (event) => {
    if (event.target.value <= 1) {
      this.setState({
        radiusInput: 1609
      })
    } else if (event.target.value > 1 && event.target.value <= 2 ) {
      this.setState({
        radiusInput: 3219
      })
    } else if (event.target.value > 2 && event.target.value <= 3 ) {
      this.setState({
        radiusInput: 4828
      })
    } else if (event.target.value > 3 && event.target.value <= 4) {
      this.setState({
        radiusInput: 6437
      })
    } else if (event.target.value > 4 && event.target.value <= 5 ) {
      this.setState({
        radiusInput: 8047
      })
    } else if (event.target.value > 5 && event.target.value <= 6 ) {
      this.setState({
        radiusInput: 16093
      })
    } else if (event.target.value > 6 && event.target.value <= 10 ) {
      this.setState({
        radiusInput: 16093
      })
    } else if (event.target.value > 10 && event.target.value <=15 ) {
      this.setState({
        radiusInput: 24140
      })
    } else if (event.target.value > 15 && event.target.value <=20 ) {
      this.setState({
        radiusInput: 32187
      })
    } else if (event.target.value > 20 && event.target.value <=25 ) {
      this.setState({
        radiusInput: 32187
      })
    } else {
      this.setState({
        radiusInput: 32187
      })
    }
  }
  // CHANGE TYPE INPUT BASED ON USER INPUT
  updateTerm = (event) => {
    this.setState({
      termInput: event.target.value
    })
  }
  //SHOW FAVORITES TAB
  renderFavorites = () => {
    this.setState({
      showFavorites: !this.state.showFavorites,
      showSearch: false,
      showCards: false
    })
    console.log("here", this.state.favoritesData);
  }
  showApp = () => {
    this.setState({
      showLanding:false,
      showSearch:true
    })
  }

  render = () => {
    return (
      <div>

        <Nav toggleSearch={this.toggleSearch} renderFavorites={this.renderFavorites}/>

        {this.state.showLanding ? <Landing showApp={this.toggleSearch} /> : null}

        {this.state.showSearch?<Form submit={this.yelpREST} updateLocation={this.updateLocation} updateRadius={this.updateRadius}
        updateTerm={this.updateTerm}/> :null}

        {this.state.showCards ? <Card data={this.state.searchedData} id={this.state.food_id} changeID={this.changeID} recordFavorites={this.theSumOfTwoFunctions}/> : null}

        {this.state.showFavorites ? <Favorites favoritesData={this.state.favoritesData} yelpRESTById={this.getData}/> : null}


        <Footer />

      </div>
    )
  }
}

export default App;
