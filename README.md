**currency.js** is a ridiculously tiny JavaScript library (< 1kb) for currency symbol formatting. It has zero dependencies, and works great as a NodeJS and AMD module. 


## Documentation

### currency.symbolize(ISOCode)

```js
> currency = require('./currency.js')
> currency.symbolize("USD")
'$'

> currency.symbolize("BGN")
'лв'

> currency.symbolize("MNT")
'₮'
```


## Roadmap

* Add localized symbols (to make a difference between USD and CAD for instance)
* Maybe add an interface to playwell with accounting.js


## Changelog

**v0.0.1** - First version is out !
