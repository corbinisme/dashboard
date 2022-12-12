const API_CorbinBlog = 'https://corbinrose.com/blog/wp-json/wp/v2/posts?_embed';
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
      stop: 3,
      max: 2,
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

        $.ajax({
            url: this.url,
            dataType: "json",
            success: function (json) {
                let ret = [];

                json.forEach(function(item){

                    let desc = document.createElement("div");
                    desc.innerHTML = item.excerpt.rendered;
                    desc.querySelector("img").remove();
                    let temp = {
                        title: item.title.rendered,
                        guid: item.link,
                        description: desc.innerHTML,
                        image: item["_embedded"]['wp:featuredmedia'][0].source_url
                    };

                    ret.push(temp);
                })

              
                CorbinBlog.state.currentData = ret;


                CorbinBlog.render();
                app.initSwipers();
            }
        });

        /*
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });   
        */
       
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
