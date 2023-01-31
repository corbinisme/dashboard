var CleanMemes = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "CleanMemes",
    template: "photocarousel",
    url: 'https://cleanmemes.com/feed/',
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
        CleanMemes.state.dom = node;
        CleanMemes.renderHeader();
        CleanMemes.getData()
    },

   
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(CleanMemes.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "CleanMemes"; // localized
        var res = app.initHeaderItems(CleanMemes.state.header.items, title);
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
        var node = $(CleanMemes.state.dom);
        
        let stringy = app.widgetLayouts.carousel(CleanMemes.state.currentData, {
            title: "CleanMemes",
            show: 3, 
            fields: ["title", "description", "link"]
        })
        

        $(node).html(stringy);

        return stringy;
   }

}
