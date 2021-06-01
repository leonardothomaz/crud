import { EntityRepository, ILike, Repository } from "typeorm";

import City from "./../models/City";

@EntityRepository(City)
class CitiesRepository extends Repository<City> {
  public async findByName(cityname: String): Promise<City[]> {
    const findCity = await this.find({
      where: [
        { cityname: ILike(`%${cityname}%`) },
        { state: ILike(`%${cityname}%`) },
      ],
    });

    return findCity;
  }

  public async findById(id: String): Promise<City[]> {
    const findCity = await this.find({
      where: { id },
    });

    return findCity;
  }
}

export default CitiesRepository;
