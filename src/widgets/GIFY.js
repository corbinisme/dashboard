const API_Gify = 'https://api.giphy.com/v1/gifs/trending?api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&pingback_id=17b3155e0d643838&offset=0';
var GIFY= {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    template: "carousel",
    state: {
      size: 500,
      dom: null,
      start: 1,
      stop: 2,
      max: 1,
      header: {
          items: [
            
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(GIFY.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Gify FEEDS"; // localized
        var res = app.initHeaderItems(GIFY.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        GIFY.state.dom = node;
        GIFY.renderHeader();
        GIFY.binding()
        GIFY.getData()
    },
    getData: function(){
        $(GIFY.state.dom).html("<i class='fa fa-spinner fa-spin'></i>");
        $.ajax({
            url: API_Gify,
            success: function (json) {
     
                json.data.forEach(function(item){

                    let desc = `<img src='${item.images.downsized_large.url}' />`;
                    
                    let temp = {
                        title: item.title,
                        description: desc,
                        guid: item.url
                    }
                    GIFY.state.currentData.push(temp)
                })
                //GIFY.state.currentData = json;
                GIFY.render();
            },error: function(e){

                console.log("ajax fail gify");
                GIFY.render();
            },
        });

        
    },
    render: function(){
        var $node = $(GIFY.state.dom);
        let stringy = app.widgetLayouts.carouselVideo(GIFY.state.currentData, {
            title: "GIFY",
            show: 3, 
            fields: ["title", "description", "link"]
        })
        
        $node.html(stringy);
    }
}




