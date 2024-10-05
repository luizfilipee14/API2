# API2


Criar uma API Web para gerenciar o cadastro de alunos.



Requisitos
• Cadastrar Aluno
• Listar Alunos
• Alterar dados de um Aluno
• Deletar um Aluno
• Retornar o nome e média de um determinado aluno pelo id



Observações:
• Cada aluno possui um identificador (id), um nome, a primeira nota, a segunda nota, a
média e a situação.
• Utilize o módulo express do node.js para criar a API.
• A situação do aluno:
o “aprovado”, média >= 7
o “recuperação”, média >= 4 e média < 7
o “reprovado”, média < 4
• Os alunos devem ser salvos em um array de objetos literais.
• Realize a validação das notas no backend. Uma nota não pode possuir um valor menor
que zero ou maior que dez. Se uma nota com esses valores for enviada retorne um
erro de status 400, com a mensagem “Informe uma nota válida”.
