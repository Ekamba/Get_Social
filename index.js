//sidebar
const menuItems = document.querySelectorAll(".menu__item");

//Messages
const messagesNotification = document.querySelector("#messages__notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = document.querySelector("#message__search");

//Theme
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize__theme");
const fontSize = document.querySelectorAll(".choose__size span");
const root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose__color span");
const bg1 = document.querySelector(".bg__1");
const bg2 = document.querySelector(".bg__2");
const bg3 = document.querySelector(".bg__3");

// Sidebar

// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      document.querySelector(".notifications__popUp").style.display = "none";
    } else {
      document.querySelector(".notifications__popUp").style.display = "block";
      document.querySelector(
        "#notifications .notification__count"
      ).style.display = "none";
    }
  });
});

//Messages

//Searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

//Search chat
messageSearch.addEventListener("keyup", searchMessage);

//highlight message card on click on message icon
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--primary-color)";
  messagesNotification.querySelector(".notification__count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//Theme customization
const openThemeModal = () => {
  themeModal.style.display = "grid";
};

theme.addEventListener("click", openThemeModal);

//close theme modal
const closeThemeModal = (e) => {
  // themeModal.style.display = "none";
  if (e.target.classList.contains("customize__theme")) {
    themeModal.style.display = "none";
  }
};

themeModal.addEventListener("click", closeThemeModal);

//----- Fonts ______//

//remove class from spans or font size querySelector
const removeSizeSelected = () => {
  fontSize.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSize.forEach((size) => {
  size.addEventListener("click", () => {
    removeSizeSelected();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font__size__1")) {
      fontSize = "10px";

      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font__size__2")) {
      fontSize = "13px";

      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font__size__3")) {
      fontSize = "16px";

      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font__size__4")) {
      fontSize = "19px";

      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font__size__5")) {
      fontSize = "22px";

      root.style.setProperty("----sticky-top-left", "-12rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    //change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

//-----Remove active class from color palette---//
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

//------ Change primary color ------//
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeActiveColorClass();

    if (color.classList.contains("color__1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color__2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color__3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color__4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color__5")) {
      primaryHue = 202;
    }
    color.classList.add("active");

    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// Theme background values
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

//changes background color
const changeBackgroundColor = (color) => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

//change background colors on click

bg1.addEventListener("click", () => {
  //add active class
  bg1.classList.add("active");
  // Remove active class from other bg
  bg2.classList.remove("active");
  bg3.classList.remove("active");
  //remove customized changes from local storage
  window.location.reload();
});

bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  darkColorLightness = "95%";
  whiteColorLightness = "20%";

  // Add active class
  bg2.classList.add("active");
  // Remove active class from other bg
  bg1.classList.remove("active");
  bg3.classList.remove("active");

  changeBackgroundColor();
});

bg3.addEventListener("click", () => {
  lightColorLightness = "0%";
  darkColorLightness = "95%";
  whiteColorLightness = "10%";

  // Add active class
  bg3.classList.add("active");
  // Remove active class from other bg
  bg1.classList.remove("active");
  bg2.classList.remove("active");

  changeBackgroundColor();
});
