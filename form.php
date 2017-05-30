<?php
    $message = "Послание с сайта";
    $to = "nata_ko90@mail.ru";
    //$to = "denis1234567@mail.ru";
    $from = "webmaster@asdfgh.ru";
    $subject = "Привет, Наташа!";
	
    $name = htmlspecialchars ($_POST["name"]);
    $news = htmlspecialchars ($_POST["news"]);
	
    $text = '<br>'.'<br>'.'<b>'.'Имя отправителя: '.'</b>'.$name.'<br>'.'<b>'.'Сообщение отправителя: '.'</b>'.$news.'<br>';
	
    $message.= $text;
    $subject = "=?utf-8?B?".base64_encode($subject)."?=";
    $headers = "From: $from\r\nReply-to: $from\r\nContent-type: text/html; charset=utf-8\r\n";
    if (mail ($to, $subject, $message, $headers)) {
		header('Location: http://asdfgh.ru/#thanks');
	}
