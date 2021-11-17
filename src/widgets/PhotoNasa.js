const API_PhotoNasa = "https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss";
var PhotoNasa = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    title: "PhotoNasa",
    url: API_PhotoNasa,
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
        PhotoNasa.state.dom = node;
        PhotoNasa.renderHeader();
        
        PhotoNasa.getData()
    },

   

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(PhotoNasa.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Nasa Photo of The Day"; // localized
        var res = app.initHeaderItems(PhotoNasa.state.header.items, title);
        $target.html(res);
    },

    getData: function () {

        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });   
    },
   
   render: function() {

      
        var node = $(PhotoNasa.state.dom);
            
        let stringy = app.widgetLayouts.photocarousel(PhotoNasa.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
