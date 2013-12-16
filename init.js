/*!
 * JSON-Formatter for Chocolat
 * by Martin Hartl <m.hartl@me.com>
 * MIT Licensed
 */

Hooks.addMenuItem("Actions/JSON/Format JSON", "cmd-alt-ctrl-f", function() {
	Recipe.run(function(r) {
    var wordrange;
  	 
    if (r.selection.length > 0) {
      wordrange = r.selection;
    }
    else {
      wordrange = new Range(0, r.length);
    }
		
		var myJsontxt = r.textInRange(wordrange);
		
		try {
			var myJsonObj = eval('('+ myJsontxt + ')');
		} catch (e) {
			Alert.show("Format JSON", "Please select a whole JSON-Object", ["OK"]);
			return;
		}
		
		var formated = JSON.stringify(myJsonObj, undefined, 2); // indentation level = 2
		r.replaceTextInRange(wordrange, formated, true);
	});
});