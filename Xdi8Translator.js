const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
const buttons = document.querySelectorAll(".button");
const xn = document.getElementsByClassName('xdnum');

// Display property values
for (let i = 0; i < sliders.length; i++) {
  for (let i = 0; i < xn.length; i++) {
    xn[i].textContent = '·'+sliders[i].value.replace(/0/g,'T').replace(/9/g,'q')+'·'
  }
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      for (let i = 0; i < xn.length; i++) {
        xn[i].textContent = '·'+this.value.replace(/0/g,'T').replace(/9/g,'q')+'·'
      }
      container.style.setProperty(`--${this.id}`, this.value);
      output.innerHTML = this.value;
    };
  });

// Reset text property and update display property value for each slider
buttons.forEach(button => {
  const buttonIndex = button.getAttribute("data-index");
  const resetOutput = document.querySelector(
    `.output[data-index="${buttonIndex}"]`
  );
  const resetSlider = document.querySelector(
    `.slider[data-index="${buttonIndex}"]`
  );
  button.onclick = function () {
    for (let i = 0; i < xn.length; i++) {
      xn[i].textContent = '·'+resetSlider.defaultValue.replace(/0/g,'T').replace(/9/g,'q')+'·'
    }
    container.style.removeProperty(`--${resetSlider.id}`);
    resetOutput.innerHTML = resetSlider.defaultValue;
    resetSlider.value = resetSlider.defaultValue;
    console.log(resetSlider.defaultValue);
  };
});

const tx = document.getElementsByTagName('textarea');
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}