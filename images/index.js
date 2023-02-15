(function newFact() {
    var facts = ['RIP Internet Explorer', 'Potato', '<a href="https://bsd.instructure.com/courses/114205/pages/weeks-21-22-feb-6-feb-17?module_item_id=3348875">Will this work?</a>'];
    var randomFact = Math.floor(Math.random() * facts.length);
    document.getElementById('myTxt').innerHTML = facts[randomFact];
  })();