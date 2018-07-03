import React, { Component } from 'react';
import { List } from 'react-virtualized';

const productStyle = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: 'solid',
  borderWidth: '1px',
  borderColor: '#e0e0e0',
}

const imageContStyles = {
  marginLeft: '10px',
  marginRight: '5px',
  marginBottom: '5px',
  height: '60px',
  width: '60px',
}

const listStyles = {
    border: '1px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#DDD'
}

const ListEl = (props) => {
  const properties = {
    listHeight: 600,
    listRowHeight: 80,
    listWidth: 500,
  }

  const rowRenderer = ({
    key, 
    index,
    isScrolling,
    isVisible,
    style
  }) => (
  <div key={key} style={{...style, ...productStyle}}>
    <div>
      <img style={imageContStyles} src={props.data[index].basic.image.thumbnail} alt="ImagePic" />
    </div>
    {props.data[index].basic.name}              
  </div>
  )

  const {
    listHeight,
    listRowHeight,
    listWidth,
  } = properties

  return (
    <div>
      <List
        style={listStyles}
        width={listWidth}
        height={listHeight}
        rowCount={props.data.length}
        rowHeight={listRowHeight}
        rowRenderer={rowRenderer}
      />
    </div>
  )
}

export default ListEl;
