import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCKX1A6s_C84lh7OORJIfDrpMmv_pp7t1Q',
  authDomain: 'prodobro.firebaseapp.com',
  databaseURL:
    'https://prodobro-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'prodobro',
  storageBucket: 'prodobro.appspot.com',
  messagingSenderId: '720201623169',
  appId: '1:720201623169:web:fba7baeae3e94a09630f80',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const googleSign = () => {
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider).then((result) => result.user);
};
