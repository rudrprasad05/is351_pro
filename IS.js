// firebase-app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Optional: For feedback (Firestore)
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "XXXXXXXXXXXX",
  appId: "YOUR_APP_ID",
};

// Initialize Firebase services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // for feedback (optional)

// Handle Sign In
const signInForm = document.querySelector(".signin-form");
if (signInForm) {
  signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signInForm["email"].value;
    const password = signInForm["password"].value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signed in successfully!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        alert("Sign-in error: " + error.message);
      });
  });
}

// Handle Register
const registerForm = document.querySelector(".register-form");
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = registerForm["reg-email"].value;
    const password = registerForm["reg-password"].value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Registered successfully!");
        window.location.href = "sign-in.html";
      })
      .catch((error) => {
        alert("Registration error: " + error.message);
      });
  });
}

// Optional: Handle Feedback Submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = contactForm["name"].value;
    const email = contactForm["email"].value;
    const message = contactForm["message"].value;

    try {
      await addDoc(collection(db, "feedbacks"), {
        name,
        email,
        message,
        timestamp: new Date(),
      });
      alert("Feedback submitted!");
      contactForm.reset();
    } catch (error) {
      alert("Feedback error: " + error.message);
    }
  });
}
