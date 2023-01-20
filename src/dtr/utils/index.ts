export const randomPickEnum = (e: Object) => {
  const enums = Object.values(e);
  const randomIdx = randomInt(0, enums.length);
  return enums[randomIdx];
};
export const randomStr = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const randomStrs = Array.from({ length }, () =>
    characters.charAt(randomInt(0, length))
  );
  return randomStrs.join("");
};
export const randomUrl = () => {
  return ["https://", randomStr(8), ".com"].join("");
};
export const randomId = () => {
  return ["id", randomStr(10), Math.random()].join("_").replace(".", "");
};
export const randomEmail = () => {
  return [randomStr(8), "@.", randomStr(5), ".ai"].join("");
};
export const randomInt = (min: number, max: number) =>
  Math.floor(
    Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)
  );
