let campos=[ $telefone = $('#telefone'),
 $nome = $('#nome'),
 $email = $('#email'),
 $cep = $('#cep'),
 $rua = $('#rua'),
 $bairro = $('#bairro'),
 $cidade = $('#cidade'),
 $estado = $('#estado'),
 $peso = $('#peso'),
 $altura = $('#altura'),
 $senha = $('#senha'),
 $senhaconfirm = $('#senhaconfirm')]
 $tiposanguineo = $('#tiposanguineo')



let $cadastrar = $('#cadastro')
let value,valuenoformt 
$telefone.on('input',function(){
    value = $telefone[0].value
    valuenoformt = value.replaceAll('(','').replaceAll(')','').replaceAll('-','')
    if(!$.isNumeric(valuenoformt))
    value=value.substring(0,value.length-1)
    else{ if(value.length==2)
    value=`(${value})`
    if(value.length==9 && value.includes('-'))
    value=value.replaceAll('-','')
    if(value.length==9)
    value=`${value}-`
    if(value.length>14)
    value=value.substring(0,value.length-1)}
    $telefone[0].value=value
})
$cep.on('input',function(){
    value = $cep[0].value
    if(!$.isNumeric(value))
    value=value.substring(0,value.length-1)
    else if(value.length>8)
    value=value.substring(0,value.length-1)
    $cep[0].value=value
})

$altura.on('input',function(){
    value = $altura[0].value
    if(!$.isNumeric(value))
    value=value.substring(0,value.length-1)
    else if(value.length>8)
    value=value.substring(0,value.length-1)
    $altura[0].value=value
})
$peso.on('input',function(){
    value = $peso[0].value
    if(!$.isNumeric(value))
    value=value.substring(0,value.length-1)
    else if(value.length>8)
    value=value.substring(0,value.length-1)
    $peso[0].value=value
})

$senhaconfirm.on('change',function(){
    if($senhaconfirm[0].value!=$senha[0].value)
    alert('A confirmação de senha deve ser igual a senha')
})

$cadastrar.on('click',function(){
    let stringerro = new String('')
    let dados ={}
    if($senhaconfirm[0].value!=$senha[0].value)
    alert('A confirmação de senha deve ser igual a senha')
    else{
    campos.forEach(element => {
        console.log(element)
        if(element[0].id!="senhaconfirm")
            if(element[0].value)
            dados[element[0].id]=element[0].value
        if(!element[0].value)
        stringerro = stringerro + element[0].id+", "
    });
    if(stringerro.length)
    alert(`Os campos ${stringerro.substring(0,stringerro.length-2)} não podem ficar em branco`)
    console.log(dados)}
})