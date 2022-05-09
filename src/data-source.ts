import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lecture } from "./entity/lectures"
import { Answer } from "./entity/answers"
import { Question } from "./entity/questions"
import { Test } from "./entity/test"
import { Users } from "./entity/users"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    // entities: ['src/entity/*.entity.ts'],
    entities: [Lecture, Test, Question, Answer, Users],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
})
