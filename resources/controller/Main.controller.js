sap.ui.define([
		"detectionAnomaly/app/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/Core",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		'sap/ui/core/Fragment',
		"sap/ui/vbm/AnalyticMap"
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 * @param {any} JSONModel
	 * @param {any} Core
	 * @param {new (arg0: string, arg1: any, arg2: string) => any} Filter
	 * @param {{ Contains: any; }} FilterOperator
	 */
	function (BaseController, JSONModel, Core, Filter, FilterOperator, Fragment, AnalyticMap) {
		"use strict";
		AnalyticMap.GeoJSONURL = "test-resources/sap/ui/vbm/demokit/media/analyticmap/L0.json";
		return BaseController.extend("detectionAnomaly.app.controller.Main", {
			onInit: function () {

				var data = [{ //data should enclosed with [ ]
					"FlightNumber": "EL 256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "KL 1373", //keep values in side " "
					"FlightStatus": "Arrived",
					"FlightDepartureTimesScheduled": "21-Apr-2021 09:10 CDT",
					"FlightDepartureTimesActual": "21-Apr-2021 09:12 CDT",
					"FlightArrivalTimesScheduled": "21-Apr-2021 13:10 CEST",
					"FlightArrivalTimesActual": "21-Apr-2021 13:14 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "Amsterdam, NL Amsterdam Airport Schiphol ",
					"FlightArrival": "Bucharest, RO Bucharest Henri Coanda International Airport"
				}, { //data should enclosed with [ ]
					"FlightNumber": "PL 547", //keep values in side " "
					"FlightStatus": "Late",
					"FlightDepartureTimes": "21-Apr-2021 05:10 CDT",
					"FlightArrivalTimes": "21-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Canceled",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}, { //data should enclosed with [ ]
					"FlightNumber": "256", //keep values in side " "
					"FlightStatus": "Departed On time",
					"FlightDepartureTimes": "20-Apr-2021 03:10 CDT",
					"FlightArrivalTimes": "20-Apr-2021 20:05 CEST",
					"CraftType": "77W",
					"TailNumber": "5y-IHO",
					"FlightDeparture": "MEX Benito Juarez International Airport, MX ",
					"FlightArrival": "BCN Barcelona-El Prat Airport, SP, ES"
				}];

				var attModel = new sap.ui.model.json.JSONModel();
				attModel.setData(data);
				this.getView().setModel(attModel);
				var data1 = [{ //data should enclosed with [ ]
					"ContractNumber": "EL 256", //keep values in side " "
					"ContractName": "Departed On time",
					"EffectiveDate": "20-Apr-2021 03:10 CDT",
					"ExpirationDate": "20-Apr-2021 20:05 CEST",
					"ContractType": "77W",
					"Status": "5y-IHO"
				}];
				var attModel1 = new sap.ui.model.json.JSONModel();
				attModel.setData(data1);
				this.getView().setModel(attModel1, "Model");
			},

			/* =========================================================== */
			/* begin: event handlers                                    */
			/* =========================================================== */

			/**
			 * Handler when a popover press button gets pressed
			 * @param {sap.ui.base.Event} 
			 * @public
			 */
			formatAvailableToObjectState: function (sStatus) {
				switch (sStatus) {
				case "Departed On time":
					return "Success";
				case "Canceled":
					return "Error";
				case "Late":
					return "Warning";
				default:
					return "Success";
				}
			},

			handleResponsivePopoverPress: function (oEvent) {
				var oButton = oEvent.getSource();
				var iScanStatus = oEvent.getParameter("data")[0].data.ScanStatus;
				if (iScanStatus !== 4) {
					var oTable = this._buildTable(oEvent);
					if (!this._oPopover) {
						Fragment.load({
							name: "detectionAnomaly.app.view.fragment.ScanPopover",
							controller: this
						}).then(function (oPopover) {
							this._oPopover = oPopover;
							this.getView().addDependent(this._oPopover);
							this._oPopover.addContent(oTable);
							this._oPopover.openBy(oButton);
						}.bind(this));
					} else {
						this._oPopover.removeAllContent();
						this._oPopover.addContent(oTable);
						this._oPopover.openBy(oButton);
					}
				}
			},

			/**
			 * Event handler when a popover close button gets pressed
			 * @param {sap.ui.base.Event} oEvent the scan popover close button event
			 * @public
			 */
			handleCloseButton: function (oEvent) {
				this._oPopover.close();
			},
			/**
			 * Event handler when a quick filter are applied table
			 * @param {sap.ui.base.Event} oEvent the iconTabBar select event
			 * @public
			 */
			onFilter: function (oEvent) {
				var oTable = sap.ui.getCore().byId("container-app---Main--card1--smartTable_ResponsiveTable"),
					key = oEvent.getParameters().key;
				var filter;

				var mFilters = {
					active: [new Filter("AnomalyStatus", FilterOperator.Contains, "Warning")],
					notActive: [new Filter("AnomalyStatus", FilterOperator.Contains, "Error")],
					all: []
				};
				switch (key) {
				case "all":
					filter = mFilters.all;
					break;
				case "active":
					filter = mFilters.active;
					break;
				case "notActive":
					filter = mFilters.notActive;
					break;

				}
				oTable.getAggregation("items")[1].getBinding("items").filter(filter);
			},
			/**
			 * Event handler when a chart datapoint gets pressed
			 * @param {sap.ui.base.Event} oEvent the chart onSelect event
			 * @public
			 */
			onSelect: function (oEvent) {
				//this.handleResponsivePopoverPress(oEvent);
			},
			onPress: function (oEvent) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("flightManagement");
			},
			/**
			 * Event handler when a table item gets pressed
			 * @param {sap.ui.base.Event} oEvent the table selectionChange event
			 * @public
			 */
			onPressItem: function (oEvent) {
				// The source is the list item that got pressed
				var oItem = oEvent.getSource();
				var sBindingContextPath = oItem.getSelectedItem().getBindingContextPath().replace(/[^\d.]/g, '');
				var rowIndex = parseInt(sBindingContextPath, 10);
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("flightDetails");
			},

			/* =========================================================== */
			/* begin: internal methods                                     */
			/* =========================================================== */

			/**
			 * Private method called when a dynamic table is created
			 * Method called to create columns
			 * @private
			 */
			_createColumn: function () {
				var aColumns = [new sap.m.Column({
						header: new sap.m.Label({
							text: this.getView().getModel("i18n").getResourceBundle().getText("AnomalyIdLabel")
						})
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: this.getView().getModel("i18n").getResourceBundle().getText("AnomalyTimeLabel")
						})
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: this.getView().getModel("i18n").getResourceBundle().getText("AnomalyTypeLabel")
						})
					}),
					new sap.m.Column({
						header: new sap.m.Label({
							text: this.getView().getModel("i18n").getResourceBundle().getText("AnomalyStatusLabel")
						})
					})

				];
				return aColumns;
			},
			/**
			 * Method called to create cells
			 * @private
			 */
			_createCell: function () {
				var aCells = [new sap.m.Text({
						text: "{AnomalyId}"
					}), new sap.m.Text({
						text: "{AnomalyTime}"
					}), new sap.m.Text({
						text: "{AnomalyType}"
					}),
					new sap.m.Text({
						text: "{AnomalyStatus}"
					})
				];
				return aCells;
			},

			handlPopoverPress: function (oEvent) {
				var oButton = oEvent.getSource(),
					oView = this.getView();

				if (!this._pPopover) {
					this._pPopover = Fragment.load({
						id: oView.getId(),
						name: "detectionAnomaly.app.view.fragment.Popover",
						controller: this
					}).then(function (oPopover) {
						oView.addDependent(oPopover);
						oPopover.bindElement("/ProductCollection/0");
						return oPopover;
					});
				}
				this._pPopover.then(function (oPopover) {
					oPopover.openBy(oButton);
				});
			},

			handleButton: function (oEvent) {
				// note: We don't need to chain to the _pPopover promise, since this event-handler
				// is only called from within the loaded dialog itself.
				this.byId("myPopover").close();
			},
			onSelectDialogPress: function (oEvent) {
				var oButton = oEvent.getSource(),
					oView = this.getView();

				if (!this._pDialog) {
					this._pDialog = Fragment.load({
						id: oView.getId(),
						name: "detectionAnomaly.app.view.fragment.Popover",
						controller: this
					}).then(function (oDialog) {
						oDialog.setModel(oView.getModel());
						return oDialog;
					});
				}

				this._pDialog.then(function (oDialog) {

					oDialog.open();
				}.bind(this));

			},

			/**
			 * Method called to create a sap.m.table
			 * @private
			 */
			_buildTable: function (oEvent) {
				var that = this;
				var aColumns = this._createColumn();
				var aCells = this._createCell();
				var oTable = new sap.m.Table({
					mode: 'SingleSelectMaster',
					//selectionChange: that.onPressItem(that),
					columns: aColumns
				});
				oTable.attachSelectionChange(that.onPressItem, that);

				var sScanIdPath = oEvent.getSource().getSelectedDataPoints().dataPoints[0].context.getPath().replace(/[^\d.]/g, '');
				var scanId = parseInt(sScanIdPath, 10);
				var sPath = '/Scans(ScanId=' + scanId + ')/Anomalies';
				oTable.bindItems(sPath, new sap.m.ColumnListItem({
					type: "Navigation",
					cells: aCells
				}));
				return oTable;
			}

		});
	});