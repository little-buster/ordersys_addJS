function cyj_Main(){
    var imgElements = document.getElementsByTagName('img');
    var totalCount = parseFloat($('.cyj-2').text())
    $('.cyj-2').text('￥'+totalCount.toFixed(2))
    for (var i = 0; i < imgElements.length; i++) {
        var imgElement = imgElements[i];
        var src = imgElement.getAttribute('src');
        if(src&&src.indexOf('minus')!==-1){
            imgElement.addEventListener('click',function(){
                console.log("点击了减少")
                var amount = parseInt($(this).next('span.cyj-j').text())
                var single_price = parseInt($(this).closest('tr').find('.cyj-s').text())
                if(amount-1>=0){
                    amount--
                    $(this).next('span').text(amount)
                    totalCount=totalCount-single_price
                    console.log($(this).closest('tr').find('.cyj-s').text())
                    $('.cyj-2').text('￥'+totalCount.toFixed(2)) 
                    console.log($(this))
                    if ($(this).hasClass('cyj-hide')) {
                        console.log($(this))
                        $(this).removeClass('cyj-hide').show();
                    }
                
                    var nextSpan = $(this).next('span');
                    if (nextSpan.hasClass('cyj-hide')) {
                        nextSpan.removeClass('cyj-hide').show();
                    }
                }else if(amount==3){
                    
                }else {
                    alert("数量不能是负数");
                    amount = 0;
                    $(this).addClass('cyj-hide')
                    $(this).next('span.cyj-j').addClass('cyj-hide')
                    $(this).next('span.cyj-j').text(amount)
                }
            })
        }
        if(src&&src.indexOf('add')!==-1){
            imgElement.addEventListener('click',function(){
                console.log("点击了增加")
                var single_price = parseInt($(this).closest('tr').find('.cyj-s').text())
                var value = parseInt($(this).prev('.cyj-j').text())
                value++
                totalCount= totalCount+single_price
                console.log(totalCount)
                $(this).prev('.cyj-j').text(value)
                
            
                var prevSpan = $(this).prev('span');
                if (prevSpan.hasClass('cyj-hide')) {
                    prevSpan.removeClass('cyj-hide').show();
                }
                if(prevSpan.prev('img').hasClass('cyj-hide')){
                    prevSpan.prev('img').removeClass('cyj-hide').show();
                }
                $('.cyj-2').text('￥'+totalCount.toFixed(2)) 
            })
        }
    }
}


function cyj_updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var timeString = hours + ':' + minutes;
    document.getElementById('cyj-currentTime').innerText = timeString;
}
window.onload = function(){
    cyj_Main();
    setInterval(cyj_updateTime, 1000);
}


