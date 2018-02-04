//This is a self bot which answers to "hard computers" trivia questions by Nitro bot.
//Was just for testing. Will add self learning in the future.

//WARNING- This is a self-bot and discord is strict against self bots.
//Your account might get suspended.
//So I DO NOT STAND RESPONSIBLE FOR ANY DAMAGE THAT HAPPENS TO YOUR ACCOUNT.

const Discord = require("discord.js");
const client = new Discord.Client();


client.on("ready", () => {
  console.log("I am ready!");
});

qa_dict={ 
     "The internet domain .fm is the country-code top-level domain for which Pacific Ocean island nation?":"Micronesia", 
     "What is the name of the process that sends one quibit of information using two bits of classical information?":"Quantum Teleportation",
     "What does the International System of Quantities refer 1024 bytes as?":"Kibibyte",
     "Which of these names was an actual codename for a cancelled Microsoft project?":"Neptune",
     "Released in 2001, the first edition of Apple's Mac OS X operating system (version 10.0) was given what animal code name?":"Cheetah",
     "Who is the original author of the realtime physics engine called PhysX?":"NovodeX",
     "Which of these was the name of a bug found in April 2014 in the publicly available OpenSSL cryptography library?":"Heartbleed",
     "The IBM PC used an Intel 8008 microprocessor clocked at 4.77 MHz and 8 kilobytes of memory.":"False",
     'What was the first company to use the term "Golden Master"?':'Apple',
     "Which data structure does FILO apply to?":"Stack",
     "Which of these is not a key value of Agile software development?":"Comprehensive documentation",
     "Which of the following is the oldest of these computers by release date?":"TRS-80",
     "What is the name given to layer 4 of the Open Systems Interconnection (ISO) model?":"Transport",
     'Who invented the "Spanning Tree Protocol"?':"Radia Perlman",
     "Which RAID array type is associated with data mirroring?":"RAID 1",
     "The Harvard architecture for micro-controllers added which additional bus?":"Instruction",
     "How many Hz does the video standard PAL support?":"50",
     "What was the name of the security vulnerability found in Bash in 2014?":"Shellshock",
     "What internet protocol was documented in RFC 1459?":"IRC",
     "What vulnerability ranked #1 on the OWASP Top 10 in 2013?":"Injection",
     "What port does HTTP run on?":"80",
     "DHCP stands for Dynamic Host Configuration Port.":"False",
     "America Online (AOL) started out as which of these online service providers?":"Quantum Link",
     "Dutch computer scientist Mark Overmars is known for creating which game development engine?":"Game Maker"
};

client.on('message', (message) => {
	if(message.author.username === "Nitro" && message.channel.id === "Channel_ID" ){
	    message.embeds.forEach((embed) => {
	        q=embed.fields[3].value

	        console.log(embed.fields[3].value)
	       	options=embed.fields[4].value.replace("**", "").split(" - ")
	        console.log(options)
	        if(q in qa_dict){
	        	console.log("Q present!")
	        	console.log("A is:", qa_dict[q])
	        	for(i=0; i<options.length; i++){
	        		opt=options[i].replace("**", "").split(". ")
	        		ans=opt[1]
	        		if (ans[-1]===" "){
	        			ans===ans.split(" ")[0]
	        		}
	        		if (ans === qa_dict[q]){
	        			message.channel.send(Number(opt[0]))
	        			console.log(opt[1])
	        			message.channel.send("n!trivia hard computers")
	        		}
	        	}

	        }
	    });
	}

});

client.login("Client_token");
//CTRL+Shift+I -> Applications -> Local storage -> discordapp.com -> Token
