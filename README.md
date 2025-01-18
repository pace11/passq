## Getting Started 🚀

![Passq](/assets/passq.png)
- `PassQ` is Password Manager CLI with [commander.js](https://github.com/tj/commander.js) and [SQLite3](https://github.com/TryGhost/node-sqlite3)
- Key Features  
    - Insert an existing password or generate one randomly using `PassQ` ✅
    - Display a list of passwords or specific by ID ✅
    - Delete a password ✅
    - Copy a password by ID ✅

## Installing
Using NPM
```bash
# install globally
$ npm i -g @pace11/passq
```

## Command #️⃣

- Insert an existing password
```bash
# insert with existing password
$ passq create --title <title> --password <password>

# insert with generate password randomly
$ passq create --title <title>
```
- Display a list of password or specific by id
```bash
# display a list of password
$ passq list --all

# display specific by id
$ passq list --id <id>
```
- Delete a password
```bash
# display a password by id
$ passq delete --id <id>
```
- Copy a password
```bash
# copy a password by id
$ passq copy --id <id>
```

## How secure is the generated password ?
- Result from [Password Monster](https://www.passwordmonster.com/)
![Passq](/assets/ss-1.png)