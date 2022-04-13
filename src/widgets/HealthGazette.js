

var HealthGazette = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "HealthGazette",
    template: "carousel",
    url: 'https://myhealthgazette.com/feed/',
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 2,
      max: 1,
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
        HealthGazette.state.dom = node;
        HealthGazette.renderHeader();
        HealthGazette.getData()
    },

    RSShandleClick: function(value) {
        window.open(value, "HealthGazette");
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(HealthGazette.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "HealthGazette"; // localized
        var res = app.initHeaderItems(HealthGazette.state.header.items, title);
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
        var node = $(HealthGazette.state.dom);
    
        let stringy = app.widgetLayouts.carousel(HealthGazette.state.currentData, {
            title: "HealthGazette",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
