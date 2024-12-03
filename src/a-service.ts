import express from "express";
import cors from "cors";


void async function () {
	const app = express()


	app.get(`/test`, (req, res) => {
		console.log(`Получили запрос на /test`)
		res.json({
			success: true
		})
	})

	app.get("/get-data", (req, res) => {
		res.json({
			foo: "bar"
		})
	})

	app.listen(8000, "0.0.0.0")
	console.log(`Сервер запущен`)
}()