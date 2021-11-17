function openLink(url) {
    console.log("url", url)
    
}
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}

var Good = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "Good",
    template: "carousel",
    url: 'https://www.goodnewsnetwork.org/feed/',
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 4,
      max: 3,
      total: 50,
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
      currentData: []
    },
   
  
    init: function (node) {
        Good.state.dom = node;
        Good.renderHeader();
        Good.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "Good");
    },
    rssFetch: function (dir) {
    	console.log("click", dir)
        var newVal = Good.state.start;
        var interval = Good.state.max;
        var tot = Good.state.total;
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
        Good.state.start = newVal;
        Good.state.stop = newVal + interval;

        Good.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Good.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Good"; // localized
        var res = app.initHeaderItems(Good.state.header.items, title);
        //$target.html(res);
    },

    getData: function () {
        
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });    
        
    },

   render: function() {
        var node = $(Good.state.dom);
    
        let stringy = app.widgetLayouts.carousel(Good.state.currentData, {
            title: "Good",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
