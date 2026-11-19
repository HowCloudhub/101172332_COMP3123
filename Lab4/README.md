# COMP3123 exec04 - Express JS Exercise

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

The server listens on port 3000 by default.

## Endpoints

- `GET /hello` returns `Hello Express JS` as plain text.
- `GET /user` returns the supplied `firstname` and `lastname` query values. If omitted, the defaults are Pritesh Patel.
- `POST /user/:firstname/:lastname` returns the first and last name from the URL path.
- `POST /users` accepts and returns a JSON array of users.
- `GET /instruction.html` serves the supplied instruction file from `public/`.

## Example POST body for `/users`

```json
[
  { "firstname": "Pritesh", "lastname": "Patel" },
  { "firstname": "John", "lastname": "Doe" },
  { "firstname": "John", "lastname": "Rome" }
]
```


