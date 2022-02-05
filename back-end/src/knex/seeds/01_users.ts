import bcrypt from 'bcryptjs';
import { Knex } from 'knex';
import { User } from '../types';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // create User seed entries
  const user1: User = {
    id: 1,
    alias: 'seed_user_1',
    public_key: '',
    password_hash: bcrypt.hashSync('password', 10),
  };

  const user2: User = {
    id: 2,
    alias: 'seed_user_2',
    public_key: '',
    password_hash: bcrypt.hashSync('password', 10),
  };

  // Inserts seed entries
  await knex('users').insert([user1]);
}
