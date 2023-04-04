async function loading (msg,callback) {
    const {
        default: ora,
    } = await import('ora');
    
    const loading = ora(msg);
    loading.start();
    try {
       await callback() 
    } finally {
        loading.succeed();
    }
}

module.exports={
    loading,
}