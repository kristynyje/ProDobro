// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
