

var BeautifulMess = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "BeautifulMess",
    template: "carousel",
    url: 'https://abeautifulmess.com/feed/',
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
        BeautifulMess.state.dom = node;
        BeautifulMess.renderHeader();
        BeautifulMess.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "BeautifulMess");
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(BeautifulMess.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "BeautifulMess"; // localized
        var res = app.initHeaderItems(BeautifulMess.state.header.items, title);
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
        var node = $(BeautifulMess.state.dom);
    
        let stringy = app.widgetLayouts.carousel(BeautifulMess.state.currentData, {
            title: "BeautifulMess",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
