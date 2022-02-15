var PinterestGreenscape = {
    meta: {
        column: "col-lg-12 col-md-12"
    },
    title: "PinterestGreenscape",
    state: {
      dom: null,
      header: {
          items: [
            {   type: "a",
                 text: "<i class='fas fa-external-link-alt'></i>",
                 classNames: "rss_prev btn btn-default btn-sm btn-outline-secondary",
                 link: "javascript:window.open('https://www.pinterest.com.au/thegreenscapecollective/21011-tunstill-residence/')"
            }
          ]
      },
      currentData: []
    },
   
  
    init: function (node) {
        PinterestGreenscape.state.dom = node;
        PinterestGreenscape.renderHeader();
        PinterestGreenscape.getData()
    },

    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(PinterestGreenscape.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "PinterestGreenscape"; // localized
        var res = app.initHeaderItems(PinterestGreenscape.state.header.items, title);
        $target.html(res);
    },

    getData: function () {
        PinterestGreenscape.render();
         
        
    },

   render: function() {
        var node = $(PinterestGreenscape.state.dom);
        let stringy = `<a data-pin-do="embedBoard" 
        data-pin-board-width="900" 
        data-pin-scale-height="120" 
        data-pin-scale-width="115" 
        href="https://www.pinterest.com.au/thegreenscapecollective/21011-tunstill-residence/"></a>
        <script async defer src="//assets.pinterest.com/js/pinit.js"></script>`;
        
        $(node).html(stringy);
        return stringy;
   }

}
