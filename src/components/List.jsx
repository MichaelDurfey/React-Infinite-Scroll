import React, { Component } from 'react';
import { List } from 'react-virtualized';

const productStyle = {
  display: 'flex',
  alignItems: 'center',
  border: 'solid',
  borderWidth: '1px',
  borderColor: 'black',
}

const imageContStyles = {
  marginLeft: '10px',
  marginRight: '5px',
  marginBottom: '5px',
  height: '60px',
  width: '60px',
}

class ListEl extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listHeight: 300,
      listRowHeight: 50,
      overscanRowCount: 10,
      scrollToIndex: undefined,
      showScrollingPlaceholder: false,
      useDynamicRowHeight: false,
    }
  }


  rowRenderer = ({
    key, 
    index,
    isScrolling,
    isVisible,
    style
  }) => (
    <div key={key} className="product">
      <div className="imageContainer">
        <img src={this.props.data[index].basic.image.thumbnail} alt="ImagePic" />
      </div>
      {this.props.data[index].basic.name}              
    </div>
    )

  render() {
    return (
      <div>
        <List 
          width={500}
          height={600}
          rowCount={this.props.data.length}
          rowHeight={20}
          rowRenderer={this.rowRenderer}
        />
      </div>
    )
  }
}

export default ListEl;
