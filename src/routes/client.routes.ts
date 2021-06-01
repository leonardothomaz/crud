import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateClient from "./../services/CreateClient";
import ClientRepository from "../repositories/ClientRepository";
import CityRepository from "../repositories/CityRepository";
import Client from "../models/Client";

const clientRouter = Router();

clientRouter.post("/", async (request, response) => {
  const { name, lastname, sex, birthDate, age, city_id } = request.body;

  const cityRepository = getCustomRepository(CityRepository);
  const city = await cityRepository.findById(city_id as string);

  if (city.length == 0) {
    return response.status(400).json({ error: "Informe uma cidade válida para este cliente." });
  }

  const createClient = new CreateClient();

  const client = await createClient.execute({
    name,
    lastname,
    sex,
    birthDate,
    age,
    city_id,
  });

  return response.json(client);
});

clientRouter.get("/", async (request, response) => {
  const { id, name } = request.query;

  const clientRepository = getCustomRepository(ClientRepository);
  let client: Client[] = [];
  if (!!id) {
    client = await clientRepository.findById(id as string);
  } else if (name) {
    client = await clientRepository.findByName(name as string);
  }

  return response.json(client);
});

clientRouter.put("/:id", async (request, response) => {
  const { id } = request.params;
  const { updatedName } = request.body;

  const clientRepository = getCustomRepository(ClientRepository);

  const client = await clientRepository.findById(id as string);

  if (client && client.length == 0) {
    return response.status(400).json({ error: "Cliente não encontrado." });
  }

  clientRepository.update(id, { name: updatedName });

  return response.json({ message: "Nome do cliente alterado com sucesso." });
});

clientRouter.delete("/:id", async (request, response) => {
  const { id } = request.params;

  const clientRepository = getCustomRepository(ClientRepository);

  const client = await clientRepository.findById(id as string);

  if (client && client.length == 0) {
    return response.status(400).json({ error: "Cliente não encontrado." });
  }

  clientRepository.delete(id as string);

  return response.status(204).send();
});

export default clientRouter;
