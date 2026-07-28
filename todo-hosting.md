# Pendiente de hosting / infraestructura

Estos hallazgos de la auditoría SEO no se pueden resolver desde el código del
repositorio (Astro genera un sitio estático; esto se configura en el servidor
que lo sirve, actualmente nginx). Quien administre el hosting debe aplicarlos.

## Crítico

### 1. Cadena de redirección HTTPS → HTTP → HTTPS
Todas las páginas internas (`/carta`, `/reservas`, etc.) sufren un downgrade a
HTTP antes de volver a HTTPS. Revisar el orden de las reglas de redirección en
nginx: debe ir `http://` → `https://` directamente, sin pasos intermedios.

### 2. Sin cabeceras de seguridad
Faltan por completo en las respuestas HTTP:
- `Strict-Transport-Security` (HSTS)
- `Content-Security-Policy` (CSP)
- `X-Frame-Options`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`

Ojo con CSP: el sitio embebe iframes de terceros (Google Maps, CoverManager)
y carga Google Fonts + Google Analytics, así que la política tiene que
permitir esos orígenes explícitamente o romperá esas integraciones.

### 3. Certificado TLS no cubre `www.restaurantelachata.es`
El handshake falla y devuelve 404/error en `www`. Hay que emitir/ampliar el
certificado para incluir el subdominio `www`, o forzar una redirección a la
versión sin `www` (o viceversa) antes de que el navegador intente el
handshake TLS en `www`.

## Alto

### 4. Email `hola@lachata1821.com` no resuelve por DNS
El dominio del email no tiene registros MX válidos (o el email no existe
realmente). Revisar con quien gestione el dominio/DNS si el correo está
operativo; si no, es un dato de contacto roto en aviso legal, privacidad,
cookies y contacto.

## Medio

### 5. CSS sin comprimir (gzip/brotli deshabilitado)
El CSS del sitio pesa ~50 KB sin comprimir. Activar `gzip` o `brotli` en
nginx para archivos estáticos (`.css`, `.js`, `.html`, `.svg`) es una
configuración pura de servidor, sin tocar el build de Astro.

## Bajo

### 6. `Content-Type` sin `charset=utf-8` explícito
Las respuestas HTTP no incluyen `charset=utf-8` en la cabecera
`Content-Type` (el `<meta charset="UTF-8">` en el HTML ya está bien, pero la
cabecera HTTP es lo que evita mojibake en bots/crawlers estrictos). Añadir
`charset` a la directiva `default_type`/`types` de nginx para servir `.html`.

---

## No es hosting, pero tampoco es código (a decidir por el negocio)

Para que no se pierdan, estos otros pendientes de la auditoría tampoco viven
en este repo, pero no son de hosting — son decisiones/gestiones externas:

- **Dos perfiles de Facebook distintos en circulación** ("Restaurante La
  Chata" vs "Asador La CHATA 1821") — riesgo de entidad duplicada en Google;
  hay que decidir cuál es el oficial y fusionar/dar de baja el otro.
- **Sin presencia en TheFork/ElTenedor** — crear perfil si interesa esa
  plataforma de reservas.
- **Cero reseñas verificadas** (`AggregateRating`) — el ~4.7/160 de
  RestaurantGuru no está verificado de primera mano; no se puede añadir
  schema de rating hasta tener una fuente propia (Google Business Profile).
- **Google Business Profile** — el verdadero interruptor para posicionar en
  el Local Pack de "restaurante en Logroño" no es la web, es la ficha de
  Google (reseñas, categoría, fotos, verificación).
