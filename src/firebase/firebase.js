import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCZNqecMw65gkc7Qw4kPaaj4fV7CzuuARo",
    authDomain: "auth-96179.firebaseapp.com",
    databaseURL: "https://auth-96179.firebaseio.com",
    projectId: "auth-96179",
    storageBucket: "auth-96179.appspot.com",
    messagingSenderId: "866053846695",
    appId: "1:866053846695:web:e77ffc3b91dd39ed844d82",
};
firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.database();
export const createTodo = ({title, uid, complete = false, count = 0}) => {
    return new Promise((resolve, reject) => {
        db.ref('todos').push({
            title,
            uid,
            complete,
            count
        }).then(result => {
            resolve(result);
        }).catch(error => {
            console.log(error);
            reject(error);
        })
    })
    
}
export const getAllTodos = (uid) => {
    return new Promise((resolve, reject) => {
        //console.log('getall', db.ref('todos').orderByChild('uid').equalTo(uid))
        db.ref('todos')
        .orderByChild('uid')
        .equalTo(uid)
        .on('value', snapshot => {
            const todos = [];
            snapshot.forEach(function(childSnapshot) {
                todos.push({
                    userId: 1,
                    id: childSnapshot.key, 
                    title: childSnapshot.val().title,
                    complete: childSnapshot.val().complete,
                    count: childSnapshot.val().count
                });
              });
            resolve(todos);
        })
    })
    
}
export const firebaseSignIn = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signInWithPopup(provider)
        .then((result) => {
            resolve(result.user);
        })
        .catch(({code, message, email}) => {
            reject(code, message, email);
        })
    }); 
};
export const firebaseSignOut = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut()
        .then((result) => {
            resolve();
        })
        .catch(({code, message, email}) => {
            reject(code, message, email);
        })
    }); 
};

export const firebaseIsLogged = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                resolve(user);
            } else {
                reject('Not logged');
            };
        });
        
    });
}