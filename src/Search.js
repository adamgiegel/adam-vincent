import React, { Component } from 'react';

export default class Search extends Component{
  render(){
    return(
      <form>
      Search for message: <input value={this.props.searchInput} onChange={(event) => this.props.handleChange(event)} type="text"/>
      </form>
    )
  }
}
