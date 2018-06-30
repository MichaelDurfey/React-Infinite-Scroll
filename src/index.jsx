import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import Input from './components/Search';
import List from './components/List';
import './index.css';
import { callWalmart } from './httpHelpers/walmart'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      requestSent: false,
      recordHeight: 50,
      recordsPerBody: 10,
      total: 0,
      visibleStart: 0,
      visibleEnd: 0,
      displayStart: 0,
      displayEnd: 0,
      scroll: scroll
    }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(query) {
    callWalmart(query)
      .then(data => {
        this.setState({data: data.data.products})
      })
  }

  handleSearch = (query) => {
    this.fetchData(query)
  }

  render() {
    return (
    <div>
      <NavBar />
      <div className="container">
        <Input handleSubmit={this.handleSearch}/>
        <List data={this.state.data}/>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// module.hot.accept();
