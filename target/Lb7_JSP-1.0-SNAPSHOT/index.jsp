<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Калькулятор</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<center>
    <div>
        <p>Введите первое число</p>
        <input type="number" id="input_first_num"> <br>
    </div>

    <div>
        <p>Введите второе число</p>
        <input type="number" id="input_second_num"> <br>
    </div>

    <div>
        <button id="plus"><img src="image/plus.png"></button>
        <button id="minus"><img src="image/minus.png"></button> <br>
        <button id="divide"><img src="image/divide.png"></button>
        <button id="multiply"><img src="image/multiply.png"></button>
    </div>
    <p id="result"></p>
</center>
<script src="code.js"></script>
</body>
</html>