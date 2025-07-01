# AgroData Collector

Plataforma de recolección de datos en campo orientada a agricultura, medio ambiente, biodiversidad y desarrollo rural. Incluye:
- **Backend** Node.js/Express + PostgreSQL
- **Frontend Web** React + Vite
- **App Móvil** React Native (Expo)

## Requisitos
- Node.js >= 18
- PostgreSQL 15
- Expo CLI (`npm install -g expo-cli`)

## Instalación Local

```bash
git clone <este-repo>
cd agrodata-collector

# Backend
cd backend
cp .env.example .env
npm install
npm run dev

# Web
cd ../frontend-web
npm install
npm run dev  # http://localhost:5173

# Móvil
cd ../mobile-app
npm install
expo start   # escanea el QR en tu dispositivo
```

## Despliegue en Render.com

1. Crea un servicio web y conecta tu repo.
2. Configura las variables de entorno como en `.env.example`.
3. Comando build: `npm install`  
   Comando start: `npm start`

## Despliegue en Heroku

1. `heroku create agrodata-backend`
2. Habilita PostgreSQL: `heroku addons:create heroku-postgresql:hobby-dev`
3. Configura variables de entorno.
4. `git push heroku main`

## Sincronización Offline
La app móvil almacena envíos localmente usando **AsyncStorage** y los reintenta cuando detecta conectividad.

## Internacionalización
Se emplea `i18n-js` (no incluido en este esqueletón) para añadir otros idiomas.

## Próximos Pasos
- Añadir lógicas condicionales complejas y validación de formularios.
- Panel de visualización web con gráficas (Chart.js o Recharts).
- Sistema de notificaciones push cuando se actualizan formularios.