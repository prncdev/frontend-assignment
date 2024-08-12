import { BrowserRouter as Router } from 'react-router-dom';
import 'rsuite/dist/rsuite-no-reset.min.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Section } from './components/Section';

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <Main>
          <Section />
        </Main>
      </main>
    </Router>
  );
}

export default App;
