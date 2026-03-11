import { getScene, getSceneById, addNewScene, DeleteSceneById, UpdateSceneById } from "./backend.mjs";
import { getArtiste, getArtisteById, addNewArtiste, DeleteArtisteById, UpdateArtisteById } from "./backend.mjs";
import { getImageUrl } from "./backend.mjs";
import { superUserAuth, superUserLogout } from "./backend.mjs";

// ========== Tests Scene ==========

/*
try {
    const scenes = await getScene();
    console.log("Toutes les scènes :", scenes);
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const scene = await getSceneById("1gczt2wyoq7rh1v");
    console.log("Scène récupérée :", scene);
} catch (e) {
    console.error(e);
}*/


/*
try {
    const newScene = {
        "nom": "Scène Principale",
        "capacite": 5000,
        "description": "Grande scène extérieure"
    };
    await addNewScene(newScene);
    console.log("Nouvelle scène ajoutée");
} catch (e) {
    console.error(e);
}
*/

/*
try {
    await DeleteSceneById("1gczt2wyoq7rh1v");
    console.log("Scène supprimée");
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const data = {
        nom: "Scène Modifiée",
        capacite: 3000
    };
    await UpdateSceneById("ID_DE_LA_SCENE", data);
    console.log("Scène mise à jour");
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artistes = await getArtiste();
    console.log("Tous les artistes :", artistes);
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const artiste = await getArtisteById("3vu5ixy4060bnb9");
    console.log("Artiste récupéré :", artiste);
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const newArtiste = {
        "nom": "Dupont",
        "prenom": "Pierre",
        "style": "Rock",
        "bio": "Artiste de rock alternatif"
    };
    await addNewArtiste(newArtiste);
    console.log("Nouvel artiste ajouté");
} catch (e) {
    console.error(e);
}
*/

/*
try {
    await DeleteArtisteById("");
    console.log("Artiste supprimé");
} catch (e) {
    console.error(e);
}
*/

/*
try {
    const data = {
        nom: "Martin",
        style: "Jazz"
    };
    await UpdateArtisteById("ID_DE_L_ARTISTE", data);
    console.log("Artiste mis à jour");
} catch (e) {
    console.error(e);
}
*/

// ========== Tests Images ==========

/*
try {
    const imageUrl = await getImageUrl(record, "nom_du_fichier.jpg");
    console.log("URL de l'image :", imageUrl);
} catch (e) {
    console.error(e);
}*/

// ========== Tests Authentification ==========

/*
try {
    const auth = await superUserAuth("test@test.fr", "123456");
    console.log("Authentification réussie :", auth);
    superUserLogout();
    console.log("Déconnexion réussie");
} catch (e) {
    console.error("Erreur auth :", e);
}
*/
