# Dashboard Analytics - Next.js Project

Un dashboard moderno y responsivo construido con Next.js 15, React 19, y Tailwind CSS, que incluye autenticación, gráficos interactivos y una interfaz de usuario intuitiva.

## 🚀 Características

- **Dashboard Analítico**: Visualización de métricas con gráficos interactivos
- **Autenticación**: Sistema de login con validación de formularios
- **Diseño Responsivo**: Adaptable a dispositivos móviles y desktop
- **Sidebar Colapsable**: Navegación lateral con estados activos
- **Gráficos Dinámicos**: Implementación de Recharts con importaciones dinámicas
- **Iconografía Personalizada**: Componentes SVG convertidos a React
- **UI Moderna**: Diseño limpio con Tailwind CSS

## 📋 Tecnologías Utilizadas

### Frontend

- **Next.js 15.4.4** - Framework de React
- **React 19.1.0** - Biblioteca de JavaScript
- **Tailwind CSS 3.4.1** - Framework de CSS utility-first
- **React Hook Form 7.61.1** - Manejo de formularios
- **Recharts 3.1.0** - Biblioteca de gráficos para React

## 🛠️ Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/JhojanLT/kiwi-test.git
cd kiwi_test
```

2. **Instala las dependencias**

```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Ejecuta el servidor de desarrollo**

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. **Abre tu navegador**
   Visita [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🔐 Credenciales de Prueba

Para acceder al sistema de login, puedes usar cualquier email válido y contraseña de al menos 8 caracteres:

- **Email**: `test@example.com` (o cualquier email válido)
- **Contraseña**: `password123` (mínimo 8 caracteres)

También puedes usar los botones de "Sign in with Google" o "Sign in with Facebook" que te redirigirán directamente al dashboard.


## 🎨 Componentes Principales

#### Dashboard Analytics (`/analytics`)

- **StatsRow**: Fila de tarjetas con métricas clave
- **MonthRevenueChart**: Gráfico de líneas para ingresos mensuales
- **WeeklyChart**: Gráfico de barras apiladas para ingresos semanales

#### Sistema de Autenticación (`/login`)

- Validación con React Hook Form
- Integración con redes sociales (Google, Facebook)
- Diseño responsive con imagen lateral

#### Sidebar Responsive

- Navegación colapsable en dispositivos móviles
- Estados activos para rutas
- Iconos personalizados para cada sección

## 🔧 Decisiones Técnicas

### Tailwind CSS v3 vs v4

Se optó por **Tailwind CSS v3.4.1** en lugar de la v4 debido a:

- Mayor estabilidad en el ecosistema actual
- Mejor compatibilidad con las herramientas existentes
- Documentación más madura y amplia comunidad

### Importaciones Dinámicas de Recharts

Implementación de importaciones dinámicas para los componentes de Recharts con ayuda de la IA para mitigar errores de compatibilidad con Next.js:

```javascript
const LineChart = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.LineChart })),
  { ssr: false }
);
```

**Beneficios:**

- Evita errores de hidratación en SSR
- Mejora el rendimiento de carga inicial
- Compatibilidad completa con Next.js 15

### Iconos SVG Personalizados

Los iconos SVG fueron convertidos a componentes React utilizando IA para:

- Mantener consistencia en el diseño
- Facilitar el mantenimiento
- Permitir personalización dinámica (colores, estados activos)

## 📱 Responsive Design

El proyecto está completamente optimizado para:

- **Mobile First**: Diseño prioritario para móviles
- **Breakpoints**: sm, md, lg, xl usando Tailwind CSS
- **Sidebar Adaptativo**: Colapsa automáticamente en pantallas pequeñas
- **Grid Responsivo**: Ajuste automático de gráficos y estadísticas

## 🚀 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construcción para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Verificación de código con ESLint

## 👨‍💻 Autor

Desarrollado con ❤️ usando tecnologías modernas de React y la asistencia de IA para optimización de componentes.

---

## 🛠️ Notas de Desarrollo

### Problemas Resueltos

1. **Error de Hidratación con Recharts**: Solucionado usando importaciones dinámicas con `{ ssr: false }`
2. **Iconos SVG**: Convertidos a componentes React con IA para mejor mantenibilidad
3. **Responsive Sidebar**: Implementado sistema de colapso inteligente para móviles
