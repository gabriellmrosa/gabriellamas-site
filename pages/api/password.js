import Cors from "cors";

const cors = Cors({
  methods: ["POST", "GET", "HEAD"],
});

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  const reqPassword = req.body.password;
  const originalPassword = "alohomora";

  if (reqPassword === originalPassword) {
    res.status(200).send({ access: "true" });
  } else {
    res.status(401).send({ access: "false" });
  }
}
