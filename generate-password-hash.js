// Password hash generator for PasswordGate component
// Run with: node generate-password-hash.js

import crypto from 'crypto';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateHash(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

rl.question('Enter the password you want to use: ', (password) => {
  if (!password) {
    console.log('\n❌ Password cannot be empty!');
    rl.close();
    return;
  }

  const hash = generateHash(password);

  console.log('\n✅ Password hash generated successfully!\n');
  console.log('Password:', password);
  console.log('Hash:', hash);
  console.log('\n📝 Instructions:');
  console.log('1. Copy the hash above');
  console.log('2. Open src/components/PasswordGate.astro');
  console.log('3. Replace the PASSWORD_HASH value with your new hash');
  console.log('\nExample:');
  console.log(`const PASSWORD_HASH = '${hash}';`);
  console.log('\n⚠️  Keep your password secure and don\'t commit it to git!\n');

  rl.close();
});
