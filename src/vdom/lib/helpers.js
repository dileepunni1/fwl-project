const cleanObject = obj => {
  const emptyObj = Object.create(null);
  return Object.assign(emptyObj, obj);
};

const cloneDeepObject = obj => {
  return JSON.parse(JSON.stringify(obj));
};

const stringToHTML = str => {
  // TODO: use a faster solution!
  const parser = new DOMParser();
  const doc = parser.parseFromString(str, 'text/html');
  return doc.body;
};

export default { cleanObject, cloneDeepObject, stringToHTML };
