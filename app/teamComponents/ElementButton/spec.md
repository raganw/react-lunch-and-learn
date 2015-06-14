---
componentName: ElementButton
---

This is a component that acts as a toggle button, and is provided a child element to render within it.

- Has a selected and unselected display state that can be provided via props.
- Can be provided with "href", "value", and "onClick" props.
- Responds to click events by calling the onClick props handler with the value props.

###Standard Style

<a class="root" href="#">
    <h1>Click Me!</h1>
</a>

<hr/>

### Selected Style

<a class="root isSelected" href="#">
    <h1>Click Me!</h1>
</a>
