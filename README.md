# Notes-and-password-manager-with-Encryption-of-password

The "Notes and Password Manager" application provides a secure way to store and manage sensitive information. It employs encryption techniques to safeguard data. Here's how it works:

1. Encryption:

- When a user adds a password, it is encrypted using the AES encryption algorithm before being stored.
- AES encryption requires a secret key, ensuring that only those with the key can decrypt and view the password.

2. Notes Storage:

- Notes added by the user are stored as plain text.
- Passwords, on the other hand, are encrypted using the encryptPassword function before being saved.

3. Display:

- When displaying passwords, they are decrypted using the decryptPassword function before being shown to the user.
- This decryption ensures that the actual passwords are never stored or displayed in plain text.

4. Security Benefits:

- Encryption adds a layer of security, protecting sensitive information even if the data is somehow accessed.
- Users can feel confident that their passwords are not stored in plain text, reducing the risk of unauthorized access.

By using encryption, the "Notes and Password Manager" provides a safer environment for users to store and manage their private notes and passwords.






