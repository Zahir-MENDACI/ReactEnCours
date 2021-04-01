importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAar9LsufX43DuxlH4_uAnYifcSWhNfZo8",
    authDomain: "projet-pwa-6ed43.firebaseapp.com",
    databaseURL: "https://projet-pwa-6ed43-default-rtdb.firebaseio.com",
    projectId: "projet-pwa-6ed43",
    storageBucket: "projet-pwa-6ed43.appspot.com",
    messagingSenderId: "1005184663155",
    appId: "1:1005184663155:web:e300f1592aece466ec7406",
    measurementId: "G-YFJ06N78SR"
});

const messaging = firebase.messaging();