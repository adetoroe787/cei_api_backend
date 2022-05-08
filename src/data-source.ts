import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lecture } from "./entity/lectures/lectures"
import { Answer } from "./entity/tests/answers"
import { Question } from "./entity/tests/questions"
import { Test } from "./entity/tests/test"
import { Users } from "./entity/users/users"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [Lecture, Test, Question, Answer, Users],
    migrations: [],
    subscribers: [],
})
