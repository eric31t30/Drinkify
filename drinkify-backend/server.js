import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


const puerto = process.env.PORT || 3000;

app.listen(puerto, () => {
  console.log("el servidor esta escuchando");
});
