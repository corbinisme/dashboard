<?php
header("Content-Type: application/json");
$url = $_REQUEST['url'];

$xml = simplexml_load_file($url);
$arr = [];

foreach($xml->channel->item as $node){
    $temp = [];
    $title = $node->title;
    $link = $node->link;
    $image = "";
    $pubDate = $node->pubDate;
    $decription = $node->description;
    if($node->enclosure){
        $image = $node->enclosure["url"];
    }
    $temp["title"] =  trim($title);
    $temp["guid"]= trim($link);
    $temp["pubDate"]= trim($pubDate);
    $temp["image"]= trim($image);
    $temp["description"]= trim($decription);
    $arr[] = $temp;
}

echo json_encode($arr);
        