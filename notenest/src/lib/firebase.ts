
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCU21LamLFhSDNHBI7nZ28B4Vfy2Q6HFDk",
  authDomain: "notenest-35e5c.firebaseapp.com",
  projectId: "notenest-35e5c",
  storageBucket: "notenest-35e5c.firebasestorage.app",
  messagingSenderId: "591619074050",
  appId: "1:591619074050:web:ca89c319ff1a5c08905f1b"
};

const app = initializeApp(firebaseConfig);

const db=getFirestore(app);
export {db};