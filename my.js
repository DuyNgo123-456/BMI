function checkBMI(){
    let weight=+document.getElementById('weight').value;
    let height=+document.getElementById('height').value;
    BMI=(weight)/(height*height);
    document.getElementById('BMI').innerHTML=BMI+"kg/m2";
    if(BMI<18){
        document.getElementById('colusion').innerHTML="Bạn gầy";
    }
    else if(18<=BMI<=25){
        document.getElementById('colusion').innerHTML="Bạn bình thường";
    }
    else{
        document.getElementById('colusion').innerHTML="Bạn béo";
    }
}