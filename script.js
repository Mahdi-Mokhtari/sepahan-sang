function convertEnglishNumbersToPersian(text) {
      const englishNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
      return text.replace(/[0-9]/g, function(w) {
          return persianNumbers[englishNumbers.indexOf(w)];
      });
  }

  function convertAllNumbers() {
      const elements = document.querySelectorAll('*');
      elements.forEach(element => {
          if (element.children.length === 0) {
              element.innerHTML = convertEnglishNumbersToPersian(element.innerHTML);
          }
      });
  }

  document.addEventListener("DOMContentLoaded", convertAllNumbers);