import React, { Component } from 'react'

export default class LikeDislikeBtn extends Component {

    constructor(props){
        super(props)
        this.state={
            like:0
        }
    }
    handleLike=()=>{
        if(this.state.like<10){
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
      <div style={{background:"red"}}>
        <button onClick={this.handleLike}>Like</button>
        <h1>{this.state.like}</h1>
        <button onClick={this.handleDislike}>Dislike</button>
      </div>
    )
  }
}
