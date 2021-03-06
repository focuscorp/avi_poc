sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"sap/m/MessageToast",
	"sap/ui/integration/library"
], function (Controller, JSONModel, DateFormat, MessageToast, integrationLibrary) {
	"use strict";

	return Controller.extend("detectionAnomaly.app.controller.CardsLayout", {

		onInit: function () {
			var cardManifests = new JSONModel(),

				date = DateFormat.getDateInstance({
					style: "long"
				}).format(new Date());

			cardManifests.loadData(sap.ui.require.toUrl("detectionAnomaly/app/model/cardManifests.json"));

			this.getView().setModel(cardManifests, "manifests");
			this.getView().setModel(new JSONModel({

				homeIconUrl: "homeIconUrl",
				date: date
			}));
		},

		onAction: function (oEvent) {
			if (oEvent.getParameter("type") === integrationLibrary.CardActionType.Navigation) {
				MessageToast.show("URL: " + oEvent.getParameter("parameters").url);
			}
		}

	});
});