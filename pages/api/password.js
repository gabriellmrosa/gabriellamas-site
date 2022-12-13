export default async function handler(req, res) {
  const reqPassword = req.body.password;
  const originalPassword = "alohomora";

  //request access limit
  //CSRF
  //CORS
  //ACL

  if (reqPassword === originalPassword) {
    res.status(200).send({ access: "true" });
  } else {
    res.status(401).send({ access: "false" });
  }
}
