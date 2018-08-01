module.exports = function (sequelize, DataTypes) {

  var Message = sequelize.define("Message", {
    recipient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    msg: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    read:{
      type: DataTypes.BOOLEAN,
      default: false
    }

  });

  Message.associate = function (models) {
    // We're saying that a Message should belong to an User
    // A Message can't be created without an User due to the foreign key constraint
    Message.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Message;
};
