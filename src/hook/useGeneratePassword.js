/* eslint-disable no-unused-expressions */
const uppercaseString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseString = 'abcdefghijklmnopqrstuvwxyz';
const numberString = '0123456789';
const symbolString = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

const randomFunction = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const uppercaseRandom = () =>
  uppercaseString[randomFunction(0, uppercaseString.length)];

const lowercaseRandom = () =>
  lowercaseString[randomFunction(0, lowercaseString.length)];

const numberRandom = () => numberString[randomFunction(0, numberString.length)];

const symbolRandom = () => symbolString[randomFunction(0, symbolString.length)];

const useGeneratePassword = (num, upper, lower, number, symbol) => {
  const password = [];
  Number(num);

  for (let i = 0; i < num; i += 1) {
    upper && password.push(uppercaseRandom());
    lower && password.push(lowercaseRandom());
    number && password.push(numberRandom());
    symbol && password.push(symbolRandom());
  }

  const newPassword = password.join('').slice(0, num);
  return newPassword;
};

export default useGeneratePassword;
