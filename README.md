Proyecto de Pruebas Automatizadas - DemoQA
Este repositorio contiene pruebas automatizadas desarrolladas con Cypress para validar el funcionamiento de la aplicación web DemoQA.

Descripción del Proyecto
Proyecto desarrollado como parte del Taller Final del curso de Pruebas de Software. Consiste en un conjunto de pruebas automatizadas que validan diferentes secciones y funcionalidades de la aplicación DemoQA, incluyendo:

Formularios y elementos
Alertas, frames y ventanas
Interacciones de arrastrar y soltar
Redimensionamiento de elementos
Estructura del Proyecto
├── cypress/
│   ├── e2e/
│   │   ├── PruebaElements.js
│   │   ├── PruebaForms.js
│   │   ├── PruebaAlerts.js
│   │   └── PruebaInteractions.js
│   ├── support/
│   └── fixtures/
├── package.json
└── README.md
Requisitos
Para ejecutar estas pruebas necesitas:

Node.js (versión 12 o superior)
npm (normalmente viene con Node.js)
Un navegador web compatible (Chrome, Firefox, Edge)
Instalación
Clona este repositorio:
git clone https://github.com/juan7leon4/Cypress.git
Instala las dependencias:
npm install
Ejecución de las Pruebas
Modo Interactivo
Para abrir Cypress en modo interactivo:

npx cypress open
Esto abrirá la interfaz de Cypress donde podrás seleccionar el navegador y las pruebas que deseas ejecutar.

Modo Headless
Para ejecutar todas las pruebas en modo headless (sin interfaz gráfica):

npx cypress run
Para ejecutar un archivo específico:

npx cypress run --spec "cypress/e2e/PruebaElements.js"
Casos de Prueba
PruebaElements: Verifica la funcionalidad de la sección "Elements" y el formulario de texto.
PruebaForms: Prueba el formulario de práctica en la sección "Forms".
PruebaAlerts: Valida el funcionamiento de alertas, ventanas y frames.
PruebaInteractions: Comprueba las interacciones de usuario como arrastrar, soltar y redimensionar elementos.
Organización del Equipo
Líder de equipo: Juan David Leon Angel
Diseñador de casos de prueba: Juan David Leon Angel
Automatizador: Juan David Leon Angel
Documentador y validador: Juan David Leon Angel
Documentación Adicional
Para más información sobre el proyecto, incluyendo hallazgos detallados y recomendaciones, consulta el Documento del Proyecto.


