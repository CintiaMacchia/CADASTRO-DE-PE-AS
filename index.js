let nomeUsuario = "Cintia"
console.log(`Usuário ${nomeUsuario}`)

//cadastro de peças()
console.log("cadastro de Peças")
const listaCadastroPecas = ['pistão', 'suspenção','Cx', 'filtro de óleo', 'velas de ignição']
console.log(listaCadastroPecas.length)

if(listaCadastroPecas.length < 10){
   console.log("Você pode cadastrar mais peças")
}
console.log('Nome das peças cadastradas '+ listaCadastroPecas)
for (let indice = 0; indice < listaCadastroPecas.length; indice ++){
    var nomePeca = listaCadastroPecas[indice]
    if (nomePeca.length < 3){
        console.log(nomePeca + " Você não pode cadastrar essa peça, o nome deve ter mais de 3 caracteres." )
    }else{
        console.log("Peça cadastrada com sucesso!")
    }
}
console.log("Verificação de Peso das Peças")
var pesopc = 105
console.log(pesopc)
if (pesopc >= 100){
    console.log("Peso aceito, peça cadastrada com sucesso!")
}else{
    console.log("Peso insuficiente, cadastro não efetuado!")
}
