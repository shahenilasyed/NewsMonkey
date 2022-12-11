import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: false
    }
  }

  async componentDidMount() {
    this.props.updateProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category.toLowerCase()}&apiKey=5cc6f8f5211547d58e0eec717071284c&page=${this.state.page - 1}&pagesize=15`;
    let data = await fetch(url);
    this.props.updateProgress(50);
    let parsedData = await data.json();
    this.props.updateProgress(70);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    this.props.updateProgress(100);

  }


  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category.toLowerCase()}&apiKey=5cc6f8f5211547d58e0eec717071284c&page=${this.state.page + 1}&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults });
    console.log(this.state.page + " " + this.state.articles.length + " " + this.state.totalResults);
  }

  render() {

    return (
      <div className='container' style={{marginTop:"75px"}}>
        <h1 className='text-center'>{`News Monk - Top ${this.props.category === 'general' ? '' : this.props.category} headlines`}</h1>
        <div className='container'>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={this.state.totalResults- 5 > this.state.articles.length  && <Spinner />}
          >
            <div className='container'>
              <div className='row'>

                {this.state.articles.map((element) => {
                  return <div key={element.url} className='col-md-4 my-3'>
                    <NewsItem title={element.title} desc={element.description} urlToImg={element.urlToImage} url={element.url} name={element.source.name} datePub={element.publishedAt} author={element.author} />
                  </div>
                })}

              </div>
            </div>
          </InfiniteScroll>
        </div>
      </div>

    )
  }
}
