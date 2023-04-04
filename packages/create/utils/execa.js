const run = async(bin, args, opts = {}) => {
    const {
        execa
    } = await import('execa')
    await execa(bin, args, { stdio: 'inherit', ...opts })
};
module.exports = {
    run
}