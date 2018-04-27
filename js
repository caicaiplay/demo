     ;
     $(function()
     {

     	'use strict';

     	var sidebar = $('#sidebar'),
          entry = $('#entry'),
     	    mask = $('.mask'),
          sidebar_tigger = $('#sidebar_tigger'),
     	    sidebar_tigger1 = $('#sidebar_tigger1');

     	function showsidebar()  //显示侧栏函数
     	{
     		/*mask.fadeIn();*/
     		sidebar.animate({right:0},1000);
        entry.animate({right:350},1000);
     	}

     	function hiddensidebar() //隐藏侧栏函数
     	{
     		/*mask.fadeOut();*/
     		sidebar.animate({right:-sidebar.width()},1000);
        entry.animate({right:-sidebar.width()-entry.width()},1300);
     	}
     	sidebar_tigger.on('click' , showsidebar) //点击显示侧栏
     	mask.on('click',hiddensidebar)   //隐藏侧栏
      sidebar_tigger1.on('click' , hiddensidebar)//隐藏侧栏


          $('#return').on('click',function()  //返回顶部
          {
               $('html,body').animate({scrollTop:0},900);
          })


          $(window).on('scroll',function()  //监听scroll，隐藏or显示按钮
          {
             if ($(window).scrollTop() > $(window).height()) 
             {

              $('#return').fadeIn();
         }

         else
            {

          $('#return').fadeOut();
         }

     })
        $('#return').mouseenter(function()
        {
            $('#return').css('color','#fff');
        })

         $('#return').mouseleave(function()
        {
            $('#return').css('color','gray');
        })

        $(window).trigger('scroll')  //触发scroll事件

})
