$( document ).ready(function(){
	//Notice accessing array elements this is important in understanding how the array works.
	//Notice at the bottom has a series of different properties and methods that can be used with arrays
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	/*var arrayOfItems = ["A", "B", "C"];

	//For loop documentation
	//http://www.w3schools.com/js/js_loop_for.asp
	for(var i=0; i < arrayOfItems.length; i++) {
		//Some nice stuff for string using different operators
		//View the String Operators to see some different examples of concatenation.
		//http://www.w3schools.com/js/js_operators.asp
		var div = "<div>" + arrayOfItems[i] + "</div>";

		//Different ways to display variables
		//http://www.w3schools.com/js/js_output.asp
		console.log($("#itemsToLoop"));
		//Legit Debuging use the following method
		//This will show you how to actually set breakpoints and do some other nice tricks.
		//https://developer.chrome.com/devtools/docs/javascript-debugging


		//http://api.jquery.com/append/
		$("#itemsToLoop").append(div)
	}*/
	var viewModel = {
		bitStrings: ko.observableArray(),
		someName: ko.observableArray([ {value: ko.observable("X")}, {value: ko.observable("X")}, {value: ko.observable("X")} ])
		//The following dont work...
		//daString: ko.observableArray([ko.observable("0"), ko.observable("0"), ko.observable("0")])
		//daString: ko.observableArray([0,0,0])
		//daString: ko.observableArray([{value: 0}, {value: 0}, {value: 0}])
		//daString: ko.observableArray(ko.observable({value: 0}), ko.observable({value: 0}), ko.observable({value: 0}))
	}

	for(var i=0; i < 3; i++) {
		viewModel.bitStrings.push({ 
            	firstName: ko.observable('Bert'), 
            	numberOfBits: ko.observable(4),
            	daString: ko.observableArray([ {value: ko.observable("0")}, {value: ko.observable("X")}, {value: ko.observable("X")} ])
        	
            	//daString: ko.observableArray([{value: "0"}, {value: "0"}, {value: "0"}])
        	});
		/*viewModel.bitStrings()[viewModel.bitStrings().length - 1].daString = ko.observableArray();
		for(var s=0; s < 4; s++) {
			viewModel.bitStrings[viewModel.bitStrings().length - 1].daString().push("1");
		}*/
	}
		/*
        bitStrings: [
            { 
            	firstName: ko.observable('Bert'), 
            	numberOfBits: ko.observable(16) 
        	},
            { 
            	firstName: ko.observable('charles'), 
            	numberOfBits: ko.observable(16)  
            },
            { 
            	firstName: ko.observable('charles2'), 
            	numberOfBits: ko.observable(16)
            }
        ]
    }*/


	ko.applyBindings(viewModel);
})