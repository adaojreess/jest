const keyValueToString = ([key, value]) => {
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('Please, check your params');
  }
  return `${key}=${value}`;
};

module.exports.queryString = obj =>
  Object.entries(obj).map(keyValueToString).join('&');

module.exports.parse = value =>
  Object.fromEntries(
    value.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') >= 0) {
        value = value.split(',');
      }
      return [key, value] ;
    }),
  );
