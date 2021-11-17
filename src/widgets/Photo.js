
var Photo = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Photo",
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
        currentData:[
            {  
                title: "",
                description: "dummy",
                image: "https://picsum.photos/700/500"
            },
            {  
                title: "",
                description: "dummy",
                image: "https://picsum.photos/700/501"
            },
            {  
                title: "",
                description: "dummy",
                image: "https://picsum.photos/701/500"
            }
        ],
    },
   
  
    init: function (node) {
        Photo.state.dom = node;

        
        Photo.getData()
    },


    getData: function () {
        Photo.render();
       
    },
   
   render: function() {

      
        var node = $(Photo.state.dom);
            
        let stringy = app.widgetLayouts.photocarousel(Photo.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
