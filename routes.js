const Path = require('path');

module.exports = [{
    method: 'GET',
    path: '/health',
    handler: () => 'The server is healthy and happy.'
},{
    method: 'GET',
    path: '/{any*}',
    handler: {
        directory: {
            path: Path.join(__dirname, 'build'),
            index: ['index.html']
        }
    }
}];
