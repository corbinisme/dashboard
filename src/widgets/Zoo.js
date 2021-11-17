
function openLink(url) {
    console.log("url", url)
    
  }
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const API_Zoo = 'https://zoonooz.sandiegozoo.org/category/news/feed/';
var Zoo = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    title: "Zoo",
    template: "carousel",
    url: API_Zoo,
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
                 text: "<i class='fa fa-globe'></i>",
                 classNames: " btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://sandiegozoowildlifealliance.org/')"
             },
			
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
        Zoo.state.dom = node;
        Zoo.renderHeader();
        Zoo.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "Zoo");
    },
    rssFetch: function (dir) {
        var newVal = Zoo.state.start;
        var interval = Zoo.state.max;
        var tot = Zoo.state.total;
        if (dir == "prev") {
            newVal -= interval;
            if (newVal < 1) {
                newVal = 1;
            }
        } else {
            newVal += interval;
            if (newVal > tot) {
                newVal = tot;
            }
        }
        Zoo.state.start = newVal;
        Zoo.state.stop = newVal + interval;
   
        Zoo.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Zoo.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Zoo"; // localized
        var res = app.initHeaderItems(Zoo.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });    

    },
    populateList: function (data) {

    },
   render: function() {
        var node = $(Zoo.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Zoo.state.currentData, {
            title: this.title,
            show: 1, 
            fields: ["title", "description", "link"]})

        $(node).html(stringy);
        return stringy;
   }

    /*

          const options = {
              method: 'GET',
              headers: new Headers({'content-type': 'application/json', 'Origin':''}),
              mode: 'no-cors',
              Origin: ""
          };

          var node = $(Zoo.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          var rss = "";
          var $rss = $(document.createElement("div"));
          var $ul = $(document.createElement("ul"));
          $ul.addClass("rss_list");

          // check if we need to reajax data
          if (Zoo.state.rss.items.length > 0) {
              console.log("already have")
          } else {
              console.log("fetch")
          }
            $.ajax({
                url: API_Zoo,
                success: function (xml) {

                    let tempState = [];
                    let parser = new DOMParser();
                    let xmlDoc = parser.parseFromString(xml, "text/xml");

                    var start = Zoo.state.start;
                    var stop = Zoo.state.stop;
                    var max = state.rssParams.length;
                    $(xml).find("item").each(function (idx, el) {
                        
                        var zeroIndex = idx +1;
                        if (zeroIndex >= start && zeroIndex < stop) {
                            let title = el.getElementsByTagName("title")[0].innerHTML;
                            let description = el.getElementsByTagName("description")[0].innerHTML;
                            //description = helpers.sanitizeRSSfield(description);
                            //description = description.substring(3, description.indexOf("</p>"));
                            
                            let date = el.getElementsByTagName("pubDate")[0].innerHTML;
                            let link = el.getElementsByTagName("guid")[0].innerHTML;
                            let image = "";

                            $(el).children().each(function(){
                                if(this.localName.indexOf("content")>-1){

                                    
                                    let $temp = $(document.createElement("div"));
                                    $temp.html(helpers.sanitizeRSSfield($(this).html()));
                                    
                                    if($temp.find("img").length){
                                        image = $temp.find("img").attr("src");
                                    }
                                    
                                    
                                }

                            });
                            

                           

                            let temp = {
                                title: title,
                                key: idx,
                                description: description,
                                date: date,
                                link: link,
                                image: image
                            };

                            tempState.push(temp);
                        }

                    });

                    console.log(tempState)
                    tempState.forEach(function (el) {
                        var $item = $(document.createElement("li"));
                        $item.addClass("item");
                        var temp = "<span class='rss_heading'>" + el.title + "</span>";
                        temp += "<span class='rss_content'><img class='rss_image' src='" + el.image + "' alt='rss item featured' /><p>" + el.description + "</p></span>";
                        $item.html(temp);
                        $ul.append($item);
                    });
                    $rss.append($ul);

                    $(node).html($rss.html());
                    if (Zoo.state.height) {
                        //$(node).height(News.state.height)
                    }
                    return $rss.html();
                },
                error: function (e) {
                    console.log("error", item, $rss, $ul);
                    return "error";
                }
            })
          
      
      }
      */

}
