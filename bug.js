```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Missing error handling for req.query.name
  res.status(200).json({ name: req.query.name });
}
```