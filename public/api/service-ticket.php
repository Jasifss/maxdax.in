<?php
/**
 * MAXDAX PRIVATE LIMITED - Customer Support & Service Ticket API Endpoint
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
if (!empty($data['hp_trap'])) {
    echo json_encode(['success' => true, 'ticketId' => 'MDX-TKT-BOT-DEF']);
    exit();
}

$name = trim(filter_var($data['name'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$phone = trim(filter_var($data['phone'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$email = trim(filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL));
$systemCategory = trim(filter_var($data['category'] ?? 'Gate Automation', FILTER_SANITIZE_SPECIAL_CHARS));
$urgency = trim(filter_var($data['urgency'] ?? 'Normal', FILTER_SANITIZE_SPECIAL_CHARS));
$address = trim(filter_var($data['address'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));
$issueDetails = trim(filter_var($data['issue'] ?? '', FILTER_SANITIZE_SPECIAL_CHARS));

if (empty($name) || empty($phone) || empty($issueDetails)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Name, phone number, and issue description are required.']);
    exit();
}

// Generate unique ticket number
$ticketId = 'MDX-TKT-' . date('ym') . '-' . strtoupper(substr(md5(uniqid(rand(), true)), 0, 4));

$to = 'info@maxdax.in';
$subject = "[$ticketId] Priority Service Ticket: $systemCategory - $name";

$htmlBody = "
<!DOCTYPE html>
<html>
<body style='font-family:sans-serif; background:#0b0f19; color:#f8fafc; padding:20px;'>
  <div style='background:#151f34; border:1px solid #1e293b; padding:24px; border-radius:12px; max-width:600px; margin:0 auto;'>
    <h2 style='color:#e5b869; margin:0;'>MAXDAX Support Ticket Registered</h2>
    <p style='font-size:18px; font-weight:bold; color:#38bdf8;'>Ticket Number: $ticketId</p>
    <hr style='border-color:#1e293b;' />
    <p><strong>Customer:</strong> $name</p>
    <p><strong>Phone:</strong> <a href='tel:$phone' style='color:#38bdf8;'>$phone</a></p>
    <p><strong>Email:</strong> $email</p>
    <p><strong>Service Subsystem:</strong> $systemCategory</p>
    <p><strong>Urgency:</strong> <span style='color:" . ($urgency === 'High' ? '#ef4444' : '#e5b869') . "'>$urgency</span></p>
    <p><strong>Site Address:</strong> $address</p>
    <p><strong>Issue Description:</strong></p>
    <div style='background:#0b0f19; padding:12px; border-radius:8px; border:1px solid #334155;'>$issueDetails</div>
  </div>
</body>
</html>
";

$headers = [
    'MIME-Version: 1.0',
    'Content-type: text/html; charset=UTF-8',
    'From: MAXDAX Support Desk <support@maxdax.in>',
    'Reply-To: ' . (!empty($email) ? $email : 'info@maxdax.in'),
    'X-Mailer: PHP/' . phpversion()
];

@mail($to, $subject, $htmlBody, implode("\r\n", $headers));

echo json_encode([
    'success' => true,
    'ticketId' => $ticketId,
    'message' => "Your service ticket #$ticketId has been registered. An on-site engineer has been notified."
]);
