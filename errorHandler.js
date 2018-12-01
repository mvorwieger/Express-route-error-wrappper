export const errorHandler = fn => (req, res, next) => {
    try {
        fn(req, res, next)
    } catch(ex) {
        res.status(500).send(new Error("Internal Server Error"))
    }
}
