export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const sub = (a, b) => a - b;
export const div = (a, b) => a / b;

export const uppercase = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject('Empty string');
      return;
    }
    resolve(str.toUpperCase());
  });
};
