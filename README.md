# CLD-pres

Quickstart: https://cloud.google.com/functions/docs/create-deploy-gcloud?hl=fr

# Avant de commencer:

1. créez un projet Google Cloud
2. Activer la facturation sur le compte Google Cloud
3. Activer les API Cloud Functions and Cloud Build
4. Installez et initialisez gcloud CLI
5. Préparez votre environnement de développement
    1. Plusieurs languages de programation sont disponible:
        1. NodeJs
        2. Python
        3. Go
        4. Java
        5. C#
        6. Ruby
        7. PHP

# NodeJS

1. npm install --save @google-cloud/storage
2. Ecrire la fonction

# Déployer une fonction

`gcloud functions deploy helloworld --trigger-http --runtime nodejs12 --allow-unauthenticated`

## Avec auth https://cloud.google.com/functions/docs/securing/authenticating?hl=fr#developers

## Tester localement

`npx functions-framework --target=YOUR_FUNCTION_NAME`

## Tester la fonction sur le cloud

`gcloud functions describe helloGET`

## Supprimer la fonction

`gcloud functions delete helloGET`

# Surveiller les fonctions https://cloud.google.com/functions/docs/monitoring?hl=fr

https://codelabs.developers.google.com/codelabs/local-development-with-cloud-functions#5

https://cloud.google.com/functions/docs/writing/http?hl=fr
