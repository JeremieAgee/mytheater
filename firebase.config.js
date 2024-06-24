// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: "G-84NH9LXQ4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function getCollection(db, collectionName) {
  const snapshot = await getDocs(collection(db, collectionName));
  console.log(snapshot)
  const collectionList = snapshot.docs.map(doc => ({id: doc.id, data: doc.data()}));
  const ids = snapshot.docs.forEach((doc)=>console.log(doc.id))
  console.log(collectionList)
  return collectionList;
}
async function addToCollection(db, collectionName, collectionObject){
  const docRef = await addDoc(collection(db, collectionName), collectionObject);
  console.log(`${collectionObject} was added to the collection`);
}
async function removeFromCollection(db, collectionName, collectionObject){
  deleteDoc(doc(db, collectionName, collectionObject.id));
}
async function updateCollectionItem(db, collectionName, collectionObject, objectId){
  console.log(`${collectionObject}, ${objectId}`)
}
export { db, getCollection, addToCollection, removeFromCollection, updateCollectionItem };