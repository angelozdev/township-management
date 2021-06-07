// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/client";

function getAllGoods(_: NextApiRequest, res: NextApiResponse<any>) {
  return async () => {
    try {
      const { docs } = await database
        .collection("goods")
        .orderBy("cost", "asc")
        .get();

      const goods = docs
        .filter((d) => d.exists)
        .map((good) => ({ ...good.data(), id: good.id }));

      res.status(200).json(goods);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

function addGood(_: NextApiRequest, res: NextApiResponse<any>) {
  return async (data: any) => {
    database
      .collection("goods")
      .add(data)
      .then((doc) => {
        res.status(201).json({ id: doc.id });
      });
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method = "GET", body } = req;

  if (method === "GET") {
    getAllGoods(req, res)();
  }

  if (method === "POST") {
    const { time, xp, cost, name, dealer, help, sell_price, level, image } =
      body;

    addGood(
      req,
      res
    )({ time, xp, cost, name, dealer, help, sell_price, level, image });
  }
}

export default handler;
