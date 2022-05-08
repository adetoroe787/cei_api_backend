import "reflect-metadata"
import { DataSource } from "typeorm"
import { Lecture } from "./entity/lectures/lectures"
import { Answer } from "./entity/tests/answers"
import { Question } from "./entity/tests/questions"
import { Test } from "./entity/tests/test"
import { Admin } from "./entity/users/admin"
import { Users } from "./entity/users/users"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "test",
    password: "test",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [Lecture, Test, Question, Answer, Users, Admin],
    migrations: [],
    subscribers: [],
})
