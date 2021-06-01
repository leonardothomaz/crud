import { Router } from "express";
import { getCustomRepository } from "typeorm";
import CreateClient from "./../services/CreateClient";
import ClientRepository from "../repositories/ClientRepository";
import Client from "../models/Client";

const clientRouter = Router();

clientRouter.post("/", async (request, response) => {
  const { name, sex, birthDate, age, city } = request.body;

  const createClient = new CreateClient();

  const client = await createClient.execute({
    name,
    sex,
    birthDate,
    age,
    city,
  });

  return response.json(client);
});

clientRouter.get("/", async (request, response) => {
  const { id, name } = request.query;

  const clientRepository = getCustomRepository(ClientRepository);
  let client: Client[] | null = [];
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
