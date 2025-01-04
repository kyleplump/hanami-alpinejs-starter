import "../css/app.css";

// https://alpinejs.dev/advanced/csp
import Alpine from '@alpinejs/csp'
 
window.Alpine = Alpine
 
document.addEventListener('alpine:init', () => {
    Alpine.data('message', () => ({
        messageContent: 'I love CSP Alpine!'
    }))
});

Alpine.start()
