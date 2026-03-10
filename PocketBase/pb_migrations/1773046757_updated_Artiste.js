/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "date968298895",
    "max": "",
    "min": "",
    "name": "horaires",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3270079289")

  // remove field
  collection.fields.removeById("date968298895")

  return app.save(collection)
})
