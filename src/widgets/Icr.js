const API_Icr = "https://www.icr.org/aaf";
var Icr = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Icr",
    url: API_Icr,
    template: "carousel",
   
    state: {
        start: 1,
        stop: 2,
        max: 1,
        dom: null,
        header: {
            items: [
                
                
            ]
        },
        height: 100,
        currentData:[],
    },
   
  
    init: function (node) {
        Icr.state.dom = node;
        Icr.renderHeader();
        
        Icr.getData()
    },

   

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Icr.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Nasa Photo of The Day"; // localized
        var res = app.initHeaderItems(Icr.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

      $.ajax({
          url: this.url,
          success: function(res){
            let $temp = $(document.createElement("div"));
            $temp.html(res);
            $temp.find("#yui-main .content").find(">div").each(function(){
                let temp = {
                    title: ($(this).find(".latest-title").length?$(this).find(".latest-title").text():$(this).find(".article-title").text()),
                    image: $(this).find("img").attr("src"),
                    guid: "https://icr.org" + $(this).find("a:last-child").attr("href"),
                    description:($(this).find(".latest-abstract").length?$(this).find(".latest-abstract").text():$(this).find(".article-preview").text())
                }
                Icr.state.currentData.push(temp)
            });
            Icr.render();
          },
          error: function(e){}
      })
    },
   
   render: function() {

      
        var node = $(Icr.state.dom);
            
        let stringy = app.widgetLayouts.carousel(Icr.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
