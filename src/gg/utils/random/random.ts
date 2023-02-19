import crypto from 'crypto'

/**
 * Generate a random index in a given array.
 * @function
 * @param {any[]} [array=[]] - The array to get a random index from.
 * @returns {number} - The random index in the array.
 */
export const randomIdx = (array: any[] = []): number => {
  return Math.floor(Math.random() * array.length)
}

/**
 * Generate a random integer within the range of 1 and the given maximum value.
 * @function
 * @param {number} [max=1] - The maximum value to generate a random integer from.
 * @returns {number} - The random integer.
 */
export const randomInt = (max: number = 1): number => {
  return Math.floor(Math.random() * max) + 1
}

/**
 * Generate a random string with the given length.
 * @function
 * @param {number} [length=0] - The length of the string to generate.
 * @returns {string} - The random string.
 */
export const randomStr = (length: number = 0): string => {
  const CHARACTER_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const randomCharsIdx = randomIdx(CHARACTER_SET.split(''))
  return Array.from({ length }, () => CHARACTER_SET[randomCharsIdx]).join('')
}

/**
 * Generate a random web URL.
 * @function
 * @returns {string} - The random URL.
 */
export const randomWebURL = (): string => {
  const WEB_PROTOCOL_SETS = ['https', 'http']
  const WEB_DOMAIN_SETS = ['com', 'org', 'net', 'io', 'co', 'ai', 'gg']
  const randomProtocol = WEB_PROTOCOL_SETS[randomIdx(WEB_PROTOCOL_SETS)]
  const randomDomain = WEB_DOMAIN_SETS[randomIdx(WEB_DOMAIN_SETS)]
  const randomName = randomStr(10)
  return `${randomProtocol}://www.${randomName}.${randomDomain}`
}

/**
 * Generate a random email address.
 * @function
 * @returns {string} - The random email address.
 */
export const randomEmail = (): string => {
  const EMAIL_PROVIDER_SETS = ['gmail', 'yahoo', 'naver', 'outlook']
  const WEB_DOMAIN_SETS = ['com', 'org', 'net', 'io', 'co', 'ai', 'gg']
  const randomName = randomStr(10)
  const randomProvider = EMAIL_PROVIDER_SETS[randomIdx(EMAIL_PROVIDER_SETS)]
  const randomDomain = WEB_DOMAIN_SETS[randomIdx(WEB_DOMAIN_SETS)]
  return `${randomName}@${randomProvider}.${randomDomain}`
}

/**
 * Generates a random hashed ID
 * @returns {string} A random hashed ID string
 */
export const randomHashedId = (): string => {
  return crypto.createHash('sha256').update(Math.random().toString()).digest('hex')
}

/**
 * Pick a random item from the given array
 * @template T
 * @param {T[]} [array=[]] - The array to pick an item from
 * @returns {T} A random item from the array
 */
export const randomArrayItem = <T>(array: T[] = []): T => {
  return array[randomIdx(array)]
}

/**
 * Pick a random value from the given object
 * @template T
 * @param {{ [k: string]: T }} [obj={}] - The object to pick a value from
 * @returns {T} A random value from the object
 */
export const randomObjectItem = <T>(obj: { [k: string]: T } = {}): T => {
  const keys = Object.keys(obj)
  return obj[keys[randomIdx(keys)]]
}
