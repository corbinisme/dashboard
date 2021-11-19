const API_CorbinBlog = 'https://corbinrose.com/blog/feed/';
var CorbinBlog = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    title: "CorbinBlog",
    template: "carousel",
    url: API_CorbinBlog,
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
                 link: "javascript:window.open('https://www.corbinrose.com/blog');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        CorbinBlog.state.dom = node;
        CorbinBlog.binding()
        CorbinBlog.getData()
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

        var node = $(CorbinBlog.state.dom);
        
        let stringy = app.widgetLayouts.carousel(CorbinBlog.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
