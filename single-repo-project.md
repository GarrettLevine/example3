
# Single Repository Project

### Common Folder Structure
```
project/
├── api/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── client/
│   └── src/
│       ├── components/
│       └── index.js
├── public/
│   └── index.html
└── package.json
```

### Local Development
1. Run client: `npm run start:client`
2. Run server: `npm run start:server`
3. Run mongo: `mongod --config /usr/local/etc/mongod.conf`

![local-dev-flow-diagram](https://user-images.githubusercontent.com/2818462/56858145-89f87e80-6943-11e9-9afd-ce5c6a13eab4.png)


### Production Deployment
![deploy-strategy-heroku-only-diagram](https://user-images.githubusercontent.com/2818462/56858197-49e5cb80-6944-11e9-98ad-5ec439314e50.png)
