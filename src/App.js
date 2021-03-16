import './App.css';
import { Header } from './components/Header/Header';
import { PopularContainer } from './containers/PopularContainer/PopularContainer';

function App() {
  return (
    <>
      <Header/>
      <div className="container" >
        <PopularContainer />
      </div>
    </>
  );
}

export default App;
