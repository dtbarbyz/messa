// 1. Данные пользователей (друзей) для демонстрации
const friends = [
    { id: 1, name: 'kwerta', username: 'yandepe' },
    { id: 2, name: 'zaza', username: 'coolguy' },
];

// 2. Список пользователей
const friendListElement = document.getElementById('friend-list');

// 3. Слушатели событий и действия
document.getElementById('add-friend-btn').addEventListener('click', () => {
    const friendName = prompt('Enter your friend\'s username:');
    if (friendName) {
        // Здесь можно добавить логику добавления друзей (запрос на сервер или сохранение)
        alert(`${friendName} added as a friend!`);
    }
});

friends.forEach(friend => {
    const friendElement = document.createElement('div');
    friendElement.classList.add('friend');
    friendElement.innerHTML = `
        <span>${friend.name} (${friend.username})</span>
        <button onclick="startChat(${friend.id})">Message</button>
    `;
    friendListElement.appendChild(friendElement);
});

// 4. Открытие чата с другом
let activeFriend = null;

function startChat(friendId) {
    const friend = friends.find(f => f.id === friendId);
    activeFriend = friend;

    // Обновляем заголовок чата
    document.getElementById('chat-header').innerText = `Chat with ${friend.name}`;

    // Очищаем контейнер чата
    document.getElementById('chat-container').innerHTML = '';

    // Включаем кнопки отправки сообщений и звонков
    document.getElementById('call-btn').disabled = false;
    document.getElementById('message-input').disabled = false;
    document.getElementById('send-message-btn').disabled = false;
}

// Отправка сообщения
document.getElementById('send-message-btn').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message && activeFriend) {
        const chatContainer = document.getElementById('chat-container');
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${activeFriend.name}: ${message}`;
        chatContainer.appendChild(messageElement);

        messageInput.value = '';
    }
});

// Начать звонок
document.getElementById('call-btn').addEventListener('click', () => {
    if (activeFriend) {
        alert(`Calling ${activeFriend.name}...`);
        // Здесь можно реализовать логику звонков через WebRTC
    }
});
