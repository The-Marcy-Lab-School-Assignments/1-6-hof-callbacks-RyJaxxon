const myForEach = (myNames, callback) => {
  for (let i = 0; i < myNames.length; i++) {
    callback(myNames[i]);
  };
};

const myMap = (arr, callback) => {
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  };
  return newArr
};


const myFind = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
      break
    };
  };
  return undefined
};

const myFilter = (arr, callback) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const sortWords = (arr) => {
  let newArr = [...arr]
  return newArr.sort();
};

const sortNumbers = (arr) => {
  let newArr = [...arr]
  return newArr.sort((a, b) => a - b);
};

const sortNumbersBetter = () => {
};

const sortUsersByOrder = () => {
};

const sortUsersByName = () => {
};

module.exports = {
  myForEach,
  myMap,
  myFind,
  myFilter,

  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};
