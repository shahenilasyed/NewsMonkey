

import React, { Component } from 'react'

export  class Newsitem extends Component {
  render() {
    let {title,description,imgUrl , newsUrl ,author,date,source}=this.props; 
    return (
      <div className='my-3' >
        <div className="card">
        <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>
    {source}

  </span>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By{!author?"unknown": author} on {date} </small></p>
  
    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark ">Read More</a>
  </div>
</div>

  
      </div>
    )
  }
}