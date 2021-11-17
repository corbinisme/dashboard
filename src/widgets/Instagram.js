
function htmlDecode(input){
  var e = document.createElement('textarea');
  e.innerHTML = input;
  // handle case of empty input
  return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
}


var Instagram = {
    meta: {
        column: "col-lg-4 col-md-6"
    },
    state: {
      size: 500,
      mbx: null,
      hits: null,
      start: 1,
      stop: 2,
      max: 1,
      total: 10,
      dom: null,
      header: {
          items: [
            
			{
			    type: "a",
			    text: "<i class='fa fa-link'></i>",
			    classNames: " btn btn-default btn-outline-secondary btn-sm",
			    link: "javascript:window.open('https://www.instagram.com/totes_acorbs/')"
			},
          ]
      },
      rss: {
        title: "",
        len: 0,
        items: []
      },
      height: 100,
    },
   
  
    init: function (node) {
        Instagram.state.dom = node;
        Instagram.renderHeader();
        Instagram.render()
    },

    RSShandleClick: function(value) {
        window.open(value, "Instagram");
    },
    rssFetch: function (dir) {
        var newVal = Instagram.state.start;
        var interval = Instagram.state.max;
        var tot = Instagram.state.total;
        if (dir == "prev") {
            newVal -= interval;
            if (newVal < 1) {
                newVal = 1;
            }
        } else {
            newVal += interval;
            if (newVal > tot) {
                newVal = tot;
            }
        }
        Instagram.state.start = newVal;
        Instagram.state.stop = newVal + interval;
        console.log("start", Instagram.state.start);
        Instagram.render();

    },
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Instagram.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Instagram"; // localized
        var res = app.initHeaderItems(Instagram.state.header.items, title);
        $target.html(res);
    },

    getData: function () {


    },
    populateList: function (data) {

    },

   render: function() {

          var node = $(Instagram.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");
          
          $(node).html('<div id="pixlee_container"></div>');
          window.PixleeAsyncInit = function() {
              Pixlee.init({apiKey:'xf0j3Yl8LC8t0OIc8ITO'});
              Pixlee.addSimpleWidget({widgetId:'34051'});
          };

          var my_awesome_script = document.createElement('script');

        my_awesome_script.setAttribute('src','//instafeed.assets.pxlecdn.com/assets/pixlee_widget_1_0_0.js');

        document.body.appendChild(my_awesome_script);
            
            
        
          
      
      }

}
