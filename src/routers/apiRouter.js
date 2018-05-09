import express from "express";

export default () =>
{
	const router = express.Router();

	router.get('/server-time', (req, res) =>
	{
		res.json({
			success: true,
			data: {
				time: new Date().toString()
			}
		});
	});

	return router;
}
