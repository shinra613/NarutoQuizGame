const rs = require('readline-sync')
const chalk = require('chalk');


let playerScore = 0;
var scoreNotif=''

var data=[
  {
    name:"Akhil",
    score:8
  },
  { name:"vithul",
    score:10
  },
  { name:"nandhu",
    score:9
  }
]

let hybridDataSet = [
  {'questions' : [`What's the name of Minato's teleportation jutsu ?
                    
  a)The Flying Raijin
  b)The Amenotejikara
  C)The Kamui
  d)The Amenominaka 
  
  Kindly select your option: `,'a']},
   {'questions' : [`\nShisui Uchiha was the decendent of ?
                    
  a)Madara Uchiha
  b)Naori Uchiha
  C)Fugaku Uchiha
  d)Kagami Uchiha
  
  Kindly select your option: `,'d']},
   {'questions' : [`\nWho among the below is not the disciple of Jiraiya the Gallant?
                    
  a)Minato Namikaze
  b)Naruto Uzumaki 
  c)Obito Uchiha
  d)Nagato Uzumaki    
  
  Kindly select your option: `,'c']},
   {'questions' : [`\nWhat's Naruto's current rank ?
                    
  a)Chunin
  b)Genin
  C)Jonin
  d)Sannin
  
  Kindly select your option: `,'b']},
   {'questions' : [`\nWhich of the below is not a Summoning Technique ?
                    
  a)Edo Tensei
  b)Shinra Tensei
  C)Gama Mise no Jutsu
  d)Gyaku Kuchiyose no Jutsu
  
  Kindly select your option: `,'b']},
   {'questions' : [`\nwho is the most responsible person for the subjugation of the uchiha clan ?
                    
  a)Danzo Shimura
  b)Tobirama Senju
  C)Hiruzen Sarutobi
  d)Madara Uchiha
  
  Kindly select your option: `,'b']},
   {'questions' : [`\nWhat's the ultimate evolution of Byakugan ?
                    
  a)Golden Byakugan
  b)Tenseigan
  C)Rinnegan
  d)Rinne-Byakugan 
  
  Kindly select your option: `,'b']},
   {'questions' : [`\nWho is the personal summon of Hiruzen Sarutobi ?
                    
  a)Monkey King Enma
  b)Gamabunta
  C)Lady Katsuyu
  d)Garaga
  
  Kindly select your option: `,'a']},
   {'questions' : [`\nWhat's the ultimate firestyle release of uchiha clan ?
                    
  a)Katon ryūka no Jutsu
  b)katon gouka mekkyaku
  C)Katon gōkakyu no Jutsu
  d)Katon hōsenka no Jutsu
  
  Kindly select your option: `,'b']},
   {'questions' : [`\nWhat's the real name of the nine tailed fox ?
                    
  a)The Flying Raijin
  b)Shukaku
  C)Kurama
  d)Son Gokū 
  
  Kindly select your option: `,'c']}
  ]



//-------------------------------------------gameplay function

const gamePlay = (hb,updatedScore) => {

  console.log(chalk.white.bold(`\n ---- Hi there! welcome to the naruto quiz ---- \n`))
  console.log(chalk.red.bold.bgWhite(`\n "Lets see how much you know about the world of a shinobi" \n\n`))

    let playerName = rs.question('Wanna share your name before we begin the game? : ');
    if(playerName){

        console.log(chalk.green.bold(`\n ---- welcome ${playerName} :), lets start the game with the first question----\n`))

    }else{

         console.log(chalk.red.bold(`\n ---- alright Anonymous, lets start the game with the first question----\n`))

    }
    
  for(i=0;i<hb.length;i++){
    
    let queset = hb[i] ; 
     
     let playerAns = rs.question(chalk.blue.bold(queset.questions[0]));
     console.log(chalk.magenta(`\n----------------------------------------------------------`));
  
     if(playerAns===queset.questions[1]){

        updatedScore += 1;
   
    
      }

    
  }

  //-------------------------------score Check

  if(updatedScore>=7){
    console.log(chalk.cyan.bold(`\nHi ${playerName}, You have earned ${updatedScore}/10`))
    console.log(chalk.green.bold(`\n\n---- You there, you are the true fan----\n\n`))
  }else if(updatedScore>=4 && updatedScore<=6){
   console.log(chalk.cyan.bold(`\nHi ${playerName}, You have earned ${updatedScore}/10`))
    console.log(chalk.blue.bold(`\n\n----Not bad kiddo----\n\n`))
  }else{
   console.log(chalk.cyan.bold(`\nHi ${playerName}, You have earned ${updatedScore}/10`))
    console.log(chalk.red.bold(`\n\n----Well, there is always a room for improvement----\n\n`))
  }
   
 //-------------------------------High-score Check

for(var j=0;j<data.length;j++){
 if(updatedScore >=data[j].score && updatedScore>9){
  if(!scoreNotif){
     scoreNotif=`\n----You are one of the highest scorer among all my friends----\n`
     console.log(chalk.green.bold(scoreNotif)) ;
   }
  }else if(data[j].score>=10){
    

       scoreNotif=`\n----${data[j].name} is the highest scorer among all my friends----\n`
       console.log(chalk.green.cyan(scoreNotif)) ;

    
  }else{
      if(!scoreNotif){
       scoreNotif='.'
       console.log(scoreNotif) ;
      }
  }
};


  console.log(chalk.magenta(`\n----------------------------------------------------------\n`))
 
 return console.log(chalk.white.bold(`Like the game, You can connect with me at 
 
 Twitter   : @Sithlordimpaler
 Instagram : akhil.vn
 LinkedIn  : akhilvenkateshpillai\n`))

}

gamePlay(hybridDataSet,playerScore);
