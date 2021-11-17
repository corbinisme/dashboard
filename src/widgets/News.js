
function openLink(url) {
    console.log("url", url)
    
  }
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}


var News = {
    meta: {
        column: "col-sm-4"
    },
    title: "News",
    template: "carousel",
    url: 'https://www.mymediabox.com/feed/',
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
            
          ]
      },
      currentData: [],
      rss: {
        title: "",
        len: 0,
        items: []
      },
      height: 100,
    },
   
  
    init: function (node) {
        News.state.dom = node;
        News.renderHeader();
        News.getData();
    },

    RSShandleClick: function(value) {
        window.open(value, "News");
    },
    rssFetch: function (dir) {
        var newVal = News.state.start;
        var interval = News.state.max;
        var tot = News.state.total;
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
        News.state.start = newVal;
        News.state.stop = newVal + interval;
        console.log("start", News.state.start);
        News.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(News.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "News"; // localized
        var res = app.initHeaderItems(News.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        
        app.dataTemplates.rss({
            url: News.url, 
            fields: "all",
            title: this.title
        });
             
        

    },
    populateList: function (data) {

    },
   render: function() {
          
        var node = $(News.state.dom);
       

        let stringy = app.widgetLayouts.carousel(News.state.currentData, {
            title: "News",
            show: 2, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
      

      
      }

}
