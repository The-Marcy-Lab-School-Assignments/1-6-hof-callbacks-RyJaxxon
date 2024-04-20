/** FEEDBACK: Great job getting all test cases to pass! */
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

const sortNumbersBetter = (arr, bool) => {
  let newArr = [...arr];
  return bool === true ? newArr.sort((a, b) => b - a) : newArr.sort((a, b) => a - b)
};

const sortUsersByOrder = (arr) => {
  let arrCopy = [...arr];
  arrCopy.sort((a, b) => a.order - b.order)
  return arrCopy
};

const sortUsersByName = (arr) => {
  let arrCopy = [...arr]
  arrCopy.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    } else if (a.name > b.name) {
      return 1
    } else {
      return 0
    };
  });
  return arrCopy;
}

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
