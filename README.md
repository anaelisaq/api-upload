# API de Upload de Imagens - ESTUDO

API Rest de estudo sobre upload de imagens local para banco de dados com rotas de POST, GET E DELETE.

*POST*:
Recebe pelo Body no tipo Form os campos: </br>
name: [nome do arquivo]</br>
E carrega a foto da máquina no campo Files:</br>
file: [escolhe imagem do sistema]</br>

Realiza upload da imagem no MongoDB e na pasta /uploads

*GET*:
Lista todas as imagens no banco de dados

*DELETE*:
Deleta uma imagem por vez pelo id, removendo localmente da pasta /uploads e do MongoDB

`Tecnologias`:</br>
Node.js</br>
Multer</br>
MongoDB

