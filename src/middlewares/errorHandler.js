export const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: err.message,
        status: 500,
    });
    next();
}