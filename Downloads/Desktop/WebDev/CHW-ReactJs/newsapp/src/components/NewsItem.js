import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let {title,description,imageUrl,url} = this.props
        
        
        return (
            <div>
            {/* We pass style as an object */}
            <div className="card rounded-2" style={{ width: '18rem' }}>
              <img src={imageUrl?imageUrl:"https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"} className="card-img-top" alt=' Error'/>
              <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={url} target="_blank" className="btn btn-primary btn-sm">Read More</a>
              </div>
            </div>
          </div>
        )
    }
}
