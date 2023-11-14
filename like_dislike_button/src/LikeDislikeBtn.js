import React, { Component } from 'react'
import './App.css';
export default class LikeDislikeBtn extends Component {

    constructor(props){
        super(props)
        this.state={
            like:0
        }
    }
    handleLike=()=>{
        if(this.state.like<20){
            this.setState({like:this.state.like+1});
        }
    }
    handleDislike=()=>{
        if(this.state.like>0){
            this.setState({like:this.state.like-1})
        }
    }

  render() {
    return (
      <div className='container'>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
        <button onClick={this.handleLike}><i class="fas fa-thumbs-up "></i> Like</button>
        <h1>{this.state.like}</h1>
        <button onClick={this.handleDislike} ><i class="fas fa-thumbs-down "></i> Like</button>
      </div>
    )
  }
}
