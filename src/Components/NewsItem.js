import React, { Component } from 'react'

export default class NewsItem extends Component {

    static defaultState = {
        urlToImg:"https://www.businessinsider.in/photo/91093962/25-40-of-people-with-covid-19-develop-long-covid-reporting-symptoms-that-affect-multiple-organs-and-cause-mental-health-issues-study.jpg?imgsize=41070"
    }

    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={this.props.urlToImg === null ? "https://www.businessinsider.in/photo/91093962/25-40-of-people-with-covid-19-develop-long-covid-reporting-symptoms-that-affect-multiple-organs-and-cause-mental-health-issues-study.jpg?imgsize=41070":this.props.urlToImg} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <h6><span className="badge bg-danger">{this.props.name}</span></h6>
                        <p className="card-text">{this.props.desc}</p>
                        <p className="card-text"><small className="text-muted">By {this.props.author === null ? "Unknown":this.props.author} on {new Date(this.props.datePub).toGMTString()}</small></p>

                        <a href={this.props.url} target="_blank" rel="noreferrer" className="btn btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}
