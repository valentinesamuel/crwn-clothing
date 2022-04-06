import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(() => {
    const getRedirectResultData = async () => {
      const response = await getRedirectResult(auth);
      if (response.user) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }

    }
    getRedirectResultData()

  }, [])



  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }



  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>sign in with google Popup</button>
      <button onClick={signInWithGoogleRedirect}>sign in with google Redirect</button>
    </div>
  )
}

export default SignIn