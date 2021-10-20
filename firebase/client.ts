import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { EnvironmentVariables } from "@constants";

const { firebase } = EnvironmentVariables;

if (typeof firebase.config !== "string") {
  throw new Error("firebase.config is not a string");
}

const firebaseConfig = JSON.parse(firebase.config);
export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
