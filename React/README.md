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
  <ComponentName />
  document.getElementById('root')
);
```
