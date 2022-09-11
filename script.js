$(document).ready(function(){
    $('.res').click(function() {
        location.reload();
    });
    $(".x").click(function(){
        $(".winer").hide()
        $(".sec").show()
        $(".r").show()
    })
    let n = 1
    let arr = []
    const win = [[0,1,2],
                 [6,7,8],
                 [3,4,5],
                 [0,3,6],
                 [1,4,7],
                 [2,5,8],
                 [0,4,8],
                 [2,4,6],]
    let o = []
    let x = []
    $(".winer").hide()
    $(".card").click(function(){
        n += 1
        if (arr.includes($(this).index()) == true){
            n -= 1
        }
    else{
      if (n % 2 == 0){
        $(this).children(".fa-o").show()
        arr.push($(this).index())
        o.push($(this).index())
        $(this).addClass("bo");
            for (i = 0;i < win.length; i++){
                let no = 0
                for (j = 0 ; j < 3 ; j++  ){
                    if (o.includes(win[i][j]) == true){
                        no += 1
                        if (no == 3){
                            $(".wintext").css("color","green")
                            $(".win").css("background","radial-gradient(#fff 10%,green)")
                            $(".winer").show()
                            $(".r").hide()
                            break
                        }
                    }
                }
            }
      }
    else{
        $(this).children(".fa-x").show()
        arr.push($(this).index())
        x.push($(this).index())
        $(this).addClass("bx");
        
        for (i = 0;i < win.length; i++){
            let nx = 0
            for (j = 0 ; j < 3 ; j++  ){
                if (x.includes(win[i][j]) == true){
                    nx += 1
                    if (nx == 3){
                        $(".wintext").css("color","red")
                        $(".win").css("background","radial-gradient(#fff 10%,red)")
                        $(".winer").show()
                        $(".r").hide()
                        break
                    }
                }
            }  
        }
      }
    
    }
    });
  });


  // bu negadur ishlamayapti shuni ng uchun buni qoshishni maqul kormadim

  //   else if (c.length == 5 ){     
    //     $(".wintext").css("color","blue")
    //     $(".wintext").text("winner no")
    //     $(".win").css("background","radial-gradient(#fff 10%,blue)")
    //     $(".winer").show()
    //     $(".r").hide() 
    // }  