import express, { Router } from "express";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";
import cookieParser from "cookie-parser";
import cors, { CorsOptions } from "cors";
import "./util/secrets";
import { sequelize } from "./util/secrets";


// Sync the sequelize
sequelize.sync();


const app = express();

// middleware
app.use(express.static("public"));
app.use((() => {
	return (
		process.env.NODE_ENV !== "production" ? errorHandler() : () => {
			// No code
			// Just to deceive the compiler
		}
	);
})());

const corsOptions = (): CorsOptions => {
	const whiteList = ["http://localhost:3000"];
	return {
		// origin: originCallback,
		credentials: true,
		origin: ["http://localhost:3000"],
		optionsSuccessStatus: 200
	};
};

// Use the body parser
app.use(bodyParser.json());
// Enable cookies
app.use(cookieParser());
// Use cors
app.use(cors(corsOptions()));

app.get("/", (req, res) => {
	res.send("Thanks");
})





export default app;
