/* Coach Neiram — Feu Vert */
/* ============================================================
   RÉGLAGES de la page feu-vert.html — à modifier ici uniquement
   PLACES_RESTANTES : nombre de places encore disponibles (0 = complet)
   QUESTIONNAIRE_URL : lien du formulaire hébergé (TinyPages, Tally…).
     Valeur provisoire "#questionnaire" = formulaire de secours en bas de page.
   FORM_ENDPOINT : réception du questionnaire (Worker Cloudflare de Coach Neiram,
     route /reservation-feu-vert → script Google → onglet « Feu Vert – Réservations »).
     En cas d'échec, la page propose un email de secours qui ne contient QUE le prénom,
     le moyen de contact et la référence de la demande (jamais les réponses, ni la santé).
   Si l'adresse FORM_ENDPOINT change de domaine, mettre aussi à jour « connect-src »
   dans la balise Content-Security-Policy de feu-vert.html.
   Ce fichier est séparé de la page pour que la politique de sécurité (CSP) de
   feu-vert.html n'ait pas à être recalculée à chaque changement du nombre de places.
   ============================================================ */
const PLACES_RESTANTES = 12;
const PLACES_TOTAL = 12;
const QUESTIONNAIRE_URL = "#questionnaire";
const FORM_ENDPOINT = "https://coach-neiram-proxy.pelissier-marien.workers.dev/reservation-feu-vert";
