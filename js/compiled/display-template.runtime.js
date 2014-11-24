(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['display-template'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"profiler-container\">\n    <div id=\"profiler-previous\" class=\"profiler-nav\">\n        <a href=\"javascript:profilerGrid.prevPerson()\"></a>\n    </div>\n    <div class=\"profiler-content\">\n        <div class=\"profiler-img\" style=\"background-image:url(imgs/"
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + ")\"></div>\n        <div class=\"profiler-data\">\n            <p id=\"data1\">Twitter profile: <a href=\"https://www.twitter.com/"
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.data1 || (depth0 != null ? depth0.data1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data1","hash":{},"data":data}) : helper)))
    + "</a></p>\n            <p id=\"data2\">Occupation: "
    + escapeExpression(((helper = (helper = helpers.data2 || (depth0 != null ? depth0.data2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data2","hash":{},"data":data}) : helper)))
    + "</p>\n            <p id=\"data3\">Category: "
    + escapeExpression(((helper = (helper = helpers.data3 || (depth0 != null ? depth0.data3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data3","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n        <div class=\"profiler-blurb\">"
    + escapeExpression(((helper = (helper = helpers.blurb || (depth0 != null ? depth0.blurb : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"blurb","hash":{},"data":data}) : helper)))
    + "</div>\n    </div>\n    <div id=\"profiler-next\" class=\"profiler-nav\">\n    	<span id=\"profiler-close\">X</span>\n        <a href=\"javascript:profilerGrid.nextPerson()\"></a>\n    </div>\n</div>\n";
},"useData":true});
})();