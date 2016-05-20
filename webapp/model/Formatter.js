sap.ui.define(function() {
	"use strict";
	var Formatter = {
		processState: function(fValue) {
			try {
				var aRowCells = this.getParent().getAggregation("cells");
				if (fValue === "In Bearbeitung") {
					aRowCells[1].setEditable(true);
					aRowCells[2].setEditable(true);
					aRowCells[3].setEditable(true);
					return "Warning";
				} else if (fValue === "Genehmigt") {
					aRowCells[1].setEditable(false);
					aRowCells[2].setEditable(false);
					aRowCells[3].setEditable(false);
					return "Success";
				} else if (fValue.length === "Neu") {
					aRowCells[1].setEditable(true);
					aRowCells[2].setEditable(true);
					aRowCells[3].setEditable(true);
					return "None";
				}
			} catch (err) {
				return "None";
			}
		}
	};

	return Formatter;

}, /* bExport= */ true);