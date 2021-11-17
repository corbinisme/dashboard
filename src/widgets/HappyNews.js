
var HappyNews = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "HappyNews",
    template: "carousel",
    url: 'https://happynews.com/feed/',
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
        HappyNews.state.dom = node;
 
        HappyNews.getData()
    },

    getData: function () {
        
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });    
        
    },

   render: function() {
        var node = $(HappyNews.state.dom);
    
        let stringy = app.widgetLayouts.carousel(HappyNews.state.currentData, {
            title: "HappyNews",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
