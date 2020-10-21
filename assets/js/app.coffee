import "./fp.min.js"

```
const fp = await FingerprintJS.load({ /* ... */ })
const result = await fp.get()
const visitorId = result.visitorId
console.log(visitorId)
```