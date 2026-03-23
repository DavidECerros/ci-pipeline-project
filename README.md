# ci-pipeline-project

![CI Pipeline](https://github.com/DavidECerros/ci-pipeline-project/actions/workflows/ci.yml/badge.svg)

Proyecto Node.js con pipeline de integración continua usando GitHub Actions.

## Funciones implementadas

- `add(a, b)` — Suma dos números
- `isPrime(n)` — Verifica si un número es primo
- `factorial(n)` — Calcula el factorial de un número

## Instalación local
```bash
git clone https://github.com/DavidECerros/ci-pipeline-project.git
cd ci-pipeline-project
npm install
```

## Ejecución de pruebas
```bash
npm test
```

## Linting
```bash
npx eslint src/
```

## CI/CD

El pipeline se ejecuta automáticamente en cada push y pull request a main con 3 jobs:

- **lint** — Valida el estilo del código con ESLint
- **test** — Ejecuta pruebas con Jest en Node.js 18 y 20 con reporte de cobertura
- **build** — Verifica que el módulo carga correctamente
