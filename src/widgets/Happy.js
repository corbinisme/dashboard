const url  = "https://thingstobehappyabout.com/neighborhood/calendar.php";
const otherURL = "https://thingstobehappyabout.com/neighborhood/happy.php";
function openLink(url) {
    console.log("url", url)
    
  }
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

function getDateOfYear(today)
        {
          var onejan = new Date(today.getFullYear(), 0, 1);
          return Math.ceil((today - onejan) / 86400000) - 1;
        }

const API_Happy = url;
var Happy = {
    meta: {
        column: "col-lg-4 col-md-12"
    },
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 2,
      max: 1,
      total: 10,
      dom: null,
      header: {
          items: [
            {
                type: "a",
                text: "<i class='fa fa-chevron-left'></i>",
                classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                link: "javascript:Happy.fetch('prev')"
            },
           {
               type: "a",
               text: "<i class='fa fa-chevron-right'></i>",
               classNames: "rss_next btn btn-default btn-outline-secondary btn-sm",
               link: "javascript:Happy.fetch('next')"
           },
             {
                 type: "a",
                 text: "<i class='fa fa-globe'></i>",
                 classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                 link: "https://thingstobehappyabout.com/"
             },
			
          ]
      },
      items: null,
      moreitems: null,
      height: 100,
    },
    fetch: function(dir){
        $(Happy.state.dom).find(".moreItems").toggleClass("shown");
    },

    init: function (node) {
        Happy.state.dom = node;
        Happy.renderHeader();

        Happy.render()
    },


    RSShandleClick: function(value) {
        window.open(value, "Happy");
    },
    
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Happy.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Happy"; // localized
        var res = app.initHeaderItems(Happy.state.header.items, title);
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

          var node = $(Happy.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          var rss = "";
          var $rss = $(document.createElement("div"));
          var $ul = $(document.createElement("ul"));
          $ul.addClass("rss_list");

          // check if we need to reajax data
          if (Happy.state.items !=null) {

              return Happy.state.items;

          } else {
            
          
          	var day = "2020-8-19";
          	var today = new Date();
          	var dd = today.getDate();
      			var mm = today.getMonth() + 1
      			var yyyy = today.getFullYear();
      			day = yyyy + "-" + mm + "-" + dd;

            var theUrl = "https://thingstobehappyabout.com/ajaxCalendarDB.php?day=" + day;

            $.ajax({
                url: theUrl,
                success: function (xml) {

                	let resp = "<div class='heading'><div class='head'></div></div><div class='mainItems'><ul class='main'>" + xml + "</ul></div>";
                	Happy.state.items = resp;
                	
                  
                	$(node).html(Happy.state.items);

                  $.ajax({
                    url: otherURL,
                    success: function (more) {

                      var cont = $(more).find(".left ul").html();
                      var append = "<div class='moreItems'><ul class='main'>" + cont + "</ul></div>";
                      Happy.state.moreitems = append;
                      $(node).append(append)
                    }
                  });

                	return resp;
 
                },
                error: function (e) {
                    console.log("error", item, $rss, $ul);
                    return "error";
                }
            });

          
      	}
      }

}
