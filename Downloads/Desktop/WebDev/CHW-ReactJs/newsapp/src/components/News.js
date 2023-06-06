import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    //array holding articles
     
    constructor() {
        super()
        console.log('this is News constructor');
        //state are changable but props are read only
        this.state = {
            articles: [],
            loading: false
        }


    }

    async componentDidMount(){
        console.log('cdm');
        let url="https://newsapi.org/v2/everything?q=apple&from=2023-06-05&to=2023-06-05&sortBy=popularity&apiKey=18690ece059a475d9b9f21a2a73f06d2"
        let data=await fetch(url)
        let parsedData=await data.json(data)
        console.log(parsedData)
        this.setState({ articles:parsedData.articles})
        
    }
    render() {
        return (
            <div className='container my-3 mx-10'>
                <h1>Today's Top News</h1>


                <div className="row  ">
                    {this.state.articles.map((article ) => {

                        return <div   className="col-md-4 my-3 ">
                            <NewsItem title={article.title.slice(0,45)} description= {article.content.slice(0,45)} imageUrl={article.urlToImage}  url={article.url}/>

                        </div>
                    })}


                </div>


            </div>
        )
    }
}
