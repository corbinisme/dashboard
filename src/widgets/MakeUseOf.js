const toggleSourceM = (val) => {

    let $group = $(MakeUseOf.state.dom).closest(".portlet").find(".card-header").find(".btn-group");
    $group.find(".sourceBtn").removeClass("active");
    $group.find(".btn_" + val).addClass("active");
    MakeUseOf.url = "https://www.MakeUseOf.com/feed/category/" + val + "/";
    MakeUseOf.getData();
}
var MakeUseOf = {
    meta: {
        column: "col-lg-8 col-md-8"
    },
    title: "MakeUseOf",
    template: "carousel",
    url: "/util/loadRSS.php?url=http://feeds.feedburner.com/makeuseof/pMkw",
   
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
        MakeUseOf.state.dom = node;
        DailyGood.renderHeader();
        MakeUseOf.getData()
    },

  
    getData: function () {

        MakeUseOf.state.currentData = [];

        /*
        app.dataTemplates.rss({
            url: MakeUseOf.url, 
            fields: "all",
            title: this.title
        });
        */
        
        $.ajax({
            url: this.url,
            dataType: "json",
            success: function(res){

                MakeUseOf.state.currentData = res;
                /*
                $(res).find("item").each(function(){
                    let temp = {
                        title: $(this).find("title").text(),
                        guid: $(this).find("link").text(),
                        image: $(this).find("enclosure").attr("url"),
                        description: $(this).find("dsceiption").html()
                    }
                    if(temp.guid==null || temp.guid==""){
                        $(this).children().each(function(ch){

                            if($(this)[0].nodeName.toLowerCase()=="link"){
                                console.log($(this)[0], $(this)[0].innerHTML);
                            };
                        })
                    }
                    MakeUseOf.state.currentData.push(temp)
                });
                */
                MakeUseOf.render();
            },
            error: function(e){
                
            
               
            }
        });
        
            
    },

   render: function() {
        var node = $(MakeUseOf.state.dom);
    
        let stringy = app.widgetLayouts.carousel(MakeUseOf.state.currentData, {
            title: "MakeUseOf",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
