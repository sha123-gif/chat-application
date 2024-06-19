// static/script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chat-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const receiver = document.getElementById('receiver').value;
        const message = document.getElementById('message').value;
        sendMessage(receiver, message);
    });
});

function sendMessage(receiver, message) {
    fetch('/send_message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                receiver: receiver,
                message: message
            }),
        })
        .then(response => {
            if (response.ok) {
                window.location.reload();
            } else {
                console.error('Error sending message');
            }
        })
        .catch(error => console.error('Error sending message:', error));
}