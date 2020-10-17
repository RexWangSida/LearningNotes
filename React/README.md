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
  - class -> className.
  
HTML
```HTML
<p class="myclass">test</p>
```
JSX
```JSX
<p className="myclass">test</p>
```
  - Single tag elements must have closing, such as `<br />`.
  - Event handlers must be written in camelCase in **JSX**.
  
HTML
```HTML
<img onclick=whatever>test</p>
```
JSX
```JSX
<img onClick=whatever>test</p>
```


### JSX vs. Javascript
  - JSX expression can be stored in Javascript variables.
```Javascript
var myExpr = <p>Hello World!</p>;
```
  - Javascript can be put in JSX using **{}**
```Javascript
var myStr = "Sida";
var myExpr = <p>Hello {myStr}!</p>;
```

### Producing List with JSX
  - The array method **map** is used to build list in React from a set of data.
```Javascript
var myData = ['data1', 'data2', 'data3'];

var myList= myData.map(
  function(myString) { 
    return <li>{myString}</li>; 
  }
);

ReactDOM.render(
  <ul>{myList}</ul>,
  document.getElementById('root')
);
```

### Component using component
```Javascript
class ChildComponent extends React.Component{
  render () { return <p>hello, world!</p>; }
};

class ParentComponentextends React.Component{
  render () { return <ChildComponent/>; }
};
```

### Component Props
  - Components can pass information down to other components using **props**.
  - The syntax of **props** is like key/value attributes in html.
```Javascript
class DisplayMyProp extends React.Component{ 
  render  () {return (<p>{this.props.myProp}</p>); }
};

ReactDOM.render(<DisplayMyProp myProp="Hello World"/>,document.getElementById('myID'));
```
  - Use **defaultProps** to set default value.
```Javascript
class DisplayMyProp extends React.Component{
  render () {return (<p>{this.props.myProp}</p>);}
};

DisplayMyProp.defaultProps= {myProp: "Default Text"}
ReactDOM.render(
  <DisplayMyProp />,document.getElementById(’myID')
);
```

### Component State
  - **Props** are state that is set externally, it’s passed in from the outside.
  - **State** is state that is set internally, it’s set and/or decided  on from the inside of the component.
  - The initial state can be setup in the constructor, which when used should always accept props as a parameter and call the base class constructor with prop.
```Javascript
class MyComponentextends React.Component{
  constructor(props) {
  super(props);
  this.state= {mystate: ‘Hello World’};
  }
  render () {return ( <p> {this.state.mystate} </p> );}
};
```
