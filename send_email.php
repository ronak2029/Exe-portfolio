<?php
/**
 * Maison AURA - SMTP Mail Processor
 * Direct socket implementation for zero-dependency SMTP email delivery.
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Methods: POST');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// ============================================================
// SMTP CREDENTIALS CONFIGURATION
// Please fill in your credentials below.
// ============================================================
define('SMTP_HOST', 'smtp.gmail.com');
define('SMTP_PORT', 465);                             // 465 for SSL, 587 for STARTTLS
define('SMTP_USER', 'harsh.ixora@gmail.com');  // Your email
define('SMTP_PASS', 'cqvmaizcrqcfblhv');     // Your password or app-specific password
define('SMTP_SECURE', 'ssl');                         // 'ssl', 'tls', or null
define('TO_EMAIL', 'ronak241248@gmail.com'); // Where inquiries should be sent
define('FROM_NAME', 'Maison AURA');
// ============================================================

// Read and decode the incoming JSON payload
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    echo json_encode([
        'success' => false,
        'message' => 'No data payload received. Please ensure request body is JSON.'
    ]);
    exit;
}

$clientEmail = filter_var($input['email'] ?? '', FILTER_VALIDATE_EMAIL);
$category = strip_tags($input['category'] ?? 'General Inquiry');
$messageText = strip_tags($input['message'] ?? '');

if (!$clientEmail) {
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid client email address.'
    ]);
    exit;
}

if (!$messageText) {
    echo json_encode([
        'success' => false,
        'message' => 'Inquiry details cannot be blank.'
    ]);
    exit;
}

// Build email body
$subject = "Maison AURA Inquiry: " . ucfirst($category);
$body = "New styling inquiry submitted via Maison AURA.\r\n\r\n" .
        "Client Email: " . $clientEmail . "\r\n" .
        "Subject Area: " . ucfirst($category) . "\r\n\r\n" .
        "Inquiry Details:\r\n" . $messageText . "\r\n\r\n" .
        "--- Sent via Maison AURA Digital Portal ---\r\n";

try {
    sendMailSmtp(SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, TO_EMAIL, $clientEmail, $subject, $body);
    echo json_encode([
        'success' => true,
        'message' => 'Inquiry successfully transmitted via SMTP.'
    ]);
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'SMTP Delivery Failed: ' . $e->getMessage()
    ]);
}

/**
 * Socket SMTP Mailer implementation
 */
function sendMailSmtp($host, $port, $user, $pass, $secure, $to, $replyTo, $subject, $body) {
    $remote = $host . ':' . $port;
    if ($secure === 'ssl') {
        $remote = 'ssl://' . $remote;
    }
    
    $context = stream_context_create();
    // Connect to target SMTP socket
    $socket = @stream_socket_client($remote, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $context);
    
    if (!$socket) {
        throw new Exception("Unable to connect to socket: $errstr ($errno)");
    }
    
    // Expect 220 greeting
    readSmtpResponse($socket, 220);
    
    // HELO/EHLO handshake
    fwrite($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost') . "\r\n");
    readSmtpResponse($socket, 250);
    
    // STARTTLS negotiation if TLS secure config
    if ($secure === 'tls') {
        fwrite($socket, "STARTTLS\r\n");
        readSmtpResponse($socket, 220);
        
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new Exception("Failed to establish secure TLS session.");
        }
        
        // EHLO handshake again over secure channel
        fwrite($socket, "EHLO " . ($_SERVER['SERVER_NAME'] ?: 'localhost') . "\r\n");
        readSmtpResponse($socket, 250);
    }
    
    // Authentication handshake if credentials exist
    if ($user && $pass) {
        fwrite($socket, "AUTH LOGIN\r\n");
        readSmtpResponse($socket, 334);
        
        fwrite($socket, base64_encode($user) . "\r\n");
        readSmtpResponse($socket, 334);
        
        fwrite($socket, base64_encode($pass) . "\r\n");
        readSmtpResponse($socket, 235);
    }
    
    // MAIL FROM command
    fwrite($socket, "MAIL FROM: <" . $user . ">\r\n");
    readSmtpResponse($socket, 250);
    
    // RCPT TO command
    fwrite($socket, "RCPT TO: <" . $to . ">\r\n");
    readSmtpResponse($socket, 250);
    
    // DATA command
    fwrite($socket, "DATA\r\n");
    readSmtpResponse($socket, 354);
    
    // Send email headers and payload
    $headers = [
        "MIME-Version: 1.0",
        "Content-type: text/plain; charset=utf-8",
        "To: <" . $to . ">",
        "From: \"" . FROM_NAME . "\" <" . $user . ">",
        "Reply-To: <" . $replyTo . ">",
        "Subject: =?UTF-8?B?" . base64_encode($subject) . "?=",
        "Date: " . date('r')
    ];
    
    $payload = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.\r\n";
    fwrite($socket, $payload);
    readSmtpResponse($socket, 250);
    
    // QUIT
    fwrite($socket, "QUIT\r\n");
    fclose($socket);
}

/**
 * Reads and verifies server response codes from socket
 */
function readSmtpResponse($socket, $expectedCode) {
    $response = "";
    while ($line = fgets($socket, 515)) {
        $response .= $line;
        if (substr($line, 3, 1) === " ") {
            break;
        }
    }
    $code = (int)substr($response, 0, 3);
    if ($code !== $expectedCode) {
        throw new Exception("Expected $expectedCode, got $code. Details: " . trim($response));
    }
    return $response;
}
