'use strict';

if (document.querySelector('p:nth-of-type(4)').classList.contains('dolphin')) {
  document.querySelector('.apple').textContent = 'pear';
}

if (document.querySelector('p:first-of-type').classList.contains('apple')) {
  document.querySelector('.cat').textContent = 'dog';
}

document.querySelector('.apple').classList.add('red');
document.querySelector('.balloon').classList.replace('balloon', 'pear');