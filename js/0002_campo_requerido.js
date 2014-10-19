// Verifica se o campo foi deixado vazio

<!DOCTYPE html>
<html>
<head>
<script>
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x==null || x=="") {
        alert("First name must be filled out");
        return false;
    }
}
</script>
</head>

<body>
<form name="myForm" action="demo_form.asp" onsubmit="return validateForm()" method="post">
First name: <input type="text" name="fname">
<input type="submit" value="Submit">
</form>
</body>

</html>

/*
Se o campo estiver em branco, será emitido uma mensagem de alerta,
a função retorna falso, eo formulário não será submetido:
*/