// Dark mode toggle
var dark = document.getElementById("clicked");
var white = document.getElementById("white-color");
var lol = document.getElementById("white-2color");

dark.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        white.style.filter = "brightness(5)";
        lol.style.filter = "brightness(5)";
    } else {
        white.style.filter = "none";
        lol.style.filter = "none";
    }
}

// Like button functionality
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('liked');
    });
});

// Comment button toggle functionality
const commentButtons = document.querySelectorAll('.comment-btn');
commentButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Find the closest post container for this comment button
        const post = button.closest('.post-section, .post-main, .post');
        if (!post) return;

        const commentBox = post.querySelector('.comment-box');
        if (commentBox) {
            commentBox.classList.toggle('active');
        }
    });
});

const hearts = document.querySelectorAll('.fa-heart');

hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    if (heart.classList.contains('fa-regular')) {
      heart.classList.remove('fa-regular');
      heart.classList.add('fa-solid');
      heart.style.color = 'red';  // make sure solid heart is red
    } else {
      heart.classList.remove('fa-solid');
      heart.classList.add('fa-regular');
      heart.style.color = '';  // reset to default
    }
  });
});

document.querySelectorAll('.comment-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    // Find the sibling comment box inside the post footer
    const commentBox = icon.closest('.post-fotter').querySelector('.comment-box');
    if (commentBox.style.display === 'none' || commentBox.style.display === '') {
      commentBox.style.display = 'block';
    } else {
      commentBox.style.display = 'none';
    }
  });
});

document.querySelectorAll('.bookmark-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    if (icon.classList.contains('active')) {
      icon.classList.remove('active', 'fa-solid');
      icon.classList.add('fa-regular');
    } else {
      icon.classList.add('active', 'fa-solid');
      icon.classList.remove('fa-regular');
    }
  });
});

const searchSection = document.getElementById('searchSection');
const searchMenu = document.getElementById('searchMenu');

searchSection.addEventListener('click', () => {
    const isOpen = searchMenu.style.display === 'block';
    searchMenu.style.display = isOpen ? 'none' : 'block';
    if (!isOpen) document.getElementById('searchInput').focus();
});

document.addEventListener('click', function (e) {
    if (!searchSection.contains(e.target)) {
        searchMenu.style.display = 'none';
    }
});

const moreSection = document.getElementById('hidden');
const moreDropdown = document.getElementById('moreDropdown');
const logoutBtn = document.getElementById('logoutBtn');

moreSection.addEventListener('click', () => {
  // Toggle dropdown visibility
  moreDropdown.style.display = moreDropdown.style.display === 'block' ? 'none' : 'block';
});

// Logout button click
logoutBtn.addEventListener('click', () => {
  // Optional: Add sign out logic if using Firebase or other auth

  // Redirect to sign-in page
  window.location.href = 'signin.html';  // Change to your actual sign-in page URL
});

// Close dropdown if clicked outside
document.addEventListener('click', (event) => {
  if (!moreSection.contains(event.target)) {
    moreDropdown.style.display = 'none';
  }
});

