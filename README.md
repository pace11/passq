## Getting Started 🚀

![Passq](/assets/passq.png)
- `PassQ` is Password Manager CLI with [commander.js](https://github.com/tj/commander.js) and [SQLite3](https://github.com/TryGhost/node-sqlite3)
- Key Features  
    - Insert an existing password or generate one randomly using `PassQ` ✅
    - Display a list of passwords or specific by ID ✅
    - Delete a password ✅

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
Data created ✅ { id: 1, title: 'password', password: 'admin123' }
                                    

# insert with generate password randomly
$ passq create --title <title>
Data created ✅ { id: 1, title: 'password', password: 'BIA%m)JJf4Y' }
```
- Display a list of password or specific by id
```bash
# display a list of password
$ passq list --all
Total: 2 data
┌─────────┬────┬────────────┬───────────────┬───────────────────────┐
│ (index) │ id │ title      │ password      │ last_updated          │
├─────────┼────┼────────────┼───────────────┼───────────────────────┤
│ 0       │ 1  │ 'password' │ 'admin123'    │ '2025-01-21 06:29:33' │
│ 1       │ 2  │ 'password' │ 'BIA%m)JJf4Y' │ '2025-01-21 06:30:25' │
└─────────┴────┴────────────┴───────────────┴───────────────────────┘

# display specific by id
$ passq list --id <id>
Total: 1 data
┌─────────┬────┬────────────┬────────────┬───────────────────────┐
│ (index) │ id │ title      │ password   │ last_updated          │
├─────────┼────┼────────────┼────────────┼───────────────────────┤
│ 0       │ 1  │ 'password' │ 'admin123' │ '2025-01-21 06:29:33' │
└─────────┴────┴────────────┴────────────┴───────────────────────┘
```
- Delete a password
```bash
# display a password by id
$ passq delete --id <id>
Data deleted ✅
```

## How secure is the generated password ?
- Result from [Password Monster](https://www.passwordmonster.com/)
![Passq](/assets/ss-1.png)