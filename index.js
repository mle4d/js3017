const books = ['The Pillars of the Earth','	Number the Stars', 
  'The Joy Luck Club', 'The True Story of the 3 Little Pigs',
  'The Remains of the Day','A Prayer for Owen Meany','A Time to Kill', 
  'Like Water for Chocolate', 'Wayside School Is Falling Down', 
  'Chicka Chicka Boom Boom','Hyperion','The Russia House',
  'The Calvin and Hobbes Lazy Sunday Book','Guards! Guards!', 
  'Yukon Ho!','The Mitten','The Lost Continent: Travels in Small Town America',
  'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
  'Talking God','The Potter\'s Field', 'Rules of Prey','Pyramids',
  'Straight','Polar Star','Albion\'s Seed: Four British Folkways in America',
  'Borders of Infinity','The Second World War','We\'re Going on a Bear Hunt',
  'Wonderful Life: The Burgess Shale and the Nature of History', 'The Renegades of Pern',
  'Billy Bathgate','Clear and Present Danger', 'Sorceress of Darshiva', 'Geek Love',
  'Caribbean', 'Sexing the Cherry', 'The Cat Who Went Underground','	The Old Silent',
  'What to Expect the First Year','	Born in Shame','The General in His Labyrinth','	The Mummy',
  'The Heretic\'s Apprentice','Silent Partner','The Quincunx','Brothers in Arms',
  'London Fields','A Knight in Shining Armor','Mary Queen of Scotland and The Isles',
  'A History of the World in 10½ Chapters','Liar\'s Poker: Rising Through the Wreckage on Wall Street',
  'The History of the Siege of Lisbon','Time and Again: Time Was / Times Change','Citizens: A Chronicle of the French Revolution',
  'The Stress of Her Regard','The Scions of Shannara','Jingo','The Road from Coorain: A Woman\'s Exquisitely Clear-Sighted Memoir of Growing Up Australian',
  'Self-Consciousness','The Snake Tattoo','Moon Palace','Machiavelli in Hell',
  'Payment in Blood','Imago','Rama II','Shadow Games','Los caprichos de Francisco de Goya y Lucientes',
  'Præludier og Nocturner','Savage Thunder','Curses!','Mackenzie\'s Mountain','Five Little Monkeys Jumping on the Bed',
  'Solomon Gursky Was Here','Soul Mountain','Devices and Desires','	Stalking the Angel','Paths of Resistance: The Art and Craft of the Political Novel',
  'From Hell','Schweiz Ohne Armee?: Ein Palaver','Death Of A Hollow Man','Total Recall','Grass',
  'The Bridesmaid','Around the World in 80 Days: Companion to the PBS Series','A Peace to End All Peace: The Fall of the Ottoman Empire and The Creation of the Modern Middle East',
  'Garden of Lies','Streams of Silver','Illness as Metaphor and AIDS and Its Metaphors',
  'The Bristling Wood','Shabanu: Daughter of the Wind',
  'Red Branch','The Doll in the Garden: A Ghost Story','Dead Poets Society','Sword-Maker',
  'The Diamond Throne','Blue Moon Rising','The Heirs of Hammerfell','Alternate Empires','	Infinity Welcomes Careful Drivers','Truckers'];

  function strip(bookName) {
  return bookName.replace(/^(a |the |an )/i, '').trim();
}
const sortedBooks = books.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#books').innerHTML =
  sortedBooks
    .map(book => `<div id="book">${book}</div>`)
    .join('');

    console.log(sortedBooks);