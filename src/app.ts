import express from "express"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import routes from "./routes"
import errorMiddleware from "./middleware/error.middleware"


const app = express()
app.use(express.json())
app.use(cors({origin:true, credentials: true}))
app.use(helmet())
app.use(cookieParser())
app.use("/api", routes);
app.use(errorMiddleware);

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "OK" });
});

export default app