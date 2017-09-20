var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDxUv9KslZnqg2ij6b6OspFraarvoNOJUU",
    authDomain: "webshop-77bda.firebaseapp.com",
    databaseURL: "https://webshop-77bda.firebaseio.com",
    projectId: "webshop-77bda",
    storageBucket: "webshop-77bda.appspot.com",
    messagingSenderId: "992491677221"
};
firebase.initializeApp(config);


console.log(firebase.name);
export var fdatabase= firebase.database();