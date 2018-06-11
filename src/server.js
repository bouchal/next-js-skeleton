import express from "express";
import next from "next";
import nextRoutes from "next-routes";
import compression from "compression";
import config from "./config";
import pageRouterFactory from "./routers/pageRouter";
import apiRouterFactory from "./routers/apiRouter";

// Run Next.js instance
const dir = __dirname;
const app = next({dev: config.next.dev, dir, quiet: config.next.quiet});
const routes = nextRoutes();
const requestHandler = routes.getRequestHandler(app);

const PORT = config.port || 3000;

app.prepare()
	.then(() =>
	{
		const server = express();
		server.use(compression());

		server.use(pageRouterFactory(app));
		server.use(config.apiUriPrefix, apiRouterFactory());

		server.use(requestHandler);

		server.listen(PORT, (err) =>
		{
			if(err) throw err;

			console.log('> Ready on http://localhost:' + PORT + '/*')
		})
	}, (ex) =>
	{
		console.error(ex.stack)
		process.exit(1)
	});