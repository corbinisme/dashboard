const API_AutoEvolution = 'http://feeds.feedburner.com/autoevolution/jwcA';
var AutoEvolution = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "AutoEvolution",
    template: "carousel",
    url: API_AutoEvolution,
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
                 link: "javascript:window.open('https://www.autoevolution.com/');"
             }
			
          ]
      },
      currentData:[],
      
      height: 300,
    },
   
  
    init: function (node) {
        AutoEvolution.state.dom = node;
        AutoEvolution.binding()
        AutoEvolution.getData()
    },
    binding: function(){
        

    },
    removeCdata: function(string){

    },
    
    getData: function () {
        let ret = [];
        $.ajax({
            url: this.url,
            success: function(xml){

                $(xml).find("item").each(function (idx, el) {
                    let temp = {};
                    console.log($(this).children())
                    temp.title = $(this).find("title").text();
                    temp.guid = $(this).find("guid").text();
                    temp.description = "Wee";
                    $(this).children().each(function(){
                        if(this.localName.toLowerCase().indexOf("media:")>-1 || this.localName=="enclosure"){
                            if(this.getAttribute("url")){
                                image=this.getAttribute("url");
                                temp["image"] = image;
                            }
                        }
                    });
                    ret.push(temp);
                });

                AutoEvolution.state.currentData = ret;
                AutoEvolution.render()
                app.initSwipers();
                let $widget = $(".widget_" + AutoEvolution.title)
                app.toggleWidgetLoading($widget.find(".card-body"), "hide")
            }
        });

        /*app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });
        */   
    },
   
   render: function() {

        var node = $(AutoEvolution.state.dom);

        let stringy = app.widgetLayouts.carousel(AutoEvolution.state.currentData, {
            title: this.title,
            show: 3, 
            fields: ["title", "description", "link"]
        })

        
        $(node).html(stringy);
        app.getPreviews("AutoEvolution")
        return stringy;

       
       
      
    }

}
