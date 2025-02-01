export const logsMiddleware = (req, res, next) => {
    console.log(`Request method: ${req.method} and URL: ${req.url}`)
    next()
}
export const validateBody = (req, res, next) => {
    const { bookId, name, gender, author } = req.body
    console.log(req.body)
    if(!req.body || !bookId || !name || !gender || !author) return res.status(400).send({ message: 'Body is required' })
    next()
}