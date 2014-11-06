var profilerGrid = {


	init: function(args) {

		//INIT GLOBALS
		this.initGlobals();

		this.$detail.hide();
		this.$prevbtn.hide();

		this.loadData(1, args.googleKey);
	},

	initGlobals: function() {

		//GLOBALS
		this.current = 0;
		this.totalEntries = [];
		this.allData = [];
		this.ds = [];

		//JQUERY CACHING
		this.$detail = $("#detail");
		this.$prevbtn = $("#prevbtn");
		this.$nextbtn = $("#nextbtn");

	},

	loadData: function(which, key) {
		var that = this;

		//LOAD DATA WITH MISO
		//SAMPLE SPREADSHEET
		//https://docs.google.com/spreadsheet/pub?key=0AurS2EUbrPERdE9Nc1dMSGdfenFCN0FCTk9jZF9TVWc&output=html
		that.ds = new Miso.Dataset({
	  		importer : Miso.Dataset.Importers.GoogleSpreadsheet,
	  		parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
	  		key : key,
	  		worksheet : which
		});

		that.ds.fetch({
		  success : function() {
		    that.populateGrid();
		  },
		  error : function() {
		  	console.error("ERROR: Failed to load Google Spreadsheet");
		  }
		});

	},

	showDetail: function(which) {

		this.current = which;

		this.$detail.show();
		this.$detail.animate({ opacity: '1' }, 500);

		var context = {
			name: this.allData[which][0].name,
			photo: this.allData[which][0].photourl,
			blurb: this.allData[which][0].blurb,
			url: this.allData[which][0].url,
			data1: this.allData[which][0].data1,
			data2: this.allData[which][0].data2,
			data3: this.allData[which][0].data3
		}

		this.$detail.html(Handlebars.templates['display-template'](context));

		this.checkNav();

		//CLOSE BUTTON
		$("#closebtn").click(function() {
			this.$detail.hide();
			this.$detail.animate({ opacity: '0' }, 500);
			$("#detail #vid").empty();
		});

	},

	nextPerson: function() {
		this.current ++;
		this.showDetail(this.current);
	},

	prevPerson: function() {
		this.current --;
		this.showDetail(this.current);
	},

	checkNav: function() {

		if (this.current == 0) {
			//this.$prevbtn.hide();
			$("#prevbtn").hide();
		} else {
			//this.$prevbtn.show();
			$("#prevbtn").show();
		}

		if (this.current == this.totalEntries - 1) {
			//this.$nextbtn.hide();
			$("#nextbtn").hide();
		} else {
			//this.$nextbtn.show();
			$("#nextbtn").show();
		}
	},

	populateGrid: function() {

		var $len = this.ds.column("name").data.length;
		this.totalEntries = $len;

		//LOOP THRU GOOGLE DATA AND PUT INTO OBJECT
		for (var j=0; j<$len; j++) {
			var counter = this.ds.column("id").data[j];
			this.allData[counter] = [ {
				myid: this.ds.column("id").data[j],
				name: this.ds.column("name").data[j],
				url: this.ds.column("url").data[j],
				data1: this.ds.column("data1").data[j],
				data2: this.ds.column("data2").data[j],
				data3: this.ds.column("data3").data[j],
				blurb: this.ds.column("blurb").data[j],
				photourl: this.ds.column("image").data[j]
		    }];
		}

		for (var i = 0; i<this.totalEntries; i++) {

			var context = {
				id: i,
				name: this.allData[i][0].name,
				photo: this.allData[i][0].photourl
			}

			$("#container").append(Handlebars.templates['th-template'](context));
		}

	}

}
