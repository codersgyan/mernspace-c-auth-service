import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class RefreshToken {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "timestamp" })
    expires_at: Date;

    @ManyToOne(() => User)
    user: User;

    @UpdateDateColumn()
    updated_at: number;

    @CreateDateColumn()
    created_at: number;
}
