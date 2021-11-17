
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

const API_Imgur = 'https://blog.imgur.com/feed/';
var Imgur = {
    meta: {
        column: "col-lg-4 col-md-6"
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
                 link: "javascript:Imgur.rssFetch('prev')"
             },
			{
			    type: "a",
			    text: "<i class='fa fa-chevron-right'></i>",
			    classNames: "rss_next btn btn-default btn-outline-secondary btn-sm",
			    link: "javascript:Imgur.rssFetch('next')"
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
        Imgur.state.dom = node;
        Imgur.renderHeader();
        Imgur.render()
    },

    RSShandleClick: function(value) {
        window.open(value, "Imgur");
    },
    rssFetch: function (dir) {
        var newVal = Imgur.state.start;
        var interval = Imgur.state.max;
        var tot = Imgur.state.total;
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
        Imgur.state.start = newVal;
        Imgur.state.stop = newVal + interval;
        console.log("start", Imgur.state.start);
        Imgur.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Imgur.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Imgur"; // localized
        var res = app.initHeaderItems(Imgur.state.header.items, title);
        $target.html(res);
    },

    getData: function () {


    },
    populateList: function (data) {

    },
   render: function() {

          var node = $(Imgur.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          var rss = "";
          var $rss = $(document.createElement("div"));
          var $ul = $(document.createElement("ul"));
          $ul.addClass("rss_list");

            $.ajax({
                url: API_Imgur,
                success: function (xml) {

                    console.log(xml);
                    let tempState = [];
                    let parser = new DOMParser();
                    let xmlDoc = parser.parseFromString(xml, "text/xml");

                    var start = Imgur.state.start;
                    var stop = Imgur.state.stop;
                    var max = state.rssParams.length;
                    $(xml).find("item").each(function (idx, el) {
                        
                        var zeroIndex = idx +1;
                        if (zeroIndex >= start && zeroIndex < stop) {
                            let title = $(el).find("title").text()
                            let description = $(el).find("description").html()
                            //description = description.replace("<![CDATA[", "").replace("]]>", "").replace("]]&gt;", "");;
                            //description = description.substring(3, description.indexOf("</p>"));

                            let date = el.getElementsByTagName("pubDate")[0].innerHTML;
                            let link = el.getElementsByTagName("guid")[0].innerHTML;
                            let image = "";
                            el.childNodes.forEach(function (ele, indx) {
                                if (ele.nodeName.toLowerCase().indexOf("content") > -1) {
                                    image = $(ele).find("img").attr("src")
                                }
                            });

                            let temp = {
                                title: title,
                                key: idx,
                                description: htmlDecode(description),
                                date: date,
                                link: link,
                                image: image
                            };

                            tempState.push(temp);
                        }

                    });

                    tempState.forEach(function (el) {
                        var $item = $(document.createElement("li"));
                        $item.addClass("item");
                        var temp = "<span class='rss_heading'>" + el.title + "</span>";
                        temp += "<span class='rss_content'><img class='rss_image' src='" + el.image + "' alt='rss item featured' />" + el.description + "</span>";
                        $item.html(temp);
                        $ul.append($item);
                    });
                    $rss.append($ul);

                    $(node).html($rss.html());
                    if (Imgur.state.height) {
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

}
