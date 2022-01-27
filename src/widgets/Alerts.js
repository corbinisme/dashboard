var data = {
    alerts: [
        { text: "Latest alerts - things for you to know", read: true },
        { text: "Due to COVID19, you must not breathe", read: false },
        { text: "In other news, Scotland annexed the West Bank and Gaza", read: false },
        { text: "React is rather confusing at times", read: false }
    ],
}


var Alerts = {
  meta: {
    column: "col-sm-12"
  },
  state: {
      currentAlert: 1,
      totalAlerts: 4,
      pro: "pretty",
      alerts: [
        {text: "Latest alerts - things for you to know", read: true},
        {text: "Due to COVID19, you must not breathe", read: false},
        {text: "In other news, Scotland annexed the West Bank and Gaza", read: false},
        {text: "React is rather confusing at times", read: false}
      ],
      dom: null
  },
  getData: function (filters) {
      //get ajax call
      window.setTimeout(function () {
          Alerts.state.alerts = data.alerts;
          Alerts.render();
      }, 980);
      
  },
  init: function (node) {
    console.log("alerts weee");
      Alerts.state.dom = node;
      Alerts.bindings();
      Alerts.getData();
  },
  bindings: function () {
     
  },
  handleAlertChange: function(e) {
      let newVal = Alerts.state.currentAlert;
      const tot = Alerts.state.totalAlerts;
      if(e=="prev"){
          newVal--;
          if(newVal<1){
            newVal = 1;
          }
      } else {
          newVal++;
          if(newVal>tot){
            newVal = tot;
          }
      }
      Alerts.state.currentAlert = newVal;
      Alerts.render();
  },
  render: function(){
    
    const allAlerts = Alerts.state.alerts;
    let thisAlert = "loading";
    const alertIndex = Alerts.state.currentAlert-1;

    if(allAlerts[alertIndex]){
        thisAlert = allAlerts[alertIndex]
    }

    const prevButtonClass = (Alerts.state.currentAlert == 1 ? "disabled" : "");
    const nextButtonClass = (Alerts.state.currentAlert == Alerts.state.totalAlerts ? "disabled" : "");

    var htmlTemplate = ''+
      '<div class="addState alerts">'+
      
            '<div class="row">'+
              '<div class="col-sm-10">'+
                '<div class="alert-text"> '+
                  '<span class="badge badge-warning">' + Alerts.state.currentAlert + '</span>' +
                  '<span class="alertText">'+
                    '&nbsp; ' + thisAlert.text +
                  '</span>'+
                '</div>'+
              '</div>'+
              '<div class="text-right toggler col-sm-2">'+
                '<div class="float-right">'+
                  '<div class="btn-group">'+
                    '<button onClick="Alerts.handleAlertChange(\'prev\')" class="btn-sm btn btn-outline-secondary ' + prevButtonClass + '"><i class="fa fa-chevron-left"></i></button>' +
                    '<button onClick="Alerts.handleAlertChange(\'next\')" class="btn-sm btn btn-outline-secondary ' + nextButtonClass + '"><i class="fa fa-chevron-right"></i></button>' +
                  '</ButtonGroup>'+
                '</div>'+
               '</div>'+
            '</div>'+
          '</div>' 

    $(Alerts.state.dom).html(htmlTemplate)
    return htmlTemplate;
 
  }

}
