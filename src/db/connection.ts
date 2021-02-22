import { sequelizeInstance }  from './sequelize-instance'

const test = async () => {
    try {
        await sequelizeInstance.authenticate()
        return 'Connected'
    } catch (e) {
        console.log(e)
        return 'Not connected'
    }
}

const close = async () => {
    try {
        await sequelizeInstance.close()
        return 'Closed'
    } catch (e) {
        console.log(e)
        return 'Failed to close'
    }
}

export {
    test,
    close
}
