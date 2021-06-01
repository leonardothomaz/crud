import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import City from "./City";

@Entity("client")
class Client {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name?: string;

  @Column()
  lastname?: string;

  @Column()
  sex?: string;

  @Column()
  birthDate?: string;

  @Column()
  age?: string;

  @ManyToOne(() => City)
  @JoinColumn({ name: "city_id" })
  city: City;

  @Column("uuid")
  city_id?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}

export default Client;
