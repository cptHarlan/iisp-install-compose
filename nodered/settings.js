module.exports = {
    uiPort: process.env.NODERED_HTTP_PORT || 1880,
    adminAuth: {
        type: "credentials",
        users: [{
            username: "admin",
            password: "$2b$08$6/vIJvjG7Dr0DXYnjt0Kd.xOyibFnEoHKT2F2jpQA3i02fP.fMGbu", //Stegra18
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
