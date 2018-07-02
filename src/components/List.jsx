import React, { Component } from 'react';
import { Grid } from 'react-virtualized';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      productHeight: 80,
      scrollWindowHeight: 480,
      minVisIndex: 0,
      maxVisIndex: 0,
      scrollTop: 0,
    }
  }

  componentDidMount() {
    document.getElementById('scrollWindow').addEventListener('scroll', this.scrollState);
    this.setMax()
  }

  componentWillUnMount() {
    document.getElementById('scrollWindow').removeEventListener('scroll', this.scrollState);
  }

  setMax() {
    let max = this.state.scrollWindowHeight / this.state.productHeight + 4;
    this.setState({
      maxVisIndex: max,
    })
  }

  debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this;
      var args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.call()
      };
  
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
    
      if (callNow) func.call();
    };
  }

  scrollState = debounce(() => {
    const el = document.getElementById('scrollWindow')
    let offset = el.scrollHeight - el.parentNode.clientHeight;
    console.log(el.scrollTop, this.state.scrollTop, this.state)
    // console.log(this.state.scrollTop + 160)
    if (el.scrollTop >= 70 && this.state.maxVisIndex < this.props.data.length){
      this.setState({
        maxVisIndex: this.state.maxVisIndex += 2,
        minVisIndex: this.state.minVisIndex += 2,
        scrollTop: el.scrollTop
      })
    }

    if (el.scrollTop < 20 && this.state.minVisIndex > 0) {
      this.setState({
        minVisIndex: this.state.minVisIndex -= 2,
        maxVisIndex: this.state.maxVisIndex -= 2,
      })
    }
  
  }, 100)

  render() {
    const list = [];
    if (this.props.data.length){
      for (let i = this.state.minVisIndex; i < this.state.maxVisIndex; i++) {
        const node = (
            <div key={this.props.data[i]} className="product">
              <div className="imageContainer">
                <img src={this.props.data[i].basic.image.thumbnail} alt="ImagePic" />
              </div>
              {this.props.data[i].basic.name}              
            </div>
          )
        list.push(node)
      }
    }

    return (
      <div>
        <div id="scrollWindow">
            { list }
        </div>
      </div>
    )
  }
}

export default List;
