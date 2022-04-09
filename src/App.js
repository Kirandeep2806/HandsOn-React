import './App.scss';
import { Header } from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    // You can apply styles on predefined tags but not on custom tags like "Header, Footer" which you created.
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
