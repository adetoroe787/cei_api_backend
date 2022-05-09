import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Generated,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import {
    Length,
    IsEmail,
} from "class-validator"

export enum UserRole {
    ADMIN = "Admin",
    LECTURER = "Lecturer",
    SECTARY = "Sectary",
    EDITOR = "Editor",
    STUDENT = "Student",
}

@Entity()
export class Users  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({
        unique: true,
    })
    @IsEmail()
    email: string;

    @Column( )
    @Length(6, 15)
    password: string

    @Column( {
        unique: true,
    })
    @Length(10,11)
    phone: number;

    @Column({type: 'text', nullable: true})
    address: string;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.STUDENT,
    })
    role: UserRole

    @Column({type: 'text', nullable: true})
    about: string;

    @Column({default: true})
	is_active: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
     
}

