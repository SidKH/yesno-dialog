# Javascript yes no dialog
Tiny customizable vanilla js confirm dialog

```javascript
import yesno from "yesno-dialog";

showCatButton.addEventListener('click', async () => {
  const yes = await yesno()
  if (yes) // show the cat
})
```

![Js yes no dialog example](https://media.giphy.com/media/hU3cAfagRZjnYQXfma/giphy.gif)
  
```javascript
import yesno from "yesno-dialog";

showCatButton.addEventListener('click', async () => {
  const yes = await yesno({
    labelYes: "Yep",
    labelNo: "Nope",
    bodyText: "Are you sure you want to see the cat?"
  })
  if (yes) // show the cat
})
```

```css
.jsyesnodialog {
  --color: #e91e63;
}
```

![Js yes no dialog customize](https://media.giphy.com/media/fstiPkSa2v8viv7k0z/giphy.gif)

### Codesandbox examples
- [Initial](https://codesandbox.io/s/yesno-dialog-example-simple-it5om)
- [Change theme](https://codesandbox.io/s/yesno-dialog-example-theme-gskh0)
- [Customize text](https://codesandbox.io/s/yesno-dialog-example-custom-9lzcd)
