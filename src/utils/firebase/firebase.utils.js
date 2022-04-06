import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyB0pGqeNSD27cbsHpPOq-7KOLjyJOU2UR0",
      authDomain: "crown-clothing-e90d8.firebaseapp.com",
      projectId: "crown-clothing-e90d8",
      storageBucket: "crown-clothing-e90d8.appspot.com",
      messagingSenderId: "441556620459",
      appId: "1:441556620459:web:26700552f1f8ebef1cd3ee"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
      prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth, provider)