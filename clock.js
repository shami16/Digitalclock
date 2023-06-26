
setInterval(showtime,1000)

function showtime(){
    var time=new Date()
    var hour=time.getHours()
    var min=time.getMinutes()
    var sec=time.getSeconds()
    var am_pm="AM"

    var hero=document.getElementById("hero").value
    if(hero=="12-HOURS")
    {
        var a = document.getElementById("date")
        a.style.visibility="hidden"

    if(hour>=12){
        am_pm="PM"
        hour=hour-12
    }
    if(hour==0){
        hour=12
        am_pm="AM"
    }
}
    var clock= document.getElementById("clock")
    var hour = hour<10 ? "0"+ hour : hour
    var min = min<10 ? "0"+ min : min
    var sec = sec<10 ? "0"+ sec : sec
    // clock.textContent=`${hour}:${min}:${sec}  ${am_pm}`

    var hrs= document.getElementById("hh")
    hrs.textContent = hour

    var mins= document.getElementById("mm")
    mins.textContent = min

    var secs= document.getElementById("ss")
    secs.textContent = sec

    var ampm= document.getElementById("ampm")
    ampm.textContent = am_pm
/////////////////////////////////////////////
    var dis=document.getElementById("date")

    if(hero=='date'){
          
        dis.style.visibility="visible"
        var day=time.getDay()
        var mon=time.getMonth()
        var year=time.getFullYear()
        var arr=["jan","feb","mar",'apr',"may","June","july","aug","sep","oct","nov","dec"]
        var arr1=['Sunday',"Monday","Tuesday",'Wednesday',"thursday","friday","sat"]
     
        var s1=document.getElementById("d1")
        var s2=document.getElementById("d2")
        var s3=document.getElementById("d3")

        s1.textContent=(arr1[day])
        s2.textContent=(arr[mon])
        s3.textContent=year

    }
}
