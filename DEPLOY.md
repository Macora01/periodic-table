# Guía de Despliegue — tpe.facore.cl

## Paso 1 — Subir a GitHub

```bash
# Dentro de la carpeta del proyecto:
cd ~/periodic-table

git init
git add .
git commit -m "feat: tabla periódica interactiva — 118 elementos"

# Crear repo en GitHub (requiere gh CLI instalado):
gh repo create tabla-periodica --public --push --source=.

# O manualmente: crea el repo en github.com, luego:
# git remote add origin https://github.com/TU_USUARIO/tabla-periodica.git
# git push -u origin main
```

---

## Paso 2 — Desplegar en Coolify (VPS Hostinger)

### 2a. En tu VPS, asegúrate de tener Coolify instalado:
```bash
curl -fsSL https://cdn.coollabs.io/coolify/install.sh | bash
```

### 2b. En el panel de Coolify (https://IP_DE_TU_VPS:8000):

1. **New Resource → Application → GitHub → tu repo `tabla-periodica`**
2. **Build Pack:** `Dockerfile`  
3. **Port:** `3000`
4. **Variables de entorno:** (ninguna requerida para esta app)
5. **Domain:** `tpe.facore.cl`
6. **SSL:** activar Let's Encrypt (checkbox en la sección de dominios)
7. **Auto-deploy:** activar "Deploy on push" (webhook automático)
8. Clic en **Deploy** — Coolify construye la imagen y la lanza.

---

## Paso 3 — Configurar DNS en Hostinger

En el panel de Hostinger → **Dominios → facore.cl → Gestionar DNS**:

| Tipo | Nombre | Valor              | TTL  |
|------|--------|--------------------|------|
| A    | tpe    | IP_DE_TU_VPS       | 3600 |

Espera 5-30 minutos para propagación. Coolify gestiona automáticamente el certificado SSL con Let's Encrypt y la redirección HTTP→HTTPS.

---

## Mantenimiento futuro

- **Actualizar contenido:** edita `data/elements.ts` → `git push` → Coolify redeploya solo.
- **Backups:** el proyecto es 100% estático (sin base de datos), el repo en GitHub ES el backup.
- **Escalar:** si necesitas más tráfico, cambia el VPS a un plan mayor o añade un CDN (Cloudflare gratis funciona perfecto delante de Coolify).
