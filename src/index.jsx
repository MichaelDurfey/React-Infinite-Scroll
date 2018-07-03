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
      .catch(err => {
        console.log(err);
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
        <h3>Welcome to Walmart!</h3>
        <Input handleSubmit={this.handleSearch}/>
        <List data={this.state.data}/>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// module.hot.accept();
