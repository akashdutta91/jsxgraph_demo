var brd = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10], axis:true});
	 	var currentGraphIndex = 0;
	 	var isDrawn = false;
	    localStorage.setItem("d_value", "0");
	    localStorage.setItem("c_value", "0");
	    localStorage.setItem("b_value", "1");
	    localStorage.setItem("a_value", "1");
	    generateGraph();
	    function generateGraph(index){
	        if(index){
	        	currentGraphIndex = index;
	        	JXG.JSXGraph.freeBoard(brd);
	        	isDrawn = false;
	        	brd = JXG.JSXGraph.initBoard('jxgbox', {boundingbox: [-10, 10, 10, -10], axis:true});
	        	if(index == 1){
	        		f = brd.create('functiongraph',[function(a){
			            return Math.pow(a,2);
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>2</mn></msup></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        var mathEl = document.getElementById("eqnDropdown"); 
			        MathJax.Hub.Typeset()
	        	}
	        	else if(index == 2){
	        		f = brd.create('functiongraph',[function(a){
			            return Math.sqrt(a);
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mi>x</mi></msqrt></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        MathJax.Hub.Typeset();
	        	}
	        	else if(index == 3){
	        		f = brd.create('functiongraph',[function(a){
			            return Math.abs(a);
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mo>|</mo><mi>x</mi><mo>|</mo></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        MathJax.Hub.Typeset();
	        	}
	        	else if(index == 4){
	        		f = brd.create('functiongraph',[function(a){
			            return a;
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        MathJax.Hub.Typeset();
	        	}
	        	else if(index == 5){
	        		f = brd.create('functiongraph',[function(a){
			            return Math.pow(a,3);
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mi>x</mi><mn>3</mn></msup></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        MathJax.Hub.Typeset();
	        	}
	        	else if(index == 6){
	        		f = brd.create('functiongraph',[function(a){
			            return (10*Math.pow(a,2)+20*a)/(Math.pow(a,4)+4);
			        }]);
			        var mathEq = '<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow>'+
				    '<mfrac>'+
				      '<mrow>'+
				        '<mi>10</mi>'+
				        '<msup><mi>x</mi><mn>2</mn></msup>'+
				        '<mo>+</mo>'+
				        '<mi>20></mi><mi>x</mi>'+
				      '</mrow>'+
				      '<mrow>'+
				      	'<msup><mi>x</mi><mn>4</mn></msup>'+
				      	'<mo>+</mo>'+
				      	'<mi>4</mi>'+
				      '</mrow>'+
				    '</mfrac>'+
				  '</mrow></math><span class="caret"></span>';
			        $("#eqnDropdown").html(mathEq);
			        MathJax.Hub.Typeset();
	        	}
	        	document.getElementById("eqnList").style.display = "none";
	        }
	        else{
	        	f = brd.create('functiongraph',[function(a){
		            return Math.pow(a,2);
		        }]);
	        }
	    }
	    function commonFunc(f){
    		var tempGraph = brd.create('functiongraph',[function(x){
	    		isDrawn = true;
			    return f(x);
			}], {strokeColor: "red"});
			return tempGraph;
    	}

    	function generateTransformedGraph(){
    		var d_value = localStorage.d_value;
	    	var c_value = localStorage.c_value;
	    	var b_value = localStorage.b_value;
	    	var a_value = localStorage.a_value;
	    	if([0,1].indexOf(currentGraphIndex)>-1){
	    		function f(x){
	    			return parseFloat(a_value)*Math.pow(parseFloat(b_value)*(x + parseFloat(c_value)),2)+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
	    	else if(currentGraphIndex == 2){
	    		function f(x){
	    			return parseFloat(a_value)*Math.sqrt(parseFloat(b_value)*(x + parseFloat(c_value)))+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
	    	else if(currentGraphIndex == 3){
	    		function f(x){
	    			return parseFloat(a_value)*Math.abs(parseFloat(b_value)*(x + parseFloat(c_value)))+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
	    	else if(currentGraphIndex == 4){
	    		function f(x){
	    			return (parseFloat(a_value)*(parseFloat(b_value)*(x + parseFloat(c_value))))+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
	    	else if(currentGraphIndex == 5){
	    		function f(x){
	    			return parseFloat(a_value)*Math.pow(parseFloat(b_value)*(x + parseFloat(c_value)),3)+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
	    	else if(currentGraphIndex == 6){
	    		function f(x){
	    			return parseFloat(a_value)*((10*Math.pow(parseFloat(b_value)*(x+parseFloat(c_value)),2)+20*(parseFloat(b_value)*(x+parseFloat(c_value))))/(Math.pow(parseFloat(b_value)*(x+parseFloat(c_value)),4)+4))+parseFloat(d_value);
	    		}
	    		if(isDrawn){
	    			graph.Y = function(x){
	    				return f(x);
	    			};
	    			graph.updateCurve();
	    			brd.update();
	    		}
	    		else{
	    			graph = commonFunc(f);
	    		}
	    	}
    	}


	    function changeListBg(that){
	    	that.style.backgroundColor = "#B4D5FE";
	    }
	    function resetListBg(that){
	    	that.style.backgroundColor = "";
	    }
	    function showEqnList(){
	    	var tempEl = document.getElementById("eqnList");
	    	if(tempEl.style.display == "none" || tempEl.style.display == ""){
	    		tempEl.style.display = "block";
	    	}
	    	else{
	    		tempEl.style.display = "none";	
	    	}
	    }
	    function d_Modified(that, index){
	    	var displaySliderValEl = "#rangeIndicator_"+index;
	    	$(displaySliderValEl).text(that.value);
	    	// generateGraph_D(that.value);
	    	localStorage.setItem("d_value", that.value);
	    	generateTransformedGraph();
	    }
	    function c_Modified(that, index){
	    	var displaySliderValEl = "#rangeIndicator_"+index;
	    	$(displaySliderValEl).text(that.value);
	    	// generateGraph_C(that.value);
	    	localStorage.setItem("c_value", that.value);
	    	generateTransformedGraph();
	    }
	    function b_Modified(that, index){
	    	var displaySliderValEl = "#rangeIndicator_"+index;
	    	$(displaySliderValEl).text(that.value);
	    	// generateGraph_B(that.value);
	    	localStorage.setItem("b_value", that.value);
	    	generateTransformedGraph();
	    }
	    function a_Modified(that, index){
	    	var displaySliderValEl = "#rangeIndicator_"+index;
	    	$(displaySliderValEl).text(that.value);
	    	// generateGraph_B(that.value);
	    	localStorage.setItem("a_value", that.value);
	    	generateTransformedGraph();
	    }
	    function reflectCurrentGraphs(that, index){
	    	console.log(that.checked);
	    	var a_value = parseFloat(localStorage.a_value);
	    	var b_value = parseFloat(localStorage.b_value);
	    	if(index == 1){
	    		localStorage.setItem("a_value", a_value*(-1));
		    	generateTransformedGraph();
	    	}
	    	else if(index == 2){
	    		localStorage.setItem("b_value", b_value*(-1));
		    	generateTransformedGraph();	
	    	}
	    }