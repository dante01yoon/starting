import nc from "next-connect";

const handler = nc()
  .get((req, res) => {
    res.send(JSON.stringify({ message: "ok get" }))
  })
  .post((req, res) => {
    res.send(JSON.stringify({ message: "ok post" }))
  })

export default handler;
