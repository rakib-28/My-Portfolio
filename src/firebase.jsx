import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdrtI24uhPE2WWNrehZyZdlEIBauvcHec",
  authDomain: "my-portfolio-83f48.firebaseapp.com",
  projectId: "my-portfolio-83f48",
  storageBucket: "my-portfolio-83f48.appspot.com",
  messagingSenderId: "564164762387",
  appId: "",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
