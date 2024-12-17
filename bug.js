```javascript
// Incorrect usage of $inc operator in MongoDB
db.collection.updateOne({ _id: 1 }, { $inc: { field: '1' } });
```