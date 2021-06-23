//main.js
$(function(){    
});

    
    //굿사이트 정보 데이터 
    var goodSiteInfo = [
        {
            imgSrc: 'images/img4.gif',
            url: 'https://studiobig.co.uk/',
            title: 'studioBIG'
        },
        {
            imgSrc: 'images/giphy1.gif',
            url: 'http://www.emmadarvick.com/kinkyboots',
            title: 'EMMA DARVICK'
        },
        {
            imgSrc: 'images/andy.gif',
            url: 'http://waaarhol.com/',
            title: '앤디워홀'
        }
    ];

    var num = 0; //데이터 인덱스번호 넣으면 바뀜
    
    //이미지 사이트 정보 변경 함수   num 을 ()값으로 바꾸기
    function changeSiteInfo(num){
    /*이미지변경*/
    $('#sidebar > figure img').attr('src', goodSiteInfo[num].imgSrc);

    /*홈페이지주소변경*/
    $('#sidebar > figure .url').text(goodSiteInfo[num].url);

    /*제목변경*/
    $('#sidebar > figure .home_title').text(goodSiteInfo[num].title);

    //siteLink에 링크 url추가(새창열기)
    $('.siteLink').attr('href', goodSiteInfo[num].url);
    }


//다음 사이트 정보 
   function nextSiteInfo() {
       //다음이미지 카운트 
       num = num + 1; 
       //마지막 정보이면 처음으로
       if(num > 2) {
           num = 0;
       }     
       changeSiteInfo(num);       
    }
    function prevSiteInfo() {
        num = num - 1;
        if(num < 0) {
            num = 2;
        }
        
        changeSiteInfo(num);
        
}