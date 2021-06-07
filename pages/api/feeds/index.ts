import type { NextApiRequest, NextApiResponse } from "next";
import { database } from "../../../firebase/client";
import { Feed } from "../../../types";
// import { feeds } from "../../../farm_products_and_feeds";

function getAllFeeds(_: NextApiRequest, res: NextApiResponse<any>) {
  return async () => {
    try {
      const { docs } = await database.collection("feeds").get();

      const feeds = docs
        .filter((d) => d.exists)
        .map((feed) => {
          const { materials, ...rest } = feed.data() as Feed;
          return {
            materials: materials.map(({ id, quantity }) => ({
              quantity,
              id: id.id,
            })),
            rest,
          };
        });

      res.status(200).json(feeds);
    } catch (error) {
      res.status(500).json(error);
    }
  };
}

function addFeed(_: NextApiRequest, res: NextApiResponse<any>) {
  return async (data: any) => {
    database
      .collection("feeds")
      .add(data)
      .then((doc) => {
        res.status(201).json({ id: doc.id });
      });
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { method = "GET", body } = req;

  if (method === "GET") {
    getAllFeeds(req, res)();
  }

  if (method === "POST") {
    addFeed(req, res)(body);
  }
}

export default handler;
