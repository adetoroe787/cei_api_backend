import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

import { Question } from "./questions";

export enum testYear {
    YEAR1 = "Year 1",
    YEAR2 = "Year 2",
    OnlineClass = "Online Class"
}

@Entity('test')
export class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    decription: string;

    @Column({
        type: "enum",
        enum: testYear,
        default: testYear.YEAR1,
    })
    year: testYear


    @OneToMany(() => Question, (question) => question.test)
    question: Question[]

    @Column({default: true})
    is_active: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
