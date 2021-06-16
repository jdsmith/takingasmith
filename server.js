const Hapi = require('@hapi/hapi');
const Path = require('path');
const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    });

    server.route(routes);

    await server.register(require('@hapi/inert'));
    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
