const xn = document.getElementsByClassName('xdnum');
const tx = document.getElementsByTagName('textarea');

for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
}


const container = document.querySelector(".container");
const sliders = document.querySelectorAll(".slider");
const sliderValues = document.querySelectorAll(".output");
const buttons = document.querySelectorAll(".button");

// Display property values
for (let i = 0; i < sliders.length; i++) {
  sliderValues[i].innerHTML = '<xd style="font-weight:400;">·'+sliders[i].value.replace(/0/g,'T').replace(/9/g,'q')+'·</xd>';
}

// Update text property and displayed property value for each slider
sliders.forEach(slider => {
    const sliderIndex = slider.getAttribute("data-index");
    const output = document.querySelector(`.output[data-index="${sliderIndex}"]`);
    slider.oninput = function() {
      container.style.setProperty(`--${this.id}`, this.value);
      output.innerHTML = this.value;
      for (let i = 0; i < xn.length; i++) {
        xn[i].textContent = '·'+sliders[i].value.replace(/0/g,'T').replace(/9/g,'q')+'·'
      }
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
