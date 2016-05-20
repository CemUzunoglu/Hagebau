sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"com/hagebau/model/Formatter",
	"sap/m/MessageToast"
], function(Controller, Formatterm,MessageToast) {
	"use strict";

	return Controller.extend("com.hagebau.controller.Main", {

		onAddButtonPress: function(evt) {
			var oCalender = this.byId("weeklyCalendar");
			var oTable = this.byId("timesTable");
			var oTimesModel = oTable.getModel("times");
			if(oCalender.getSelectedDates().length == 1){
			    var oSelectedDate = oCalender.getSelectedDates()[0];
			    oSelectedDate = oSelectedDate.slice(4,oSelectedDate.length);
			var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({pattern : "yyyy/MM/dd" }); 
				var aEngMonths =["Jan", "Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
			for(var i = 0; i < aEngMonths.length; i++){
			    if(aEngMonths[i] == oSelectedDate.slice(0,3)){
			        var day = parseInt(oSelectedDate.slice(4,6));
			        var year = parseInt(oSelectedDate.slice(7,11));
			        oSelectedDate = dateFormat.format(new Date(year,i,day));
			    }
			}
			var oTimeEntry = {
				date: oSelectedDate,
				project: "",
				duration: 0,
				comment: "",
				status: "Neu"   
			};
			var aProjectTimes = oTimesModel.getData().projectTimes;
			    aProjectTimes.push(oTimeEntry);
			    
			 //   oTimesModel.setData(aProjectTimes,false);
 			// oTimesModel.setProperty("/projectTimes",aProjectTimes);
			oTimesModel.updateBindings();
			}else{
			    MessageToast.show("Bitte ein Datum auswählen");
			}
			
		},
		
		onDeleteButtonPress: function(evt){
		   var oTable = this.byId("timesTable");
		   var aSelectedContexts = oTable.getSelectedContexts();
		   var aSelectedItems = oTable.getSelectedItems();
		   var oTimesModel = oTable.getModel("times");
		   
		}
	});

});