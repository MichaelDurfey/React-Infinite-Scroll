import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Navbar';
import './index.css';
import { callWalmart } from './httpHelpers/walmart'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      requestSent: false,
      recordHeight: 500,
      recordsPerBody: 60,
      total: 0,
      visibleStart: 0,
      visibleEnd: 0,
      displayStart: 0,
      displayEnd: 0,
      scroll: scroll
    }
  }

  scrollState(scroll){
    var visibleStart = Math.floor(scroll / this.state.recordHeight);
    var visibleEnd = Math.min(visibleStart + this.state.recordsPerBody, this.state.total - 1);

    var displayStart = Math.max(0, Math.floor(scroll / this.state.recordHeight) - this.state.recordsPerBody * 1.5);
    var displayEnd = Math.min(displayStart + 4 * this.state.recordsPerBody, this.state.total - 1);

    this.setState({
        visibleStart: visibleStart,
        visibleEnd: visibleEnd,
        displayStart: displayStart,
        displayEnd: displayEnd,
        scroll: scroll
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleOnScroll);
    this.fetchData()
  }

  componentWillUnMount() {
    window.removeEventListener('scroll', this.handleOnScroll);
  }

  queryFetch() {
    if (this.state.requestSent) {
      return;
    }

    setTimeout(this.fetchData, 2000);

    this.setState({requestSent: true});
  }

  fetchData() {
    callWalmart()
  }

  handleOnScroll(event){
    var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    var scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
    var clientHeight = document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    console.log(scrollTop, ScrollHeight, clientHeight, event)
    if (scrolledToBottom) {
      this.queryFetch();
    }
  }

  render() {
    return (
    <div>
      <NavBar />
      <div className="container">
        Hello React!!!
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// module.hot.accept();
