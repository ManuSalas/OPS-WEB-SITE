<?php
include ("class.phpmailer.php");

// load the variables form address bar
$name = $_POST["name"];
$email = $_POST["email"];
$comment = $_POST["comment"];

   // Si la verificación es correcta, envía el correo y muestra el mensaje
   $mail = new PHPMailer();
   $mail->Host = "localhost";
   $mail->From = "consulta_web@opsargentina.com.ar";
   $mail->FromName = "$nombre";

   $mail->IsHTML(true);
   $mail->Subject = "Consulta Online";
   $mail->AddAddress("consulta_web@opsargentina.com.ar");
   $mail->AddAddress("nvergara@opsargentina.com.ar");
   
   $body = "
   <html>
   <head>
   <title>HTML Email</title>
   </head>
   <body>
   <table width='50%' border='0' align='center' cellpadding='0' cellspacing='0'>
   <tr>
   <td colspan='2' align='center' valign='top'><img style=' margin-top: 15px; ' src='http://www.opsargentina.com.ar/images/OPS-curvas3.png' ></td>
   </tr>
   <tr>
   <td width='50%' align='right'>&nbsp;</td>
   <td align='left'>&nbsp;</td>
   </tr>
   <tr>
   <td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Nombre:</strong></td>
   <td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$name."</td>
   </tr>
   <tr>
   <td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Email:</strong></td>
   <td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".$email."</td>
   </tr>
   <tr>
   <td align='right' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'><strong>Mensaje:</strong></td>
   <td align='left' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>".nl2br($comment)."</td>
   </tr>
   </table>
   </body>
   </html>
   ";

   $mail->Body = $body;
   $mail->AltBody = "";

   //$mail->Send();

   if (!$mail->Send()) {
       echo "Error: " . $mail->ErrorInfo;
   } else {
       echo "¡Mensaje Enviado!";
   }
?>