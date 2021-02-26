function nav_toggle()
{   var btn= document.getElementById('btn');
    var navbarClassList =document.getElementById('nav-menu').classList;
    navbarClassList.toggle('hide');
    btn.classList.toggle('shift');
}

              
// function displayDot(a)
// {
//     console.log(a);
//     var b =getElementById(a);
//     b.innerHTML+=
// }

// function hideDot(a)
// {
//     var b =getElementById(a)
// }

// window.addEventListener('scroll',()=>{
//     var scrolled = window.scrollY;
//     console.log(scrolled);
//     if(scrolled==0 &&scrolled<768)
//     {   let present=0;
//         var intro = document.getElementById('li-1').classList;
//         for(let i=0;i<intro.length;i++)
//         {
//             if(intro[i]=='dot')
//             {
//                 continue;
//                 present=1;
//             }
//             else if(intro[i]=='dot')
//         }

//     }
//     else if(scrolled==0 &&scrolled<768)
//     {
//         var intro = document.getElementById('li-2').classList.toggle(dot);

//     }
//     else if(scrolled==768 &&scrolled<1536)
//     {
//         var intro = document.getElementById('li-3').classList.toggle(dot);

//     }
//     else if(scrolled==0 &&scrolled<2304)
//     {
//         var intro = document.getElementById('li-4').classList.toggle(dot);

//     }
//     else if(scrolled==0 &&scrolled<3072)
//     {
//         var intro = document.getElementById('li-5').classList.toggle(dot);

//     }
    // else{
    //     var intro = document.getElementById('li-1').classList.toggle(dot);
        
    // }
    
// });