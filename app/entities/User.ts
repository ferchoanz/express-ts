import { Entity,Column, PrimaryColumn, ManyToMany, ManyToOne, JoinColumn } from "typeorm";
import Profile from "./Profile";
@Entity({name: 'users'})
export default class User {
    @PrimaryColumn({name: 'id'})
    public id: number;
    @Column()
    public name: string;
    @Column()
    public email: string;
    @Column({name: 'profile_id'})
    public profileId: number;
    @Column({name: 'created_at'})
    public createdAt: string;
    @Column({name: 'updated_at'})
    public updateAt: string;
    @ManyToOne(type => Profile, profile => profile.users,{eager: false, lazy: true})
    @JoinColumn({name:'profile_id',referencedColumnName:"id"})
    public profile: Profile;
}