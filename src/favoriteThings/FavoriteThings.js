import React, { Component } from 'react';


class FavoriteThings extends Component{
      constructor(props){
          super(props)
      }
      render(){
        return (
          <div>
          <h1>My Favorite sport is: {this.props.favoriteSport}</h1>
          
          </div>
        );

      }
}
export default FavoriteThings;
