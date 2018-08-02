module.exports = function (sequelize, DataTypes) {

    var Rating = sequelize.define("Rating", {
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title:{
          type: DataTypes.STRING,
          allowNull: true
      },
      text: {
          type: DataTypes.TEXT,
          allowNull:true
      },
      MemberId: {
          type: DataTypes.INTEGER,
          allowNull:false
      },
      MemberName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    });
  
    Rating.associate = function (models) {
      // We're saying that a Rating should belong to an User
      // A Rating can't be created without an User due to the foreign key constraint
      Rating.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Rating;
  };
  