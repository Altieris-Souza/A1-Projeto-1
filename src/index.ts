import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pingRoutes from './routes/pingRoutes'
import userRoutes from './routes/UserRoutes'
import swaggerUi from 'swagger-ui-express'
import { connect } from "./service/database"
	
dotenv.config();
	
const app: Express = express();

const port = process.env.PORT || 4000;
const DATABASE_URL = process.env.DATABASE_URL || "";

connect(DATABASE_URL);
	
app.get("/", (req: Request, res: Response) => {
  res.send("Working!");
});

app.use("/ping/", pingRoutes);
app.use("/users/", userRoutes);

app.use(
    "/swagger", /* endereço do swagger */
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: ".public/swagger.json",
      },
    })
);
	
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
