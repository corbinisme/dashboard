const API_Animals = 'https://defused.com/category/animals/feed/';
var Animals = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "Animals",
    template: "carousel",
    url: API_Animals,
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
                 link: "javascript:window.open('https://defused.com/category/animals/');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        Animals.state.dom = node;
        Animals.binding()
        Animals.getData()
    },
    binding: function(){
        

    },
    removeCdata: function(string){

    },
    
    getData: function () {

        Animals.state.currentData = []
        DailyGood.state.currentData = [];
        $.ajax({
            url: this.url,
            success: function(res){
                let tempArr = [];
                $(res).find("item").each(function (idx, el) {
                    
                    let temp = {
                        title: $(this).find("title").text(),
                        image: null,
                        guid: $(this).find("guid").text(),
                        description: $(this).find("description").text()
                    }
                    tempArr.push(temp);
                    
                    console.log("el", el)
                });

                Animals.state.currentData = tempArr;
            }
        });
        /*
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        }); 
        */  
       Animals.render();
    },
   
   render: function() {

        var node = $(Animals.state.dom);
        
        let stringy = app.widgetLayouts.carousel(Animals.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
       
      
    }

}
