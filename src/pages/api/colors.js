import clientPromise from "../../../lib/mongodb"

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("colorsDB");
  switch (req.method) {
    case "POST":
      let bodyObject = JSON.parse(req.body);
      await db
        .collection("pages")
        .insertOne({ message: `The ${bodyObject.name} page was viewed` });
      res.status(200).send("Success")
      break;
    case "GET":
      const colors = await db.collection("colors").find({}).toArray();
      res.status(200).json(colors)
      break;
  }
}