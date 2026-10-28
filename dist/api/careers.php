<?php
/**
 * MAXDAX PRIVATE LIMITED - Careers & Recruitment API Endpoint
 * For cPanel Apache hosting environment
 */

header('Content-Type: application/json; charset=UTF-8');
header('X-Content-Type-Options: nosniff');
header('X-Frame-Options: SAMEORIGIN');

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
$data = json_decode($rawInput, true) ?: $_POST;

// Honeypot spam defense
if (!empty($data['hp_field'])) {
    echo json_encode(['success' => true, 'message' => 'Application received.']);
    exit();
}

$name = trim(filter_var($data['name'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$phone = trim(filter_var($data['phone'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$email = trim(filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL));
$position = trim(filter_var($data['position'] ?? 'Smart Home Automation Engineer', FILTER_SANITIZE_SPECIAL_CHARS));
$experience = trim(filter_var($data['experience'] ?? '1-3 Years', FILTER_SANITIZE_SPECIAL_CHARS));
$qualification = trim(filter_var($data['qualification'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$location = trim(filter_var($data['location'] ?? 'Kerala', FILTER_SANITIZE_SPECIAL_CHARS));
$note = trim(filter_var($data['note'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$portfolioLink = trim(filter_var($data['portfolioLink'] ?? '', FILTER_SANITIZE_URL));

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Please provide your full name, phone number, and email.']);
    exit();
}

// Generate Application Reference ID
$appId = 'MDX-HR-' . date('ym') . '-' . strtoupper(substr(md5(uniqid(rand(), true)), 0, 4));

$to = 'hr@maxdax.in, info@maxdax.in';
$subject = "[$appId] New Job Application: $position - $name ($location)";

$htmlBody = "
<!DOCTYPE html>
<html>
<head>
<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0b0f19; color: #f1f5f9; padding: 20px; }
  .card { background-color: #151f34; border: 1px solid #1e293b; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
  h2 { color: #38bdf8; margin-top: 0; }
  .ref { font-family: monospace; color: #e5b869; font-size: 16px; margin-bottom: 16px; }
  .field { margin-bottom: 12px; }
  .label { font-weight: bold; color: #94a3b8; font-size: 12px; text-transform: uppercase; }
  .val { color: #f8fafc; font-size: 15px; margin-top: 2px; }
  .badge { background: #0284c7; color: #fff; padding: 4px 10px; border-radius: 999px; display: inline-block; font-size: 13px; font-weight: bold; }
  .footer { margin-top: 24px; font-size: 12px; color: #64748b; border-top: 1px solid #1e293b; padding-top: 12px; }
</style>
</head>
<body>
<div class='card'>
  <h2>MAXDAX &mdash; New Job Application</h2>
  <div class='ref'>Application Reference: $appId</div>
  <div class='field'><div class='label'>Applicant Name</div><div class='val'>$name</div></div>
  <div class='field'><div class='label'>Position Applied For</div><div class='val'><span class='badge'>$position</span></div></div>
  <div class='field'><div class='label'>Phone</div><div class='val'><a href='tel:$phone' style='color:#38bdf8;'>$phone</a></div></div>
  <div class='field'><div class='label'>Email</div><div class='val'><a href='mailto:$email' style='color:#38bdf8;'>$email</a></div></div>
  <div class='field'><div class='label'>Location / District</div><div class='val'>$location</div></div>
  <div class='field'><div class='label'>Relevant Experience</div><div class='val'>$experience</div></div>
  <div class='field'><div class='label'>Educational Qualification</div><div class='val'>$qualification</div></div>
  " . (!empty($portfolioLink) ? "<div class='field'><div class='label'>Resume / LinkedIn Profile</div><div class='val'><a href='$portfolioLink' target='_blank' style='color:#38bdf8;'>$portfolioLink</a></div></div>" : "") . "
  <div class='field'><div class='label'>Cover Note / Summary</div><div class='val'>" . nl2br($note) . "</div></div>
  <div class='footer'>Sent from maxdax.in Careers Engine &bull; Timestamp: " . date('Y-m-d H:i:s T') . "</div>
</div>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: MAXDAX Careers Desk <careers@maxdax.in>',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion()
];

@mail($to, $subject, $htmlBody, implode("\r\n", $headers));

// Log application for backup integrity
$logDir = __DIR__ . '/../storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
$logEntry = json_encode([
    'timestamp' => date('c'),
    'appId' => $appId,
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'position' => $position,
    'location' => $location
]) . PHP_EOL;
@file_put_contents($logDir . '/careers.log', $logEntry, FILE_APPEND);

echo json_encode([
    'success' => true,
    'appId' => $appId,
    'message' => "Thank you, $name! Your application #$appId has been submitted to MAXDAX HR. Our recruitment team will review your profile and contact you."
]);
