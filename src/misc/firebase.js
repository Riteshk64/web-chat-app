import firebase from "firebase/app";

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