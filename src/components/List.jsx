import React, { Component } from 'react';

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
    document.getElementById('scrollWindow').addEventListener('scroll', () => this.scrollState());
    this.setMax()
  }

  componentWillUnMount() {
    document.getElementById('scrollWindow').removeEventListener('scroll', () => this.scrollState());
  }

  setMax() {
    let max = this.state.scrollWindowHeight / this.state.productHeight + 2;
    this.setState({
      maxVisIndex: max,
    })
  }

  scrollState() {
    const el = document.getElementById('scrollWindow')
    let offset = el.scrollHeight - el.parentNode.clientHeight;
    console.log(el.scrollTop, this.state.scrollTop, this.state)
    // if (){}
  
  }

  render() {
    const list = [];
    if (this.props.data.length){
      for (let i = this.state.minVisIndex; i < this.state.maxVisIndex; i++) {
        const node = (
            <div key={this.props.data[i]} className="product">
              <div className="imageContainer">
                <img src={this.props.data[i].basic.image.thumbnail} alt="ImagePic">
                </img>
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
            {/* {this.props.data.slice(this.state.minVisIndex, this.state.maxVisIndex).map((i, index) => (
              <div key={index} className="product">
                <div className="imageContainer">
                  <img src={i.basic.image.thumbnail} alt="ImagePic">
                  </img>
                </div>
                {i.basic.name}              
              </div>
            ))} */}
            { list }
        </div>
      </div>
    )
  }
}

export default List;
