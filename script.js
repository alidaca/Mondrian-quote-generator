var quotesArr = ["I believe it is possible that, through horizontal and vertical lines constructed with awareness, but not with calculation, led by high intuition, and brought to harmony and rhythm, these basic forms of beauty, supplemented if necessary by other direct lines or curves, can become a work of art, as strong as it is true.", "Art is not made for anybody and is, at the same time, for everybody.",
      "Every true artist has been inspired more by the beauty of lines and color and the relationships between them than by the concrete subject of the picture.",
      "The position of the artist is humble. He is essentially a channel.",
      "The emotion of beauty is always obscured by the appearance of the object. Therefore the object must be eliminated from the picture.",
      "The emotion of beauty is always obscured by the appearance of the object. Therefore the object must be eliminated from the picture.",
      "I construct lines and color combinations on a flat surface, in order to express general beauty with the utmost awareness. Nature (or, that which I see) inspires me, puts me, as with any painter, in an emotional state so that an urge comes about to make something, but I want to come as close as possible to the truth and abstract everything from that, until I reach the foundation (still just an external foundation) of things.",
      "This new plastic idea will ignore the particulars of appearance, that is to say, natural form and colour. On the contrary, it should find its expression in the abstraction of form and colour, that is to say, in the straight line and the clearly defined primary color.",
      "The new plastic idea thus correctly represents actual aesthetic relationships. To the modern artist, it is a natural consequence of all the plastic ideas of the past. This is particularly true for painting, which is the art least bounded to contingencies. The picture can be a pure reflection of life, in its deepest essence.",
      "Observing sea, sky and stars, I sought to indicate their plastic function through a multiplicity of crossing verticals and horizontals. Impressed by the vastness of Nature, I was trying to express its expansion, rest and unity.",
      "In past times when one lived in contact with nature, abstraction was easy; it was done unconsciously. Now in our denaturalized age abstraction becomes an effort.",
      "The colored planes, as much by position and dimension as by the greater value given to color, plastically express only relationships and not forms.",
      "To approach the spiritual in art, one will make as little use as possible of reality, because reality is opposed to the spiritual.",
      "By the unification of architecture, sculpture and painting a new plastic reality will be created.",
      "Art will become the product of another duality in man: the product of cultivated externality and of inwardness deepened and more conscious. As a pure representation of the human mind, art will express itself in an aesthetically purified, that is to say, abstract form.",
      "Every true artist has been inspired more by the beauty of lines and color and the relationships between them than by the concrete subject of the picture.",
      "Vertical and horizontal lines are the expression of two opposing forces; they exist everywhere and dominate everything; their reciprocal action constitutes ‘life’. I recognized that the equilibrium of any particular aspect of nature rests on the equivalence of its opposites."
    ];
var newQuote = function(){
var randQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)];

var quote = document.getElementById('quote');
quote.textContent = randQuote;

var twitterLinkHtml = '<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text={tweetText}" data-size="large" data-count="none" data-url="none">Tweet</a>'
var newTweet = randQuote + '-Piet mondrian';

var replacedTweet = encodeURIComponent(newTweet);
console.log(newTweet);
var tweetHtml = twitterLinkHtml.replace("{tweetText}", replacedTweet);
console.log(tweetHtml);
var twitterBtn = document.getElementById('tweet');
twitterBtn.innerHTML = tweetHtml;
twttr.widgets.load(twitterBtn);

}
newQuote();
document.getElementById('refresh').onclick = newQuote;
