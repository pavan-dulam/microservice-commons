const crypto = require('crypto');

module.exports = {
  encrypt: (text, secret, salt = crypto.randomBytes(16)) =>
    crypto
      .createCipheriv('aes-256-gcm', secret, salt)
      .setAuthTag(Buffer.alloc(16, 0))
      .update(text, 'utf8', 'base64')
      .final('base64') + salt.toString('base64'),
  decrypt: (text, secret) => {
    const [encryptedText, salt] = text.split('');
    return crypto
      .createDecipheriv('aes-256-gcm', secret, Buffer.from(salt, 'base64'))
      .setAuthTag(Buffer.alloc(16, 0))
      .update(encryptedText, 'base64', 'utf8')
      .final('utf8');
  },
};
