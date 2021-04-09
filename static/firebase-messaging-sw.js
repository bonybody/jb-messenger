
importScripts(
  'https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyAqaltW4A-27W1ZMzKYSd0dqi5P2CdKFyI","authDomain":"my-scheduling-52f1e.firebaseapp.com","projectId":"my-scheduling-52f1e","storageBucket":"my-scheduling-52f1e.appspot.com","messagingSenderId":"767545887750","appId":"1:767545887750:web:9bd843c231938135fcc787","measurementId":"G-QQ2NLMWM5Y"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()
