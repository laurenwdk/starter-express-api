// AFRAME.registerComponent("foo", {
//   init: function () {
//     const modelList = ["milkshakeModel", "burgerModel", "pizzaModel"];
//     const model = document.getElementById("model");
//     const nextButton = document.getElementById("nextbutton");

//     let idx = 1; // Start with the 2nd model as 1st is already in the scene on page load
//     const nextModel = () => {
//       // Need to remove gltf-component first due to AFrame regression: https://github.com/aframevr/aframe/issues/4341
//       model.removeAttribute("gltf-model");
//       // Switch to next model in the list
//       model.setAttribute("gltf-model", `#${modelList[idx]}`);

//       idx = (idx + 1) % modelList.length;
//     };
//     nextButton.onclick = nextModel; // Switch to the next model when the button is pressed.
//   },
// });
