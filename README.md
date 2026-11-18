# Express and Mongoose CRUD

A backend learning exercise for querying, creating, updating, and deleting MongoDB user documents.

[Express routes](index.js) expose `GET /users`, `POST /register`, `PATCH /update/:id`, and `DELETE /delete/:id`. [db.js](db.js) contains the model and connection setup.

## Development

Install with `npm ci`, review the MongoDB connection in `db.js`, and point it at a disposable development database before running `npm run server`. The server listens on port 4500.

This is an unauthenticated CRUD exercise. Request validation, query restrictions, and automated tests are absent. The update handler also contains an extra response referencing an undefined identifier after its main response; that behavior needs a separate code fix.
