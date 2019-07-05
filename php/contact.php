<?php

// Define some constants
define( "RECIPIENT_NAME", "Contact Ionut Danila" );
define( "RECIPIENT_EMAIL", "contact@ionutdanila.com" );
define( "EMAIL_SUBJECT", "Message from Webiste Visitor" );

// Read the form values
$success = false;
$senderName = isset( $_POST['senderName'] ) ? preg_replace( "/[^\.\-\' a-zA-Z0-9]/", "", $_POST['senderName'] ) : "";
$senderEmail = isset( $_POST['senderEmail'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['senderEmail'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

$host = "ssl://mail.example.com";
$port = "465";
$username = "smtp_username";
$password = "smtp_password";

// If all values exist, send the email
if ( $senderName && $senderEmail && $message ) {
  $recipient = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $headers = "From: " . $senderName . " <" . $senderEmail . ">";
  $success = mail( $recipient, EMAIL_SUBJECT, $message, $headers );
}

// Return an appropriate response to the browser
if ( isset($_GET["ajax"]) ) {
  echo $success ? "success" : "error";
} else {
?>
  <?php if ( $success ) echo "success"?>
  <?php if ( !$success ) echo "error"?>
<?php
}
?>