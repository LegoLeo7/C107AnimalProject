
var dog = 0;
var cat = 0;
var background_noise = 0;

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/xJ5E4d9L-/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}



function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        
        console.log("Red"+random_number_r);
        console.log("Green"+random_number_g);
        console.log("Blue"+random_number_b);


        document.getElementById("result_label").innerHTML = 'Detected voice is of - ' +
        results[0].label;
        document.getElementById("result_label").style.color = "rgb(" +   
        random_number_r + ", " + random_number_g + ", " + random_number_b + ")";
      img = document.getElementById('image');
      
        if (results[0].label == "Barking") {
           img.src = 'Picture1.png';
                    dog=dog+1
            document.getElementById(result_label).innerHTML= "Detected Dog-"+ dog;
        }
        else if (results[0].label == "Meowing") {
            img.src = 'Picture2.png';
     cat = cat+1
            document.getElementById(result_label).innerHTML= "Detected cat-"+ cat;
      
        }
        else{
            img.src = 'Sound-image.png';
            background_noise = background_noise+1;
            document.getElementById(result_label).innerHTML= "Detected Background Noise"+ background_noise;
        }
    }
}
