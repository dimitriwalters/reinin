$(document).ready(function() {
  var t = $('table').clone();
  function initTable() {
    $('table').DataTable({
      'sDom': 't',
      'paging': false,
    });
    $('a').click(function() {
      window.open($(this).attr('href'), '_blank');
      return false;
    });
  }
  $(':checkbox').change(function() {
    var t2 = t.clone();
    $('.dataTables_wrapper').remove();
    $('body').append(t2);
    initTable();
    t = t2;
    var type = $(this).data('type');
    if (type) {
      $('.row-' + $(this).data('type')).toggle();
    } else {
      $('tbody tr').toggle($('.check-all').is(':checked'));
      $(':checkbox').prop('checked', $('.check-all').is(':checked'));
    }
  });
  initTable();
});