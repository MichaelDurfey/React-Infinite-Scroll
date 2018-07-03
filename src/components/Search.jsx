import React, { Component } from 'react';

const inputStyling = {
  width: '200px',
  borderRadius: '5px',
  marginBottom: '5px',
}

class Search extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    }
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleSubmit = () => {
    this.props.handleSubmit(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <input
          style={inputStyling}
          type="text" 
          value={this.state.value}
          autoFocus
          onChange={this.handleChange}
          placeholder='Search Product'
          onKeyPress={event => {
            if (event.key === 'Enter') {
              this.handleSubmit()
            }
          }}
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}


export default Search;
