module.exports = (options = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    headers: 'content-type, x-api-token'
  }) => {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', options.origin);
      res.header('Access-Control-Allow-Methods', options.methods);
      res.header('Access-Control-Allow-Headers', options.headers);
  
      next()
    }
  }