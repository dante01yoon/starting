import nc from "next-connect";
import notes from "../../../src/data/data";

const handler = nc()
  .post((req, res) => {
    const note = {
      ...req.body,
      id: Date.now(),
    }
    notes.push(note);
    res.json({ data: note })
  })
  .get((req, res) => {
    console.log({ notes })
    res.json({ data: notes })
  })

export default handler;