import React, { Component } from "react";
import like from '../assets/icons/like.png'
import unlike from '../assets/icons/unlike.png'
import '../App.css';

class Like extends Component {
  state = { liked: false };
  toggle = () => {
    let localLiked = this.state.liked;
  
    // Toggle the state variable liked
    localLiked = !localLiked;
    this.setState({ liked: localLiked });
  };
  render() {
    return (
      <div className="like-container">
        <center>
          <div
            className="like-container"
            onClick={() => this.toggle()}
          >
            {this.state.liked === false ? (
                <img src={unlike} alt="unlike"></img>
            ) : (
                <img src={like} alt="like"></img>
            )}
          </div>
        </center>
      </div>
    );
  }
}
  
export default Like;