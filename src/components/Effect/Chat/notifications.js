import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export function showNotification(message, theme) {
    Toastify({
        text: message,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        offset: {
            x: 110,
            y: 73
        },
        style: {
            fontFamily: "Helvetica",
            letterSpacing: "-0.015em",
            background: theme === 'dark' ? 'black' : 'white',
            color: theme === 'dark' ? 'white' : 'black',
        },
    }).showToast();
};