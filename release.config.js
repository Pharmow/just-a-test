module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/Pharmow/just-a-test.git",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@sematic-release/release-notes-generator',
        '@semantic-release/git',
        '@semantic-release/github'
    ]
}
