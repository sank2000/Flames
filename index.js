document.querySelector(".result").style.visibility = "hidden";

document.querySelector(".find").addEventListener("click",function()
{
    var str1 = document.querySelector(".name1").value;
    var str2 = document.querySelector(".name2").value;
    if(str1==="" || str2 ==="")
    {
        alert("Fill both the fields !!!");
        return;
    }
    else
    {
        var arr1=[];
        var count = 0;
        var str = "flames";
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        while(str1.includes(" "))
        {
            str1 = str1.replace(" ","");
        }
        while(str2.includes(" "))
        {
            str2 = str2.replace(" ","");
        }
        l1 = str1.length;
        l2 = str2.length;
        for(var i=0;i<l2;i++)
        {
            arr1.push(0);
        }
        for(var i=0;i<l1;i++)
        {
            for(var j=0;j<l2;j++)
            {
                if(str1.charAt(i)==str2.charAt(j) && arr1[j]==0)
                {
                    count++;
                    arr1[j]=1;
                    break;
                }
            }

        }
        var f_count=(l1-count)+(l2-count);
        if(f_count==0)
        {
            alert("Oops Same name"); 
            return;
        }        
        else
        {
            while(str.length!=1)
            {
                temp = (f_count % str.length-1);
                if(temp==-1)
                    str=str.substring(0,str.length-1);                   
                else
                {
                    var temp1,temp2;
                    temp1=str.substring(0,temp);
                    temp2=str.substring(temp+1);
                    str=temp2+temp1;
                }
            }
        }
        switch(str)
        {
            case 'f':
                document.querySelector(".res").innerText="Friends";
                document.querySelector(".ico").src = "img/f.png";
                break;
            case 'l':
                document.querySelector(".res").innerText ="Lover";
                document.querySelector(".ico").src = "img/l.png";
                break;
            case 'a':
                document.querySelector(".res").innerText ="Affection";
                document.querySelector(".ico").src = "img/a.png";
                break;
            case 'm':
                document.querySelector(".res").innerText ="Marriage";
                document.querySelector(".ico").src = "img/m.png";
                break;
            case 'e':
                document.querySelector(".res").innerText ="Enimes";
                document.querySelector(".ico").src = "img/e.png";
                break;
            case 's':
                document.querySelector(".res").innerText ="Siblings";
                document.querySelector(".ico").src = "img/s.png";
                break;
        }
        var aud = new Audio("img/Alert.mp3");
        aud.play();
        document.querySelector(".result").style.visibility = "visible";
   }

   

});