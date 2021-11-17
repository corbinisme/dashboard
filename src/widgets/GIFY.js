const API_Gify = 'https://api.giphy.com/v1/gifs/trending?offset=0&amp;api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&amp;pingback_id=17b3155e0d643838';
var GIFY= {
    meta: {
        column: "col-lg-6 col-md-12"
    },
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
			
          ]
      },
      currentData:"loading",
      
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
            success: function (html) {
                //console.log("gify", html);
                let $temp = $(document.createElement("div"));
                $temp.html(html);

                GIFY.state.currentData = html;
                GIFY.render();
            },error: function(e){

                console.log("ajax fail gify");
                GIFY.render();
            },
        });

        
    },
    render: function(){
        var $node = $(GIFY.state.dom);
        let stringy = `load this`;
        console.log(GIFY.state.currentData)
        $node.html(stringy)
    }
}




