# crud-Basico-nodejs
Projeto de CRUD básico usando nodejs, express e mysql baseado no projeto do livro Programação Web com Node.Js: Edição MySQL


# Instruções:

Esse é um exemplo básico e simples de API REST, usando o express generator para criar a estrutura básica da aplicação e se baseando no exemplo do livro do Luiz Duarte (endereço do git dele abaixo)

Caso esteja aprendendo ai vão as dicas para rodar a aplicação em sua máquina:

# Requisitos de software:

-Node.js  (qualquer versão, recomendo qualquer LTS acima da 10...)

-Mysql (ou MariaDb e derivados)

-Mysql Workbench (opcional, caso você seja metido a HACKERZAUM pode acessar via linha de comando mesmo ;-) )

-Qualquer navegador de internet (menos edge e explorer pela mor... onde você ta com a cabeça?!?!?!)

# Como rodar a aplicação:

1º Rode o script .SQL contido na pasta database

2º com a interface de comando em modo admin, na pasta raiz do projeto rode o comando npm install

3º Com essa mesma interface rode o comando npm run start ou npm run test para rodar a aplicação a unica diferença entre esses comandos é que:

-npm run start: Inicia o servidor do express normalmente. Se necessário fazer qualquer alteração é necessário pará-lo pressionando CTRL + C

-npm run test: Roda a aplicação usando o nodemon, pacode do node.js que permite a reinicialização automática do node depois de qualquer alteração de código, é só salvar o código e continuar testando...(Vide package.json)


E seja feliz....