exports.success = (req, res, message = '', status = 200) => {
    res.status(status).send({
        error: false,
        status: status,
        message: message
    });
}

exports.error = (req, res, message = '', status = 500) => {
    res.status(status).send({
        error: true,
        status: status,
        message: message,
    });
}