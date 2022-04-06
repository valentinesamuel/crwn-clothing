import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
      prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users', userAuth.uid);

      
      const userSnapshot = await getDoc(userDocRef)


      if (!userSnapshot.exists()) {
            const { displayName, email } = userAuth
            const createdAt = new Date()

            try {
                  await setDoc(userDocRef, { displayName, email, createdAt });
            } catch (error) {
                  console.log("There was an erroe creating the user", userDocRef);
            }
      }

      return userDocRef
}