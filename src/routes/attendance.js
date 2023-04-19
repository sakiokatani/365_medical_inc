function attendance(){
    let attendance = false;
    let numberOfAttendance = 0;
        if (Doctor.attend()){
            atttendance = true;
            numberOfAttendance++;
            return numberOfAttendance;
        }else{
            attendance = false;
            return numberOfAttendance;
        }

        console.log(numberOfAttendance);
    }