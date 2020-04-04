const cleanObject = obj => {
  const emptyObj = Object.create(null);
  return Object.assign(emptyObj, obj);
};

const cloneDeepObject = obj => {
  return JSON.parse(JSON.stringify(obj));
};

export default { cleanObject, cloneDeepObject };
