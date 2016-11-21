var toggles = {'max':false,'sel':false,'tim':false,'min':false,'cen':false,'bal':false};
var btoggles = {'lac':false,'rc':false,'anf':false,'flm':false,'wbi':false,'twm':false,'ss':false,'wci':false,'rm':false,'bp':false,'bae':false};
var t = false;

function toggle(target){
	toggles[target] = !toggles[target];
	redraw();
}

function disp(target){
	t = !btoggles[target];
	btoggles = {'lac':false,'rc':false,'anf':false,'flm':false,'wbi':false,'twm':false,'ss':false,'wci':false,'rm':false,'bp':false,'bae':false};
	btoggles[target] = t;
	redraw();
}

function redraw(){
	for(var target in toggles){
		var line = document.getElementById("c" + target);
		var button = document.getElementById(target);
		if(toggles[target]){
			line.style.visibility = "visible";
			button.className = "button sel";
		}else{
			line.style.visibility = "hidden";
			button.className = "button";
		}
		for(var graph in btoggles){
			var bar = document.getElementById("c" + graph + target);
			var title = document.getElementById("t" + graph);
			var label = document.getElementById(graph);
			if(toggles[target] & btoggles[graph] & bar != null){
				bar.style.visibility = "visible";
			}else if(bar != null){
				bar.style.visibility = "hidden";
			}
			if(btoggles[graph]){
				title.style.visibility = "visible";
				label.className = "label sel";
			}else{
				title.style.visibility = "hidden";
				label.className = "label";
			}
		}
	}
	if(t){
		document.getElementById("base2").style.visibility = "visible";
	}else{
		document.getElementById("base2").style.visibility = "hidden";
	}
}