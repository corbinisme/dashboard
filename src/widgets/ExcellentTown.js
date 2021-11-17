

var ExcellentTown = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "ExcellentTown",
    template: "carousel",
    url: 'https://excellenttown.com/feed/',
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
        ExcellentTown.state.dom = node;
        ExcellentTown.renderHeader();
        ExcellentTown.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "ExcellentTown");
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(ExcellentTown.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "ExcellentTown"; // localized
        var res = app.initHeaderItems(ExcellentTown.state.header.items, title);
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
        var node = $(ExcellentTown.state.dom);
    
        let stringy = app.widgetLayouts.carousel(ExcellentTown.state.currentData, {
            title: "ExcellentTown",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
