<?php
include_once('simple_html_dom.php');

function scraping_godtube() {


    // comedy-videos/
    // ministry-videos/
    // cute-videos/
    // movies/
    // inspirational-videos/
    // music-videos/

    $subpath = "";
    if(isset($_REQUEST['path'])){
        $subpath = $_REQUEST['path'];
    }
    // create HTML DOM
    $html = file_get_html('https://www.godtube.com/' . $subpath);


    // get featured

    $ret =[];
    $first = array();
    $first['link'] = trim($html->find(".categoryFeaturedVideo .videoImagePreview",0)->href);
    $first['image'] = trim($html->find(".categoryFeaturedVideo img", 0)->src);
    $first['title'] = trim($html->find(".videoTitle.visible-xs", 0)->plaintext);
    $ret[] = $first;
    

    foreach($html->find('.geaturedHome') as $article) {
        // get title
        $item['title'] = trim($article->find('a.image', 0)->title);
        $item['link'] = trim($article->find('a.image', 0)->href);
        // get details
        //$item['category'] = trim($article->find('span.title', 0)->plaintext);
        $item['image'] = trim($article->find("img", 0)->src);
        // get intro
        //$item['diggs'] = trim($article->find('li a strong', 0)->plaintext);

        $ret[] = $item;
    }
    
    // clean up memory
    $html->clear();
    unset($html);

    return $ret;
}


// -----------------------------------------------------------------------------
// test it!

// "http://digg.com" will check user_agent header...
ini_set('user_agent', 'My-Application/2.5');

$ret = scraping_godtube();
$retArray= array();

foreach($ret as $v) {
    
    $temp = array();
    $temp["link"] = $v['link'];
    $temp["title"] = $v['title'];
    $temp["image"] = $v['image'];

    /*
    echo '<ul>';
    echo '<li><a href="' . $v['link'] . '">' .$v['title'] . '</a>';
    //echo '<br />' . $v['category'];
    echo '<br /><img src="' . $v['image'] . '" />'; 
    echo '</li>';
    //echo '<li>Diggs: '.$v['diggs'].'</li>';
    echo '</ul>';
    */
    $retArray[] = $temp;
}
/*

echo "<pre>";
print_r($retArray);
echo "</pre>";
*/

echo json_encode(['data'=>$retArray,'method' => 'GET', 'status'=> 200], JSON_PRETTY_PRINT);

?>