// order.controller.ts
import { Request, Response } from "express";
import { createOrderService } from "../services/order.service";
import { catchedController } from "../utils/catchedController";

export const createOrder = catchedController(
  async (req: Request, res: Response) => {
    try {
      const { userId, products } = req.body;
      const createOrderDto = { userId, products };
      const newOrder = await createOrderService(createOrderDto);
      res.status(201).send(newOrder); // Devolver un código 201 (Created)
    } catch (error) {
      console.error('Error al crear la orden:', error);
      res.status(500).send({ error: 'Error al crear la orden' });
    }
  }
);
