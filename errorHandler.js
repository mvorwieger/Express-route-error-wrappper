export const errorHandler = (fn, onError) => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch(ex) {
        onError(ex)
    }
}
