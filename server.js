import express fron "express;
const app = express()

const PORT = 3000

app.get("/", (req,res) =>{
res.send("hello word")
})

function criaMensagem(id, usuario, texto){
    return { id, usario: usuario.trim(), texto: texto.trim};

            const mensagens =[
        criaMensagem(1, 'ana', 'olá, turma!')
        criaMensagem(2, 'pedro,' 'servidor funciona top')
        criaMensagem(3, 'jao,' 'vamos conversar com um menssageiro local')
            ];
function listaMensagens(){
    return mensagens;
};

function quantidadedemensagens () {
    return mensagens.find
}
