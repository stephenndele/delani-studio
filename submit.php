<?php // Process form submission and integrate with Mailchimp API

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle unfinished form. Remember to perform additional suitable validation here
    if (!isset($_POST['form_name']) || !isset($_POST['form_email']) || !isset($_POST['form_message'])) {
        // Send user back to the form
        header('Location: /');
    }

    // Set default to handle if the user wants to subscribe or not
$subscribed = false;

// Check user has accepted to sign up to the newsletter
if (isset($_POST['newsletter'])) {
    // Set API credentials and build URL
    $data_center = 'DATA_CENTER_HERE';
    $audience_id = '';
    $api_key = '';
    $url = 'https://' . $data_center . '.api.mailchimp.com/3.0/lists/' . $audience_id . '/members';


    $user_details = [
        'email_address' => $_POST['email'],
        'status' => 'subscribed'
    ];
    $user_details = json_encode($user_details);


    $ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLINFO_HEADER_OUT, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_USERPWD, 'newsletter:' . $api_key);
curl_setopt($ch, CURLOPT_POSTFIELDS, $user_details);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
	'Content-Type: application/json',
	'Content-Length: ' . strlen($user_details)
]);
$result = curl_exec($ch);
$result_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);
print_r($result);

