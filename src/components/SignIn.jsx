import './signin.css';
import  { useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('Signed in with email and password:', userCredential);
    } catch (error) {
      console.error('Error signing in with email and password:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('Signed in with Google:', result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log('Signed in with Facebook:', result.user);
    } catch (error) {
      console.error('Error signing in with Facebook:', error);
    }
  };

  return (
    <div className='form-content'>
      <h2>Sign In</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button onClick={handleEmailSignIn}>Sign In </button>
      <button onClick={handleGoogleSignIn}>Continue with Google</button>
      <button onClick={handleFacebookSignIn}>Continue with Facebook</button>
    </div>
  );
};

export default SignIn;
