import { Component } from 'react';
import AppBar from '../AppBar';
import Container from '../Container';
import Router from '../Router';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Container>
          <Router />
        </Container>
      </>
    );
  }
}

export default App;
