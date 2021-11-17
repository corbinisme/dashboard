const API_GoodNewsHuff = "https://www.huffpost.com/impact/topic/good-news";
var GoodNewsHuff = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "GoodNewsHuff",
    url: API_GoodNewsHuff,
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
        GoodNewsHuff.state.dom = node;
        GoodNewsHuff.renderHeader();
        
        GoodNewsHuff.getData()
    },

   

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(GoodNewsHuff.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Nasa Photo of The Day"; // localized
        var res = app.initHeaderItems(GoodNewsHuff.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

       $.ajax({
           url: API_GoodNewsHuff,
           success: function(cont){


            let $temp = $(document.createElement("div"));
            $temp.html(cont)
            let content = $temp.find(".zone__content .card").each(function(){

                GoodNewsHuff.state.currentData.push(
                    {
                        image: $(this).find("picture img").attr("src"),
                        title: $(this).find("h2").text(),
                        description: $(this).find(".card__description").html()
                    })
            });

            GoodNewsHuff.render();
           },
           error: function(e){
            console.log("error")
           }
       })
    },
   
   render: function() {

      
        var node = $(GoodNewsHuff.state.dom);
            
        let stringy = app.widgetLayouts.carousel(GoodNewsHuff.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
