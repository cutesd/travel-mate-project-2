// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },

    confirmPassword: {
      type: DataTypes.STRING,
      allowNull: false
    },

    location: {
      type: DataTypes.STRING,
      allowNull: true
    },

    interests: {
      type: DataTypes.STRING,
      allowNull: false
    },

    aboutYou: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    activities: {
      type: DataTypes.TEXT,
      allowNull: true
    },
//changes false to true for testing purposes
    profilePhoto: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    coverPhoto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // using this so going to travelmate.com/nick12322, or whatever I choose, redirects to my profile.
    handle: {
      type: DataTypes.STRING,
      allowNull: false
    },

    host: {
      type:  DataTypes.BOOLEAN,
      defaultValue: false
    },

    hostee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }

  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
