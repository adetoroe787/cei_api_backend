import { AppDataSource } from "./data-source"
import Lecturerouter from "./routes/lectureRoute"
import Testrouter from "./routes/testRoute"
import UserRouter from "./routes/userRoutes"
const express = require('express')

const app = express()
app.use(express.json())

AppDataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

app.use("/api/v1", UserRouter )
app.use("/api/v1", Testrouter )
app.use("/api/v1", Lecturerouter)