---
componentName: TextInputForm
---

This is a standard form with an action and submit method.

- It has an input element of type "text".
- It has an input element of type "submit".
- It can be provided as props an action, onSubmit handler, and submit button value.
- On submit, it should call the onSubmit handler and clear the text input.

_The tricky part will be responding to changes to the text input._

### Standard Style

<form action="/submit" class="textInputForm" method="post">
    <input class="textInput" name="value" type="text" value="">
    <input class="textInputFormSubmit" type="submit" value="Go!">
</form>
