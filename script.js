function calculo(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let alturaN = Number(altura)
    let pesoN = Number(peso)
    let imc = pesoN / (alturaN * alturaN) 
    let imcFormatado = imc.toFixed(2)
    let res = document.getElementById('res')

    if(imc <= 18.5){
        res.innerHTML = `${nome}, o seu imc é de ${imcFormatado} e voce está abaixo do peso indicado`
    } else if (imc > 18.5 && imc <= 24.9){
        res.innerHTML = `${nome}, o seu imc é de ${imcFormatado} e voce está no peso ideal`
    }  else if (imc > 24.9 && imc <= 29.9){
        res.innerHTML = `${nome}, o seu imc é de ${imcFormatado} e voce está no sobrepeso`
    }  else if (imc > 29.9 && imc <= 39.9){
        res.innerHTML = `${nome}, o seu imc é de ${imcFormatado} e voce está obeso`
    }  else if(imc > 39.9){
        res.innerHTML = `${nome}, o seu imc é de ${imcFormatado} e voce está em caso de obesidade grave`
    }
}