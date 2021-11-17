
var Positive = {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    title: "Positive",
    template: "carousel",
    url: "https://www.positive.news/feed/",
   
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 3,
      max: 2,
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
        Positive.state.dom = node;

        Positive.getData()
    },

  
    getData: function () {
        
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });   
       
    },

   render: function() {
        var node = $(Positive.state.dom);
    
        let stringy = app.widgetLayouts.carousel(Positive.state.currentData, {
            title: "Positive",
            show: 2, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        
        app.getPreviews(Positive.title)
        
        return stringy;
   }

}
