(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['display-template'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\"detailcon\">\n	<div id=\"prevbtn\">\n		<a href=\"javascript:profilerGrid.prevPerson()\">«</a>\n	</div>\n	<div id=\"closebtn\">X</div>\n	<div id=\"photocon\">\n		<img width=\"115\" height=\"135\" src=\"imgs/"
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\">\n	</div>\n	<div style=\"float: left\">\n		<div id=\"name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n		<div id=\"data1\" class=\"dataDisp\">\n			<p>Data 1: <a href=\"https://www.twitter.com/"
    + escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"url","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.data1 || (depth0 != null ? depth0.data1 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data1","hash":{},"data":data}) : helper)))
    + "</p></a>\n		</div>\n		<div id=\"data2\" class=\"dataDisp\">\n			<p>Data 2: "
    + escapeExpression(((helper = (helper = helpers.data2 || (depth0 != null ? depth0.data2 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data2","hash":{},"data":data}) : helper)))
    + "</p>\n			</div>\n		<div id=\"data3\" class=\"dataDisp\">\n			<p>Data 3: "
    + escapeExpression(((helper = (helper = helpers.data3 || (depth0 != null ? depth0.data3 : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"data3","hash":{},"data":data}) : helper)))
    + "</p>\n		</div>\n	</div>\n	<div style=\"clear:both\"></div>\n	<div id=\"blurb\">"
    + escapeExpression(((helper = (helper = helpers.blurb || (depth0 != null ? depth0.blurb : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"blurb","hash":{},"data":data}) : helper)))
    + "</div>\n	<div id=\"nextbtn\"><a href=\"javascript:profilerGrid.nextPerson()\">»</a></div>\n</div>\n";
},"useData":true});
templates['th-template'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"th\" onclick=\"profilerGrid.showDetail(this.id)\">\n\n	<div id=\"label "
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"thname\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n	<div class=\"hoverarea\"></div>\n	<img src=\"imgs/"
    + escapeExpression(((helper = (helper = helpers.photo || (depth0 != null ? depth0.photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"photo","hash":{},"data":data}) : helper)))
    + "\">\n\n</div>\n";
},"useData":true});
templates['th-template.runtime.js'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\ntemplates['th-template'] = template(function (Handlebars,depth0,helpers,partials,data) {\n  this.compilerInfo = [4,'>= 1.0.0'];\nhelpers = this.merge(helpers, Handlebars.helpers); data = data || {};\n  var buffer = \"\", stack1, helper, functionType=\"function\", escapeExpression=this.escapeExpression;\n\n\n  buffer += \"<div id=\\\"\";\n  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }\n  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }\n  buffer += escapeExpression(stack1)\n    + \"\\\" class=\\\"th\\\" onclick=\\\"photoGrid.showDetail(this.id)\\\">\\n\\n	<div id=\\\"label \";\n  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }\n  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }\n  buffer += escapeExpression(stack1)\n    + \"\\\" class=\\\"thname\\\">\";\n  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }\n  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }\n  buffer += escapeExpression(stack1)\n    + \"</div>\\n	<div class=\\\"hoverarea\\\"></div>\\n	<img src=\\\"imgs/\";\n  if (helper = helpers.photo) { stack1 = helper.call(depth0, {hash:{},data:data}); }\n  else { helper = (depth0 && depth0.photo); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }\n  buffer += escapeExpression(stack1)\n    + \"\\\">\\n\\n</div>\";\n  return buffer;\n  });\n})();";
  },"useData":true});
})();