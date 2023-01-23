const socket = io('http://localhost:8080');

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
//var audio = new Audio('../APP/alert.mp3')

const append = (message, position) => {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
 //   if (position == 'left') {
 //   
 //    audio.play();
 //   }
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You : ${message}`, 'right')
    socket.emit('send', message);
    messageInput.value = ''
})

const naam = prompt("Enter your name To Join Chat");
socket.emit('new-user-joined', naam);

socket.on('user-joined', naam => {
    append(`${naam} has joined the chat`, 'right')
})

socket.on('receive', data => {
    append(`${data.naam}: ${data.message}`, 'left')
})

socket.on('left', naam => {
    append(`${naam} has left the chat`, 'right')
})
