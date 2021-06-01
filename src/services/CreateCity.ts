import { getRepository } from "typeorm";

import City from "./../models/City";

interface Request {
  cityname: string;
  state: string;
}

class CreateCity {
  public async execute({ cityname, state }: Request): Promise<City> {
    const CityRepository = getRepository(City);

    const user = CityRepository.create({
      cityname,
      state,
    });

    await CityRepository.save(user);

    return user;
  }
}

export default CreateCity;
