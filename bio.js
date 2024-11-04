// © 2024 nigger.xyz | All rights reserved.

window.addEventListener('load', () => {
    const bios = ["localhost ddoser", "better than u", ".gg/uam", "tracer tele: t.me/tracerbotnet", "my tele: t.me/layer4mitigation"];
    const bioContainer = document.querySelector('#bio');
    let currentBioIndex = 0;
  
    function typeBio(bio) {
      let i = 0;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i++;
        if (i > bio.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            deleteBio(bio);
          }, 300);
        }
      }, 100);
    }
  
    function deleteBio(bio) {
      let i = bio.length;
      const intervalId = setInterval(() => {
        bioContainer.innerHTML = bio.substring(0, i).split('').map(c => `<span>${c}</span>`).join('') + '<span class="cursor">|</span>';
        i--;
        if (i < 0) {
          clearInterval(intervalId);
          currentBioIndex++;
          if (currentBioIndex >= bios.length) {
            currentBioIndex = 0;
          }
          setTimeout(() => {
            typeBio(bios[currentBioIndex]);
          }, 300);
        }
      }, 100);
    }
  
    typeBio(bios[currentBioIndex]);
  });