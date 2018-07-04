import React from 'react';
import ReactDOM from 'react-dom';
import Input from './components/Search';
import List from './components/List';
import './index.css';
import { callWalmart } from './httpHelpers/walmart'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      totalCount: 0,
      page: 0,
      query: '',
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(query, page) {
    if (query) {
      callWalmart(query, page)
      .then(data => {
        this.setState({
          data: data.data.products,
          totalCount: data.data.totalCount,
          query: query,
          page,
        })
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      query = this.state.query;
      callWalmart(query, page)
      .then(data => {
        this.setState(
          (prev) => (
            {
              data: prev.data.concat(data.data.products),
              totalCount: data.data.totalCount,
              page,
            }
          )
        )
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  fetchMoreData(stopIndex) {
    // 20 is number of products in each page response
    let page = Math.floor(stopIndex / 20);
    if (page > this.state.page || this.state.page === undefined) {
      this.fetchData(null, page);
      this.setState({page})
    }
  }

  handleSearch = (query) => {
    this.fetchData(query)
  }

  render() {
    return (
    <div>
      <div className="container">
        <h3>Welcome to Walmart!</h3>
        <Input handleSubmit={this.handleSearch}/>
        <List 
          fetchMoreData={(stopIndex) => this.fetchMoreData(stopIndex)} 
          data={this.state.data}
          totalCount={this.state.totalCount}
        />
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
