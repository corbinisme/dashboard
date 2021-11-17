
function openLink(url) {
    console.log("url", url)
    
  }
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const API_AM = 'https://www.israelam.com/current-issue/';
var AM = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
          ]
      },
      rss: {
        title: "",
        len: 0,
        items: []
      },
      height: 100,
    },
   
  
    init: function (node) {
        AM.state.dom = node;
        AM.renderHeader();
        AM.render()
    },

    RSShandleClick: function(value) {
        window.open(value, "AM");
    },
    rssFetch: function (dir) {
        
        AM.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(AM.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Israel AM"; // localized
        var res = app.initHeaderItems(AM.state.header.items, title);
        $target.html(res);
    },

    getData: function () {


    },
    populateList: function (data) {

    },
   render: function() {
          const options = {
              method: 'GET',
              headers: new Headers({'content-type': 'application/json', 'Origin':''}),
              mode: 'no-cors',
              Origin: ""
          };

          var node = $(AM.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          var rss = "";
          var $rss = $(document.createElement("div"));
          var $ul = $(document.createElement("ul"));
          $ul.addClass("rss_list");

          // check if we need to reajax data
          if (AM.state.rss.items.length > 0) {
              console.log("already have")
          } else {
              console.log("fetch")
          }
            $.ajax({
                url: API_AM,
                success: function (xml) {
                    var $rss = $(document.createElement("div"));
                    $rss.html($(xml).find("#main .av_textblock_section").html());
      
                    $(node).html($rss.html());
                    return $rss.html();
                },
                error: function (e) {
                    console.log("error", item, $rss, $ul);
                    return "error";
                }
            })
          
      
      }

}
