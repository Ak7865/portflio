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
<?php
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';


require 'vendor/autoload.php';
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;





if (isset($_POST['send'])) {
    $name =$_POST['name'];
    $visitor_email =$_POST['email'];
    // $subject =$_POST['subject'];
    $message =$_POST['message'];
    
    $email_from ='WEBSITE EMAIL';
    
    $email_subject ='New Form Submission';
    // Sanitize the inputs
    $name = htmlspecialchars(strip_tags($name));
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(strip_tags($message));

    if (!$email) {
        die("Invalid email address.");
    }

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'ah076145@gmail.com'; // Your Gmail address
        $mail->Password   = 'ocvs chgs qzkp ymvy';        // Your Gmail password or app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Sender and recipient
        $mail->setFrom($email, $name); // Use form data for sender
        $mail->addAddress('ah076145@gmail.com', 'Admin'); // Admin email for receiving messages

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'Contact Form Submission';

        $email_body = "User Name: $name.\n".
        "User Email: $visitor_email.\n".
        //  "Subject: $subject.\n".
         "User Message: $message.\n";
        $mail->AltBody = "Name: {$name}\nEmail: {$email}\nMessage: {$message}";

        // Send email
        $mail->send();
        echo "<div class='success' >";
        echo "Message sent successfully. Thank you, $name!";
        echo "</div>";
        header("Refresh:3; url=contact-us.html");
        exit;
    } catch (Exception $e) {
        echo "<div class='error'>";
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        echo "</div>";
    }

}
?>
