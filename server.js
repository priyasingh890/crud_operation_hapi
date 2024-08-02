
const Hapi = require('@hapi/hapi');

const init = async () => {
    try {
        const server = Hapi.server({
            port: 3001,
            host: 'localhost'
        });

        await server.start();
        console.log('Server running on %s', server.info.uri);
    } catch (err) {
        console.error('Error starting server:', err);
    }
};

init();
