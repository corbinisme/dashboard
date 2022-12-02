const API_Diode = 'https://diode.zone/feeds/videos.xml?videoChannelId=569';
var Diode = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "Diode",
    template: "carousel",
    url: API_Diode,
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
                 link: "javascript:window.open('https://diode.zone/');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Diode.state.dom = node;
        Diode.binding()
        Diode.getData()
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

        var node = $(Diode.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Diode.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
