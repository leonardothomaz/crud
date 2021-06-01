import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("city")
class City {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  cityname?: string;

  @Column()
  state?: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}

export default City;
