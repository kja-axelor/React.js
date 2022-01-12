import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Cart from "./components/Cart/Cart";
import Data from "./components/Data/Data";
function App() {
  return (
    <div>
      <Header />
      <div className='row'>
        <Items items={Data}/>
        <Cart />
      </div>
    </div>
  );
}

export default App;
