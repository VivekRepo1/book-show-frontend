module.exports = {
    apps: [
        {
            name: "bookshow-frontend",
            script: 'serve -s build',
            env: {
                PORT: 3007
            }
        }
    ]
}