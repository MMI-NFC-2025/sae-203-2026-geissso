/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3270079289",
    "hidden": false,
    "id": "relation2617718095",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "artiste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3556671029")

  // remove field
  collection.fields.removeById("relation2617718095")

  return app.save(collection)
})
