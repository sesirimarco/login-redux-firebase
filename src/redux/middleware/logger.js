const logger = (store) => (next) => (action) => {
    console.log('MIDDLEWARE LOGGER: ',action,  action.type);
    next(action);
};

export default logger;