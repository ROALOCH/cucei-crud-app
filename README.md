# Proyecto 2: Aplicación CRUD

Ochoa Herrera Rodrigo Alejandro  
CUCEI | Universidad de Guadalajara  
I5909 - Programación para Internet

## Descripción

Este repositorio contiene los archivos generados para la construcción de una applicación web para el manejo de operaciones CRUD. Para el desarrollo del API en el backend utilicé Express, una librería de NodeJS y para la construcción de las vistas utilicé ReactJS.

## Instalación

#### Requerimientos Previos

- [Node (^12.18.3)](https://nodejs.org/dist/v14.15.0/node-v14.15.0-x64.msi)
- [MySQL (^5.7.24)](https://dev.mysql.com/downloads/mysql/5.7.html)

Descargar o clonar el repositorio, y en la carpeta raíz del proyecto ejecutar los comandos

```
npm install
npm run build
```

Renombrar el archivo `.env.example` a `.env` y colocar los datos de conexión a la base de datos en las variables de entorno correspondientes. Para iniciar la migración de tablas, ejecutar el comando

```
npm run migrate
```

Para iniciar el proyecto ejecutar el comando

```
npm run dev
```

Una vez ejecutado el comando anterior, el proyecto se puede visualizar en [http://localhost:3000](http://localhost:3000)

## Uso

Demo del proyecto accesible en [Heroku](https://roaloch-crud.herokuapp.com/).

## Licencia

[MIT](https://github.com/ROALOCH/cucei-crud-app/blob/main/LICENSE)
