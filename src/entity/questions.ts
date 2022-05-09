import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Answer } from "./answers";
import { Test } from "./test";


@Entity('test')
export class Question {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Test, (test) => test.question)
    test: Test

    @OneToMany(() => Answer, (answers) => answers.question)
    answers: Answer[]

    @Column({default: true})
    is_active: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;

}
