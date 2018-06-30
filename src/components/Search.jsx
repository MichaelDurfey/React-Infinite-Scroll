import React, { Component } from 'react';

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
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }
}


export default Search;
