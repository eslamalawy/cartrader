export const useUtilities = () => {
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  function validatePassword(password, repeatPassword) {
    var MinLength = 6;
    var MaxLength = 15;

    var meetsLengthRequirements =
      password.length >= MinLength && repeatPassword.length <= MaxLength;
    var hasUpperCasevarter = false;
    var hasLowerCasevarter = false;
    var hasDecimalDigit = false;

    if (meetsLengthRequirements) {
      for (var i = 0, len = password.length; i < len; i++) {
        var char = password.charAt(i);
        if (!isNaN(+char * 1)) {
          hasDecimalDigit = true;
        } else {
          if (char == char.toUpperCase()) {
            hasUpperCasevarter = true;
          }
          if (char == char.toLowerCase()) {
            hasLowerCasevarter = true;
          }
        }
      }
    }

    var isValid =
      meetsLengthRequirements &&
      hasUpperCasevarter &&
      hasLowerCasevarter &&
      hasDecimalDigit;
    return isValid;
  }

  return {
    toTitleCase,
    validateEmail,
    validatePassword,
  };
};
