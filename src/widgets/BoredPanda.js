const API_BoredPanda = 'https://www.boredpanda.com/feed/';
var BoredPanda = {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    title: "BoredPanda",
    template: "carousel",
    url: API_BoredPanda,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 4,
      max: 3,
      header: {
          items: [
             {
                 type: "a",
                 text: "Site",
                 classNames: " btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://www.boredpanda.com');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        BoredPanda.state.dom = node;
        BoredPanda.binding()
        BoredPanda.getData()
    },
    binding: function(){
        

    },
    removeCdata: function(string){

    },
    
    getData: function () {

        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });   
    },
   
   render: function() {

        var node = $(BoredPanda.state.dom);
        
        let stringy = app.widgetLayouts.carousel(BoredPanda.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
