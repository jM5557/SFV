(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['characters'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "	<li class = \"fighter\" onclick = \""
    + alias3((helpers.load_fighter_function || (depth0 && depth0.load_fighter_function) || alias2).call(alias1,depth0,{"name":"load_fighter_function","hash":{},"data":data}))
    + "\">\r\n		<div class = \"fighter_bg\" style = \"background-image: url('assets/images/characters/"
    + alias3(((helper = (helper = helpers.bgImg || (depth0 != null ? depth0.bgImg : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"bgImg","hash":{},"data":data}) : helper)))
    + "')\">\r\n		</div>\r\n		<div class = \"f_name\">"
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n	</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options;

  stack1 = ((helper = (helper = helpers.fighters || (depth0 != null ? depth0.fighters : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"fighters","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.fighters) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { return stack1; }
  else { return ''; }
},"useData":true});
templates['fighter'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section id=\"modal\" style=\"height: auto; padding-top: 30px; border-bottom: 5px solid rgb(162, 16, 16);\">\r\n	<div id=\"fighter_name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\r\n\r\n	<img alt=\"fighter_ryu\" src=\"assets/images/characters/"
    + alias4(((helper = (helper = helpers.bgImg || (depth0 != null ? depth0.bgImg : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bgImg","hash":{},"data":data}) : helper)))
    + "\">\r\n\r\n	<div class=\"fighter_stats\">\r\n		<div class=\"f_detail\">\r\n			<strong>OCCUPATION</strong>\r\n			"
    + alias4(((helper = (helper = helpers.occupation || (depth0 != null ? depth0.occupation : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"occupation","hash":{},"data":data}) : helper)))
    + "\r\n		</div>\r\n		<div class=\"f_detail\">\r\n			<strong>FIGHT STYLE</strong>\r\n			"
    + alias4(((helper = (helper = helpers.fightStyle || (depth0 != null ? depth0.fightStyle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fightStyle","hash":{},"data":data}) : helper)))
    + "\r\n		</div>\r\n		<div class=\"f_detail\">\r\n			<strong>SKILLS</strong>\r\n			"
    + alias4(((helper = (helper = helpers.skills || (depth0 != null ? depth0.skills : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skills","hash":{},"data":data}) : helper)))
    + "\r\n		</div>\r\n		<div class=\"f_measurements\">\r\n			<span class=\"l\">"
    + alias4(((helper = (helper = helpers.height || (depth0 != null ? depth0.height : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"height","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"r\">"
    + alias4(((helper = (helper = helpers.weight || (depth0 != null ? depth0.weight : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"weight","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</div>\r\n		<div class=\"bar_graph\">\r\n			<span class=\"bar p_bar\" style=\"max-width: 80%\">"
    + alias4(((helper = (helper = helpers.power || (depth0 != null ? depth0.power : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"power","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"bar h_bar\" style=\"max-width: 60%\">"
    + alias4(((helper = (helper = helpers.health || (depth0 != null ? depth0.health : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"health","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"bar m_bar\" style=\"max-width: 60%\">"
    + alias4(((helper = (helper = helpers.mobility || (depth0 != null ? depth0.mobility : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"mobility","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"bar t_bar\" style=\"max-width: 60%\">"
    + alias4(((helper = (helper = helpers.technique || (depth0 != null ? depth0.technique : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"technique","hash":{},"data":data}) : helper)))
    + "</span>\r\n			<span class=\"bar r_bar\" style=\"max-width: 40%\">"
    + alias4(((helper = (helper = helpers.range || (depth0 != null ? depth0.range : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"range","hash":{},"data":data}) : helper)))
    + "</span>\r\n		</div>\r\n	</div>\r\n\r\n	<button class=\"pick_char\" id=\"player_01\">\r\n		Select Fighter - P1\r\n	</button>\r\n	<button class=\"pick_char\" id=\"player_02\">\r\n		Select Fighter - P2\r\n	</button>\r\n	<button id=\"close-menu\">\r\n		Back To Menu\r\n	</button>\r\n</section>";
},"useData":true});
templates['winner'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<section id = \"winner_modal\">\r\n	<div id = \"ken_wins\">\r\n		<img alt = \"ken_render\" src = \"assets/images/Ken-transparent.png\" id = \"ken_render\">\r\n		<audio src=\"assets/ken-theme-ost.mp3\" controls autoplay loop>\r\n			<p>Your browser does not support the <code>audio</code> element </p>\r\n		</audio>\r\n	</div>\r\n\r\n	<button id=\"close-menu\">\r\n		Back To Menu\r\n	</button>\r\n</section>";
},"useData":true});
})();