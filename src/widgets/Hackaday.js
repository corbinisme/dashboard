const API_Hackaday = 'https://hackaday.com/feed/';
var Hackaday = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "Hackaday",
    template: "carousel",
    url: API_Hackaday,
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
                 link: "javascript:window.open('https://Hackaday.com/');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Hackaday.state.dom = node;
        Hackaday.binding()
        Hackaday.getData()
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

        var node = $(Hackaday.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Hackaday.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
