import './App.scss';
import { Header } from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FormContainer from './components/FormContainer';
import { Route, Routes } from 'react-router-dom';


function ContentContainer() {
  // let data = myData;
  return (
    // You can apply styles on predefined tags but not on custom tags like "Header, Footer" which you created.
    <div className="center-content">
      <Header />
      <hr />
      <Content />
      <Footer />
    </div>
  )
}



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ContentContainer />} />
        <Route path='/form' element={<FormContainer />} />
      </Routes>
    </>
  )
}

export default App;
