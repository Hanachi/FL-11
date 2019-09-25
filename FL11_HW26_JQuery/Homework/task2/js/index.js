const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
const $remove = $('button.item-remove');
const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
(function() {
  //Create task
  $add.click(function(e) {
    e.preventDefault();
    if($input.val() == '') {
      alert('Будь ласка, введіть дані!');
    } else {
    $list.append(`<li class='item'>
      <span class='item-text'>${$input.val()}</span>
      <button class="item-remove">Remove</button>
      </li>`
    )
    localStorage.setItem('listed', $list);
    }
  });
  //Delete task
  $(document).on('click', '.item-remove', function() {
    $(this).parent().remove();
  })
  //Complete task
  $(document).on('click', '.item-text', function() {
    $(this).addClass('done');
  })
}());
//Plugin delete class done from your class
//Example >>> $('.item-text').removeComplete('done');
$.fn.removeComplete = function(classD) { 
  if(this.hasClass('done')) {
    this.removeClass('done',classD);
    return this;
  }
}
