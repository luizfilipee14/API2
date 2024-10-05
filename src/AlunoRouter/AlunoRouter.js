import { Router } from "express";
import AlunoController from "../AlunoController/alunoController.js";

const router = Router();


router.post("/alunos", AlunoController.cadastrar);
router.get("/alunos", AlunoController.findAll);
router.put("/alunos/:id", AlunoController.update);
router.get("/alunos/:id", AlunoController.findById);
router.delete("/alunos/:id", AlunoController.deletar);


export default router;