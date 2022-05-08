import { Users } from './users';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    JoinTable,
    ManyToMany,
} from 'typeorm';
import { Lecture } from '../lectures/lectures';

export enum UserRole {
    ADMIN = "Admin",
    LECTURER = "Lecturer",
    SECTARY = "Sectary",
    EDITOR = "Editor",
}

@Entity('admin')
export class Admin extends Users {
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.LECTURER,
    })
    role: UserRole
    

    @Column({type: 'text'})
    about: string;

}