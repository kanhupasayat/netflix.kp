
import './App.css';
import Fast from './Comm/Fast';
import For from './Comm/For';
import Line from './Comm/Line';
import Sec from './Comm/Sec';
import Thrd from './Comm/Thrd';
import Last from './Comm/Last';
import Footer from './Comm/Footer';
import { WiAlien } from "react-icons/wi";
import { AiFillCaretDown } from "react-icons/ai";




function App() {
  return (
    <>
    <div className="App">




      <div className="nav">
        <div className="div">
          <img className='logoimg' src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

        </div>
        <div className="list">
          <ul>
            <li className='icon1'> <WiAlien className='icon' /> English  <  AiFillCaretDown className='icon2' /></li>
            <li className="btn">SING IN</li>
          </ul>
        </div>
      </div>



      <div className="header">
        <h1>
Unlimited movies, TV shows and more</h1>
<p>
Unlimited movies, TV shows and more</p>
<p>Ready to watch? Enter your email to create or restart your membership</p>
<div className="serch">
<input type="email" className="form__field" placeholder="Your E-Mail Address" />
			<button type="button" className="btn1 btn--primary btn--inside uppercase">Get Started</button>
</div>
      </div>






    </div>
    <Line />
    <Fast />
    <Line />
    <Sec />
    <Line />
    <Thrd />
    <Line />
    <For />
    <Line />
    <Last />
    <Line />
    <Footer />
    <Line />



    </>
  );
}

export default App;
