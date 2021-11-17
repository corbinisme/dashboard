

function openLink(url) {
    console.log("url", url)
    
}
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const API_Fun = 'https://www.beagreatteacher.com/daily-fun-fact/';
var Fun = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    state: {
      size: 500,
      mbx: null,
      hits: null,
      dom: null,
      header: {
          items: [
            
          ]
      },
      content: null,
      height: 100,
    },
   
  
    init: function (node) {
        Fun.state.dom = node;
        Fun.renderHeader();
        Fun.render()
    },

    
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Fun.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Fun"; // localized
        var res = app.initHeaderItems(Fun.state.header.items, title);
        //$target.html(res);
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

          var node = $(Fun.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
         
          // check if we need to reajax data
          if (Fun.state.content==null) {
              console.log("already have")
          } else {
              console.log("fetch")
          }
            $.ajax({
                url: API_Fun,
                success: function (xml) {

                    var $temp = $(document.createElement("div"));
					$temp.html($(xml).find(".content-sidebar-wrap .content").html());
					$temp.find(".funfactsignup").remove();

                    $(node).html($temp.html());
                    
                    return $temp.html();
                },
                error: function (e) {
                    console.log("error", item, $rss, $ul);
                    return "error";
                }
            })
          
      
      }

}
