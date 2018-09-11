Selectors:

Except for the getElementById , all of them return an array with the found results, getElementById return a single object;

-> document.getElementById("name_of_id");
-> document.getElementsByClassName("name_of_id");
-> document.getElementsByTagName("name_of_id");
-> document.querySelectorAll("css_selector"); 

EventListener: 

selector.addEventListener('name_of_event', function() {
	//code to be executed
});


mouseenter	A pointing device is moved onto the element that has the listener attached.
mouseover	A pointing device is moved onto the element that has the listener attached or onto one of its children.
mousemove	A pointing device is moved over an element. (Fired continously as the mouse moves.)
mousedown	A pointing device button is pressed on an element.
mouseup	    A pointing device button is released over an element.
click	    A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element.
dblclick	A pointing device button is clicked twice on an element.
contextmenu	The right button of the mouse is clicked (before the context menu is displayed).
wheel	    A wheel button of a pointing device is rotated in any direction.
mouseleave	A pointing device is moved off the element that has the listener attached.
mouseout	A pointing device is moved off the element that has the listener attached or off one of its children.
select	    Some text is being selected.
keydown	    ANY key is pressed
keypress	ANY key except Shift, Fn, CapsLock is in pressed position. (Fired continously.)
keyup	    ANY key is released
resize	    The document view has been resized.
scroll	    The document view or an element has been scrolled.


https://developer.mozilla.org/en-US/docs/Web/Events

