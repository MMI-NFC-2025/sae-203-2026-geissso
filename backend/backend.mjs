import PocketBase from 'pocketbase';

const db = new PocketBase("http://127.0.0.1:8090");

export async function getScene() {
  const scenes = await db.collection('Scene').getFullList();
  console.log('Scènes récupérées:', scenes);
  return scenes;
}

export async function getSceneById(id) {
  const scene = await db.collection('Scene').getOne(id);
  console.log('Scène récupérée:', scene);
  return scene;
}

export async function getArtiste() {
    const artistes = await db.collection('Artiste').getFullList();
    console.log('Artistes récupérés:', artistes);
    return artistes;
}

export async function getImageUrl(record, recordImage) {
  if (!record || !recordImage) return null;
  
  const imageUrl = `http://127.0.0.1:8090/api/files/${record.collectionId}/${record.id}/${recordImage}`;
  return imageUrl;
}

