# TWNA-calculator
Add a div with id = "insertTwnlCalModule" in the body tag
<div id="insertTwnlCalModule"></div>


Add file "twnlCal.js" in footer of the page.
<script type="text/javascript" src="(your-path)/twnlCal.js" defer></script>

For direct rendering of the JS file, you can use this code
if(window.twnlInitRender) {
	window.twnlInitRender();
}