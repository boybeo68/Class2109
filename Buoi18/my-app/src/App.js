import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './component/HeaderComponent';
import { TokenId } from './ultils/config';
import Body from './component/Body';

function App() {
  return (
    <div className="App">
      {/* <HeaderComponent />
      <p>{TokenId}</p> */}
      <Body />
    </div>
  );
}

export default App;
