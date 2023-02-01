/**
 * Check if a string is a valid web URL format.
 * @function
 * @param {string} url - The string to be validated as a URL.
 * @returns {boolean} - Whether the string is in a valid web URL format.
 */
export function isWebURL(url: string): boolean {
  const WEB_URL_REGEX = /^(https?:\/\/)([\w.-]+)\.([a-z]{2,})(\/.*)?$/;
  return WEB_URL_REGEX.test(url);
}

/**
 * Check if a string is a valid email format.
 * @function
 * @param {string} email - The string to be validated as an email.
 * @returns {boolean} - Whether the string is in a valid email format.
 */
export function isEmail(email: string): boolean {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return EMAIL_REGEX.test(email);
}
