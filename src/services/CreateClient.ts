import { getRepository } from "typeorm";

import Client from "./../models/Client";

interface Request {
  name: string;
  sex: string;
  birthDate: string;
  age: string;
  city: string;
}

class CreateClient {
  public async execute({
    name,
    sex,
    birthDate,
    age,
    city,
  }: Request): Promise<Client> {
    const ClientRepository = getRepository(Client);

    const user = ClientRepository.create({
      name,
      sex,
      birthDate,
      age,
      city,
    });

    await ClientRepository.save(user);

    return user;
  }
}

export default CreateClient;
