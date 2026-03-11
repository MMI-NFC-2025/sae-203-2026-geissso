import {
  getScene,
  getSceneById,
  getArtistesBySceneId,
  getScenesAvecArtistes,
  addNewScene,
  DeleteSceneById,
  UpdateSceneById,
  getArtiste,
  getGenresUniques,
  getScenesUniques,
  getScenesUniquesFromDB,
  getArtistesByGenre,
  getArtistesByScene,
  getArtistesSortedByHoraire,
  getArtistesAvecFiltres,
  getArtisteById,
  addNewArtiste,
  DeleteArtisteById,
  UpdateArtisteById
} from './backend.mjs';

// async function testGetScene() {
//   try {
//     const scenes = await getScene();
//     console.log('Scènes récupérées:', scenes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des scènes:', error);
//   }
// }

// async function testGetSceneById(id) {
//   try {
//     const scene = await getSceneById(id);
//     console.log('Scène récupérée:', scene);
//   } catch (error) {
//     console.log('Erreur lors de la récupération de la scène:', error);
//   }
// }

// async function testGetArtistesBySceneId(sceneId) {
//   try {
//     const artistes = await getArtistesBySceneId(sceneId);
//     console.log('Artistes par scène:', artistes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des artistes par scène:', error);
//   }
// }

// async function testGetScenesAvecArtistes() {
//   try {
//     const scenes = await getScenesAvecArtistes();
//     console.log('Scènes avec artistes:', scenes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des scènes avec artistes:', error);
//   }
// }

// async function testAddNewScene() {
//   try {
//     const newScene = {
//       nom: "Scène Test",
//       description: "Description test"
//     };
//     await addNewScene(newScene);
//     console.log('Scène ajoutée avec succès');
//   } catch (error) {
//     console.log('Erreur lors de l\'ajout de la scène:', error);
//   }
// }

// async function testDeleteSceneById(id) {
//   try {
//     await DeleteSceneById(id);
//     console.log('Scène supprimée avec succès');
//   } catch (error) {
//     console.log('Erreur lors de la suppression de la scène:', error);
//   }
// }

// async function testUpdateSceneById(id) {
//   try {
//     const data = {
//       nom: "Scène Modifiée"
//     };
//     await UpdateSceneById(id, data);
//     console.log('Scène mise à jour avec succès');
//   } catch (error) {
//     console.log('Erreur lors de la mise à jour de la scène:', error);
//   }
// }

// async function testGetArtiste() {
//   try {
//     const artistes = await getArtiste();
//     console.log('Artistes récupérés:', artistes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des artistes:', error);
//   }
// }

// async function testGetGenresUniques() {
//   try {
//     const artistes = await getArtiste();
//     const genres = getGenresUniques(artistes);
//     console.log('Genres uniques:', genres);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des genres uniques:', error);
//   }
// }

// async function testGetScenesUniques() {
//   try {
//     const artistes = await getArtiste();
//     const scenes = getScenesUniques(artistes);
//     console.log('Scènes uniques:', scenes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des scènes uniques:', error);
//   }
// }

// async function testGetScenesUniquesFromDB() {
//   try {
//     const scenes = await getScenesUniquesFromDB();
//     console.log('Scènes uniques depuis DB:', scenes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des scènes uniques depuis DB:', error);
//   }
// }

// async function testGetArtistesByGenre(genre) {
//   try {
//     const artistes = await getArtistesByGenre(genre);
//     console.log('Artistes par genre:', artistes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des artistes par genre:', error);
//   }
// }

// async function testGetArtistesByScene(sceneName) {
//   try {
//     const artistes = await getArtistesByScene(sceneName);
//     console.log('Artistes par scène:', artistes);
//   } catch (error) {
//     console.log('Erreur lors de la récupération des artistes par scène:', error);
//   }
// }

// async function testGetArtistesSortedByHoraire(ordre) {
//   try {
//     const artistes = await getArtistesSortedByHoraire(ordre);
//     console.log('Artistes triés par horaire:', artistes);
//   } catch (error) {
//     console.log('Erreur lors du tri des artistes par horaire:', error);
//   }
// }

// async function testGetArtistesAvecFiltres(options) {
//   try {
//     const artistes = await getArtistesAvecFiltres(options);
//     console.log('Artistes filtrés:', artistes);
//   } catch (error) {
//     console.log('Erreur lors du filtrage des artistes:', error);
//   }
// }

// async function testGetArtisteById(id) {
//   try {
//     const artiste = await getArtisteById(id);
//     console.log('Artiste récupéré:', artiste);
//   } catch (error) {
//     console.log('Erreur lors de la récupération de l\'artiste:', error);
//   }
// }

// async function testAddNewArtiste() {
//   try {
//     const newArtiste = {
//       nom: "Artiste Test",
//       genre: "Jazz",
//       horaires: "20:00"
//     };
//     await addNewArtiste(newArtiste);
//     console.log('Artiste ajouté avec succès');
//   } catch (error) {
//     console.log('Erreur lors de l\'ajout de l\'artiste:', error);
//   }
// }

// async function testDeleteArtisteById(id) {
//   try {
//     await DeleteArtisteById(id);
//     console.log('Artiste supprimé avec succès');
//   } catch (error) {
//     console.log('Erreur lors de la suppression de l\'artiste:', error);
//   }
// }

// async function testUpdateArtisteById(id) {
//   try {
//     const data = {
//       nom: "Artiste Modifié"
//     };
//     await UpdateArtisteById(id, data);
//     console.log('Artiste mis à jour avec succès');
//   } catch (error) {
//     console.log('Erreur lors de la mise à jour de l\'artiste:', error);
//   }
// }

// testGetScene();
// testGetSceneById("cgw2804srhuw1kb");
// testGetArtistesBySceneId("cgw2804srhuw1kb");
// testGetScenesAvecArtistes();
// testGetArtiste();
// testGetGenresUniques();
// testGetScenesUniques();
// testGetScenesUniquesFromDB();
// testGetArtistesByGenre("Fusion");
// testGetArtistesByScene("Scene Principale");
// testGetArtistesSortedByHoraire("asc");
// testGetArtistesAvecFiltres({ genre:"Fusion", "Spectacle Drôle"});
// testGetArtisteById("yl0iiv7pqce9yc1");