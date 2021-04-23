var name;
var totalsum = 0;
var finalNum = 0;
var i;
var j;
var k;
var array;
function Numerology() {
    name = document.getElementById("NumerInput").value;
    //name = "Numerology";
    //make an array of the name
    array = name.split("",500);

    //remove the spaces

    for(i = 0; i<array.length; i++) {
        if (array[i] == " ") {
            array.splice(i,1);
        }
    };

    console.log(array);
    //assign number to letter and add it to the sum of the previous number to letters until done

    for(j=0;j<array.length; j++){
        if(array[j] == 'a' || array[j] == 'A' || array[j] == 'j' || array[j] == 'J'|| array[j] == 's'|| array[j] =='S') {
            totalsum = totalsum+1;
            
        } else if(array[j]  == 'b' || array[j] == 'B' || array[j] == 'k' || array[j] == 'K'||array[j] =='t'||array[j] =='T') {
            totalsum = totalsum+2;
            
        } else if(array[j] == 'c'||array[j] == 'C'||array[j] == 'l'||array[j] == 'L'||array[j] == 'u'||array[j] == 'U') {
            totalsum = totalsum+3;
            
        } else if(array[j] == 'd'||array[j] == 'D'||array[j] == 'm'||array[j] == 'M'||array[j] == 'v'||	array[j] == 'V') {
            totalsum = totalsum+4;

        } else if(array[j] == 'e'||array[j] == 'E'||array[j] == 'n'||array[j] == 'N'||array[j] == 'w'||array[j] == 'W'){
            totalsum= totalsum+5;
        } 
        else if(array[j] == 'f'|array[j] == 'F'||array[j] == 'o'||array[j] == 'O'||array[j] == 'x'||array[j] == 'X') {
            totalsum = totalsum+6;
            
        } else if(array[j] == 'g'||array[j] == 'G'||array[j] == 'p'||array[j] == 'P'||array[j] == 'y'||array[j] == 'Y') {
            totalsum = totalsum+7;
            
        } else if(array[j] == 'h'||array[j] == 'H'||array[j] == 'q'||array[j] == 'Q'||array[j] == 'z'||array[j] == 'Z') {
            totalsum = totalsum+8;
            
        } else if(array[j] == 'i'||array[j] == 'I'||array[j] =='r'||array[j] == 'R') {
            totalsum = totalsum+9;
            
        } else {
            totalsum = 0;
            break;
        }

    }
    console.log(totalsum);
    //create the final variable

    while(totalsum>9) {
        finalNum = Array.from(String(totalsum), Number);
        totalsum=0;
        for(k=0;k<finalNum.length;k++) {
            totalsum = totalsum+finalNum[k];
        }
    }

    console.log(totalsum);

    //assign number to text
    switch(totalsum) {
        case 1:
            document.getElementById("answer").innerHTML = "There is no one else like you. You are a natural leader. Originality and independence are one of your strengths.You have courage to try new things.";
            break;
        case 2:
            document.getElementById("answer").innerHTML="You are kind and gentle. People say that you are you are sensitive to feelings of others. You are the best friend anyone could have. Writing poetry comes naturally to you.";
            break;
        case 3:
            document.getElementById("answer").innerHTML="You are the life of the party. Center stage is where you feel right at home. You have a great sense of humor. Your true talents are found in art and writing.";
            break;
        case 4:
            document.getElementById("answer").innerHTML="People can count on you to get things done. You always work hard to get goals done. Endless patience and self-discipline are your strengths. You are very loyal to your friends.";
            break;
        case 5:
            document.getElementById("answer").innerHTML="You are very intelligent. Traveling to far-off places interests you. You are curious and love to investigate new things. Risk taking is one of your strengths.";
            break;
        case 6:
            document.getElementById("answer").innerHTML="You have strong moral values. You set the example for everyone else. People can trust you and they know you are honest. Helping and caring for others are two of your strengths.";
            break;
        case 7:
            document.getElementById("answer").innerHTML="You are very smart for your age. Solving mysteries interests you. You have a strong love of nature and animals. You are a thinker and like to spend time by your self.";
            break;
        case 8:
            document.getElementById("answer").innerHTML="You have the power to succeed. Making money comes naturally to you. Management and authority are two of your strengths. A good position is in your future.";
            break;
        case 9:
            document.getElementById("answer").innerHTML="Current events interests you. Human rights are something you are concerned about. You are always working to help someone else.";
            break;
        case 0:
            document.getElementById("answer").innerHTML="Please type a correct name without any symbols like -,%,^,$ and so on.";
            break;
        default:
            document.getElementById("answer").innerHTML="Sorry, there appears to have been an error.";
            
    }


    totalsum = 0;
    finalNum =0;
};
