import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="main-body">
      <div className="main-container">
        <Header></Header>
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
