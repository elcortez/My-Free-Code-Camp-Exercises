$(document).ready(function() {
  var quotes = [];
  quotes['Eisenhower'] = 'History does not long entrust the care of freedom to the weak or the timid.';
  quotes['Nassim Taleb'] = 'Doers do. They don\'t talk.';
  quotes['Neil Strauss'] = 'Feel free to blame your parents for anything that\'s wrong with you, but don\'t forget to give them credit for anything that\'s right';
  quotes['Neil Strauss 2'] = 'What you are doesn\'t matter as much as how you present yourself';
  quotes['Paul McKenna'] = 'You don\'t get what you deserve in life, but rather what you negotiate';
  quotes['Miscellanous'] = 'There\'s what people say they want, and theyre\'s what they react to. The two are usually pretty different';
  quotes['Harvey Mckay'] = 'The most powerful tool in any negociation is the ability to walk out of the table without a deal';
  quotes['Ennius'] = 'Nimium boni est, cui nihil est mali - Good is the absence of evil';
  quotes['Jean De La Rochebrochard'] = 'Real growth feels like trying to lace your shoes while you’re running';
  quotes['Viki King'] = 'In order for a dream to become a reality, it must be given up as a dream';
  quotes['Myself'] = 'It\'s not about being organised. It\'s about being involved.';
  quotes['Sun Tzu'] = 'The real warrior does not care about winning the war; he cares about winning every battle';

  $('#getQuote').on('click', function(){
    var author = Object.keys(quotes)[Math.floor(Math.random() * Object.keys(quotes).length)];
    $(".message").html(quotes[author] + " --- " + author);
  });
});

