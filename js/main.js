!function(c){var t={};function n(e){if(t[e])return t[e].exports;var l=t[e]={i:e,l:!1,exports:{}};return c[e].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=c,n.c=t,n.d=function(c,t,e){n.o(c,t)||Object.defineProperty(c,t,{enumerable:!0,get:e})},n.r=function(c){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},n.t=function(c,t){if(1&t&&(c=n(c)),8&t)return c;if(4&t&&"object"==typeof c&&c&&c.__esModule)return c;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:c}),2&t&&"string"!=typeof c)for(var l in c)n.d(e,l,function(t){return c[t]}.bind(null,l));return e},n.n=function(c){var t=c&&c.__esModule?function(){return c.default}:function(){return c};return n.d(t,"a",t),t},n.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)},n.p="",n(n.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\r\n\r\n// service worker registration - remove if you're not going to use it\r\n\r\nif ('serviceWorker' in navigator) {\r\n    window.addEventListener('load', function () {\r\n        navigator.serviceWorker.register('serviceworker.js').then(function (registration) {\r\n            // Registration was successful\r\n            console.log('ServiceWorker registration successful with scope: ', registration.scope);\r\n        }, function (err) {\r\n            // registration failed :(\r\n            console.log('ServiceWorker registration failed: ', err);\r\n        });\r\n    });\r\n}\r\n\r\nconst switcherMenu = document.querySelector('.header__nav-switcher-box--js'),\r\n    navigation = document.querySelector('.nav--js'),\r\n    menuIcon = document.querySelector('.header__nav-switcher--js'),\r\n    btnAddGlass = document.querySelector('.btn--add-js'),\r\n    btnRemoveGlass = document.querySelector('.btn--substract-js'),\r\n    counterGlasses = document.querySelector('.app__header-counter--js'),\r\n    hidePartStatistics = document.querySelector('.statistics__switcher-box--js'),\r\n    statistics = document.querySelector('.statistics--js'),\r\n    statisticsLink = document.querySelector('.nav__list-item-statistic--js'),\r\n    hidePartAchievements = document.querySelector('.achievements__switcher-box--js'),\r\n    achievements = document.querySelector('.achievements--js'),\r\n    achievementsLink = document.querySelector('.nav__list-item-achievement--js'),\r\n    hidePartContact = document.querySelector('.contact__switcher-box--js'),\r\n    contact = document.querySelector('.contact--js'),\r\n    contactLink = document.querySelector('.nav__list-item-contact--js'),\r\n    hidePartSettings = document.querySelector('.settings__switcher-box--js'),\r\n    settings = document.querySelector('.settings--js'),\r\n    settingsLink = document.querySelector('.nav__list-item-settings--js');\r\n\r\nlet glasses = 0;\r\nconst key = new Date().toISOString().slice(0, 10);\r\n\r\nfunction toggleMenu() {\r\n    navigation.removeAttribute('hidden');\r\n    navigation.classList.toggle('nav--animation-right');\r\n    navigation.classList.toggle('nav--animation-left');\r\n    menuIcon.classList.toggle('header__nav-switcher--close');\r\n    menuIcon.classList.toggle('header__nav-switcher');\r\n}\r\n\r\nfunction showStatistics() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    statistics.removeAttribute('hidden');\r\n    statistics.classList.add('nav--animation-right');\r\n    statistics.classList.remove('nav--animation-left');\r\n    arrowLeft.style.opacity = '0';\r\n}\r\n\r\nfunction hideStatistics() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    statistics.classList.remove('nav--animation-right');\r\n    statistics.classList.add('nav--animation-left');\r\n    arrowLeft.style.opacity = null;\r\n}\r\n\r\nfunction showAchievements() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    achievements.removeAttribute('hidden');\r\n    achievements.classList.add('nav--animation-right');\r\n    achievements.classList.remove('nav--animation-left');\r\n    arrowLeft.style.opacity = '0';\r\n}\r\n\r\nfunction hideAchievements() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    achievements.classList.remove('nav--animation-right');\r\n    achievements.classList.add('nav--animation-left');\r\n    arrowLeft.style.opacity = null;\r\n}\r\n\r\nfunction showContact() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    contact.removeAttribute('hidden');\r\n    contact.classList.add('nav--animation-right');\r\n    contact.classList.remove('nav--animation-left');\r\n    arrowLeft.style.opacity = '0';\r\n}\r\n\r\nfunction hideContact() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    contact.classList.remove('nav--animation-right');\r\n    contact.classList.add('nav--animation-left');\r\n    arrowLeft.style.opacity = null;\r\n}\r\n\r\nfunction showSettings() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    settings.removeAttribute('hidden');\r\n    settings.classList.add('nav--animation-right');\r\n    settings.classList.remove('nav--animation-left');\r\n    arrowLeft.style.opacity = '0';\r\n}\r\n\r\nfunction hideSettings() {\r\n    const arrowLeft = document.querySelector('.header__nav-switcher--close');\r\n    settings.classList.remove('nav--animation-right');\r\n    settings.classList.add('nav--animation-left');\r\n    arrowLeft.style.opacity = null;\r\n}\r\n\r\nif (!localStorage.getItem(key)) {\r\n    localStorage.setItem(key, 0);\r\n    counterGlasses.innerHTML = `0/${maxGlasses}`;\r\n} else {\r\n    counterGlasses.innerHTML = `${localStorage.getItem(key)}`;\r\n}\r\n\r\nfunction addGlass() {\r\n    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1);\r\n    counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key))}`;\r\n}\r\n\r\nfunction removeGlass() {\r\n    if (localStorage.getItem(key) < 1) {\r\n        counterGlasses.innerHTML = `${parseInt(0)}`;\r\n    } else {\r\n        counterGlasses.innerHTML = `${parseInt(localStorage.getItem(key) - 1)}`;\r\n        localStorage.setItem(key, parseInt(localStorage.getItem(key)) - 1);\r\n    }\r\n}\r\n\r\nbtnRemoveGlass.addEventListener('click', removeGlass);\r\nbtnAddGlass.addEventListener('click', addGlass);\r\nswitcherMenu.addEventListener('click', toggleMenu);\r\nstatisticsLink.addEventListener('click', showStatistics);\r\nachievementsLink.addEventListener('click', showAchievements);\r\nhidePartStatistics.addEventListener('click', hideStatistics);\r\nhidePartAchievements.addEventListener('click', hideAchievements);\r\ncontactLink.addEventListener('click', showContact);\r\nhidePartContact.addEventListener('click', hideContact);\r\nsettingsLink.addEventListener('click', showSettings);\r\nhidePartSettings.addEventListener('click', hideSettings);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQyxDQUFDO0FBQ0Qsa0NBQWtDLDBCQUEwQjtBQUM1RDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQztBQUN0RTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLFlBQVk7QUFDbEQsS0FBSztBQUNMLHNDQUFzQyx3Q0FBd0M7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gc2VydmljZSB3b3JrZXIgcmVnaXN0cmF0aW9uIC0gcmVtb3ZlIGlmIHlvdSdyZSBub3QgZ29pbmcgdG8gdXNlIGl0XHJcblxyXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3NlcnZpY2V3b3JrZXIuanMnKS50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBmYWlsZWQ6ICcsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3Qgc3dpdGNoZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLWJveC0tanMnKSxcclxuICAgIG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LS1qcycpLFxyXG4gICAgbWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtc3dpdGNoZXItLWpzJyksXHJcbiAgICBidG5BZGRHbGFzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWFkZC1qcycpLFxyXG4gICAgYnRuUmVtb3ZlR2xhc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1zdWJzdHJhY3QtanMnKSxcclxuICAgIGNvdW50ZXJHbGFzc2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcF9faGVhZGVyLWNvdW50ZXItLWpzJyksXHJcbiAgICBoaWRlUGFydFN0YXRpc3RpY3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljc19fc3dpdGNoZXItYm94LS1qcycpLFxyXG4gICAgc3RhdGlzdGljcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzLS1qcycpLFxyXG4gICAgc3RhdGlzdGljc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0LWl0ZW0tc3RhdGlzdGljLS1qcycpLFxyXG4gICAgaGlkZVBhcnRBY2hpZXZlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNoaWV2ZW1lbnRzX19zd2l0Y2hlci1ib3gtLWpzJyksXHJcbiAgICBhY2hpZXZlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNoaWV2ZW1lbnRzLS1qcycpLFxyXG4gICAgYWNoaWV2ZW1lbnRzTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QtaXRlbS1hY2hpZXZlbWVudC0tanMnKSxcclxuICAgIGhpZGVQYXJ0Q29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0X19zd2l0Y2hlci1ib3gtLWpzJyksXHJcbiAgICBjb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QtLWpzJyksXHJcbiAgICBjb250YWN0TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2xpc3QtaXRlbS1jb250YWN0LS1qcycpLFxyXG4gICAgaGlkZVBhcnRTZXR0aW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5nc19fc3dpdGNoZXItYm94LS1qcycpLFxyXG4gICAgc2V0dGluZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtLWpzJyksXHJcbiAgICBzZXR0aW5nc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19saXN0LWl0ZW0tc2V0dGluZ3MtLWpzJyk7XHJcblxyXG5sZXQgZ2xhc3NlcyA9IDA7XHJcbmNvbnN0IGtleSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgbmF2aWdhdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBtZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdi1zd2l0Y2hlci0tY2xvc2UnKTtcclxuICAgIG1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2LXN3aXRjaGVyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTdGF0aXN0aWNzKCkge1xyXG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1jbG9zZScpO1xyXG4gICAgc3RhdGlzdGljcy5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgc3RhdGlzdGljcy5jbGFzc0xpc3QuYWRkKCduYXYtLWFuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgc3RhdGlzdGljcy5jbGFzc0xpc3QucmVtb3ZlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBhcnJvd0xlZnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVN0YXRpc3RpY3MoKSB7XHJcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtc3dpdGNoZXItLWNsb3NlJyk7XHJcbiAgICBzdGF0aXN0aWNzLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICBzdGF0aXN0aWNzLmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLWxlZnQnKTtcclxuICAgIGFycm93TGVmdC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0FjaGlldmVtZW50cygpIHtcclxuICAgIGNvbnN0IGFycm93TGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdi1zd2l0Y2hlci0tY2xvc2UnKTtcclxuICAgIGFjaGlldmVtZW50cy5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgYWNoaWV2ZW1lbnRzLmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICBhY2hpZXZlbWVudHMuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LS1hbmltYXRpb24tbGVmdCcpO1xyXG4gICAgYXJyb3dMZWZ0LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVBY2hpZXZlbWVudHMoKSB7XHJcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtc3dpdGNoZXItLWNsb3NlJyk7XHJcbiAgICBhY2hpZXZlbWVudHMuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LS1hbmltYXRpb24tcmlnaHQnKTtcclxuICAgIGFjaGlldmVtZW50cy5jbGFzc0xpc3QuYWRkKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBhcnJvd0xlZnQuc3R5bGUub3BhY2l0eSA9IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDb250YWN0KCkge1xyXG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1jbG9zZScpO1xyXG4gICAgY29udGFjdC5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXYtLWFuaW1hdGlvbi1yaWdodCcpO1xyXG4gICAgY29udGFjdC5jbGFzc0xpc3QucmVtb3ZlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBhcnJvd0xlZnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZUNvbnRhY3QoKSB7XHJcbiAgICBjb25zdCBhcnJvd0xlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19uYXYtc3dpdGNoZXItLWNsb3NlJyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5yZW1vdmUoJ25hdi0tYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLWxlZnQnKTtcclxuICAgIGFycm93TGVmdC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1NldHRpbmdzKCkge1xyXG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1jbG9zZScpO1xyXG4gICAgc2V0dGluZ3MucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcclxuICAgIHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLXJpZ2h0Jyk7XHJcbiAgICBzZXR0aW5ncy5jbGFzc0xpc3QucmVtb3ZlKCduYXYtLWFuaW1hdGlvbi1sZWZ0Jyk7XHJcbiAgICBhcnJvd0xlZnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVNldHRpbmdzKCkge1xyXG4gICAgY29uc3QgYXJyb3dMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2LXN3aXRjaGVyLS1jbG9zZScpO1xyXG4gICAgc2V0dGluZ3MuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LS1hbmltYXRpb24tcmlnaHQnKTtcclxuICAgIHNldHRpbmdzLmNsYXNzTGlzdC5hZGQoJ25hdi0tYW5pbWF0aW9uLWxlZnQnKTtcclxuICAgIGFycm93TGVmdC5zdHlsZS5vcGFjaXR5ID0gbnVsbDtcclxufVxyXG5cclxuaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIDApO1xyXG4gICAgY291bnRlckdsYXNzZXMuaW5uZXJIVE1MID0gYDAvJHttYXhHbGFzc2VzfWA7XHJcbn0gZWxzZSB7XHJcbiAgICBjb3VudGVyR2xhc3Nlcy5pbm5lckhUTUwgPSBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpfWA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEdsYXNzKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSArIDEpO1xyXG4gICAgY291bnRlckdsYXNzZXMuaW5uZXJIVE1MID0gYCR7cGFyc2VJbnQobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSl9YDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlR2xhc3MoKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA8IDEpIHtcclxuICAgICAgICBjb3VudGVyR2xhc3Nlcy5pbm5lckhUTUwgPSBgJHtwYXJzZUludCgwKX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb3VudGVyR2xhc3Nlcy5pbm5lckhUTUwgPSBgJHtwYXJzZUludChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIC0gMSl9YDtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIC0gMSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ0blJlbW92ZUdsYXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVtb3ZlR2xhc3MpO1xyXG5idG5BZGRHbGFzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEdsYXNzKTtcclxuc3dpdGNoZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlTWVudSk7XHJcbnN0YXRpc3RpY3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1N0YXRpc3RpY3MpO1xyXG5hY2hpZXZlbWVudHNMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FjaGlldmVtZW50cyk7XHJcbmhpZGVQYXJ0U3RhdGlzdGljcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVTdGF0aXN0aWNzKTtcclxuaGlkZVBhcnRBY2hpZXZlbWVudHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlQWNoaWV2ZW1lbnRzKTtcclxuY29udGFjdExpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q29udGFjdCk7XHJcbmhpZGVQYXJ0Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVDb250YWN0KTtcclxuc2V0dGluZ3NMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NldHRpbmdzKTtcclxuaGlkZVBhcnRTZXR0aW5ncy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVTZXR0aW5ncyk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);