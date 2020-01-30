const books = ['The Pillars of the Earth','	Number the Stars', 
  'The Joy Luck Club', 'The True Story of the 3 Little Pigs',
  'The Remains of the Day','A Prayer for Owen Meany','A Time to Kill', 
  'Like Water for Chocolate', 'Wayside School Is Falling Down', 
  'Chicka Chicka<br>Boom Boom','Hyperion','The Russia House',
  'The Calvin and Hobbes<br>Lazy Sunday Book','Guards! Guards!', 
  'Yukon Ho!','The Mitten','The Lost Continent',
  'The 7 Habits of Highly<br>Effective People',
  'Talking God','The Potter\'s Field', 'Rules of Prey','Pyramids',
  'Straight','Polar Star','Albion\'s Seed',
  'Borders of Infinity','The Second World War','We\'re Going on a Bear Hunt',
  'Wonderful Life', 'The Renegades of Pern',
  'Billy Bathgate','Clear and Present Danger', 'Sorceress of Darshiva', 'Geek Love',
  'Caribbean', 'Sexing the Cherry', 'The Cat Who Went<br>Underground','	The Old Silent',
  'What to Expect the First Year','	Born in Shame','The General in His Labyrinth','	The Mummy',
  'The Heretic\'s Apprentice','Silent Partner','The Quincunx','Brothers in Arms',
  'London Fields','A Knight in Shining Armor','Mary Queen of Scotland and The Isles',
  'A History of the World in 10½ Chapters','Liar\'s Poker',
  'The History of the Siege of Lisbon','Time and Again','Citizens',
  'The Stress of Her Regard','The Scions of Shannara','Jingo','The Road from Coorain',
  'Self-Consciousness','The Snake Tattoo','Moon Palace','Machiavelli in Hell',
  'Payment in Blood','Imago','Rama II','Shadow Games','Los caprichos de Francisco de Goya y Lucientes',
  'Præludier og Nocturner','Savage Thunder','Curses!','Mackenzie\'s Mountain','Five Little Monkeys Jumping on the Bed',
  'Solomon Gursky Was Here','Soul Mountain','Devices and Desires','	Stalking the Angel','Paths of Resistance',
  'From Hell','Schweiz Ohne Armee?','Death Of A Hollow Man','Total Recall','Grass',
  'The Bridesmaid','Around the World<br>in 80 Days','A Peace to End All Peace',
  'Garden of Lies','Streams of Silver','Illness as Metaphor and AIDS and Its Metaphors',
  'The Bristling Wood','Shabanu: Daughter of the Wind',
  'Red Branch','The Doll in the Garden','Dead Poets Society','Sword-Maker',
  'The Diamond Throne','Blue Moon Rising','The Heirs of Hammerfell','Alternate Empires','	Infinity Welcomes Careful Drivers','Truckers'];

  function strip(bookName) {
  return bookName.replace(/^(a |the |an )/i, '').trim();
}
const shelf2 = books.sort((a, b) => strip(a) > strip(b) ? 1 : -1);


console.log(shelf2);

const shelf1 = shelf2.splice(0,33);

console.log(shelf1);

const shelf3 = shelf2.splice(33,66);

console.log(shelf3);
document.querySelector('.shelf1').innerHTML =
  shelf1
    .map(book => `<div id="book1"><p id="titles1">${book}</p></div>`)
    .join('');

document.querySelector('.shelf3').innerHTML =
  shelf3
    .map(book => `<div id="book3"><p id="titles3">${book}</p></div>`)
    .join('');

document.querySelector('.shelf2').innerHTML =
  shelf2
    .map(book => `<div id="book2"><p id="titles2">${book}</p></div>`)
    .join('');