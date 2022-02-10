import fastify from 'fastify';
import mercurius from 'mercurius';
import jwt from 'jsonwebtoken';
import mercuriusAuth from 'mercurius-auth';

import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const Port = process.env.PORT || 4500;
const app = fastify({ logger: true });

// Activate plugins below:
app.register(mercurius, {
	schema,
	resolvers,
	graphiql: 'playground',
	queryDepth: 7
});

// register auth policy

// create server
const start = async () => {
	try {
		await app.listen(Port);
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();
