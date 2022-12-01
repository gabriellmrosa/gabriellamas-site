export default async function handler(req, res) {
  const reqPassword = await JSON.parse(req.headers.body).password;
  const originalPassword = "alohomora";

  if (reqPassword === originalPassword) {
    res.status(200).send({ access: "true" });
  } else {
    res.status(401).send({ access: "false" });
  }
}
