// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/client";

function getGoodById(_: NextApiRequest, res: NextApiResponse<any>) {
  return async (id: string) => {
    try {
      const doc = await database.collection("goods").doc(id).get();

      if (!doc.exists) {
        return res.status(404).json("Not Found");
      }

      const good = { ...doc.data(), id: doc.id };
      res.status(200).json(good);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method = "GET", query } = req;
  const { id } = query;

  if (method === "GET") {
    if (typeof id !== "string") return;
    getGoodById(req, res)(id);
  }
}

export default handler;
