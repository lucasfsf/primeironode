import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';

interface Request {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepositoy = getRepository(User);

    const checkUserExists = await usersRepositoy.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError('Email adress already used');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepositoy.create({
      name,
      email,
      password: hashedPassword,
    });

    await usersRepositoy.save(user);

    return user;
  }
}

export default CreateUserService;
