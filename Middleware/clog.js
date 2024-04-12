const clog = (req, res, next) => {
    const purple = '\x1b[38;5;205m%s\x1b[0m';
    const pink = '\x1b[33m';
    const green = '\x1b[36m';
    switch (req.method) {
      case 'GET': {
        console.info(`📗 ${purple}${req.method} request to ${req.path}`);
        break;
      }
      case 'POST': {
        console.info(`📘 ${pink}${req.method} request to ${req.path}`);
        break;
      }
      default:
        console.log(`📙${green}${req.method} request to ${req.path}`);
    }
  
    next();
  };
  
  module.exports = clog;