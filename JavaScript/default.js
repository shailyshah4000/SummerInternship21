        //variable
        /*
        var a=5;
        var b=5;
        var result=a+b;
        document.write("<h1>result is:"+result+"</h1>"); 

        //if-else statement

        var x=4;
        if(x%2==0)
        {
            document.write("<h3>even number</h3>");
        }
        else
        {
            document.write("<h3>odd number</h3>")
        }

        //switch-case

        var day=5;
        switch(day)
        {
            case 1:
                document.write("<h2>sunday</h2>");
                break;
            case 2:
                    document.write("<h2>monday</h2>");
                    break;  
            case 3:
                document.write("<h2>tuesday</h2>");
                break;
            case 4:
                document.write("<h2>wedday</h2>");
                break;
            case 5:
                document.write("<h2>thusday</h2>");
                break;
            case 6:
                    document.write("<h2>friday</h2>");
                    break;
            case 7:
                document.write("<h2>saturday</h2>");
                break;
            default:
                    document.write("not in week");
                    break;
        }

        //for loop

        var i=5;
        var j;
        for(j=1;j<=10;j++)
        {
            document.write("<h2>"+i+" * "+j+"="+i*j+"</h2>");
        }

        //while loop

        var x=1;
        while(x<10)
        {
            document.write("<h2>"+x+"</h2>");
            x+=2;
        }

        //function

        function add_Number()
        {
            var x=5;
            var y=3;
            var total=x+y;
            document.write("<h2> total is "+total+"</h2>");
        }

        add_Number(); //function call

        function add2Number(a,b)
        {
            var total=a+b;
            document.write("<h2> total is "+total+"</h2>");
        }

        add2Number(5,10); //function call

        function add__Number(a,b)
        {
            var total=a+b;
            return total;
            
        }

        var output=add__Number("hey",20); //function call
        document.write("<h2> total is "+output+"</h2>");

        //arrays

         var cars=["BMW","Volvo","Audi"];
         /*var arr1;
         arr1=new Array("BMW","Volvoooo","Audi");*/

         /*
         cars.push("creta");
         for(var i=0;i<cars.length;i++)
         {
             document.write("<h3>"+cars[i]+"</h3>");
         }

        //object

        // var Car={
        //     car_brand:"tesla",
        //     car_model:"model 3",
        //     price:35000,

        //     teslaAutopilot:function()
        //     {
        //         document.write("<h2> teslaAuto Pilot</h2>");
        //     }
        // }
        // document.write("<h2>"+Car.car_brand+"<h2>");

        function Cars(car_brand, car_model,price)
        {
            this.car_brand=car_brand;
            this.car_model=car_model;
            this.price=price;
            this.teslaAutopilot=function()
            {
                document.write("<h2>this is a function</h2>");
            }
        }

        var c1=new Cars("tesla","model 3",35000);
        c1.teslaAutopilot();
        document.write(c1.price);
        var c2=new Cars("tesla","model p",3000);
        document.write(c2.car_model);

   //Dom manipulation

  /* function dom()
   {
      /*document.getElementById("heading").innerHTML="hey,good night"
       alert("hello");

       var x=document.getElementById("heading").innerHTML;
       alert(x);
   }*/ 

   

/*function fun1()
   {
       var x=document.getElementById("text1").Value;
       alert("text value:"+x);
   }*/

   function fun2()
   {
        var rd1=document.getElementById("rd1");
        var rd2=document.getElementById("rd2");
        if(rd1.checked==true)
            alert("selected by rd1:" +rd1.value);
        else if((rd2.checked==true))
            alert("selected by rd2:" +rd2.value);
        else
            alert("no one  selected");
       
   }

/*
   //select box

   function fn3()
   {
       var select=document.getElementById("selectbox");
       alert(select.options[select.selectedIndex].value);
   }*/


/*
   //tagname

   function changestyle()
   {
       var pera=document.getElementsByTagName("p");
       pera[0].style.color="red" ;
       pera[1].style.color="pink";
       pera[2].style.fontWeight="bold";
       pera[3].style.fontStyle="italic";
   }

 */

   //form validation

   /*function validate()
       {
            var userName=document.getElementById("uname");
            var password=document.getElementById("pass");
            if(userName.value.trim()=="" || password.value.trim()=="") 
            {
                alert("no blank value!")
                return false;
            }
            else
            {
                    true;
            }
       }*/

       /*
       function validate()
       {
           var username=document.getElementById("uname");
           var password=document.getElementById("pass");

           if(username.value.trim()=="")
           {
               //alert("no blank allowed");
                username.style.border ="solid 2px red";
                document.getElementById("lusr1").style.visibility="visible";
               return false;
           }
           else if(password.value.trim()=="")
           {
               alert("no blank allowed");
               return false;
           }
           else if(password.value.trim().length<5)
           {
               alert("too short");
               return false;
           }
           else
           {
                true;
           }
       }*/

    //regular express

    function validate()
    {
        var unamee=document.getElementById("uname").value;
       // var regx = /202012/ ;
       var regx=/[0-5]a[8-9]bc/;
        if(regx.test(unamee))
        {
            alert("valid username");
        }
        else
        {
            alert("invalid");
            document.getElementById("lusr1").style.visibility="visible";
        }
    }

    /*
        \d= match any digit (equal to [0-9])
        \w= match any words characters (a-z,A-Z,0-9 &_)
        \s= match whitespace characters (eg-spacce & tabs)
        \t =match a tab only.
    */


        function validate()
        {
            var uname=document.getElementById("uname").value;
            //var regx=/^[7-9]\d{9}$/;
            var regx=/^([a-zA-z0-9\.-]+)@([a-zA-z0-9-]+).([a-z]{2,20})$/;
            if(regx.test(uname))
            {
                document.getElementById("lusr1").innerHTML="valid";
                document.getElementById("lusr1").style.visibility="visible";
                document.getElementById("lusr1").style.color="green";
            }
            else
            {
                document.getElementById("lusr1").innerHTML="Invalid";
                document.getElementById("lusr1").style.visibility="visible";
                document.getElementById("lusr1").style.color="red";
            }
        }


   
        
 
