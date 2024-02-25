import '../styles/components/DataPagesComponents.scss'
import fon from '../images/fon.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth } from '../main';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [registration] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  return (
    <div className="dpc _Ibg">
      <img src={fon} alt="background support" />
      <div className="_Container">
        <div className="dpc_body">
          <div className="dpc_panel">
            <div className="dpc_panel_info">
              <div className="dpc_title">Registration</div>
              <button className="dpc_btn dpc_btn--google" onClick={() => {
                registration()
                navigate('/')
              }}>Continue with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage