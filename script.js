function validar(){
    const cpf= document.getElementById("cpf");
    const resultado = document.getElementById("resultado")
    //verificar se a caixa esta vazia
    // o comando trim() elemina os espaços desnecessarios    
    if(cpf.value.trim() == ""){
        return resultado.innerHTML = "Digite o CPF"
    }
    else if(cpf.value.length < 11){
        return resultado.innerHTML = "CPF incompleto"
    }
    else{
        // criar uma variavel para guardar os 9 primeiros digitos
        let cpfCalc = cpf.value.substring(0,9); 
        let p10 = 10
        let p11 = 11
        let resto = 0
        let rs = 0

        for( let i = 0 ; i< 9 ; i++){
            rs += cpfCalc[i] * p10
            p10--;
        }
        resto = rs % 11
        if (resto <2){
            cpfCalc += "0"
        }
        else{
            cpfCalc +=""+11-resto
        }

        // zerar a variavel rs para o novo calculo

        rs = 0
        for( let i = 0 ; i< 10 ; i++){
            rs += cpfCalc[i] * p11
            p11--;
        }
        resto = rs % 11
        if (resto <2){
            cpfCalc += "0"
        }
        else{
            cpfCalc +=""+11-resto
        }
        if(cpf.value == cpfCalc){
        resultado.innerHTML = "CPF VALIDO";
        }
        else{
            resultado.innerHTML = "CPF INVALIDO"
        }
    }
}