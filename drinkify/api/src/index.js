import { app } from "./app.js";

// export default app;

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});
