import HttpInstance from './create/index'

const http = (baseURL) => new HttpInstance({
    baseURL,
    handleError(error) {
        console.log(error)
    }
})


export default http