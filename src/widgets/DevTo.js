const toggleSourceD = (val) => {

    let $group = $(DevTo.state.dom).closest(".portlet").find(".card-header").find(".btn-group");
    $group.find(".sourceBtn").removeClass("active");
    $group.find(".btn_" + val).addClass("active");
    DevTo.url = "https://dev.to/" + val;
    DevTo.getData();
}
var DevTo = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "DevTo",
    template: "carousel",
    //url: "https://dev.to/",
    url: "http://feeds.feedburner.com/dev/WZhx",
   
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 4,
      max: 3,
      total: 50,
      dom: null,
      header: {
          items: [
            
            
          ]
      },
      rss: {
        title: "",
        len: 0,
        items: []
      },
      height: 100,
      currentData: []
    },
   
  
    init: function (node) {
        DevTo.state.dom = node;
        DailyGood.renderHeader();
        DevTo.getData()
    },

  
    getData: function () {
        DevTo.state.currentData = [];
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
          });
        /*
        $.ajax({
            url: this.url,
            success: function(res){
                console.log("devto ", res)
              
                let $temp = $(document.createElement("div"));
                $temp.html(res);
                $temp.find(".articles-list").find(".crayons-story").each(function(){
                    let temp = {
                        title: $(this).find(".crayons-story__title a").text(),
                        guid:  "https://dev.to/" + $(this).find(".crayons-story__title a").attr("href"),
                        //image: $(this).find(".crayons-avatar img").attr("src"),
                        image: "",
                        description: ""
                    }
                    DevTo.state.currentData.push(temp)
                });
               
               $(res).find("item").each(function(item){
                let temp = {
                    title: $(this).find("title").html(),
                    guid:   $(this).find("guid").html(),
                    //image: $(this).find(".crayons-avatar img").attr("src"),
                    image: "",
                    description: $(this).find("description").html(),
                }
                DevTo.state.currentData.push(temp)
               })
               
                DevTo.render();
            },
            error: function(e){
                console.log(e)
            }
        });
        */
            
    },

   render: function() {
        var node = $(DevTo.state.dom);
    
        let stringy = app.widgetLayouts.carousel(DevTo.state.currentData, {
            title: "DevTo",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        //app.getPreviews(DevTo.title)
        return stringy;
   }

}
