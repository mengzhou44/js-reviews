const data = [
  {
    firstName: 'Peter',
    lastName: 'Jones',
    role: 'INTERN',
    photo: './images/boy-1.jpg',
    comment:
      't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i',
  },
  {
    firstName: 'Susan',
    lastName: 'Smith',
    role: 'Web Developer',
    photo: './images/girl-1.jpg',
    comment:
      't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i',
  },
  {
    firstName: 'Anna',
    lastName: 'Johnson',
    role: 'Web Designer',
    photo: './images/boy-2.jpg',
    comment:
      't is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum i',
  },
];

const photoEl = document.querySelector('.photo');
const nameEl = document.querySelector('.name');
const roleEl = document.querySelector('.role');
const commentEl = document.querySelector('.comment');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;

const displayReview = () => {
  const { photo, firstName, lastName, comment, role } = data[index];
  photoEl.src = photo;
  nameEl.textContent = `${firstName}   ${lastName}`;
  roleEl.textContent = role;
  commentEl.textContent = comment;
};

const outboundCheck = () => {
  if (index < 0) {
    index = 2;
  } else if (index > 2) {
    index = 0;
  }
};

displayReview();

prevButton.addEventListener('click', () => {
  index--;
  outboundCheck();
  displayReview();
});

nextButton.addEventListener('click', () => {
  index++;
  outboundCheck();
  displayReview();
});
