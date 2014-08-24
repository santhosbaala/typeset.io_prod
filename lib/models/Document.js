// Generated by CoffeeScript 1.7.1
var Document;

Document = null;

module.exports = function(mongoose) {
  var DocumentSchema;
  if (!Document) {
    DocumentSchema = new mongoose.Schema({
      name: {
        type: String,
        "default": 'New Document'
      },
      createdAt: {
        type: Date,
        "default": Date.now
      }
    });
    Document = mongoose.model('Document', DocumentSchema);
  }
  return Document;
};

//# sourceMappingURL=Document.map