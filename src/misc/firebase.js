import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyCaz_XvI4uo5YoyotUfF-GM22bjjOLTbzA",
    authDomain: "chat-web-app-10eea.firebaseapp.com",
    databaseURL: "https://chat-web-app-10eea-default-rtdb.firebaseio.com",
    projectId: "chat-web-app-10eea",
    storageBucket: "chat-web-app-10eea.appspot.com",
    messagingSenderId: "953474225022",
    appId: "1:953474225022:web:9043025e24ef3c3dee992f"
  };
  
  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();

  export const messaging = firebase.messaging.isSupported() ? app.messaging() : null;

  if (messaging) {
    messaging.usePublicVapidKey(
      'BLs_I-HQyrAuUJJh8H3U0vtHGhVhXLMqoVoomeNL90GMKm0-o7sSoN9CJYRiBAVz-Yi7ZAni8mKateJfDwodTnw'
    );
  
    messaging.onMessage(data => {
      console.log(data);
    });
  }