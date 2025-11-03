# LedgerLy — Invoice Manager App (Frontend)

Aplicación web desarrollada en **Angular** para la gestión integral de facturación multiempresa.  
Forma parte del ecosistema **LedgerLy**, junto con su backend [LedgerLy API (Spring Boot)](https://github.com/pbbaque/InvoiceSpringBackend).

---

## 🧭 Descripción general

LedgerLy es una aplicación moderna e intuitiva que permite a empresas y profesionales gestionar sus **facturas, clientes, productos, empleados y usuarios** desde un entorno centralizado y seguro.

El frontend está construido en **Angular 20**, con autenticación basada en **JWT**, comunicación directa con el backend vía **REST API**, y una interfaz modular y escalable pensada para entornos multiempresa.

---

## 👤 Autor

**Pablo Barreda**  
📧 [pbbaque@gmail.com](mailto:pbbaque@gmail.com)

Licencia: **MIT**

Repositorio:  
🔗 [git@github.com:pbbaque/invoice-manager-app.git](git@github.com:pbbaque/invoice-manager-app.git)

---

## ⚙️ Tecnologías y versiones principales

| Tecnología / Librería | Versión |
|------------------------|---------|
| Angular | 20.3.7 |
| Node.js | 22.21.0 |
| npm | 10.9.0 |
| TypeScript | 5.9.3 |
| RxJS | 7.8.2 |
| Zone.js | 0.15.1 |
| Chart.js | 4.5.1 |
| ng2-charts | 8.0.0 |
| Swiper | 12.0.3 |
| jwt-decode | 4.0.0 |

---

## 🧱 Arquitectura del proyecto

La estructura sigue una arquitectura modular basada en **módulos por dominio** (feature modules), acompañada de **componentes reutilizables** y **servicios centralizados** para comunicación con el backend.

```
C:.
|   index.html
|   main.ts
|
+---app
|   |   app-routing.module.ts
|   |   app.module.ts
|   |
|   +---components
|   |   +---alert/
|   |   +---breadcrumb/
|   |   +---confirm/
|   |   +---empty-state/
|   |   +---entity-detail/
|   |   +---footer/
|   |   +---header/
|   |   +---loading-spinner/
|   |   +---modal/
|   |   +---pagination/
|   |   +---sidebar/
|   |   \---table/
|   |
|   +---guards/
|   +---interceptors/
|   +---layouts/
|   +---models/
|   +---services/
|   +---styles/
|   \---views/
|       +---auth/
|       +---clients/
|       +---companies/
|       +---dashboard/
|       +---employees/
|       +---invoices/
|       +---products/
|       +---profiles/
|       \---users/
|
+---assets/
|   \---icons/
|
\---environments/
        environments.ts
        environments.prod.ts
```

---

## 🔐 Autenticación y seguridad

LedgerLy utiliza un sistema de autenticación **JWT (JSON Web Token)**:

- El **AuthService** gestiona el login, registro y refresh de tokens.  
- El token se almacena de forma segura en **localStorage**.  
- Los **guards (`auth.guard.ts`, `role.guard.ts`)** restringen el acceso según permisos y roles.  
- El **AuthInterceptor** añade automáticamente el token en cada petición HTTP.

### Roles disponibles

| Rol | Descripción |
|------|-------------|
| `ROLE_SUPER_ADMIN` | Acceso total a todas las empresas y usuarios. |
| `ROLE_COMPANY_SUPER_ADMIN` | Administración global dentro de su propia empresa (usuarios, empleados, facturas, etc.). |
| `ROLE_COMPANY_ADMIN` | Gestión operativa de facturas, productos y clientes dentro de su empresa. |
| `ROLE_ADMIN` | Usuario administrativo con acceso a funciones específicas. |
| `ROLE_USER` | Usuario estándar con acceso limitado a sus recursos y datos propios. |

---

## 🌍 Integración con el Backend

El frontend se comunica con el backend de LedgerLy mediante la variable de entorno:

```typescript
// environments.ts
export const environment = {
  apiUrl: 'http://localhost:8080/api'
};
```

> 📡 Backend principal: [LedgerLy API (Spring Boot)](https://github.com/pbbaque/InvoiceSpringBackend)

---

## 🧩 Principales módulos y vistas

| Módulo | Descripción |
|--------|--------------|
| **Auth** | Autenticación, login, registro y recuperación de contraseña. |
| **Dashboard** | Panel principal con estadísticas y métricas. |
| **Clients / Companies / Employees / Products / Invoices** | CRUD completo de cada entidad con vistas de lista, detalle y formulario. |
| **Profiles** | Gestión de perfiles de usuario y empresa. |
| **Users** | Administración de usuarios (solo accesible por roles con permisos). |

---

## 🎨 Estilos y diseño

Los estilos se organizan mediante **SCSS modularizado** y el uso de `@use` en todos los archivos parciales.  
La estructura está basada en una arquitectura **atomic/modular CSS**:

```
styles/
│   main.scss
│   _variables.scss
│   _mixins.scss
│   _global.scss
│   _typography.scss
│
└── ui/
    ├── _buttons.scss
    ├── form/
    ├── list/
    └── table/
```

Esto permite una gestión clara y mantenible de la UI, con un diseño responsive y adaptable.

---

## 🧰 Comandos principales

### 🔧 Desarrollo local
```bash
npm install
ng serve
```
Ejecuta la aplicación en modo desarrollo.  
📍 Disponible en: [http://localhost:4200](http://localhost:4200)

### 🏗️ Build de producción
```bash
ng build
```
Genera la carpeta `dist/` con la versión optimizada para despliegue.

---

## 🚀 Despliegue

Actualmente, el proyecto no utiliza Docker ni despliegue automatizado.  
Está pensado para entorno local o despliegues manuales (por ejemplo, en Netlify o Vercel).

---

## 🧩 Dependencias destacadas

- **ng2-charts** y **chart.js** → visualización de datos contables y de facturación.  
- **jwt-decode** → lectura de payloads JWT.  
- **Swiper** → carruseles y elementos interactivos en el dashboard.  
- **SCSS modularizado** → consistencia visual en toda la aplicación.

---

## 🧱 Integración con el backend

El frontend se comunica con el backend en tiempo real para:
- Autenticación y validación de sesión.
- CRUD completo de entidades (clientes, empresas, empleados, productos, facturas, usuarios).
- Estadísticas y métricas del dashboard.

Ejemplo de respuesta del backend:

```json
{
  "message": "Client retrieved successfully",
  "data": {
    "id": 1,
    "name": "ACME Corp",
    "email": "info@acme.com"
  },
  "statusCode": 200,
  "success": true
}
```

---

## 🧾 Licencia

Este proyecto está bajo la licencia **MIT**.  
Consulta el archivo [`LICENSE`](LICENSE) para más información.

---

## 🧠 Próximas mejoras

- Implementación de pruebas unitarias (Jasmine/Karma).  
- Internacionalización (i18n).  
- Integración de temas dinámicos (modo claro/oscuro).  
- Paginación avanzada en tablas.  
- Dashboard con más métricas interactivas.

---

## 📷 Manual de usuario

Las capturas e instrucciones detalladas estarán disponibles próximamente en el **Manual de Usuario de LedgerLy**.

---

© 2025 **LedgerLy** — Proyecto personal desarrollado por *Pablo Barreda*.
