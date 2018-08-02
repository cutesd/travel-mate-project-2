// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // username
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // City & State or Country
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 150]
      }
    },
    // About Section
    about: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Array String
    interests: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Long Desc
    activities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Profile Photo URL
    profilePhoto: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    },
    // Cover Photo URL
    coverPhoto: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true
      }
    }

    // host: {
    //   type:  DataTypes.BOOLEAN,
    //   defaultValue: false
    // },

    // hostee: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false
    // }

  });
  //
  User.associate = function (models) {
    // Associating User with Messages
    // When an User is deleted, also delete any associated Messages
    User.hasMany(models.Message, {
      onDelete: "cascade"
    });

    User.hasMany(models.Rating, {
      onDelete: "cascade"
    });
  };

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });



  return User;
};
