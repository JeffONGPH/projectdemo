module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define("User", {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        username: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        phone: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        linkToImage: {
            type: Sequelize.STRING
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}