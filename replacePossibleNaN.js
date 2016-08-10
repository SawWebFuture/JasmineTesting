// To call function -> Utility.replacePossibleNaN(string);

var Utility = new Utility();

function Utility() {

this.replacePossibleNaN = function(value) {
		if (isNaN(value)) {
			return "n.a.";
		} else {
			return value;
		}
	};
	
	}
