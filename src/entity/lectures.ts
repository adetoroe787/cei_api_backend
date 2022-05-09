import { IsFQDN } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Users } from "./users";



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

    @Column({default: true})
    is_active: boolean;

    @Column({
        type: "enum",
        enum: lectureYear,
        default: lectureYear.YEAR1,
    })
    year: lectureYear


    @ManyToMany(() => Users)
    @JoinTable()
    lecturer: Users[]

    @Column()
    @CreateDateColumn()
    createdAt: Date;

    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
}