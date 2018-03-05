function initDatePickers() {
  // Load datepickers with Pikaday
  var $beginPicker = $('#beginDate');
  var $endPicker = $('#endDate');
  $beginPicker.pikaday({
    format: 'YYYY-MM-DD',
    onSelect: function(){
      selectBeginDate($beginPicker, $endPicker);
    }
  });
  $endPicker.pikaday({
    format: 'YYYY-MM-DD',
    onSelect: function(){
      selectEndDate($beginPicker, $endPicker);
    }
  });

  // Set bounds
  var pikadayBegin = $beginPicker.data('pikaday');
  var pikadayEnd = $endPicker.data('pikaday');
  setMaxDateInBeginPicker(pikadayBegin, pikadayEnd);
  setMinDateInEndPicker(pikadayBegin, pikadayEnd);
}

// Set bounds
function setMaxDateInBeginPicker(pikadayBegin, pikadayEnd) {
  var date = pikadayEnd.getDate();
  pikadayBegin.setMaxDate(date);
}

function setMinDateInEndPicker(pikadayBegin, pikadayEnd) {
  var date = pikadayBegin.getDate();
  pikadayEnd.setMinDate(date);
}

// Select dates
function selectBeginDate($beginPicker, $endPicker) {
  var pikadayBegin = $beginPicker.data('pikaday');
  var pikadayEnd = $endPicker.data('pikaday');
  setMinDateInEndPicker(pikadayBegin, pikadayEnd);
  submitOnFullDates(pikadayBegin, pikadayEnd);
}

function selectEndDate($beginPicker, $endPicker) {
  var pikadayBegin = $beginPicker.data('pikaday');
  var pikadayEnd = $endPicker.data('pikaday');
  setMaxDateInBeginPicker(pikadayBegin, pikadayEnd);
  submitOnFullDates(pikadayBegin, pikadayEnd);
}

function submitOnFullDates(pikadayBegin, pikadayEnd) {
  if (pikadayEnd.getDate() !== null && pikadayEnd.getDate() !== null) {
    var $form = $('#filterform');
    $form.submit();
  }
}

// "Beginning Date" is not empty before entering the "End Date"
$('#filters\\.dateFilters\\.endDate').on("click", function() {
  var $beginningDate = $('#filters\\.dateFilters\\.beginDate');
  if ($beginningDate.val() === "") {
    alert("Please, remmember to select the begin date.");
  }
});

// Loader
$(initDatePickers);
