const instance = axios.create({
    baseURL: 'https://schofinity-c284f28bf9dd.herokuapp.com/v1',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });