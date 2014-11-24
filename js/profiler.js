var profilerGrid = {

    init: function(args) {

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

        that.ds = new Miso.Dataset({
            importer: Miso.Dataset.Importers.GoogleSpreadsheet,
            parser: Miso.Dataset.Parsers.GoogleSpreadsheet,
            key: key,
            worksheet: which
        });

        that.ds.fetch({
            success: function() {
                that.populateGrid();
            },
            error: function() {
                console.error("ERROR: Failed to load Google Spreadsheet");
            }
        });

    },

    showDetail: function(which) {
        var that = this;
        this.current = which;


        this.$detail.animate({
            opacity: '1'
        }, 100, 'swing', function(){
            $(this).fadeIn();
        });

        var context = {
            name:   this.allData[which][0].name,
            photo:  this.allData[which][0].photourl,
            blurb:  this.allData[which][0].blurb,
            url:    this.allData[which][0].url,
            data1:  this.allData[which][0].data1,
            data2:  this.allData[which][0].data2,
            data3:  this.allData[which][0].data3
        }

        this.$detail.html(Handlebars.templates['display-template'](context));

        this.checkNav();

        $("#profiler-close").click(function() {
            that.$detail.fadeOut();
        });

    },

    nextPerson: function() {
        if ( this.current == this.totalEntries - 1 ){
            this.current = 0;
            this.showDetail(this.current);
        } else {
            this.current++;
            this.showDetail(this.current);
        }
    },

    prevPerson: function() {
        if ( this.current == 0 ) {
            this.current = this.totalEntries -1;
            this.showDetail(this.current)
            $(this).fadeOut();
        } else {
            this.current--;
            $(this).fadeOut();
            this.showDetail(this.current);
        }
    },

    checkNav: function() {

        if (this.current == 0) {
            $("#prevbtn").hide();
        } else {
            $("#prevbtn").show();
        }

        if (this.current == this.totalEntries - 1) {
            $("#nextbtn").hide();
        } else {
            $("#nextbtn").show();
        }
    },

    populateGrid: function() {

        var $len = this.ds.column("name").data.length;
        this.totalEntries = $len;

        for (var j = 0; j < $len; j++) {
            var counter = this.ds.column("id").data[j];
            this.allData[counter] = [{
                myid:       this.ds.column("id").data[j],
                name:       $.trim(this.ds.column("name").data[j]),
                url:        $.trim(this.ds.column("url").data[j]),
                data1:      $.trim(this.ds.column("data1").data[j]),
                data2:      $.trim(this.ds.column("data2").data[j]),
                data3:      $.trim(this.ds.column("data3").data[j]),
                blurb:      $.trim(this.ds.column("blurb").data[j]),
                photourl:   $.trim(this.ds.column("image").data[j])
            }];
        }

        for (var i = 0; i < this.totalEntries; i++) {

            var context = {
                id: i,
                name: this.allData[i][0].name,
                photo: this.allData[i][0].photourl
            }

            $("#container").append(Handlebars.templates['th-template'](context));
        }

    }

}
