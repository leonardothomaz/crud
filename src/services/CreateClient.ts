import { getRepository } from "typeorm";

import Client from "./../models/Client";

interface Request {
  name: string;
  lastname: string;
  sex: string;
  birthDate: string;
  age: string;
  city_id: string;
}

class CreateClient {
  public async execute({
    name,
    lastname,
    sex,
    birthDate,
    age,
    city_id,
  }: Request): Promise<Client> {
    const ClientRepository = getRepository(Client);

    const user = ClientRepository.create({
      name,
      lastname,
      sex,
      birthDate,
      age,
      city_id,
    });

    await ClientRepository.save(user);

    return user;
  }
}

export default CreateClient;
