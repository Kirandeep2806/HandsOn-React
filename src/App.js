import './App.scss';
import { Header } from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FormContainer from './components/FormContainer';


function App() {
  // let data = myData;
  return (
    // You can apply styles on predefined tags but not on custom tags like "Header, Footer" which you created.
    <div className="App">
      <Header />
      <hr />
      <FormContainer />
      <hr />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
