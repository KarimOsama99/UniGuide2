function Filtering() {
  let buttons = document.querySelectorAll(".btns button");
  let blocks = document.querySelectorAll(".card");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      blocks.forEach((block) => {
        block.classList.remove("active");
        block.style.transform = `scale(0)`;
        block.style.opacity = `0`;
        block.style.visibility = `hidden`;
        block.style.display = `none`;
        block.style.marginLeft = `0`;
        block.style.marginRight = `0`;
        block.style.height = `0`;
      });

      blocks.forEach((blk) => {
        if (e.target.dataset.menu == blk.dataset.menu) {
          blk.classList.add("active");
          blk.style.transform = `scale(1)`;
          blk.style.opacity = `1`;
          blk.style.visibility = `visible`;
          blk.style.display = `block`;
          blk.style.marginLeft = `5px`;
          blk.style.marginRight = `5px`;
          blk.style.height = `100%`;
        }
      });
      if (e.target.dataset.menu == "all") {
        blocks.forEach((block) => {
          block.classList.add("active");
          block.style.transform = `scale(1)`;
          block.style.opacity = `1`;
          block.style.visibility = `visible`;
          block.style.display = `block`;
          block.style.marginLeft = `5px`;
          block.style.marginRight = `5px`;
          block.style.height = `100%`;
        });
      }
    });
  });
}
Filtering();


const toggle = document.querySelector('.navbar-toggler');
const bars = document.querySelector('.navbar-toggler i')

toggle.addEventListener('click', () => {
  bars.classList.toggle('fa-times');
})

// const infoItem = document.querySelector('.info-list li');
// const infoItems = document.querySelectorAll(".info-list li");

// infoItem.addEventListener('click', () => {
//   infoItem.classList.add('active');
//   // infoItems.classList.remove('active');
// })
