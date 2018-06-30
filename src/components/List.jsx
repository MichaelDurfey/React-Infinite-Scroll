import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super()
    this.scrollEl = React.createRef();
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollState);
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.scrollState);
  }

  scrollState() {
    const el = this.scrollEl;
    console.log(el)
  }

  render() {
    return (
      <div>
        <div id="scrollWindow" ref={this.scrollEl}>
            {this.props.data.map(i => <div className="product">
              {i.basic.name}
              <image src={i.basic.image.thumbnail} />
              </div>)}
        </div>
      </div>
    )
  }
}

export default List;
