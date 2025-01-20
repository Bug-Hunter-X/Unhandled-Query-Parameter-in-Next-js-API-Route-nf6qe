```javascript
// pages/api/hello.js
export default function handler(req, res) {
  const name = req.query.name || 'World'; // Use optional chaining and default value
  res.status(200).json({ name });
}
```