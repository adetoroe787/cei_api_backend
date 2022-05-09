import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Question } from "./questions";

@Entity('answers')
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question

    @Column({default: false})
    isCorrect: boolean;

    @Column({default: true})
    is_active: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}