import { Entity,Column, OneToMany, PrimaryColumn} from "typeorm";
import User from "./User";
@Entity({name:"profiles"})

export default class Profile {
    @PrimaryColumn({name:"id"})
    public id: number;
    @Column({name: "name"})
    public name: string;
    @Column({name: "created_at"})
    public createdAt: string;
    @Column({name:"updated_at"})
    public updatedAt: string;
    @OneToMany( type => User, user => user.profileId)
    public users: User[];
}