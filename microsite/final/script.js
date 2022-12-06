

$( document ).ready(function() {			/* Here we're using JQuery to check that the DOM (the document) is ready */
			    
	$(".hamburger").click(function(){		/* This line says to listen for a "click" event on something with with the class of "controls" */
		$("#popmenu").toggleClass("open");	/* A click happened, so now we toggle (add/remove) the class "open" on an element with the ID of "drawer" */
		console.log("Toggled the class!");	/* For help troubleshooting, we're logging a note to the browser console so we can see that the function ran */
	});

});

		

		
// 		<style>

// 			body {
// 				margin: 0;
// 				padding: 0;
// 				font-family: Arial, sans-serif;
// 			}

// 			/* This "drawer" is my main container. In it there is a button to control it, and the contents which open and close */
// 			 #drawer {							
// 				position: fixed;
// 				top: 0;
// 				left: 10px;
// 				width: 250px;
// 				height: 30px;
// 			}

// 			/* This is the button element, with the class "controls" that users will click on in order to open and close the contents */
// 			#drawer button.controls {			
// 				position: absolute;
// 				right: 0;
// 				bottom: 0;
// 				height: 30px;
// 				width: 100%;
// 				background-color: #ccffcc;
// 				cursor: pointer;
// 			}

// 			/* This is what the button.controls element looks like when its parent, #drawer, has the .open class applied to it */
// 			#drawer.open button.controls {		
// 				background-color: #ccccff;
// 			}

// 			/* This :after pseudoelement is actually what adds the words "open +" to the button. You'll notice that the only contents in the button HTML are the FontAwesome hamburger icon */
// 			#drawer button.controls:after {			
// 				content: "open +";
// 				font-family: Arial, sans-serif;
// 				font-size: 10px;
// 			}

// 			/* When the parent #drawer element has the .open class applied, we change the button :after pseudoelement text from "open +" to "close -" */
// 			#drawer.open button.controls:after {	
// 				content: "close -";
// 			}

// 			/* Here we are just positioning the FontAwesome hamburger icon */
// 			#drawer button.controls .fa {			
// 				position: absolute;
// 				top: 50%;
// 				transform: translateY(-50%);
// 				left: 5px;
// 			}

// 			/* This .contents element is what opens and closes when the user clicks the button. It has 0 height (and padding) when it's in its normally closed state */
// 			#drawer .contents {						
// 				height: 0;
// 				padding: 0 10px;
// 				box-sizing: border-box;
// 				width: 100%;
// 				background-color: orange;
// 				color: #fff;
// 				transition: all .5s;
// 			}

// 			/* When the parent #drawer element has the .open class applied, we change the height and padding of the contents to reveal it. */
// 			#drawer.open .contents {				
// 				height: 200px;
// 				padding: 30px 10px 10px 10px;
// 			}


// 		</style>

// 	</head>
// 	<body>
		
// 		<div id="drawer" class="">
// 			<button class="controls"><i class="fa fa-bars" aria-hidden="true"></i></button>
// 			<div class="contents">
// 				<h1>Surprise!</h1> 
// 				<p>We had some text hidden until you clicked on the button.</p>
// 			</div>
// 		</div>

	

// </body></html>