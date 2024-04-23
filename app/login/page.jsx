"use client"
import { useState } from 'react';
import { getAuth, sendSignInLinkToEmail, signInWithEmailLink, signInWithCredential } from 'firebase/auth';
import firebaseApp from '../../firebase'; // Path to your firebase.js file

const Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  // Get the Firebase auth instance with the specified Firebase app instance
  const auth = getAuth(firebaseApp);

  const handleSendOTP = () => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        setOtpSent(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  

  const handleSignInWithEmailAndOTP = () => {
    const email = window.localStorage.getItem('emailForSignIn');
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        // You can redirect the user after successful login
        console.log("User signed in successfully: ", result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (authapp-a403e.firebaseapp.com) must be whitelisted in the Firebase Console.
    url: 'https://your-app-url.com/login',
    // This must be true.
    handleCodeInApp: true,
  };
  

  const handleSignInWithOTP = () => {
    const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
    signInWithCredential(auth, credential)
      .then((result) => {
        // You can redirect the user after successful login
        console.log("User signed in successfully: ", result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {otpSent ? (
        <div>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />
          <button onClick={handleSignInWithOTP}>Sign In</button>
        </div>
      ) : (
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          <button onClick={handleSendOTP}>Send OTP</button>
        </div>
      )}
    </div>
  );
};

export default Login;
