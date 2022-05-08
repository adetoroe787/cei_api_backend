import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./questions";

@Entity('answers')
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @ManyToOne(() => Question, (question) => question.answers)
    question: Question

    @Column()
    is_correct: boolean;

    
}