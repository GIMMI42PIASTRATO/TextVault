/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qlpfjtpqkwdjkuj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "htfk6abu",
    "name": "folder",
    "type": "text",
    "required": false,
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
  collection.schema.removeField("htfk6abu")

  return dao.saveCollection(collection)
})
