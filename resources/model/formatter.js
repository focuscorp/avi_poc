sap.ui.define([], function () {
	"use strict";

	return {

		statusColor: function (sStatus) {

			switch (sStatus) {
			case "Error":
				return "Error";
			case "Warning":
				return "Warning";
			}

		}
	};
});