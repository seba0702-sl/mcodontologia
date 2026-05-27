import { initializeApp } from "firebase/app"

import {
getFirestore
} from "firebase/firestore"

const firebaseConfig = {
apiKey: "...",
authDomain: "odontologia-mc.firebaseapp.com",
projectId: "odontologia-mc",
storageBucket: "odontologia-mc.firebasestorage.app",
messagingSenderId: "...",
appId: "...",
measurementId: "..."
}

const app =
initializeApp(
firebaseConfig
)

export const db =
getFirestore(
app
)