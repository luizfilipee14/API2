import express from "express";

let alunos = [
    {id: 1, name: "A", nota1: 10, nota2: 8, media: 9, situacao: "Aprovado"},
    {id: 2, name: "B", nota1: 5, nota2: 5, media: 5, situacao: "Recuperacao"},
    {id: 3, name: "C", nota1: 2, nota2: 2, media: 2, situacao: "Reprovado"},
];


class AlunoController{

    static Situacao (aluno){

        aluno.media = (aluno.nota1 + aluno.nota2)/2;


        if (aluno.media >= 7) {
            aluno.situacao = "Aprovado";
        }else if (aluno.media >= 4) {
            aluno.situacao = "Recuperação";
        } else{
            aluno.situacao = "Reprovado";
        }

    }
    static cadastrar(request, response){

        console.log(request.body);
        const {name, nota1, nota2,} = request.body;

        if (nota1 > 10 ||  nota1 < 0 || nota2 > 10 || nota2 < 0){
            
            response.status(400).json({messagem: "Informe uma nota válida"});
            return;
        }

        let AlunoNovo = {
            id: alunos.at(-1).id+1,
            name,
            nota1,
            nota2
        }

        AlunoController.Situacao(AlunoNovo)

        alunos.push(AlunoNovo);
        response.status(201).json({AlunoNovo});

    }
    static findAll(request, response){
        response.status(200).json({alun: alunos});

    }

    static update(request, response){

        const {id} = request.params;
        const {name, nota1, nota2} = request.body;


        const idAlunoFound = alunos.findIndex((AlunoNovo) => AlunoNovo.id === parseInt(id));

        if(idAlunoFound == -1){
            response.status(404).json({message: "Aluno não encontrado"});
            return;
        }
        
        if ((nota1 !== undefined && (nota1 > 10 || nota1 < 0)) ||  (nota2 !== undefined && (nota2 > 10 || nota2 < 0))) {
            response.status(400).json({ message: "Informe uma nota válida" })
            return ;
        }

        if (name !== undefined) alunos[idAlunoFound].name = name;
        if (nota1 !== undefined) alunos[idAlunoFound].nota1 = nota1;
        if (nota2 !== undefined) alunos[idAlunoFound].nota2 = nota2;
        
        
        AlunoController.Situacao(alunos[idAlunoFound]);
        
        response.status(200).json({ alunoAtualizado: alunos[idAlunoFound] });
        return ;
        
    }


    static deletar(request, response){

        const {id} = request.params;
        const idAlunoFound = alunos.findIndex(aluno => aluno.id === parseInt(id));

        if (idAlunoFound === -1) {
            response.status(404).json({message: "Aluno não encontrado"});
            return;
        }

        alunos.splice(idAlunoFound, 1)

        response.status(204);

    }



    static findById(request, response) {
        const { id } = request.params;
    
        const aluno = alunos.find(aluno => aluno.id === parseInt(id));
        
        if (!aluno) {
            response.status(404).json({ message: "Aluno não encontrado" });
            return ;
        }
    
        return response.status(200).json({ aluno });
    } 
}



export default AlunoController;
