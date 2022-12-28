function calculate(){
    var efname = document.getElementById("ename").value; //employee name
    var efid = document.getElementById("eid").value;     //employee ID
    var months = document.getElementById("month").value; //months dropdown
    var syear = document.getElementById("year").value;   //year 
    var monsalary = document.getElementById("esalary").value; //employee mothly salary
    var bonus = document.getElementById("ebonus").value;   //employee bonus -bonus will be add
    var tds = document.getElementById("etds").value;      //employee TDS -tds will be deducted
    var leave = document.getElementById("eleave").value;  //employee leaves -leaves will be calculate throgh month and as per salary

    if(months == 'January' || months == 'March' || months == 'May' || months == 'July' || months == 'August' || months == 'October' || months == 'December'){
        document.getElementById('out_name').innerHTML = efname;
        document.getElementById('out_id').innerHTML = efid;
        document.getElementById('out_msalary').innerHTML = monsalary + '/-';
        document.getElementById('out_date').innerHTML = months + '-' + syear;

        var ysalary = monsalary * 12 ; //yearly salary calculation
            document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        var thirtyone = monsalary / 31;    //store variable for 31 days

        var tdscal = (monsalary * tds) / 100;  //tds calculation
            document.getElementById('out_tds').innerHTML = tdscal + '/-';

        var leavecal = thirtyone * leave;     //leave calculation & daily salary calculation
            document.getElementById('out_daily').innerHTML = thirtyone + '/-';
            document.getElementById('out_leave').innerHTML = leavecal + '/-';
            document.getElementById('out_bonus').innerHTML = bonus + '/-';

        var finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
            document.getElementById('out_final').innerHTML = finalsalary + '/-';
        }
    else if(months == 'April' || months == 'June' || months == 'September' || months == 'November'){
            document.getElementById('out_name').innerHTML = efname;
            document.getElementById('out_id').innerHTML = efid;
            document.getElementById('out_msalary').innerHTML = monsalary + '/-';
            document.getElementById('out_date').innerHTML = months + '-' + syear;

        ysalary = monsalary * 12 ; //yearly salary calculation
            document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        var thirty = monsalary / 30;    //store variable for 30 days

        tdscal = (monsalary * tds) / 100;  //tds calculation
            document.getElementById('out_tds').innerHTML = tdscal + '/-';
    
        leavecal = thirty * leave;     //leave calculation & daily salary calculation
            document.getElementById('out_daily').innerHTML = thirty + '/-';
            document.getElementById('out_leave').innerHTML = leavecal + '/-';
            document.getElementById('out_bonus').innerHTML = bonus + '/-';
    
        finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
            document.getElementById('out_final').innerHTML = finalsalary + '/-';    
        }  
    else if(months == 'February'){   
        // var lyear = document.getElementById("month").value;
        //     if((lyear % 4 == 0) && (lyear % 100 != 0)){
        //         document.getElementById('out_name').innerHTML = efname;
        //         document.getElementById('out_id').innerHTML = efid;
        //         document.getElementById('out_msalary').innerHTML = monsalary + '/-';
        //         document.getElementById('out_date').innerHTML = months + '-' + syear;

        //         ysalary = monsalary * 12 ; //yearly salary calculation
        //             document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        //         var twentynine = monsalary / 29;    //store variable for 29 days

        //         tdscal = (monsalary * tds) / 100;  //tds calculation
        //             document.getElementById('out_tds').innerHTML = tdscal + '/-';
    
        //         leavecal = twentynine * leave;     //leave calculation & daily salary calculation
        //             document.getElementById('out_daily').innerHTML = twentynine + '/-';
        //             document.getElementById('out_leave').innerHTML = leavecal + '/-';
        //             document.getElementById('out_bonus').innerHTML = bonus + '/-';
    
        //         finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
        //             document.getElementById('out_final').innerHTML = finalsalary + '/-';    
        //     }
        //     else if( lyear % 400 == 0){
        //         document.getElementById('out_name').innerHTML = efname;
        //         document.getElementById('out_id').innerHTML = efid;
        //         document.getElementById('out_msalary').innerHTML = monsalary + '/-';
        //         document.getElementById('out_date').innerHTML = months + '-' + syear;

        //         ysalary = monsalary * 12 ; //yearly salary calculation
        //             document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        //         var twentynine = monsalary / 29;    //store variable for 29 days

        //         tdscal = (monsalary * tds) / 100;  //tds calculation
        //             document.getElementById('out_tds').innerHTML = tdscal + '/-';
    
        //         leavecal = twentynine * leave;     //leave calculation & daily salary calculation
        //             document.getElementById('out_daily').innerHTML = twentnine + '/-';
        //             document.getElementById('out_leave').innerHTML = leavecal + '/-';
        //             document.getElementById('out_bonus').innerHTML = bonus + '/-';
    
        //         finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
        //             document.getElementById('out_final').innerHTML = finalsalary + '/-';    
        //     }
        //     else{
        //             document.getElementById('out_name').innerHTML = efname;
        //             document.getElementById('out_id').innerHTML = efid;
        //             document.getElementById('out_msalary').innerHTML = monsalary + '/-';
        //             document.getElementById('out_date').innerHTML = months + '-' + syear;

        //         ysalary = monsalary * 12 ; //yearly salary calculation
        //             document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        //         var twentyeight = monsalary / 28;    //store variable for 28 days

        //         tdscal = (monsalary * tds) / 100;  //tds calculation
        //             document.getElementById('out_tds').innerHTML = tdscal + '/-';
    
        //         leavecal = twentyeight * leave;     //leave calculation & daily salary calculation
        //             document.getElementById('out_daily').innerHTML = twentyeight + '/-';
        //             document.getElementById('out_leave').innerHTML = leavecal + '/-';
        //             document.getElementById('out_bonus').innerHTML = bonus + '/-';
    
        //         finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
        //             document.getElementById('out_final').innerHTML = finalsalary + '/-';
        //     }

            document.getElementById('out_name').innerHTML = efname;
            document.getElementById('out_id').innerHTML = efid;
            document.getElementById('out_msalary').innerHTML = monsalary + '/-';
            document.getElementById('out_date').innerHTML = months + '-' + syear ;
        ysalary = monsalary * 12 ; //yearly salary calculation       
            document.getElementById('out_ysalary').innerHTML = ysalary + '/-';

        var twentyeight = monsalary / 28;    //store variable for 28 days

        tdscal = (monsalary * tds) / 100;  //tds calculation
            document.getElementById('out_tds').innerHTML = tdscal + '/-';
        leavecal = twentyeight * leave;     //leave calculation & daily salary calculation
            document.getElementById('out_daily').innerHTML = twentyeight + '/-';
            document.getElementById('out_leave').innerHTML = leavecal + '/-';
            document.getElementById('out_bonus').innerHTML = bonus + '/-';
    
        finalsalary = (monsalary - leave - tdscal) + +bonus;    //final salary calculation
            document.getElementById('out_final').innerHTML = finalsalary + '/-';
        }
        else{
            alert("Please fill the information")
        }
    }

    function logout(){
        window.open('/index.html','_self');
    }

