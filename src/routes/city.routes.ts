import { Router } from "express";
import { getCustomRepository } from "typeorm";

import City from "../models/City";
import CityRepository from "../repositories/CityRepository";
import CreateCity from "./../services/CreateCity";

const cityRouter = Router();

cityRouter.post("/", async (request, response) => {
  const { cityname, state } = request.body;

  const createCity = new CreateCity();

  const city = await createCity.execute({
    cityname,
    state,
  });

  return response.json(city);
});

cityRouter.get("/", async (request, response) => {
  const { cityname } = request.query;

  const cityRepository = getCustomRepository(CityRepository);
  let city: City[] = [];
  city = await cityRepository.findByName(cityname as string);

  return response.json(city);
});

export default cityRouter;
