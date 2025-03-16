import express from "express";
import streaksRoutes from "./routes/streaks/index";
const port = 3000;
const app = express();

app.use("/streaks", streaksRoutes);

//Debug to know when server is started
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
