# Despliegue en Vercel

1. Crea un repositorio vacío en GitHub, por ejemplo `sotec-service-web`.
2. Sube el contenido de este proyecto al repositorio.
3. En [Vercel](https://vercel.com/new), selecciona **Import Git Repository** y elige el repositorio.
4. Vercel detectará Next.js automáticamente. No cambies el comando de compilación.
5. En **Environment Variables**, crea `NEXT_PUBLIC_WHATSAPP_URL` con tu enlace de WhatsApp.
6. Pulsa **Deploy**.

Después de la primera publicación, cada `git push` a la rama principal creará una actualización automática.
