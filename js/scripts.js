$(function () {
  //Declare global variables
  const shelf = 'shelf';

  //Add instruments to stage from shelf and make them draggable
  function addInstrument(instrument, limit, posX, posY) {
    $('#' + shelf + ' .' + instrument).click(function () {
      //Clone instrument to stage if within max limit of instrument type
      if ($('.' + instrument).length <= limit) {
        $(this)
          .clone()
          .appendTo(`#theStage`)
          .addClass('dragon')
          .css({ left: posX + '%', top: posY + '%' });
      }

      //Toggle control handles
      $('.controls').hide();
      $('.controlsShow').click(function () {
        $('#theStage .controls').show().addClass('show').removeClass('hide');
        $(this).addClass('off').removeClass('on');
        $('.controlsHide').addClass('on').removeClass('off');
      });
      $('.controlsHide').click(function () {
        $('#theStage .controls').addClass('hide').removeClass('show').hide();
        $(this).addClass('off').removeClass('on');
        $('.controlsShow').addClass('on').removeClass('off');
      });

      //Instrument is draggable within the boundaries of the stage
      $('.dragon').udraggable({
        containment: '#theStage',
      });

      //Enable remove control
      $('.remove').on('click touchstart', function () {
        $(this).closest('span').remove();
      });

      //Enable rotation control
      var degrees = 0;
      $('.rotate').on('click touchstart', function () {
        degrees = degrees + 45;
        $(this)
          .closest('span')
          .find('img')
          .css('transform', 'scale(0.6) rotateZ(' + degrees + 'deg)');
      });

      //Reset transforms
      var zero = 0;
      $('.reset').on('click touchstart', function () {
        $(this).closest('span').find('img').css('transform', '');
      });

      //Clear the stage
      $('.clearStage').on('click touchstart', function () {
        $('#stage .instrument').remove();
      });
    });
  }

  //Toggle controls on staged instruments
  //    function controlsToggle() {
  //        $('.controlsShow').click(function () {
  //            $('#theStage .controls').addClass('show').removeClass('hide');
  //        });
  //        $('.controlsHide').click(function () {
  //            $('#theStage .controls').addClass('hide').removeClass('show');
  //        });
  //    }

  //Show and hide the gear shelf
  function shelfToggle() {
    $('.shelfToggle').click(function () {
      $('#shelf').slideToggle();
    });
  }

  //Print Preview
  function printPreview() {
    $('.printPreview').click(function () {
      $('.printHide').toggle();
    });
  }

  //Show and hide the Navigation on mobile
  function menuToggle() {
    $('.mobileNav').click(function () {
      $('.nav-menu').slideToggle();
    });
  }

  //Add Instruments to stage (name, max quantity, x position, y position)

  addInstrument('guitar', 5, 84, 50);
  addInstrument('bassElectric', 3, 24, 50);
  addInstrument('keyboard', 3, 32, 70);
  addInstrument('laptop', 5, 42, 66);
  addInstrument('keytar', 3, 51, 67);
  addInstrument('guitarAcoustic', 5, 78, 70);
  addInstrument('bassUpright', 3, 14, 38);
  addInstrument('standMicStraight', 10, 56, 60);
  addInstrument('standMicBoom', 10, 63, 59);
  addInstrument('barstool', 10, 72, 75);
  addInstrument('drumsFour', 3, 46, 22);
  addInstrument('drumsSix', 3, 46, 22);
  addInstrument('monitorTop', 10, 12, 90);
  addInstrument('monitorWedge', 10, 24, 82);
  addInstrument('comboGuitar', 5, 89, 58);
  addInstrument('comboBass', 3, 38, 33);
  addInstrument('stackFull', 5, 76, 7);
  addInstrument('stackHalf', 5, 67, 24);
  addInstrument('cabinetBassSixTen', 5, 22, 17);
  addInstrument('cabinetBassEightTen', 5, 30, 12);
  addInstrument('pianoGrand', 3, 0, 0);
  addInstrument('pianoUpright', 3, 5, 50);
  addInstrument('mandolin', 3, 79, 50);
  addInstrument('violin', 5, 90, 70);
  addInstrument('electric', 15, 50, 53);
  addInstrument('banjo', 5, 83, 70);
  addInstrument('text', 99, 83, 70);
  addInstrument('gong', 5, 85, 12);

  //    controlsToggle();
  shelfToggle();
  printPreview();
  menuToggle();
});
