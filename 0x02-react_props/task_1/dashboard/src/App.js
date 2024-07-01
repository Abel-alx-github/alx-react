import logo from './logo';

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Login from './Login/Login'
import Notification from '../src/notifications'

function App() {
  return (
    <>
      < Notification />
      <div className='App'>
          < Header />
          < Login />
          < Footer />
      </div>
    </>
)};


export default App;