import React, { Component } from 'react';

class Movie extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Runtime: {this.props.hours} hrs, {this.props.minutes} min</p>
                <div className="movie" style={{backgroundImage: `url(${this.props.imgUrl})`}}></div>
            </div>
        )
    }
}

export default Movie