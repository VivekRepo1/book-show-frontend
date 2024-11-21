module.exports = {
    apps: [
        {
            name: "bookshow-frontend",
            script: "npm",
            interpreter: "none",
            args: "start",
            env: {
                PORT: 3007
            }
        }
    ]
}