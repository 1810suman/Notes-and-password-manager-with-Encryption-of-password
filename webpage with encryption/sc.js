// Get elements
const notesList = document.getElementById('notes-list');
const noteForm = document.getElementById('note-form');
const noteInput = document.getElementById('note-input');

const passwordList = document.getElementById('password-list');
const passwordForm = document.getElementById('password-form');
const websiteInput = document.getElementById('website-input');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');

// Load notes and passwords from local storage
let notes = JSON.parse(localStorage.getItem('notes')) || [];
let passwords = JSON.parse(localStorage.getItem('passwords')) || [];

// Display notes and passwords
function displayNotes() {
    notesList.innerHTML = '';
    notes.forEach((note, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">Delete</button>
        `;
        notesList.appendChild(li);
    });
}

function displayPasswords() {
    passwordList.innerHTML = '';
    passwords.forEach((password, index) => {
        const li = document.createElement('li');
        // Decrypt the password
        const decryptedPassword = decryptPassword(password.password);
        li.innerHTML = `
            <strong>Website:</strong> ${password.website}<br>
            <strong>Username:</strong> ${password.username}<br>
            <strong>Password:</strong> ${decryptedPassword}<br>
            <button onclick="deletePassword(${index})">Delete</button>
        `;
        passwordList.appendChild(li);
    });
}

// Add a new note
function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText !== '') {
        notes.push(noteText);
        saveAndDisplayNotes();
        noteInput.value = '';
    }
}

// Delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    saveAndDisplayNotes();
}

// Encrypt the password
function encryptPassword(password) {
    // Replace 'YOUR_SECRET_KEY' with your actual secret key
    var secretKey = 'YOUR_SECRET_KEY';
    var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString();
    return encryptedPassword;
}

// Decrypt the password
function decryptPassword(encryptedPassword) {
    // Replace 'YOUR_SECRET_KEY' with your actual secret key
    var secretKey = 'YOUR_SECRET_KEY';
    var bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
    return decryptedPassword;
}

// Add a new password
function addPassword() {
    const website = websiteInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (website !== '' && username !== '' && password !== '') {
        // Encrypt the password before saving
        const encryptedPassword = encryptPassword(password);

        // Add password object to passwords array
        passwords.push({
            website: website,
            username: username,
            password: encryptedPassword
        });

        saveAndDisplayPasswords();
        // Clear input fields
        websiteInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
    }
}

// Delete a password
function deletePassword(index) {
    passwords.splice(index, 1);
    saveAndDisplayPasswords();
}

// Save notes to local storage and display
function saveAndDisplayNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Save passwords to local storage and display
function saveAndDisplayPasswords() {
    localStorage.setItem('passwords', JSON.stringify(passwords));
    displayPasswords();
}

// Event listeners
noteForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addNote();
});

passwordForm.addEventListener('submit', function (e) {
    e.preventDefault();
    addPassword();
});

// Display initial notes and passwords
displayNotes();
displayPasswords();
