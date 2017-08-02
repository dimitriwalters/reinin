$(document).ready(function() {
  $('table').DataTable({
    'sDom': 't',
    'paging': false,
  });
  $('a').click(function() {
    window.open($(this).attr('href'), '_blank');
    return false;
  });
});