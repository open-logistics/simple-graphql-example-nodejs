const { start } = require('./lib');

start()
  .then(() => {
    console.log('Server is running on localhost:4000')
  })
  .catch(error => {
    console.error(error);
  });
