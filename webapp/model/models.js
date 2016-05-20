sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createWeekModel: function(){
		    var dMonday = this.getMonday(new Date());
		    var aWeek=[];
		    aWeek.push(dMonday);
		    for(var i = 1; i<7; i++){
		        var iDay = dMonday.getDate() + i;
		        var nextDay = new Date(dMonday.setDate(iDay)).toUTCString();
		        aWeek.push(nextDay);
		    }
		    var oWeekModel= new JSONModel(aWeek);
		    return oWeekModel;
		},
		
		getMonday: function getMonday(d) {
              d = new Date(d);
              var day = d.getDay(),
                  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
              return new Date(d.setDate(diff));
            }

	};

});