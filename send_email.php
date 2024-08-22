<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['client_name']);
  $phone = htmlspecialchars($_POST['client_phone']);

  $to = "vachikpuper@gmail.com";
  $subject = "Новая заявка";
  $message = "Имя: $name\nНомер телефона: $phone";
  $headers = "From: noreply@yourdomain.com";

  if (mail($to, $subject, $message, $headers)) {
    echo "Сообщение отправлено!";
  } else {
    echo "Ошибка при отправке сообщения.";
  }
}
?>