<?php
//header('Content-type: application/xml');
// Location of XML content
$url = ":)";
if(isset($_REQUEST['url'])) {
	$url = $_REQUEST['url'];
} else {
	$url = "https://corbinrose.com/errorpage.php";
}

$out = file_get_contents($url);
echo "<textarea>"  . $out . "</textarea>";
?>