import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super()
    this.scrollEl = React.createRef();
    this.productHeight = 80;
    this.scrollWindowHeight = 480;
  }
  componentDidMount() {
    document.getElementById('scrollWindow').addEventListener('scroll', this.scrollState);
  }

  componentWillUnMount() {
    document.getElementById('scrollWindow').removeEventListener('scroll', this.scrollState);
  }

  scrollState() {
    const el = document.getElementById('scrollWindow')
    const 
  }

  render() {
    return (
      <div>
        <div id="scrollWindow">
            {this.props.data.map((i, index) => (
              <div key={index} className="product">
                <div className="imageContainer">
                  <img src={i.basic.image.thumbnail} alt="ImagePic">
                  </img>
                </div>
                {i.basic.name}              
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default List;
