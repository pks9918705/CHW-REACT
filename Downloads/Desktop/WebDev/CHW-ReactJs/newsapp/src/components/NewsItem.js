import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let {title,description} = this.props
        return (
            <div>
            {/* We pass style as an object */}
            <div className="card rounded-2" style={{ width: '18rem' }}>
              <img src="https://ichef.bbci.co.uk/news/1024/branded_news/5D8B/production/_129874932_gettyimages-1253790493-594x594.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </div>
          </div>
        )
    }
}
