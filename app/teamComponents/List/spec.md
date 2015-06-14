---
componentName: List
style: |
  html, body {
    margin: 0;
    min-height: 100%;
  }

  .componentContainer {
    display: block;
    height: 200px;
    width: 100%;
  }

  .componentContainer > * {
    height: 100%;
  }

---

This is a component that takes some number of other components as children and
renders them into a `<ul/>`, wrapping each in a `<li/>`

- It should scroll within its list if constrained by a parent's height.

_Hint: See the [React.Children helpers](http://facebook.github.io/react/docs/top-level-api.html#react.children)_

### Standard Style

<div class="componentContainer">
  <ul class="listElement">
    <li class="listItem"><h2>Item 1</h2></li>
    <li class="listItem"><h2>Item 2</h2></li>
    <li class="listItem"><h2>Item 3</h2></li>
    <li class="listItem"><h2>Item 4</h2></li>
    <li class="listItem"><h2>Item 5</h2></li>
    <li class="listItem"><h2>Item 6</h2></li>
  </ul>
</div>
