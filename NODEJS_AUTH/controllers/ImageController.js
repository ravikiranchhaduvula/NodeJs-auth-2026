<!DOCTYPE html>
<html>
<body>

<div id="user-list">
  <h3>Online Users</h3>
  <ul id="users"></ul>
</div>

<div id="chat"></div>

<form id="message-form">
  <input type="text" id="message-input" placeholder="Enter Your Message" required/>
  <button type="submit">Send</button>
</form>

<script src="/socket.io/socket.io.js"></script>

<script>
  const socket = io()

  const chat = document.getElementById('chat')
  const usersList = document.getElementById('users')
  const messageForm = document.getElementById('message-form')
  const messageInput = document.getElementById('message-input')

  const userName = prompt('Enter Your Username')

  socket.emit('join', userName)

  socket.on("userJoined", (user)=> {
    addMessage(`${user} has joined the chat`)
  })

  socket.on('userLeft', (user) => {
    addMessage(`${user} has left the chat`)
  })

  socket.on("userList", (users) => {
    usersList.innerHTML = users.map(user => `<li>${user}</li>`).join('')
  })

  socket.on('chatMessage', (message) => {
    addMessage(`${message.userName}: ${message.text}`)
  })

  messageForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const text = messageInput.value.trim()

    if (text) {
      socket.emit('chatMessage', {
        userName,
        text
      })
    }

    messageInput.value = ''
  })

  function addMessage(input) {
    const div = document.createElement('div')
    div.textContent = input
    chat.appendChild(div)
  }
</script>

</body>
</html>