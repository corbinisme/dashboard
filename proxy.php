<?php
//header('Content-type: application/xml');
// Location of XML content
$url = ":)";
if(isset($_REQUEST['url'])) {
	$url = $_REQUEST['url'];
} else {
	$url = "https://corbinrose.com/errorpage.php";
}

// Open the stream to access XML content as read-only with file pointer at beginning of file
$pointer = fopen($url, 'r');
// If the file/content exists, loop through the file until end of file
if ($pointer) {
    while (!feof($pointer)) {
        $line = fgets($pointer); // Get data from current line
        echo $line; // Output date from current line
    }
    fclose($pointer); // Close connection to file
}
?>