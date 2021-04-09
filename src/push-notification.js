import firebase from 'firebase';

export const initializeFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp({
        messagingSenderId: "1005184663155"
    });
 }else {
    firebase.app(); // if already initialized, use that one
 }
}

export const askForPermissioToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('token do usuário:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }