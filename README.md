# yelpclone

An Express and MongoDB place-listing CRUD exercise with EJS views.

[Repository](https://github.com/MirzaAlbab/yelpclone)

## Features

- List and view places
- Create and edit place records
- Delete route and example seed route
- Mongoose place model

## Technology

`ejs` ^3.1.10 · `express` ^4.19.2 · `mongoose` ^8.4.1

## Getting started

Install Node.js and start a local MongoDB instance.

```bash
git clone https://github.com/MirzaAlbab/yelpclone.git
cd yelpclone
```

```bash
npm install
npm install --no-save method-override
node app.js
```

Open [http://localhost:3000](http://localhost:3000). Review `app.js` to change the MongoDB connection or listening port.

## Development and checks

The `npm test` command is a placeholder. Exercise create, read, update, and delete flows against a disposable development database.

## Project structure

- `models/` — Data models
- `seeds/` — Development seed scripts
- `utils/` — Shared utilities
- `views/` — Server-rendered templates

## Project notes

The source connects to mongodb://127.0.0.1:27017/yelp_clone and listens on port 3000. app.js requires method-override, which is absent from the reviewed package.json. Install that dependency locally before starting.

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.
