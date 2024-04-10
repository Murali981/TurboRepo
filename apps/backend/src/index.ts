import express from "express";

const app = express();

import { BACKEND_URL } from "@repo/common/config";

console.log(BACKEND_URL);

app.get("/", (req: any, res: any) => {
  res.json({ msg: "Hello world" });
});

app.listen(4000);
