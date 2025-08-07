const firebaseConfig = {
  apiKey: "AIzaSyBZJQvu-SAj3eYEq-u7lwTiiowtNpnaaNo",
  authDomain: "jhuliano-portfolio-blog.firebaseapp.com",
  projectId: "jhuliano-portfolio-blog",
  storageBucket: "jhuliano-portfolio-blog.firebasestorage.app",
  messagingSenderId: "186146156531",
  appId: "1:186146156531:web:9334dcdc50df22523c2c86",
  measurementId: "G-MD1N71RF86",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
