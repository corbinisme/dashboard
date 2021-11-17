const API_PhotoNatgeo = "https://www.natgeotv.com/ca/photo-of-the-day";
var PhotoNatgeo = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "PhotoNatgeo",
    url: API_PhotoNatgeo,
    template: "photocarousel",
   
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
        PhotoNatgeo.state.dom = node;
        PhotoNatgeo.renderHeader();
        
        PhotoNatgeo.getData()
    },

   

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(PhotoNatgeo.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Nasa Photo of The Day"; // localized
        var res = app.initHeaderItems(PhotoNatgeo.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

       $.ajax({
           url: API_PhotoNatgeo,
           success: function(cont){


            let $temp = $(document.createElement("div"));
            $temp.html(cont)
            let content = $temp.find(".PODItem").each(function(){

                PhotoNatgeo.state.currentData.push(
                    {
                        image: $(this).find("img").attr("src"),
                        title: "Natgeo",
                        description: $(this).find(".ItemDescription").text()
                })
            });

            PhotoNatgeo.render();
           },
           error: function(e){
            console.log("error")
           }
       })
    },
   
   render: function() {

      
        var node = $(PhotoNatgeo.state.dom);
            
        let stringy = app.widgetLayouts.photocarousel(PhotoNatgeo.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
