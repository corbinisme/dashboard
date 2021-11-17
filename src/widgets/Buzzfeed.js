const toggleSource = (val) => {
    console.log(val);
    let $group = $(Buzzfeed.state.dom).closest(".portlet").find(".card-header").find(".btn-group");
    $group.find(".sourceBtn").removeClass("active");
    $group.find(".btn_" + val).addClass("active");
    Buzzfeed.url = "https://www.buzzfeed.com/" + val + ".xml";
    Buzzfeed.getData();
}
var Buzzfeed = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "Buzzfeed",
    template: "carousel",
    url: "https://www.buzzfeed.com/cute.xml",
   
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
            {
                type: "a",
                text: "Main",
                classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary btn_index",
                link: "javascript:toggleSource('index');"
            },
            {
                type: "a",
                text: "Cute",
                classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary active btn_cute",
                link: "javascript:toggleSource('cute');"
            },
            {
                type: "a",
                text: "Nifty",
                classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary btn_nifty",
                link: "javascript:toggleSource('nifty');"
            },
            {
                type: "a",
                text: "LOL",
                classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary btn_lol",
                link: "javascript:toggleSource('lol');"
            },
            {
                type: "a",
                text: "World",
                classNames: "btn sourceBtn btn-default btn-sm btn-outline-secondary btn_world",
                link: "javascript:toggleSource('world');"
            },
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
        Buzzfeed.state.dom = node;

        Buzzfeed.getData()
    },

  
    getData: function () {
        
        app.dataTemplates.rss({
            url: this.url, 
            fields: "all",
            title: this.title
        });    
        
    },

   render: function() {
        var node = $(Buzzfeed.state.dom);
    
        let stringy = app.widgetLayouts.carousel(Buzzfeed.state.currentData, {
            title: "Buzzfeed",
            show: 3, 
            fields: ["title", "description", "link"]
        })

        $(node).html(stringy);
        return stringy;
   }

}
