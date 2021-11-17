let API_NineGag = "https://9gagrss.com/feed/";
var NineGag = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    state: {
      size: 500,
      dom: null,
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
        var $tarBody = $(NineGag.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "NineGag FEEDS"; // localized
        var res = app.initHeaderItems(NineGag.state.header.items, title);
        $target.html(res);
    },
    binding: function(){

    },
    init: function (node) {
        Imgur.state.dom = node;
        Imgur.renderHeader();
        Imgur.binding()
        Imgur.getData()
    },
    getData: function(){
$.ajax({
    url: API_NineGag,
    success: function(xml){
        console.log(xml);
        NineGag.render();

    }
})

    },
    render: function(){
        var $node = $(Imgur.state.dom);
        let stringy = `
        Loading
        `;
        $node.html(stringy)
    }
}




