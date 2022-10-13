const developer = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    }
  };

  developer.sayHello();//Notation
  // 'Hi there!'
  
  developer['sayHello']();//Kind of bracket Notation
  // 'Hi there!'

  const developering = {
    name: 'Andrew',
    sayHello: function () {
      console.log('Hi there!');
    },
    favoriteLanguage: function (language) {
      console.log(`My favorite programming language is ${language}`);
    }
  };
  
  
  developering.favoriteLanguage('JavaScript');
  // My favorite programming language is JavaScript'