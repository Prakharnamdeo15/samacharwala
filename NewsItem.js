import React, { Component } from 'react'
// import React from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,urlToImage,url}=this.props
    return (
      <div><div className="card my-4">
      <img src={urlToImage} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}...</h5>
        <p className="card-text">{description}...</p>
        <a href={url} className="btn btn-sm btn-secondary">read more</a>
      </div>
    </div></div>
    )
  }
}

export default NewsItem