


const API_BibleVOD = 'https://www.biblegateway.com/votd/get/?format=atom';
const API_BibleVOD_Background = "https://apod.nasa.gov/apod/astropix.html";
var BibleVOD = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
             {
                 type: "a",
                 text: "<i class='fa fa-music'></i>",
                 classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:BibleVOD.audio()"
             }
			
          ]
      },
      background: "",
      
      height: 100,
    },
   
  
    init: function (node) {
        BibleVOD.state.dom = node;
        BibleVOD.renderHeader();
        BibleVOD.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "BibleVOD");
    },
    rssFetch: function (dir) {
        
        BibleVOD.render();

    },
    audio: function(){
      var aud = $(".widget_BibleVOD .card-header a").attr("data-audio");
      window.open(aud)
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(BibleVOD.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Verse of the Day"; // localized
        var res = app.initHeaderItems(BibleVOD.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        $.ajax({
            url: API_BibleVOD_Background,
            success: function(dat){

                let $temp = $(document.createElement("div"));
                $temp.html(dat);
                $temp.find("a").each(function(){
                    let href = $(this).attr("href");
                    if(href.indexOf("image/")>-1){
                        BibleVOD.state.background = href;
                    }
                })
                
                BibleVOD.render();
            }
        })

    },
    populateList: function (data) {

    },
   render: function() {

          var node = $(BibleVOD.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          $(node).css("backgroundImage", "url('https://apod.nasa.gov/apod/" + BibleVOD.state.background + "')");
          var rss = "";
          var $rss = $(document.createElement("div"));
          var $ul = $(document.createElement("ul"));
          $ul.addClass("rss_list");

          
            $.ajax({
                url: API_BibleVOD,
                success: function (xml) {

                 
                    var $rss = $(document.createElement("div"));
                    var content = "";
                    var title = "";
                    var audio = "";
                    $(xml).find("entry").each(function(){


                      title = $(this).find("title").text();
                      content = $(xml).find("content").html();

                      content = content.replace("<!--[CDATA[", "");
                      content = content.replace("]]-->", "");
                      content = content.replace("]]--&gt;", "");
                      $(this).find("link").each(function(){
                          
                          var href = $(this).attr("href")
                          if(href.indexOf("audio")>-1){
                            audio = href;
                          }

                      });
                    });
                    if(audio!=""){
                      $(node).closest(".portlet").find(".card-header .headerItems .btn").attr("data-audio", audio)
                    }
                    $rss.html("<div class='bibleContent'><blockquote>" + content + "</blockquote><hr / ><small>" + title + "</small></div>");
                    $(node).html($rss.html());
                    return $rss.html();
                },
                error: function (e) {
                    console.log("error");
                    return "error";
                }
            })
          
      
      }

}
