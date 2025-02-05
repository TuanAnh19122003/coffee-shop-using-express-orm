import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";

import { AppDataSource } from "@databases/data-source";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(session({
  secret: 'mykey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }, // Set secure to true in production environment to enable HTTPS
}))

app.set('view engine', 'ejs');
app.set('views', './src/views');

AppDataSource.initialize().then(() => {
  console.log('Database connected and initialized');
}).catch((err) => {
  console.error('Error while connecting to the database: ', err.message);
  process.exit(1);
});


app.get('/', (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});