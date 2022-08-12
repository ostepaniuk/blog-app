import express, { Express, Request, Response } from "express";
import * as bodyParser from "body-parser";
import landingRouter from "./routes/landing";

function loggerMiddleware(request: express.Request, response: express.Response, next: any) {
  console.log(`${request.method} ${request.path}`);
  next();
}

const app: Express = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use("/", landingRouter);

app.listen(3005, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${3005}`);
});
