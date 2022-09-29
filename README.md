# 3. React.js Chapter (30 mins)

a. What is the difference between state and props? 

Props are used to pass the data between one component from another (For parent-child communication).
State is referred to the local state of the component which cannot be accessed outside of the component and only can be used & modified inside the component.

b. What are synthetic events in React? (Provide an example)?

Synthetic Events are a cross-browser wrapper around the browser’s native event. It has the same interface as the browser’s native event, including preventDefault(),onClick(),onChange() etc .

Examples:

example1: event.preventDefault() //Clicking on a "Submit" button, prevent it from submitting a form

 example2: 
  function showAlert () {
     alert("Hello World!");
  }

  <button onClick={() => {showAlert()}}>show alert </button>


c. What are portals in React? 
	Portals render the child component outside the hierarchy of its parent component. For example, it allows you to keep child parent relation when it comes to click events and when it comes to rendering out your content in jsx, but you can actually render that content somewhere else by taking advantage of portals

e. What will happen if you use setState in constructor?
 When you use setState(), it will cause react to rerender the component and all its children. Which you don't need in the constructor, since the component hasn't been rendered anyway.

