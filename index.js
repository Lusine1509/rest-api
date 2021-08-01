import express from "express";

import usersRoutes from "./routes/user.js";

const app = express();
const PORT = 3000;

app.use(express.json())

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));


app.listen(PORT, () =>console.log(`Server Running on port: http://localhost:${PORT}`));