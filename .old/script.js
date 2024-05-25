const ageResult = document.getElementById('ageResult');
const birthYear = 2004;

const today = new Date();
const currentYear = today.getFullYear();
const age = currentYear - birthYear;


ageResult.textContent = age;
