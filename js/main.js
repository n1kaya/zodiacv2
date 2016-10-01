var zodiac = [{
  animal: "rooster",
  traits: "Rooster is almost the epitome of fidelity and punctuality. For ancestors who had no alarm clocks, the crowing was significant, as it could awaken people to get up and start to work. In Chinese culture, another symbolic meaning of chicken carries is exorcising evil spirits.",
  image: "img/rooster.png"
}, {
  animal: "monkey",
  traits: "The monkey is a clever animal. It is usually compared to a smart person. During the Spring and Autumn Period (770 - 476 BC), the dignified Chinese official title of marquis was pronounced 'Hou', the same as the pronunciation of ‘monkey’ in Chinese. The animal was thereby bestowed with an auspicious meaning.",
  image: "img/monkey.png"
}, {
  animal: "sheep",
  traits: "Sheep (goat, or ram) is among the animals that people like most. It is gentle and calm. Since ancient times, people have learned to use its fleece to make writing brushes and fur to keep warm. The white cute creature often reminds people of beautiful things.",
  image: "img/sheep.png"
}, {
  animal: "horse",
  traits: "The Five Elements of Horse is Fire, which symbolizes enthusiasm and energy. The animal gives people an impression of independence and integrity. Its spirit is recognized to be the Chinese people's ethos - making unremitting efforts to improve themselves with passion and diligence.",
  image: "img/horse.png"
}, {
  animal: "snake",
  traits: "Snake carries the meanings of malevolence, cattiness and mystery, as well as acumen and divination. In some places, people believe that a snake found in their court can bring delight. However, in most cases, this animal is considered evil, which scares people from the bottom of the heart. There are some idioms in China indicating the danger of this animal, for example, once bitten by the snake twice shy of ten years.",
  image: "img/snake.png"
}, {
  animal: "dragon",
  traits: "The Dragon enjoys a very high reputation in Chinese culture. Chinese people regard themselves as descendents of the dragon. In ancient China, this imaginary creature was thought to speed across the sky with divine power. It is the token of authority, dignity, honor, success, luck, and capacity. Emperors entitled themselves exclusively as 'dragon'.",
  image: "img/dragon.png"
}, {
  animal: "rabbit",
  traits: "For Chinese people, the rabbit is a tame creature representing hope for a long time. It is tender and lovely. The moon goddess Chang'e in Chinese legend had a rabbit as her pet, which stimulated the thought that only this creature was amiable enough to match her noble beauty. People in Rabbit sign are not aggressive but approachable. They have a decent, noble and elegant manner.",
  image: "img/rabbit.png"
}, {
  animal: "tiger",
  traits: "Tigers, considered to be brave, cruel, forceful, stately and terrifying, are the symbol of power and lordliness. In ancient times, people usually compared emperors or grandees with the tiger. Court officials often said that 'accompanying the emperor is just like being at the side of a tiger'. There are also many legends about this animal.",
  image: "img/tiger.png"
}, {
  animal: "ox",
  traits: "Oxen used to be capable farming tools in agricultural society, which attach to the symbol of diligence, persistence and honesty. They are probably tardy in action, but industrious and cautious. Most of them are conservative and hold their faith firmly.",
  image: "img/ox.png"
}, {
  animal: "rat",
  traits: "Though people consider the rat not adorable, and it even makes its way into derogatory languages, it ranks first on the Chinese zodiac signs. It has characteristics of an animal with spirit, wit, alertness, delicacy, flexibility and vitality.",
  image: "img/rat.png"
}, {
  animal: "pig",
  traits: "The pig is not thought to be a smart animal in China. It likes sleeping and eating and becomes fat. Thus it usually features laziness and clumsiness. On the positive side, it behaves itself, has no calculation to harm others, and can bring affluence to people. Consequently, it has been regarded as wealth.",
  image: "img/pig.png"
}, {
  animal: "dog",
  traits: "Dog is man's good friend who can understand the human's spirit and obey its master, whether he is wealthy or not. The Chinese regard it as an auspicious animal. If a dog happens to come to a house, it symbolizes the coming of fortune. The invincible God Erlang in Chinese legend used a loyal wolfhound to help him capture monsters.",
  image: "img/dog.png"
}]



function getZodiac() {
  var yourZodiac = document.getElementById("bdayInput").value

  for (i = 2017; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "rooster"
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[0].animal
      document.getElementById("animalPic").src = zodiac[0].image
      document.getElementById("yourZodiac").innerHTML = zodiac[0].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2016; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "monkey"
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[1].animal
      document.getElementById("animalPic").src = zodiac[1].image
      document.getElementById("yourZodiac").innerHTML = zodiac[1].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2015; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "sheep"
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[2].animal
      document.getElementById("animalPic").src = zodiac[2].image
      document.getElementById("yourZodiac").innerHTML = zodiac[2].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2014; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "horse"      
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[3].animal
      document.getElementById("animalPic").src = zodiac[3].image
      document.getElementById("yourZodiac").innerHTML = zodiac[3].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }  
  
  for (i = 2013; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "snake"            
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[4].animal
      document.getElementById("animalPic").src = zodiac[4].image
      document.getElementById("yourZodiac").innerHTML = zodiac[4].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }  

  for (i = 2012; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "dragon"
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[5].animal
      document.getElementById("animalPic").src = zodiac[5].image
      document.getElementById("yourZodiac").innerHTML = zodiac[5].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }  

  for (i = 2011; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "rabbit"      
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[6].animal
      document.getElementById("animalPic").src = zodiac[6].image
      document.getElementById("yourZodiac").innerHTML = zodiac[6].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2010; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "tiger"      
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[7].animal
      document.getElementById("animalPic").src = zodiac[7].image
      document.getElementById("yourZodiac").innerHTML = zodiac[7].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2009; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "ox"      
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[8].animal
      document.getElementById("animalPic").src = zodiac[8].image
      document.getElementById("yourZodiac").innerHTML = zodiac[8].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2008; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "rat"            
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[9].animal
      document.getElementById("animalPic").src = zodiac[9].image
      document.getElementById("yourZodiac").innerHTML = zodiac[9].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2007; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"
      document.getElementById("page").className = "pig"      
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[10].animal
      document.getElementById("animalPic").src = zodiac[10].image
      document.getElementById("yourZodiac").innerHTML = zodiac[10].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }

  for (i = 2006; i > 0; i-=12) {
    if (yourZodiac == i) {
      document.getElementById("contentBg").className = "contentBg"
      document.getElementById("inputDiv").className = "hideDiv"  
      document.getElementById("page").className = "dog"          
      document.getElementById("yourAnimal").innerHTML = "Your chinese zodiac animal is the " + zodiac[11].animal
      document.getElementById("animalPic").src = zodiac[11].image
      document.getElementById("yourZodiac").innerHTML = zodiac[11].traits
      return
    } else {
      document.getElementById("yourAnimal").innerHTML = "Please enter your birth year!"
    }
  }
}

