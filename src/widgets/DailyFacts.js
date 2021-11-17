let API_DailyFacts = "https://www.kickassfacts.com/fact-of-the-day/";
var DailyFacts = {
    meta: {
        column: "col-lg-4 col-md-4"
    },
    title: "DailyFacts",
    template: "carousel",
    url: API_DailyFacts,
    state: {
      size: 500,
      dom: null,
      header: {
          items: [
            
			
          ]
      },
      start: 1,
      stop: 2,
      max: 1,
      currentData:[],
      
      height: 300,
    },

    init: function (node) {
        DailyFacts.state.dom = node;
        DailyFacts.getData()
    },
    getData: function(){

        $.ajax({
            url: this.url,
            success: function(res){
                //temp
                let $temp = $(document.createElement("div"));
                $temp.html(res);
                $temp.find("article ol li").each(function(){
                    let item = {
                        image: null,
                        title: '',
                        description: $(this).html()
                    }
                    DailyFacts.state.currentData.push(item)
                });

                DailyFacts.render();
            },
            error: function(e){

            }
        })  
            

    },

    render: function(){
        var node = $(DailyFacts.state.dom);

        let stringy = app.widgetLayouts.carouselContent(DailyFacts.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;

      
    }
}




