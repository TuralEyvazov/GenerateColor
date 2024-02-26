$(document).ready(() => {
  $(".generate-btn").click(function () {
    const arryNumber = "1234567890abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 16);
      color += arryNumber[random];
    }
    $(".hx-code").text(color);
    $(".color").css("background-color", `${color}`);
  });
  $(".copy-btn").click(() => {
    let clipboardCode = $(".hx-code").text();
    navigator.clipboard.writeText(clipboardCode);
    $(".alert").css({ bottom: "30px" });
    setTimeout(() => {
      $(".alert").css({
        bottom: "-100px",
      });
    }, 1200);
  });
});
