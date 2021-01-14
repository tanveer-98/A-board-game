

  var player1=prompt("You are player 1,Please enter your name! ");
  var player2=prompt("You are player 2,Please enter your name! ");
  $('p').text(player1+" : it's your turn.");

  var player1color='rgb(255, 0, 0)';
  var player2color='rgb(0, 0, 255)';

  // $('button').eq(0).css('background-color', player1color);
  var currentplayer=player1;

  //function to flip  the player

  function playerflip()
  {
   if(currentplayer==player1)
   return player2;
   else return player1;
  }
  function getcolor(player)
  {
    if(player==player1)
    return player1color;
    else return player2color;
  }
  function findcolor(row,col)
  {
    return tables.eq(row).find('td').eq(col).find('button').css('background-color');
  }

  function checkvertical(col)
  {
   var currentcolor=getcolor(currentplayer);

   var count=0;
   for(var i=5;i>=0;i--)
   {
     //console.log(findcolor(i,col));
     if(count==4)
     {
        return true;
     }
     console.log("currentcolor: "+currentcolor+"     findcolor: "+findcolor(i,col));
     console.log();
     if(findcolor(i,col)==currentcolor)
     {
       console.log("yes");
      count++;
     }
     else
     {
       count=0;
     }
   }
   return false;
  }

  function checkhorizontal(row)
  {
    var currentcolor=getcolor(currentplayer);

    var count=0;
    for(var i=5;i>=0;i--)
    {
      //console.log(findcolor(i,col));

      console.log("currentcolor: "+currentcolor+"     findcolor: "+findcolor(row,i));

      if(findcolor(row,i)==currentcolor)
      {
        console.log("yes");
       count++;
      }
      else
      {
        count=0;
      }

      if(count==4)
      {
         return true;
      }
    }
    return false;
  }

  function checkdiagonal(row,col)
  {


  }
  //tables
  tables=$('table tr');


  var available=[6,6,6,6,6,6];

  function changecolor(row,col,player)
  {
      tables.eq(row).find('td').eq(col).find('button').css('background-color', getcolor(player));
  }



  $('button').on('click', function()
  {
    //closest refers to the nearest mentioned parent
  //  console.log("col: "+$(this).closest('td').index());
    //console.log("row: "+$(this).closest('tr').index());

    var col=$(this).closest('td').index();
    var row=$(this).closest('tr').index();

    changecolor(available[col]-1,col,currentplayer);



    if(checkvertical(col)||checkhorizontal(available[col]-1)||checkdiagonal(row,col))
    {
       alert(currentplayer+": has won the game ");
    }
    currentplayer=playerflip();

    if(currentplayer==player1)
    {
        $('p').text(player1+" : it's your turn.");
    }
    else
    {
          $('p').text(player2+" : it's your turn.");
    }

    available[col]--;

  })



 function resetcolor()
 {
   for(var i=0;i<6;i++)
   {
     for(var j=0;j<6;j++)
     {
       tables.eq(i).find('td').eq(j).find('button').css('background-color', 'gray');
     }
   }
 }
  $('#res').on('click', function()
  {
      for(var i=0;i<6;i++)
      {
        available[i]=6;
      }
      resetcolor();
  })
