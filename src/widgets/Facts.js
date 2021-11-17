let API_Facts = "https://www.kickassfacts.com/feed";
var Facts = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Facts",
    template: "carousel",
    url: API_Facts,
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
			
          ]
      },
      start: 1,
      stop: 2,
      max: 1,
      currentData:[],
      
      height: 300,
    },

    init: function (node) {
        Facts.state.dom = node;
        Facts.getData()
    },
    getData: function(){

        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: "Facts"
        });    
            

    },

    render: function(){
        var node = $(Facts.state.dom);

        let stringy = app.widgetLayouts.carousel(Facts.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;

      
    }
}




