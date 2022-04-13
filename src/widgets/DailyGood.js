const API_DailyGood = "https://www.dailygood.org/cat/Generosity/?sort=&start=0";
var DailyGood = {
    meta: {
        column: "col-lg-8 col-md-12"
    },
    title: "DailyGood",
    url: API_DailyGood,
    template: "carousel",
   
    state: {
        start: 1,
        stop: 4,
        max: 3,
        dom: null,
        header: {
            items: [
                
                {
                    type: "a",
                    text: "Generosity",
                    classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary active btn_generosity",
                    link: "javascript:DailyGood.toggleDailyGoodSource('generosity');"
                },
                {
                    type: "a",
                    text: "Everyday Heroes",
                    classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary  btn_everydayheroes",
                    link: "javascript:DailyGood.toggleDailyGoodSource('everydayheroes');"
                },
                // nature, work, sciencetech, mindbody, businesss
            ]
        },
        height: 100,
        currentData:[],
    },
   
  
    init: function (node) {
        DailyGood.state.dom = node;
        DailyGood.renderHeader();
        
        DailyGood.getData()
    },

    toggleDailyGoodSource: function(val){

   
            let $group = $(DailyGood.state.dom).closest(".portlet").find(".card-header").find(".btn-group");
            $group.find(".sourceBtn").removeClass("active");
            $group.find(".btn_" + val).addClass("active");
            DailyGood.url = "https://www.dailygood.org/cat/" + val + "/";
            DailyGood.getData();
        
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(DailyGood.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Daily Good"; // localized
        var res = app.initHeaderItems(DailyGood.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        DailyGood.state.currentData = [];
      $.ajax({
          url: this.url,
          success: function(res){
            let $temp = $(document.createElement("div"));
            $temp.html(res);
            $temp.find("#leftstrip_body table").find("tr").each(function(){
                
                
                if($(this).find("td").length>1){
                    let backgroundImage = $(this).find("td:first-child span").css("background-image");
                    if(backgroundImage!=null){
                        backgroundImage = backgroundImage.replace("url(\"","").replace("\")", "")
                    }
                    
                    let temp = {
                        title: $(this).find("a[href]").text(),
                        image: backgroundImage,
                        guid: $(this).find("a[href]").attr("href"),
                        description: $(this).find("p").text()
                    }
                    DailyGood.state.currentData.push(temp)
                }
            });
            DailyGood.render();
            app.initSwipers();
          },
          error: function(e){}
      })
    },
   
   render: function() {

      
        var node = $(DailyGood.state.dom);
            
        let stringy = app.widgetLayouts.carousel(DailyGood.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["all"]
        })


        $(node).html(stringy);
        return stringy;
}

}
