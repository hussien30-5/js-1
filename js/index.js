  const outputquote = [
      `“Go to heaven for the climate and hell for the company.”`,
       `“He's like a drug for you, Bella.”`,
       `“There is nothing to writing. All you do is sit down at a typewriter and bleed.”`,
        `“We read to know we're not alone.”`,
       `“You don’t forget the face of the person who was your last hope.”`
       ]

   const Nameoutput = [
      `― George Carlin`,
       `― Stephenie Meyer, Eclipse`,
       `― Ernest Hemingway`,
       `― Marilyn Monroe`,
       `― Suzanne Collins, The Hunger Games`
   ]
   function  clickone(){
       var randomNumber = Math.random() * outputquote.length
       var x = Math.floor(randomNumber)
     document.getElementById('outputquote').innerHTML=outputquote[x]
       document.getElementById('Nameoutput').innerHTML=Nameoutput[x]


 }






















//   const outputquote = [
//      `“Go to heaven for the climate and hell for the company.”`,
//      `“He's like a drug for you, Bella.”`,
//      `“There is nothing to writing. All you do is sit down at a typewriter and bleed.”`,
//      `“A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.”`,
//      `“You don’t forget the face of the person who was your last hope.”`
//  ];

//  const Nameoutput = [
//      `― George Carlin`,
//      `― Stephenie Meyer, Eclipse`,
//      `― Ernest Hemingway`,
//      `― Marilyn Monroe`,
//      `― Suzanne Collins, The Hunger Games`
//  ];

//  function clickone() {
     
//      var randomNumber = Math.floor(Math.random() * outputquote.length);

     
//      var quoteAndAuthor = `${outputquote[randomNumber]} <br> ${Nameoutput[randomNumber]}`;

//      document.getElementById('outputquote ').innerHTML = quoteAndAuthor;
//  }

