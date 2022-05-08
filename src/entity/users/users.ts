import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Generated,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

import {
    Length,
    IsEmail,
} from "class-validator"

@Entity()
export class Users extends BaseEntity {
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

    @Column()
    address: string;

    @Column()
	is_active: boolean;

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;



   
}

