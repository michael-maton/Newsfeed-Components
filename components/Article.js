/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!

  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).

  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

import articleData from './articleData';

const articleSection = document.querySelector('.articles');

function articleMaker ({title, date, firstParagraph, secondParagraph, thirdParagraph}) {
  let article = document.createElement('div');
  article.className = 'article';

  let articleTitle = document.createElement('h2');
  articleTitle.textContent = title;

  let articleDate = document.createElement('p');
  articleDate.className = 'date';
  articleDate.textContent = date;

  let para1 = document.createElement('div');
  para1.className = 'paras';
  para1.textContent = firstParagraph;
  para1.innerHTML = `${firstParagraph}<br><br>`;
  let para2 = document.createElement('div');
  para2.innerHTML = `${secondParagraph}<br><br>`;
  let para3 = document.createElement('div');
  para3.textContent = thirdParagraph;

  let expandButton = document.createElement('span');
  expandButton.className = ('expandButton');
  expandButton.textContent = '+';

  article.appendChild(articleTitle);
  article.appendChild(articleDate);
  article.appendChild(para1);
  article.appendChild(para2);
  article.appendChild(para3);
  article.appendChild(expandButton);

  expandButton.addEventListener('click', () => {
    article.classList.toggle('article-open');
  });
  return article;
}

articleData.forEach(articleObj => {
  articleSection.appendChild(articleMaker(articleObj));
});