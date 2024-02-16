# App Agricola

Repositorio del backend de la AppAgricola

## Requerimientos
- NodeJS v18.18.2

## Instalar dependencias
````sh
npm install
````

1. **Branchs**

- dev: used for development
- realease: used for release
- production: used for production
- master: repository project

2. **Commits Prefix**

- **feat**: Este prefijo se utiliza para indicar que la rama se creó para agregar una nueva característica o funcionalidad
- **fix**: Este prefijo se utiliza para indicar que la rama se creó para solucionar un error o problema conocido en el código
- **chore**: Se utiliza para tareas de mantenimiento o cambios que no están relacionados directamente con características o errores. Esto podría incluir actualizaciones de dependencias, cambios en la estructura de archivos, refactorizaciones menores, etc.
- **Ej**: feat(Modulo): Agregar nuevo modulo de gestion de bancos
- **Ej**: fix(Modulo): Modificar funcionalidad de creacion de un nuevo banco
- **Ej**: chore(Modulo): Agregar, Actualizar,Eliminar paquete react-router version 1.x.x

3. **Crear una rama**

- Antes de crear una rama es importante bajarse todos los cambios del repositorio remoto.
  ```shell
   git checkout dev
   git pull origin dev  // azure repository
  ```
- Crear la rama dependiendo el caso usa **feat**, **fix** o **chore**. El numero o secuencial lo obtendras del identificador de tareas en el Bitrix24
  ```shell
   git checkout -b feat#123
  ```

4. **Crear un commit**

- Para subir los cambios al repositorio debes crear un commit como estos ejemplos
  ```shell
    git add pathFiles
    git commit -m "feat(Bancos): Agregar nuevo modulo de gestion de bancos"
    git commit -m "fix(Bancos): Modificar funcionalidad de creacion de un nuevo banco"
    git commit -m "chore(Bancos): Agregar, Actualizar,Eliminar paquete react-router"
  ```

5. **Subir cambios**

- Para subir los cambios al repositorio
  ```shell
    git push -u origin feat#123
  ```

