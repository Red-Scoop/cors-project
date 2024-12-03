import express from "express";
import axios from "axios";


void async function () {
	const app = express()


	app.get(`/test`, async (req, res) => {
		console.log(`Получили запрос на /test`)
		const resp = await axios.get(`http://a-service:8000/get-data`)
		const data = resp.data

		console.log(`Получили ответ от a-service: ${JSON.stringify(data)}`)

		res.json({
			success: true
		})

	})

	app.listen(8000, "0.0.0.0")
	console.log(`Сервер запущен`)
}()