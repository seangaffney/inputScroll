$.fn.roll = function(direction, amount) {
  
  if (typeof rolling == 'undefined') {
    rolling = false;
  }
  
  if (!rolling) {
    rolling = true;
    amount = amount || 10;
    self = $(this);
    $newAmount = self.clone();
    
    self.attr('name', self.attr('name')+'_old');
    
    height = self.height();
    
    dollas = parseInt(self.val().replace('$', ''));
  
    if (direction == 'down') {
      if (dollas <= 0) {
        dollas = 0;
      } else {
       dollas -= amount;
       go = false;
      }
      modifier = '';
      move = '-';
    } else {
      dollas += amount;
      modifier = '-';
      move = '+';
    }
  
    $newAmount.val('$'+dollas).css('top', modifier+height+'px');
 
    self.parent().append($newAmount);
  
    $('.'+self.attr('class')).stop(true, true).animate({top: move + '=' + height}, 200, function(){
      self.remove();
      rolling = false;
    });
  
    return true;
  } else {
    return false;
  }
}