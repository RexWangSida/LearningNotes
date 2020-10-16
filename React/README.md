## React

### React Virtual DOM
- lightweight abstraction of the DOM
- It compares the current layout and the expected layout, then handle any required DOM updates automatically.
- ```javascript
<div id="root"></div>
<script type="text/babel">
ReactDOM.render(
  <h1>Hello,  world!</h1>,
  document.getElementById('root')
);
```
