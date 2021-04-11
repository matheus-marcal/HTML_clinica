
const get_medicos=()=>{
let medicos =[[
    {
        "endereco": [],
        "parent": [],
        "_id": "6071bd07270b0267b9681576",
        "nome": "user14",
        "body": "teste",
        "telefone": "(31)99779-2370",
        "password": "$2b$10$WNdWKz8yxKYYKM/b/HPwY.WHXOR.l4rASHup/879/ZSqA4Vj38C0S",
        "role": "medico","especialidade":"teste1",
        "Created_date": "2021-04-10T14:58:15.697Z",
        "__v": 0
    },
    {
        "endereco": [],
        "parent": [],
        "_id": "6071bd20270b0267b9681577",
        "nome": "user15",
        "body": "teste",
        "telefone": "(31)99779-2370",
        "password": "$2b$10$4nj7LRENfpDPUB6QgjUJ.ekF8kvLxpvJNBu3DoQ4nU39kuXG8OLnK",
        "role": "medico","especialidade":"teste2",
        "Created_date": "2021-04-10T14:58:40.021Z",
        "__v": 0
    },
    {
        "endereco": [],
        "parent": [],
        "_id": "6071bd4e270b0267b9681578",
        "nome": "user16",
        "body": "teste",
        "telefone": "(31)99779-2370",
        "password": "$2b$10$POLZAsoLjqly/Dj7hoyar.a1Q5uBOky6oTfDLaQfG0VmsfnO2LVoi",
        "role": "medico","especialidade":"teste3",
        "Created_date": "2021-04-10T14:59:26.087Z",
        "__v": 0
    },
    {
        "endereco": [
            "end1",
            "end2",
            "end3"
        ],
        "parent": [],
        "_id": "6071bd59e61e8969a6c398ec",
        "nome": "user17",
        "body": "teste",
        "telefone": "(31)99779-2370",
        "password": "$2b$10$f9LL0eokCZBi6h8veIiM/Od3ak6VaiA5bDGdQgRy2oJN7UjuAkJbu",
        "role": "medico","especialidade":"teste4",
        "Created_date": "2021-04-10T14:59:37.648Z",
        "__v": 0
    },
    {
        "endereco": [
            "end1",
            "end2",
            "end3"
        ],
        "parent": [
            "6071bd59e61e8969a6c398ec"
        ],
        "_id": "6071cf3f86ebe3860c8cd737",
        "nome": "user18",
        "body": "teste",
        "telefone": "(31)99779-2370",
        "password": "$2b$10$c9zx2Jf1cyYUMq3nvX1Mru.H5m0.lSi2fhb4aX86OoCEI4L31UQAW",
        "role": "medico","especialidade":"teste5",
        "Created_date": "2021-04-10T16:15:59.308Z",
        "__v": 0
    }
]]



return medicos[0]
}
const get_horario=()=>{
    let horario=['8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30']  
    return horario
}

$data = $('#data')
$data.on('input',function(){
    value = $data[0].value
    valuenoformt = value.replaceAll('/','')
    if(!$.isNumeric(valuenoformt))
    value=value.substring(0,value.length-1)
    else{ 
    if(value.length==2)
    value=`${value}/`
    if(value.length==5)
    value=`${value}/`
    if(value.length>10)
    value=value.substring(0,value.length-1)}
    $data[0].value=value
})
let $select = $('#medico')
$data.on('change',function(){
    let dateString = $data[0].value
    let dateParts = dateString.split("/");
    let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 
    let now = new Date()
    if($select[0].value==''){
    alert("Precisa selecionar um medico primeiro")
    $data[0].value=''
    }
    else if(dateObject=="Invalid Date"){
    alert("Formato de data invalido formato esperado DD/MM/YYYY")
    $data[0].value=''
    }
    else if(dateObject.getDay()==0 ||dateObject.getDay()==6 ){
    alert("Não agendamos consultas em fins de semana")
    $data[0].value=''
    }
    else if(dateObject.getTime()<now.getTime()){
    alert("A data selecionada deve ser no futuro e não no passado")
    $data[0].value=''
    }
    else{
    let horario = get_horario()
    $horarios = $('#horario')
    for(var i=0;i<horario.length;i++){
        $horarios.append("<option value="+horario[i]+">"+horario[i]+"</option>")
    }
    $('#horario').prop( "disabled", false );
    }
    
    console.log(dateObject)
})

const main = () =>{
    $('#horario').prop( "disabled", true );
    let medicos = get_medicos()
    
    for(var i=0;i<medicos.length;i++){
        $select.append("<option value="+medicos[i]._id+">"+medicos[i].nome+"-"+medicos[i].especialidade+"</option>")
    }
}


main()
// const myDatePicker = MCDatepicker.create({ 
//     el: '#data',
//     disableWeekends:true,
//     dateFormat: 'DD/MM/YYYY',
//     customWeekDays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'],
//       customMonths: [
//         'Janeiro',
//         'Fevereiro',
//         'Março',
//         'Abril',
//         'Maio',
//         'Junho',
//         'Julho',
//         'Agosto',
//         'Setembro',
//         'Outubro',
//         'Novembro',
//         'Dezembro'
//       ]
// })