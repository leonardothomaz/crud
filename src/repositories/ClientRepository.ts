import { EntityRepository, Like, Repository } from "typeorm";

import Client from "./../models/Client";

@EntityRepository(Client)
class ClientsRepository extends Repository<Client> {
  public async findByName(name: String): Promise<Client[] | null> {
    const findClient = await this.find({
      name: Like(`%${name}%`),
    });

    return findClient || null;
  }

  public async findById(id: String): Promise<Client[] | null> {
    const findClient = await this.find({
      where: { id },
    });

    return findClient || null;
  }
}

export default ClientsRepository;
