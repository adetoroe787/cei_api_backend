import { IsFQDN } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Admin } from "../users/admin";


export enum lectureYear {
    YEAR1 = "Year 1",
    YEAR2 = "Year 2",
}

@Entity('lectures')
export class Lecture {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({default: false})
    is_online: boolean;

    @Column({nullable: true})
    @IsFQDN()
    url: string;

    @Column()
    is_active: boolean;

    @Column({
        type: "enum",
        enum: lectureYear,
        default: lectureYear.YEAR1,
    })
    year: lectureYear


    @ManyToMany(() => Admin)
    @JoinTable()
    lecturer: Admin[]

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}