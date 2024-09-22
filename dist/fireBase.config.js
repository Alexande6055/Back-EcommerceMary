"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
const firebaseConfig = {
    apiKey: "AIzaSyCjG-vKhxSxGqOJMljk0Sm2_ukERymx-BY",
    authDomain: "ecommerce-mary-19c31.firebaseapp.com",
    projectId: "ecommerce-mary-19c31",
    storageBucket: "ecommerce-mary-19c31.appspot.com",
    messagingSenderId: "296796953022",
    appId: "1:296796953022:web:b02f0b9cec20096c9701ef",
    measurementId: "G-HE2Y4JJ2PP"
};
const app = (0, app_1.initializeApp)(firebaseConfig);
const analytics = (0, analytics_1.getAnalytics)(app);
//# sourceMappingURL=fireBase.config.js.map