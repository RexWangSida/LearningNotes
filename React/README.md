# React

### React Virtual DOM
- lightweight abstraction of the DOM.
- It compares the current layout and the expected layout, then handle any required DOM updates automatically.
```HTML
<div id="root"></div>
<script type="text/babel">
ReactDOM.render(
  <h1>Hello,  world!</h1>,
  document.getElementById('root')
);
</script>
```
- The code to be rendered in the virtual DOM is **JSX** code, similar to **HTML** syntax but different rules applied.
- The element to be rendered must be one single element, multiple elements need to be grouped.
```Javascript
ReactDOM.render(
  <div> <p></p> <p></p> <p></p> </div>
  document.getElementById('root')
);
```
### React Component
```Javascript
class ComponentName extends React.Component{
  render() {  return <h1>Hello World!</h1> ; }
}
```
 - Components extends React.Component and at minimum must contain a render method that returns JSX code.
 - It can be rendered to the DOM by using `<ComponentName />`
```Javascript
ReactDOM.render(
  <ComponentName />,
  document.getElementById('root')
);
```

### JSX vs. HTML
  - **JSX** expressions must have exactly one outermost element.
```HTML
  <div> <p>a</p> <p>b</p> <p>c</p> </div>
```
  - class -> className
```HTML
<p class="myclass">test</p>
```
```JSX
<p className="myclass">test</p>
```
