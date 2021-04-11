let $login = $('#login')
let $email = $('#email')
let $password = $('#password')
$login.on('click', function() {
	console.log($email[0].value)
	console.log($password[0].value)
    let result =  {"role":"paciente","id":"XXXXXX","login":true}
    if(result.login){
    sessionStorage.userid=result.id
    sessionStorage.userrole=result.role
    window.location.href=window.location.href.replace("login","index")
}});