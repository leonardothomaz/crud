import { EntityRepository, ILike, Repository } from "typeorm";

import Client from "./../models/Client";

@EntityRepository(Client)
class ClientsRepository extends Repository<Client> {
  public async findByName(name: String): Promise<Client[]> {
    const findClient = await this.find({
      relations: ["city"],
      where: [{ name: ILike(`%${name}%`) }, { lastname: ILike(`%${name}%`) }],
    });

    return findClient;
  }

  public async findById(id: String): Promise<Client[]> {
    const findClient = await this.find({
      relations: ["city"],
      where: { id },
    });

    return findClient;
  }
}

export default ClientsRepository;
