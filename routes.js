module.exports = [{
    method: 'GET',
    path: '/health',
    handler: () => 'The server is healthy and happy.'
},{
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => h.file('index.html')
}];
