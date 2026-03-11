import PocketBase from 'pocketbase';

const db = new PocketBase("http://127.0.0.1:8090");



export async function getScene() {
  try {
    const scenes = await db.collection('Scene').getFullList({
      expand: 'artiste'
    });
    console.log('Scènes récupérées:', scenes);
    return scenes;
  } catch (error) {
    console.log('Erreur lors de la récupération des scènes', error);
    return null;
  }
}

export async function getSceneById(id) {
  try {
    const scene = await db.collection('Scene').getOne(id, {
      expand: 'artiste'
    });
    console.log('Scène récupérée:', scene);
    return scene;
  } catch (error) {
    console.log('Erreur lors de la récupération de la scène', error);
    return null;
  }
}

export async function getArtistesBySceneId(sceneId) {
  try {
    const artistes = await db.collection('Artiste').getFullList({
      expand: 'scene',
      filter: `scene = "${sceneId}"`
    });
    return artistes;
  } catch (error) {
    console.log('Erreur lors de la récupération des artistes par ID de scène', error);
    return null;
  }
}

export async function getScenesAvecArtistes() {
  try {
    const scenes = await db.collection('Scene').getFullList({
      expand: 'artiste',
      sort: 'nom'
    });
    return scenes;
  } catch (error) {
    console.log('Erreur lors de la récupération des scènes avec artistes', error);
    return null;
  }
}

export async function addNewScene(newScene) {
  await db.collection('Scene').create(newScene);
}

export async function DeleteSceneById(id) {
  await db.collection('Scene').delete(id);
}

export async function UpdateSceneById(id, data) {
  await db.collection('Scene').update(id, data);
}


export async function getArtiste() {
  try {
    const artistes = await db.collection('Artiste').getFullList({
      expand: 'scene'
    });
    console.log('Artistes récupérés:', artistes);
    return artistes;
  } catch (error) {
    console.log('Erreur lors de la récupération des artistes', error);
    return null;
  }
}

// Fonction pour obtenir les genres uniques
export function getGenresUniques(artistes) {
  const genres = artistes
    .map(a => a.genre)
    .filter(genre => genre);
  return [...new Set(genres)];
}

// Fonction pour obtenir les scènes uniques
export function getScenesUniques(artistes) {
  const scenes = artistes
    .map(a => a.expand?.scene?.nom)
    .filter(scene => scene);
  return [...new Set(scenes)];
}

export async function getScenesUniquesFromDB() {
  try {
    const scenes = await db.collection('Scene').getFullList({
      sort: 'nom'
    });
    return scenes.map(s => s.nom);
  } catch (error) {
    console.log('Erreur lors de la récupération des scènes uniques', error);
    return [];
  }
}

// Fonction pour obtenir les artistes par genre
export async function getArtistesByGenre(genre) {
  try {
    const artistes = await db.collection('Artiste').getFullList({
      expand: 'scene',
      filter: `genre = "${genre}"`
    });
    return artistes;
  } catch (error) {
    console.log('Erreur lors de la récupération des artistes par genre', error);
    return null;
  }
}

// Fonction pour obtenir les artistes par scène
export async function getArtistesByScene(sceneName) {
  try {
    const artistes = await db.collection('Artiste').getFullList({
      expand: 'scene',
      filter: `scene.nom = "${sceneName}"`
    });
    return artistes;
  } catch (error) {
    console.log('Erreur lors de la récupération des artistes par scène', error);
    return null;
  }
}

// Fonction pour obtenir les artistes triés par horaire
export async function getArtistesSortedByHoraire(ordre = 'asc') {
  try {
    const sortValue = ordre === 'desc' ? '-horaires' : 'horaires';
    const artistes = await db.collection('Artiste').getFullList({
      expand: 'scene',
      sort: sortValue
    });
    return artistes;
  } catch (error) {
    console.log('Erreur lors du tri des artistes', error);
    return null;
  }
}

// Fonction principale pour obtenir les artistes avec filtres et tri
export async function getArtistesAvecFiltres(options = {}) {
  try {
    const queryOptions = { expand: 'scene' };
    
    // Construire les filtres
    const filters = [];
    
    if (options.genre) {
      filters.push(`genre = "${options.genre}"`);
    }
    
    if (options.scene) {
      filters.push(`scene.nom = "${options.scene}"`);
    }
    
    // Ajouter les filtres à la requête
    if (filters.length > 0) {
      queryOptions.filter = filters.join(' && ');
    }
    
    // Ajouter le tri
    if (options.tri) {
      queryOptions.sort = options.tri === 'desc' ? '-horaires' : 'horaires';
    }
    
    const artistes = await db.collection('Artiste').getFullList(queryOptions);
    return artistes;
  } catch (error) {
    console.log('Erreur lors du filtrage des artistes', error);
    return null;
  }
}

export async function getArtisteById(id) {
  try {
    const artiste = await db.collection('Artiste').getOne(id, {
      expand: 'scene'
    });
    console.log('Artiste récupéré:', artiste);
    return artiste;
  } catch (error) {
    console.log('Erreur lors de la récupération de l\'artiste', error);
    return null;
  }
}

export async function addNewArtiste(newArtiste) {
  await db.collection('Artiste').create(newArtiste);
}

export async function DeleteArtisteById(id) {
  await db.collection('Artiste').delete(id);
}

export async function UpdateArtisteById(id, data) {
  await db.collection('Artiste').update(id, data);
}


export async function getImageUrl(record, recordImage) {
  return db.files.getUrl(record, recordImage);
}



export async function superUserAuth(login, mdp) {
  const authData = await db.collection("_superusers").authWithPassword(login, mdp);
  return authData;
}

export function superUserLogout() {
  db.authStore.clear();
}

