export const buttonCode = {
  title: "Button",
  HTMLCode: `<button class="fancy-button">
    Click Me
  </button>`,
  CSSCode: `.fancy-button {
    padding: 10px 20px;
    border-radius: 5px;
    background: linear-gradient(to right, #6a11cb, #2575fc);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1rem;
  }`,
  jsCode: `document.querySelector('.fancy-button').addEventListener('click', () => {
    alert('Button Clicked!');
  });`,
};
