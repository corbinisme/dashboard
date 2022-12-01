const API_Cheezeburger = 'https://www.cheezburger.com/rss';
var Cheezeburger = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Cheezeburger",
    template: "carousel",
    url: API_Cheezeburger,
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
                 link: "javascript:window.open('https://www.Cheezeburger.com');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Cheezeburger.state.dom = node;
        Cheezeburger.binding()
        Cheezeburger.getData()
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

        var node = $(Cheezeburger.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Cheezeburger.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
