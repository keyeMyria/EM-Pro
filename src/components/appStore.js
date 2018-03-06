import firebase from 'firebase';
import 'firebase/firestore';
import {initFirestorter, Collection} from 'firestorter';

// Initialize firebase app
firebase.initializeApp({
  apiKey: "AIzaSyDsoxi8jDn5Nh2-rJBxrOQPmZQQJkCzqeM",
  authDomain: "em-pro-audio-88747.firebaseapp.com",
  databaseURL: "https://em-pro-audio-88747.firebaseio.com",
  projectId: "em-pro-audio",
  storageBucket: "em-pro-audio.appspot.com",
  messagingSenderId: "484148208454"
});

// Initialize `firestorter`
initFirestorter({firebase: firebase});

// Define collection
export const events = new Collection('events');
export const clients = new Collection('clients');
export const venues = new Collection('venues');
export const inventory = new Collection('inventory');
export const requests = new Collection('requests');
