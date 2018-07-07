function tabs() {
  var noClick = document.querySelectorAll('.no_click'),
          decor = document.querySelector('.decoration'),
          decorItem = document.getElementsByClassName('decoration_item'),
          decorA = document.querySelectorAll('.no_click>a'),
          decorContent = document.querySelectorAll('.tabContent2');
          //decorContent = document.querySelectorAll('.decor_content');

          console.log(noClick);
          //console.log(decor);
          //console.log(decorItem);
          //console.log(decorA);
          console.log(decorContent);


      function showTabClass(a) {
        for (var t = 0; t < noClick.length; t++) {
          noClick[t].classList.remove('after_click');
          decorContent[t].style.display = 'none';
        }
        noClick[a].classList.add('after_click');
        decorContent[a].style.display = 'block';
      }

      decor.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('no_click')) {
          for (var i = 0; i < decorA.length; i++) {
            if (target == decorA[i]) {
              showTabClass(i);
              break;
            }
          }
        }
      });
      
var glazingSlider = document.querySelector('.glazing_slider'),
          glazingSliderA = document.querySelectorAll('.glazing_block>a'),
          glazingRow = document.querySelectorAll('.tabContent');

      glazingSlider.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('glazing_block')) {
          for (var i = 0; i < glazingSliderA.length; i++) {
            if (target == glazingSliderA[i]) {
              for (var t = 0; t < glazingSliderA.length; t++) {
                glazingSliderA[t].classList.remove('active');
                glazingRow[t].style.display = 'none';
              }
              glazingSliderA[i].classList.add('active');
              glazingRow[i].style.display = 'block';
              break;
            }
          }
        }
      });
    }

module.exports = tabs;