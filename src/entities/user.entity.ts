import { Entity, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Exclude, classToPlain } from 'class-transformer';
import { IsEmail } from 'class-validator';
import { AbstractEntity } from './abstract-entity';

@Entity('users')
export class UserEntity extends AbstractEntity {
  @Column({ default: null, nullable: true })
  @IsEmail()
  email: string | null;

  @Column({ default: null, nullable: true })
  username: string | null;

  @Column({ default: '' })
  bio: string;

  @Column({ default: null, nullable: true })
  image: string | null;

  @Column({ default: null, nullable: true })
  @Exclude()
  password: string | null;

  // TODO: add following

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string) {
    return await bcrypt.compare(attempt, this.password);
  }

  toJSON() {
    return classToPlain(this);
  }
}