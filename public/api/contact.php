<?php
/**
 * MAXDAX PRIVATE LIMITED - Lead & Consultation API Endpoint
 * For cPanel Apache hosting environment
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

// Basic CORS
$allowed_origin = '*';
header("Access-Control-Allow-Origin: $allowed_origin");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed.']);
    exit();
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    // Fallback to standard POST form data
    $data = $_POST;
}

// Honeypot spam defense
if (!empty($data['website_trap_field']) || !empty($data['hp_company'])) {
    // Bot detected - return fake success
    echo json_encode(['success' => true, 'message' => 'Your enquiry has been received.']);
    exit();
}

// Extract and sanitize fields
$name = trim(filter_var($data['name'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$phone = trim(filter_var($data['phone'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$email = trim(filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL));
$projectType = trim(filter_var($data['projectType'] ?? 'Residential Villa', FILTER_SANITIZE_SPECIAL_CHARS));
$propertyType = trim(filter_var($data['propertyType'] ?? 'New Construction', FILTER_SANITIZE_SPECIAL_CHARS));
$location = trim(filter_var($data['location'] ?? 'Kerala', FILTER_SANITIZE_SPECIAL_CHARS));
$consultationMethod = trim(filter_var($data['consultationMethod'] ?? 'Phone / WhatsApp', FILTER_SANITIZE_SPECIAL_CHARS));
$message = trim(filter_var($data['message'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));

$solutions = $data['solutions'] ?? [];
$solutionsStr = is_array($solutions) ? implode(', ', array_map('htmlspecialchars', $solutions)) : htmlspecialchars((string)$solutions);

// Validation
if (empty($name) || (empty($phone) && empty($email))) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your name and at least a phone number or email address.']);
    exit();
}

// Recipient
$to = 'info@maxdax.in';
$subject = "New Smart Home Consultation Request: $name ($location)";

// HTML Email Body
$htmlBody = "
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 20px; }
  .card { background-color: #151f34; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
  h2 { color: #38bdf8; margin-top: 0; }
  .field { margin-bottom: 12px; }
  .label { font-weight: bold; color: #94a3b8; font-size: 13px; text-transform: uppercase; }
  .val { color: #f8fafc; font-size: 16px; margin-top: 2px; }
  .badge { background: #0284c7; color: #fff; padding: 4px 10px; border-radius: 999px; display: inline-block; font-size: 13px; }
  .footer { margin-top: 24px; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 12px; }
</style>
</head>
<body>
<div class='card'>
  <h2>MAXDAX &mdash; New Consultation Lead</h2>
  <div class='field'><div class='label'>Client Name</div><div class='val'>$name</div></div>
  <div class='field'><div class='label'>Phone</div><div class='val'><a href='tel:$phone' style='color:#38bdf8;'>$phone</a></div></div>
  <div class='field'><div class='label'>Email</div><div class='val'><a href='mailto:$email' style='color:#38bdf8;'>$email</a></div></div>
  <div class='field'><div class='label'>Location / City</div><div class='val'>$location</div></div>
  <div class='field'><div class='label'>Project / Property Type</div><div class='val'>$projectType ($propertyType)</div></div>
  <div class='field'><div class='label'>Interested Solutions</div><div class='val'><span class='badge'>$solutionsStr</span></div></div>
  <div class='field'><div class='label'>Preferred Consultation</div><div class='val'>$consultationMethod</div></div>
  <div class='field'><div class='label'>Client Message / Requirements</div><div class='val'>" . nl2br($message) . "</div></div>
  <div class='footer'>Sent from maxdax.in Lead Generation Engine &bull; Timestamp: " . date('Y-m-d H:i:s T') . "</div>
</div>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: MAXDAX Web Engine <no-reply@maxdax.in>',
    'Reply-To: ' . (!empty($email) ? $email : 'info@maxdax.in'),
    'X-Mailer: PHP/' . phpversion()
];

// Send via mail()
$mailSent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

// Log to local file for backup integrity
$logDir = __DIR__ . '/../storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logEntry = json_encode([
    'timestamp' => date('c'),
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'location' => $location,
    'solutions' => $solutions,
    'mail_dispatched' => $mailSent
]) . PHP_EOL;
@file_put_contents($logDir . '/enquiries.log', $logEntry, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Thank you, ' . $name . '! Your consultation request has been received. Our smart automation specialists will contact you within 24 hours.'
]);
