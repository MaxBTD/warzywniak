import './App.css';
import HeaderTitle from './headerTitle';
import HeaderList from './headerList';
import Stopka from './stopka';
import ProductsList from './productsList';

function App() {
  return (
    <div className="App">
      <HeaderList />
      <HeaderTitle />
      <ProductsList />
      <Stopka />
    </div>
  );
}

export default App;
