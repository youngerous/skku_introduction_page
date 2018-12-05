import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBLu03h4lErniZxBYsS6q13Z81y-YJ9Lf8",
    authDomain: "skku-likelion-org.firebaseapp.com",
    databaseURL: "https://skku-likelion-org.firebaseio.com",
    projectId: "skku-likelion-org",
    storageBucket: "skku-likelion-org.appspot.com",
    messagingSenderId: "806520814388"
};

function init_db(){
    firebase.initializeApp(config)
}

export default{}