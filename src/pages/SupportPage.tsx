import { useState } from "react";
import { validateEmail } from '../utils/validateEmail'
import '../styles/components/DataPagesComponents.scss'
import fon from '../images/fon.png';
import HelpWindow from "../components/design/HelpWindow/HelpWindow";

const SupportPage = () => {
  const [email, setEmail] = useState('');
  const [ask, setAsk] = useState('');

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorAsk, setIsErrorAsk] = useState(false);

  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const changeAsk = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAsk(e.target.value);
  }

  const onClickBtn = () => {
    if(ask.length <= 15) {
      setIsErrorAsk(true);
      setTimeout(() => {
        setIsErrorAsk(false);
      }, 1500)
    }
    if(!validateEmail(email)) {
      setIsErrorEmail(true);
      setTimeout(() => {
        setIsErrorEmail(false);
      }, 1500)
    }
    if(validateEmail(email) && ask.length > 15) {
      setIsErrorAsk(false);
      setIsErrorEmail(false);


      console.log('logic');
    }
  }
  
  return (
    <div className="dpc _Ibg">
      <img src={fon} alt="background support" />
      <div className="_Container">
        <div className="dpc_body">
          <div className="dpc_panel">
            <div className="dpc_panel_info">

              <div className="dpc_title">Need help?</div>

              <div className="dpc_input_body">
                <input type="text" className='dpc_input' placeholder='Email address' onChange={changeEmail}/>
                {isErrorEmail ? <HelpWindow title="Invalid email address."/> : <></>}
              </div>

              <div className="dpc_input_body">
                <input type="text" className='dpc_input' placeholder='Your ask' onChange={changeAsk}/>
                {isErrorAsk ? <HelpWindow title="Ask need be more 20 symbols."/> : <></>}
              </div>

              <button className="dpc_btn" onClick={onClickBtn}>Ask</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SupportPage