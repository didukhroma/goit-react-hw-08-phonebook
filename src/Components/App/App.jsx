import AppBar from '../AppBar';
import Container from '../Container';
import Router from '../Router';

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Router />
      </Container>
    </>
  );
};

export default App;
