var street_fighter = function(){
	var player = {
		"default_message": "Pick A Fighter",
		one : {
			name: this["default_message"],
			selected: false,
		},
		two : {
			name : this["default_message"],
			selected: false,
		},
		reset : function() {
			this["default_message"] = "Pick A Fighter";
			this.one = {
				name: this["default_message"],
				selected: false,
			};

			this.two = {
				name : this["default_message"],
				selected: false,
			};

			$(".player_1 strong").html(player["default_message"]);
			$(".player_2 strong").html(player["default_message"]);
			$("#start_round").css("display", "none");
			$("#playerMenu").css("display", "block")
		}
	}

	//Helper method. Loads and displays a template
	//@param `context` is optional
	var dispTemplate = function(name, el_id, context){
		var templateCompile = Handlebars.templates[name]((context != null) ? context : null);
		if($("#" + el_id) === null)
			$("#mainCont").append(templateCompile);
		else
		{
	        $("#" + el_id).remove();
			$("#mainCont").append(templateCompile);
			$("body").css("overflow-y", "hidden");
		}
	}

	var show_win_screen = function(){
		$("#start_round").click(function(){
			$("#modal").remove();
			$("#start_round, #playerMenu").css("display", "none");
			dispTemplate("winner", "winner_modal");

			$("#close-menu").click(function(){
				$("#winner_modal").remove();
				$("body").css("overflow-y", "auto");
				player.reset();
			});
		});
	};

	var load_fighter = function(obj){
		dispTemplate("fighter", "modal", obj);

		//closes the modal when clicking on the close button
		$("#close-menu").click(function(){
			$("#modal").remove();
			$("body").css("overflow-y", "auto");
		});

		if(player.one.name == obj.name){
			$("#player_01").css("color", "green");
		}
		if(player.two.name == obj.name){
			$("#player_02").css("color", "green");
		}

		//click event handler to allow the players to pick their characters
		$("#player_01").click(function(){
			handlePlayerClicks(this, player.one, "player_1", player.two, obj);
		});

		$("#player_02").click(function(){
			handlePlayerClicks(this, player.two, "player_2", player.one, obj);
		});
	}

	var handlePlayerClicks = function(el, p, p_el, other_p, f_obj){
		if(p.name != f_obj.name)
		{
			p.name = f_obj.name;
			$("." + p_el + " strong").html(f_obj.name);

			$(el).css("color", "green");

			p.selected = true;

			if(other_p.selected == true){
				$("#start_round").css("display", "block");
				show_win_screen();
			}
		}
		else
		{
			p.name = player["default_message"];
			$("." + p_el +" strong").html(player["default_message"]);

			$(el).css("color", "gray");

			p.selected = false;
			
			$("#start_round").css("display", "none");
		}
	}

	var player_tab_actions = {
			open : false,
			
			display : function(el){
				el.click(function(){
					if (player_tab_actions.open == false){
						el.css("right", "-285px");
						player_tab_actions.open = true;
					}

					else{
						el.css("right", "0");
						player_tab_actions.open = false;
					}
				});
			}
	};

	return {
		load_fighter: load_fighter,
		player_tab_actions: player_tab_actions,
		player: player
	}
}

var sf = new street_fighter();

$(document).ready(function(){
	
	Handlebars.registerHelper('json', function(context) {
	    return JSON.stringify(context);
	});

	Handlebars.registerHelper("load_fighter_function", function(obj){
		return "sf.load_fighter(" +  JSON.stringify(obj) + ")";
	});

	//Displays and sets both players to the default value
	//"Pick A Fighter"
	sf.player_tab_actions.display($("#playerMenu"));
	$(".player_1 strong, .player_2 strong").html(sf.player.default_message);

	//Loads the `characters` template and displays all the characters from the
	//`fighter_obj_arr` object
	var $fighterList = $("#character_container"),
	templateCompile = Handlebars.templates["characters"](fighter_obj_arr);

	$fighterList.html(templateCompile);
});

//TODO::Update CSS
//TODO::Add Akuma to Fighters
//TODO::Work On Responsiveness