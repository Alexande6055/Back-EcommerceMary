"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analytics = exports.app = exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const analytics_1 = require("firebase/analytics");
exports.firebaseConfig = {
    apiKey: 'AIzaSyBQ4L7leUHiGlB85XbR7YETFzF5oYeg4OM',
    authDomain: 'ecommers-mary.firebaseapp.com',
    projectId: 'ecommers-mary',
    storageBucket: 'ecommers-mary.appspot.com',
    messagingSenderId: '837887334101',
    appId: '1:837887334101:web:649e72460bacbe18f4b45c',
    measurementId: 'G-262PJEEW9C',
};
exports.app = (0, app_1.initializeApp)(exports.firebaseConfig);
exports.analytics = (0, analytics_1.getAnalytics)(exports.app);
//# sourceMappingURL=fireBase.config.js.map