
var current
$('.gallery  img').click(function (e) {
   e.preventDefault();
   //防止元素发生默认行为。
   $('#myModal').modal('show')
   $('#myModal').find('.modal-body img').attr('src', $(this).attr('src'))

   current = $(this)
});
$('#myModal  .modal-footer span').eq(1).click(function () {
   console.log(Boolean(current.parent().next().find('img')[0]));
   
   // if (current.parent().next().find('img')[0]) {
       current = current.parent().next().find('img')
       console.log(current);
       
   // }

   // console.log(current);
   $('#myModal').find('.modal-body img').attr('src', current.attr('src'))
})
$('#myModal  .modal-footer span').eq(0).click(function () {
   // if (current.parent().prev().find('img')[0]) {
       current = current.parent().prev().find('img')
   // }

   console.log(current);

   $('#myModal').find('.modal-body img').attr('src', current.attr('src'))
})

$('#myModal').on('hidden.bs.modal', function (e) {
   console.log('隐藏起来');

})
$('#myModal').on('shown.bs.modal', function (e) {
   console.log('显示出来了');

})
$('#myModal').on('show.bs.modal', function (e) {
   console.log('开始显示');

})