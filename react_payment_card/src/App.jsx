import logo from './logo.svg';
import './App.css';

import Payment from './components/Payment';

import AppleIcon from '@mui/icons-material/Apple';

function App() {

  const values = {date:"22/10/2022",heading:"Amazon Gift Voucher",}

  return (
    <div className="App">
      <header className="App-header">

        <Payment {...values}></Payment>
      </header>
    </div>
  );
}

export default App;
