import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBkFvyfUk_QyWhLg-zEYtZZw4OoFdma8Vk",
  authDomain: "cantina-chichilo.firebaseapp.com",
  projectId: "cantina-chichilo",
  storageBucket: "cantina-chichilo.appspot.com",
  messagingSenderId: "151725189795",
  appId: "1:151725189795:web:609defe46995b37b3bad16",
  measurementId: "G-T2WMH7LWRJ"
};

const appFirebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(appFirebase);

export default appFirebase;
