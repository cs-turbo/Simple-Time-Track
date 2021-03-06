/* 
 * Copyright (c) 2011 Roman Ožana. All rights reserved.
 * @author Roman Ožana <ozana@omdesign.cz>
 * @link www.omdesign.cz
 * @version 15.3.2011
 */

function save_options() 
{
  var select = document.getElementById("color");
  var color = select.children[select.selectedIndex].value;
  
  localStorage["favorite_color"] = color;

  var status = document.getElementById("status");
  
  status.innerHTML = "Options Saved.";
  
  setTimeout(function() {
    status.innerHTML = "";
  }, 750);
  
}

function restore_options() 
{
  var favorite = localStorage["favorite_color"];
  
  if (!favorite) {
    return;
  }
  
  var select = document.getElementById("color");
  
  for (var i = 0; i < select.children.length; i++) 
  {
    var child = select.children[i];
    if (child.value == favorite) {
      child.selected = "true";
      break;
    }
  }
}