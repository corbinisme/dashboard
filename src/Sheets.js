
const sheetID = "1gfyjPBddfkTjAKI7rJcqNdugaA55z-iHVRUNmdAoQJU";
const GSheetReader = require('g-sheets-api');


var Sheets = {
    meta: {
        column: "col-lg-12 col-md-12"
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
             
          ]
      },
      height: 100,
    },
   
  
    init: function (node) {
        Sheets.state.dom = node;
        Sheets.renderHeader();
        Sheets.render()
    },

    RSShandleClick: function(value) {
        window.open(value, "Sheets");
    },
    
    renderHeader: function () {
        // get parent based on body node and render this once
        // so it doesn't need to re-render every time the body does
        var $tarBody = $(Sheets.state.dom);
        var $target = $tarBody.closest(".card").find(".card-header");
        var title = "Cool Links (from google Sheets)"; // localized
        var res = app.initHeaderItems(Sheets.state.header.items, title);
        $target.html(res);
    },

    getData: function () {


    },
    populateList: function (data) {

    },
   render: function() {
          
          var node = $(Sheets.state.dom);
          $(node).html("<i class='fa fa-spinner fa-spin'></i>");


          const options = {
			  sheetId: sheetID,
			  sheetNumber: 1,
			  returnAllResults: false,
			  /*
			  filter: {
			    'department': 'archaeology',
			    'module description': 'introduction'
			  },
			  filterOptions: {
			    operator: 'or',
			    matching: 'loose'
			  }
			  */
			}

			GSheetReader(
			  options,
			  results => {
			    // do something with the results here

			    const table = document.createElement('table');
				  const header = table.createTHead();
				  const headerRow = header.insertRow(0);
				  const tbody = table.createTBody();

			  // First, create a header row
				  Object.getOwnPropertyNames(results[0]).forEach(colName => {
				    const cell = headerRow.insertCell(-1);
				    cell.innerHTML = colName;
				  });

			  // Next, fill the rest of the rows with the lovely data
			  results.forEach(result => {
			    const row = tbody.insertRow(-1);

			    Object.keys(result).forEach(key => {

			      const cell = row.insertCell(-1);
			      var res = result[key];
			      if(key=="URL"){
			      	res = `<a href="${res}" target="_blank">${res}</a>`;
			      }
			      cell.innerHTML = res;
			    })
			  });

			  
			  $(node).html(table);
			  $(node).find("table").addClass("table table-bordered table-hover")
			  },
			  error => {
			    // OPTIONAL: handle errors here
			    console.log("oh no")
			  });


         
      }

}
