import PocketBase from 'pocketbase';

const db = new PocketBase("https://pbflytapfest.geiss-solene.fr");

export async function getScene() {
  const scenes = await db.collection('Scene').getFullList({
    expand: 'artiste'
  });
  return scenes;
}

export async function getSceneById(id) {
  const scene = await db.collection('Scene').getOne(id, {
    expand: 'artiste'
  });
  return scene;
}

export async function getArtistesBySceneId(sceneId) {
  const artistes = await db.collection('Artiste').getFullList({
    expand: 'scene',
    filter: `scene = "${sceneId}"`
  });
  return artistes;
}

export async function getScenesAvecArtistes() {
  const scenes = await db.collection('Scene').getFullList({
    expand: 'artiste',
    sort: 'nom'
  });
  return scenes;
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
  const artistes = await db.collection('Artiste').getFullList({
    expand: 'scene'
  });
  return artistes;
}

export function getGenresUniques(artistes) {
  const genres = artistes
    .map(a => a.genre)
    .filter(genre => genre);
  return [...new Set(genres)];
}

export function getScenesUniques(artistes) {
  const scenes = artistes
    .map(a => a.expand?.scene?.nom)
    .filter(scene => scene);
  return [...new Set(scenes)];
}

export async function getScenesUniquesFromDB() {
  const scenes = await db.collection('Scene').getFullList({
    sort: 'nom'
  });
  return scenes.map(s => s.nom);
}

export async function getArtistesByGenre(genre) {
  const artistes = await db.collection('Artiste').getFullList({
    expand: 'scene',
    filter: `genre = "${genre}"`
  });
  return artistes;
}

export async function getArtistesByScene(sceneName) {
  const artistes = await db.collection('Artiste').getFullList({
    expand: 'scene',
    filter: `scene.nom = "${sceneName}"`
  });
  return artistes;
}

export async function getArtistesSortedByHoraire(ordre = 'asc') {
  const sortValue = ordre === 'desc' ? '-horaires' : 'horaires';
  const artistes = await db.collection('Artiste').getFullList({
    expand: 'scene',
    sort: sortValue
  });
  return artistes;
}

export async function getArtistesAvecFiltres(options = {}) {
  const queryOptions = { expand: 'scene' };

  const filters = [];
  
  if (options.genre) {
    filters.push(`genre = "${options.genre}"`);
  }
  
  if (options.scene) {
    filters.push(`scene.nom = "${options.scene}"`);
  }
  
  if (filters.length > 0) {
    queryOptions.filter = filters.join(' && ');
  }
  
  if (options.tri) {
    queryOptions.sort = options.tri === 'desc' ? '-horaires' : 'horaires';
  }
  
  const artistes = await db.collection('Artiste').getFullList(queryOptions);
  return artistes;
}

export async function getArtisteById(id) {
  const artiste = await db.collection('Artiste').getOne(id, {
    expand: 'scene'
  });
  return artiste;
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

export async function registerUser(userData) {
  try {
    const data = {
      username: userData.email.split('@')[0] + '_' + Date.now(),
      email: userData.email,
      emailVisibility: true,
      password: userData.password,
      passwordConfirm: userData.passwordConfirm,
      name: `${userData.prenom} ${userData.nom}`,
      prenom: userData.prenom,
      nom: userData.nom
    };

    const record = await db.collection('users').create(data);
    
    await db.collection('users').requestVerification(userData.email);
    
    return { success: true, user: record };
  } catch (error) {
    console.error('Erreur inscription:', error);
    return { success: false, error: error.message };
  }
}

export async function loginUser(email, password) {
  try {
    const authData = await db.collection('users').authWithPassword(email, password);
    
    return { 
      success: true, 
      user: authData.record,
      token: authData.token 
    };
  } catch (error) {
    console.error('Erreur connexion:', error);
    return { success: false, error: 'Email ou mot de passe incorrect' };
  }
}

export function logoutUser() {
  db.authStore.clear();
}

export function isUserLoggedIn() {
  return db.authStore.isValid;
}

export function getCurrentUser() {
  return db.authStore.model;
}

export async function checkEmailExists(email) {
  try {
    const records = await db.collection('users').getFullList({
      filter: `email = "${email}"`
    });
    return records.length > 0;
  } catch (error) {
    console.error('Erreur vérification email:', error);
    return false;
  }
}