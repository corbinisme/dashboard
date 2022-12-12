const API_Engrish = 'https://engrish.com/feed/';
var Engrish = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Engrish",
    template: "photocarousel",
    url: API_Engrish,
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 2,
      max: 1,
      header: {
          items: [
             {
                 type: "a",
                 text: "Site",
                 classNames: " btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://www.Engrish.com');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Engrish.state.dom = node;
        Engrish.binding()
        Engrish.getData()
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

        var node = $(Engrish.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Engrish.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
