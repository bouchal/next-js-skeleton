import express from "express";

export default (app) =>
{
	var router = express.Router();

	router.get('/', (req, res) =>
	{
		const page = "/default";

		const queryParams = {
			urlKey: req.params.id
		};

		app.render(req, res, page, queryParams);
	});

	return router;
}