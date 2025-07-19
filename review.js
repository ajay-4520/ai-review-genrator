 document.getElementById('reviewForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('productName').value.trim();
  const category = document.getElementById('category').value.trim();
  const features = document.getElementById('features').value.trim() || 'various useful features';
  const pros = document.getElementById('pros').value.trim() || 'great performance and quality';
  const cons = document.getElementById('cons').value.trim() || 'minor issues to consider';
  const tone = document.getElementById('tone').value.trim();

  const review = `
This ${category} product, "${name}", offers great features like ${features}.
Customers appreciate its pros: ${pros}, although some noticed: ${cons}.
Overall, the product provides a ${tone.toLowerCase()} experience.
`;

  const outputBox = document.getElementById('reviewOutput');
  outputBox.innerText = review.trim();
  outputBox.classList.add('has-content');
});
