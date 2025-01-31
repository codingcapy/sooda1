import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

const frontendPath = path.join(__dirname, "./frontend/dist");
app.use(express.static(frontendPath));

app.get("/", (req, res) => {
  res.status(200).send("hello sooda server");
});

app.get("*", (req, res) => {
  res.status(200).sendFile(path.join(frontendPath, "index.html"));
});

app.listen(port, () => console.log(`Server running on port ${port}`));
