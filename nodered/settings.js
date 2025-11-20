module.exports = {
    uiPort: process.env.NODERED_HTTP_PORT || 1880,
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2b$08$4o/6HNUkaRO3COMD6QjKOONt1mKx5RwWFA7pN7a7JMBF73qOJr9qG", //Stegra18
            permissions: "*"
        }]
    },
    telemetry: {
        enabled: false
    },
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    userDir: "/data"
};
