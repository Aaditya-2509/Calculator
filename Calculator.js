let calculation = localStorage.getItem('calculation') || '';

      
      displayCalculation();

      function updateCalculation(value) {
        calculation += value;

        
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }

      function backspace() {
        const display = document.querySelector('.calculation');
        display.value = display.value.slice(0, -1);
      }
      