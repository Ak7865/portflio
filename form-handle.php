<?php
$name =$_POST['name'];
$visitor_email =$_POST['email'];
// $subject =$_POST['subject'];
$message =$_POST['message'];

$email_from ='WEBSITE EMAIL';

$email_subject ='New Form Submission';

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                //  "Subject: $subject.\n".
                 "User Message: $message.\n";


$to = 'syedakhterhussain9@gmail.com';

$headers = "From: /storage/ssd1/395/19754395/public_html/form-handler.php";

$headers = "Reply-To: $visitor_email \r\n";

mail($to,$email_body,$headers);

header("Location: #contact");

?>