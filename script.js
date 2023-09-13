const moreContent = document.querySelector('.more-content');
 const toggleButton = document.getElementById('toggleButton');


 let isExpanded = false;


 function toggleContent() {
   if (isExpanded) {
     moreContent.style.display = 'none';
     toggleButton.textContent = 'Read More';
   } else {
     moreContent.style.display = 'block';
     toggleButton.textContent = 'Read Less';
   }
   isExpanded = !isExpanded;
 }
 toggleButton.addEventListener('click', toggleContent);


 const moreComponent = document.querySelector('.more-component');
 const Button = document.getElementById('readButton');


 let isFilled= false;


 function readComponent() {
   if (isFilled) {
     moreComponent.style.display = 'none';
     readButton.textContent = 'Read More';
   } else {
     moreComponent.style.display = 'block';
     toggleButton.textContent = 'Read Less';
   }
   isFilled= !isFilled;
 }
 Button.addEventListener('click', readComponent);


 const moreContents = document.querySelector('.more-contents');
 const togglesButton = document.getElementById('togglesButton');


 let isExpands = false;


 function togglesContents() {
   if (isExpands) {
     moreContents.style.display = 'none';
     togglesButton.textContent = 'Read More';
   } else {
     moreContents.style.display = 'block';
     togglesButton.textContent = 'Read Less';
   }
   isExpands = !isExpands;
 }
 togglesButton.addEventListener('click', togglesContents);


