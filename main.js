function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/740YjiLB6/model.json', modelReady);
    console.log("startClassification()");
}

function modelReady() {
    classifier.classify(gotResult);
    console.log("modelReady");
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}