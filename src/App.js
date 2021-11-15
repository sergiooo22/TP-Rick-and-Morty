import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  setUser,
  cleanUser,
} from './features/global/global.slice';
import './App.css';
import AppRouter from './features/App.Router/AppRouter'






function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.global.user);

  const onSuccessLogin = (response) => {
    console.log("========== onSuccess ==============", response)
    console.log("response.profileObj", response.profileObj)
    if (response && response.accessToken && response.profileObj) {
      dispatch(setUser({ ...response.profileObj, accessToken: response.accessToken }))
    }
  };
  const onErrorLogin = (response) => {
    console.log("========== onError ==============", response);
    dispatch(cleanUser());
  };
  console.log({ user })




  return (
    <div className="App">
      <header className="App-header">

        {!user ?
          <GoogleLogin
            clientId={"986854779874-qairl4dnmh5vcoi351ouftdq9quqk5tk.apps.googleusercontent.com"}
            buttonText="Log in with Google"
            onSuccess={onSuccessLogin}
            onFailure={onErrorLogin}
            cookiePolicy={'single_host_origin'}
          />
          :
          <>
            <GoogleLogout
              clientId={"986854779874-qairl4dnmh5vcoi351ouftdq9quqk5tk.apps.googleusercontent.com"}
              buttonText="Logout"
              onLogoutSuccess={() => dispatch(cleanUser())}
            />

            <AppRouter />

          </>

        }

      </header>





    </div>
  );

};
export default App;
