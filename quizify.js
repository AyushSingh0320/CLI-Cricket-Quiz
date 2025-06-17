let readlineSync = require("readline-sync")
const fs = require('fs')
let score = 0
let username = readlineSync.question("What's your good name -")
const database  = {
    data : [
         {
            questions : "How many players are there in each cricket team on the field during a match?",
            options : {
                a : "7",
                b : "9",
                c : "12",
                e : "11"
            },
            correctAnswer : "e"
         },
        {
             questions : "What is the name of the three wooden stumps topped by two bails on which the ball is aimed?",
             options : {
                a : "Wicket",
                b : "pitch",
                c : "Boundary",
                d : "Crease"
             },
             correctAnswer : "a"
        },
        {
            questions : "Which format of cricket involves two teams playing a single match over a maximum of 50 overs per side?",
            options : {
                a : "Test Match",
                b : "One Day International (ODI)",
                c : " Twenty20 (T20)",
                d : "The Ashes"
            },
            correctAnswer : "b"
        },
        {
             questions : "What is the term used to describe a batsman who scores 100 runs or more in an innings?",
            options : {
                a : "Wicket-keeper",
                b : " All-rounder",
                c : "Captain ",
                d : "Centurion"
            },
            correctAnswer : "d"
        },
        {
             questions : "Which country is considered the birthplace of cricket?",
            options : {
                a : " India",
                b : "Australia ",
                c : " England",
                d : "South Africa"
            },
            correctAnswer : "c"
        },
        {
          
             questions : "How many runs are awarded for hitting the ball over the boundary rope without it bouncing?",
            options : {
                a : "1",
                b : "5",
                c : "6 ",
                d : "4"
            },
            correctAnswer : "c"  
        },
        {
            questions : "What is the name of the flat, oval-shaped area in the center of the field where the bowler runs to deliver the ball?",
            options : {
                a : "Pitch",
                b : "Square",
                c : "Wicket ",
                d : " Boundary"
            },
            correctAnswer : "a"  
        },
        {
            questions : "What is the name of the prestigious trophy awarded to the winner of the Cricket World Cup?",
            options : {
                a : "The Ashes",
                b : "The Oval Trophy",
                c : "The Champions Trophy",
                d : " The ICC Cricket World Cup"
            },
            correctAnswer : "d" 
        },
        {
             questions : "Which batting position traditionally involves opening the innings and facing the first deliveries?",
            options : {
                a : "Spinner",
                b : " Wicket-keeper",
                c : "Pace bowler",
                d : "Opener"
            },
            correctAnswer : "d"
        }
    ]
}

// Initialize leaderboard from file or use default data
let leaderboard = {
    Data: []
}

try {
    const data = fs.readFileSync('leaderboard.json', 'utf8')
    leaderboard.Data = JSON.parse(data)
} catch (err) {
    // If file doesn't exist or is invalid, use default data
    leaderboard.Data = [
        {
            Name: "Ayush",
            score: "2"
        },
    ]
}

function playagame(useranswer , correctanswer){
    if(useranswer == correctanswer){
        console.log("Your answer is correct")
        score = score + 1
    }
    else if (useranswer != correctanswer) {
        console.log("Your answer is  wrong")
        console.log(`Correct answer is - ${ correctanswer}`)
    }
}

function showallquestions(database){
    for(let i =0 ; i < database.data.length ; i++){
        console.log(`\n Q${i+1} - ${database.data[i].questions} \n`)
        // console.log(database.data[i].options)
        for(let key in database.data[i].options){
            console.log(`${key} - ${database.data[i].options[key]}`)
        }
    let userAnswer = readlineSync.question("Enter your Answer - ");
    playagame(userAnswer.toLowerCase() , database.data[i].correctAnswer)
    }
}

function ShowHighscorer(leaderboard) {
    // Add current user's score
    leaderboard.Data.push({Name: username, score: score.toString()})
    
    // Filter out entries with invalid names (empty or non-string)
    let validEntries = leaderboard.Data.filter(entry => 
        entry.Name && 
        typeof entry.Name === 'string' && 
        entry.Name.trim().length > 0
    );
    
    // Sort the leaderboard
    let sortedarray = validEntries.sort((a, b) => parseInt(b.score) - parseInt(a.score))
    
    // Store updated leaderboard in file
    fs.writeFileSync('leaderboard.json', JSON.stringify(sortedarray, null, 2))
    
    console.log("\nUpdated leaderboard\n")
    for(let leader of sortedarray) {
        console.log(`${leader.Name} - Score ${leader.score}`);
    }
}

function congratulationmsg(yourscore , currenthighscore){
    if (yourscore >= currenthighscore ){
        console.log("\ncongratulations you are the New Leader in Leaderboard")
    }
}

showallquestions(database);
console.log(`\nYour score is - ${score}`)
ShowHighscorer(leaderboard);
congratulationmsg(score , "6")
