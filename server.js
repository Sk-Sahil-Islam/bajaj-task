import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bfhlRoutes from "./routes/bfhlRoutes.js";
import { swaggerSpec, swaggerUi } from "./swagger/swagger.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", bfhlRoutes);

//swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//default route for health check
app.get("/", (req, res) => {
  res.send("BFHL API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger Docs at http://localhost:${PORT}/api-docs`);
});
