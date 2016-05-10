# Unfold json

This module is used to show `json` on website.

## Use

```
  import UnfoldJson from 'unfold-json';

  let data = {"key":"value","items":[{"key":"value"},{"key":"value"}]}
  document.getElementById("data").innerHTML = UnfoldJson(JSON.stringify(data));
```
and you can show this json on your website like this:
```
  {
      "key": "value",
      "items": [
          {
              "key": "value"
          },
          {
              "key": "value"
          }
      ]
  }
```

I use`es6`, but you can also use `require` to import module.
