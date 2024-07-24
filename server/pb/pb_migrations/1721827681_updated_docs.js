/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlpfjtpqkwdjkuj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vcz6cxeg",
    "name": "icon",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlpfjtpqkwdjkuj")

  // remove
  collection.schema.removeField("vcz6cxeg")

  return dao.saveCollection(collection)
})
