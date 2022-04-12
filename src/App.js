import './App.scss';
import { Header } from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const data = ["Kiran", "Dileep", "Sujatha"]
  return (
    // You can apply styles on predefined tags but not on custom tags like "Header, Footer" which you created.
    <div className="App">
      <Header />
      <ul>
        {data.map(item => <li>{item}</li>)}
      </ul>
      <Content title="Food" text="industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was" />
      <Content title="Food" text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has" />
      <Content title="Animal" text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur" />
      <Footer />
    </div>
  );
}

export default App;
