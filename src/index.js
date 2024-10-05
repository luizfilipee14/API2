import express from "express";
import AlunoRouter from "./AlunoRouter/alunoRouter.js";

const server = express();
const port = 5000;
server.use(express.json());
server.use(AlunoRouter);


server.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
});
