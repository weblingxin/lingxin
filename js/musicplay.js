    window.onload=function(){
		var kai=document.getElementById('start')
		var guan=document.getElementById('stop')
		var yy=document.getElementById('song')
		var icon=document.getElementById('icon')
		
	       kai.onclick=function(){
			   kai.style.display="none"
			   guan.style.display="block"
			   yy.play()
			   icon.style.backgroundPosition="0 -41px"
			   }
		   guan.onclick=function(){
			   kai.style.display="block"
			   guan.style.display="none"
			   yy.pause()
			   icon.style.backgroundPosition="0 0"
			   }  
		}