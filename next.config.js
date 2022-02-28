module.exports = {
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false, process: require.resolve("process/browser"), };
        return config
    }
}