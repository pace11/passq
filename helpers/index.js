/**
 *
 * @param {number} length
 * @returns string
 */
const generateRandomPassword = (length = 11) => {
  const patternChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_!@#$%^&*()[]{}_+=|/><";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * patternChar.length);
    password += patternChar[randomIndex];
  }

  return password;
};

module.exports = { generateRandomPassword };
