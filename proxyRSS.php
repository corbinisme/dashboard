<?php

 $url = "";
 if(isset($_REQUEST['url'])){
   if($_REQUEST['url'] != ''){
     $url = $_REQUEST['url'];
   }
 }

 $invalidurl = false;
 if(@simplexml_load_file($url)){
  $feeds = simplexml_load_file($url);
 }else{
  $invalidurl = true;
  echo "<h2>Invalid RSS feed URL.</h2>";
 }


 $i=0;
 if(!empty($feeds)){

  $site = $feeds->channel->title;
  $sitelink = $feeds->channel->link;

  foreach ($feeds->channel->item as $item) {

   $title = $item->title;
   $link = $item->link;
   $description = $item->description;
   $postDate = $item->pubDate;
   $pubDate = date('D, d M Y',strtotime($postDate));


   if($i>=12) break;
  ?>
   <div class="post">
     <div class="post-head">
       <a class="post-title" href="<?php echo $link; ?>"><?php echo $title; ?></a>
       <span class="post-date"><?php echo $pubDate; ?></span>
     </div>
     <div class="post-content">
       <?php echo implode(' ', array_slice(explode(' ', $description), 0, 50)) . "..."; ?> 
       <a class="post-link" href="<?php echo $link; ?>">Read more</a>
     </div>
   </div>

   <?php
    $i++;
   }
 }else{
   if(!$invalidurl){
     echo "<h2>No item found</h2>";
   }
 }
 ?>
