import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  state = {
    progress: 0
  }


  updateProgress = (number) => {
    console.log(this.state.progress);
    this.setState({ progress: number });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            length='3'
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />

          <Routes>
            <Route exact path="/" element={<News updateProgress={this.updateProgress} key={"gen"} category="general" />} />
            <Route exact path="/business" element={<News updateProgress={this.updateProgress} key={"bus"} category="Business" />} />
            <Route exact path="/entertainment" element={<News updateProgress={this.updateProgress} key={"ent"} category="Entertainment" />} />
            <Route exact path="/health" element={<News updateProgress={this.updateProgress} key={"hea"} category="Health" />} />
            <Route exact path="/sports" element={<News updateProgress={this.updateProgress} key={"spo"} category="Sports" />} />
            <Route exact path="/technology" element={<News updateProgress={this.updateProgress} key={"tech"} category="Technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
