import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";

@Entity({name:'post'})
export default class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title:string;

    @Column({type:'text', default: null, nullable: true })
    desc:string;
    
}