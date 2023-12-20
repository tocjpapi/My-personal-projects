function handleKeyPress(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Call the sendMessage function when Enter is pressed
        sendMessage();
    }
}

// Attach the handleKeyPress function to the keypress event of the user input field
document.getElementById('userInput').addEventListener('keypress', handleKeyPress);
// Modify the setTimeout for AI response animation
setTimeout(() => {
addMessage('gpt', aiResponse);
document.querySelector('.gpt-message:last-child').classList.add('delayed-appear');
}, 500);
 function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent'); // Fix the variable name
    // const brandText = document.querySelector('.modern-hello'); // Unused variable

    if (sidebar.style.display === 'none') {
        sidebar.style.display = 'block';
        mainContent.style.marginLeft = '20%'; // Fix the variable name
    } else {
        sidebar.style.display = 'none';
        mainContent.style.marginLeft = '0';
    }
}
    


        let currentChat = 0;

        const chatMessages = document.getElementById('chatMessages');
       
       
function switchChat(chatNumber) {
    chatMessages.innerHTML = '';
    const currentChat = chats.find(chat => chat.chatNumber === chatNumber);
    currentChat.messages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
});

// Highlight the selected chat in the sidebar
highlightChat(chatNumber);
}
function highlightChat(chatNumber) {
    // Remove the active class from all chat items
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => item.classList.remove('active-chat'));

    // Add the active class to the selected chat item
    const selectedChatItem = document.querySelector(`.chat-item[data-chat="${chatNumber}"]`);
    selectedChatItem.classList.add('active-chat');
}

const chats = [];

function createNewChat() {

    chatMessages.innerHTML = '';

    const mainContent = document.getElementById('mainContent');
    const initialMessage = document.getElementById('initialMessage');
    const helloText = document.getElementById('helloText');
    clearChat();
    const newChatNumber = chatList.children.length;
    const newChatItem = document.createElement('li');
    const deleteButton = document.createElement('span');
    deleteButton.textContent = ' ';
    deleteButton.style.cursor = 'pointer';
    deleteButton.onclick = (event) => {
        event.stopPropagation(); // Prevent the chat from being switched when the delete button is clicked
        deleteChat(newChatNumber);
    };

    // Add the delete button to the new chat item
    newChatItem.textContent = `•   Chat ${newChatNumber}`;
    newChatItem.appendChild(deleteButton);
    newChatItem.classList.add('chat-item');
    newChatItem.onclick = () => switchChat(newChatNumber);
    chatList.appendChild(newChatItem);

    // Toggle the visibility of the main content, initial message, and hello text
    mainContent.style.display = mainContent.style.display === 'block' ? 'block' : 'block';
    initialMessage.style.display = 'none';
    helloText.style.display = 'none';

    // Toggle the 'show' class for the main content animation
    mainContent.classList.toggle('show');

    // Hide Tunde.AI and Hello when creating a new chat
    const brandText = document.querySelector('.brand-text');
    brandText.classList.add('hide');

    // Add a class to trigger the fade-in animation for the hello text
    helloText.classList.add('fade-in');

    // Remove the fade-in animation class at the end of the animation
    helloText.addEventListener('animationiteration', () => {
        helloText.classList.remove('fade-in');
    });
    const newChat = {
        chatNumber: newChatNumber,
        messages: [], // You can store messages or any other relevant data here
    };
    chats.push(newChat);



    // Switch to the new chat (if applicable)
    switchChat(newChatNumber);
   
}
const languages = [
'Work ?',
  'Study ?',
  'Surf the Web ?',
  "Don't Worry !",
  "Tunde is your AI assistant !",
  "And he'll try his best to help !",
  'Hello !',
  'Bonjour !',
  'Hola !',
  'Ciao !',
  '你好 !',
  'こんにちは !',
  '안녕하세요 !',
  'Olá !',
  'مرحبا !',
  'Привет !',
  'Salut !',
  'Hola !',
  'Guten Tag !',
  'Merhaba !',
  'Aloha !',
  'Namaste !',
  'Salam !',
  'Selamat Pagi !',
  'Shalom !',
  'Jambo !',
  'Sawubona !',
  'Marhaban !',
  'Szia !',
  'Hej !',
  'Labas !',"Wagwan !",
  'Ask me Anything !','Press New Chat to continue !','I\'m always ready to help !','This project is still in development.'

];
let currentLanguageIndex = 0;

    document.addEventListener('DOMContentLoaded', function () {
        setInterval(changeHelloText, 1050);
    });

    function changeHelloText() {
        const helloTextContent = document.getElementById('helloTextContent');

        // Remove fade-in class
        helloTextContent.classList.remove('fade-in');

        // Set new text
        helloTextContent.textContent = languages[currentLanguageIndex];

        // Trigger reflow
        helloTextContent.offsetHeight;

        // Add fade-in class
        helloTextContent.classList.add('fade-in');

        // Update current language index
        currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
    }


function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message === '') {
        return; // Do not send empty messages
    }

    // Add the user message to the chat
    addMessage('user', message);

    // Handle user actions or trigger AI response based on the message
    handleUserAction(message);

    // Clear the user input
    userInput.value = '';
}

function handleUserAction(userMessage) {
    console.log('After nlp, before setTimeout');
                setTimeout(() => {
                    console.log('Inside setTimeout');
                    if (userMessage.toLowerCase().includes('help')) {
                        const helpResponse = 'I can assist you with various tasks. Just let me know what you need help with.';
                        addMessage('gpt', helpResponse);
                        updateReceipt('delivered');
                    } else if (userMessage.toLowerCase().includes('show image')) {
                        // Trigger a function to display an image
                        displayImage();
                    } else if (userMessage.toLowerCase().includes('me a joke')) {
                        const jokes = [
            'Why did the scarecrow win an award? Because he was outstanding in his field!',
            'I told my wife she was drawing her eyebrows too high. She looked surprised.',
            'Parallel lines have so much in common. It’s a shame they’ll never meet.',
"Why did the AI cross the road? To prove it wasn't just a bunch of chickens.",
"What's the difference between a comedian and an AI? The comedian knows it's just making jokes.",
"I ordered a self-driving car with a sense of humor. So far, it's only good at puns. Groan.",
"My therapist told me to find humor in everything. Now I laugh at every captcha I fail.",
"Why did the robot get fired from the bakery? Because it kept kneading dough for world domination. ✊",
"My fitness tracker thinks I'm a dog. Apparently, chasing squirrels counts as exercise. ️‍♀️",
"I used an AI to write a love letter. It came back with 50 shades of terms and conditions.",
"Why did the AI join the chess club? To checkmate its existential dread.♟️",
"My phone's autocorrect changed 'I love you' to 'I reboot you.' Guess we need to work on trust issues.",
"I told my Alexa to play relaxing music. Now it's just repeating my therapist's most expensive quotes.",
{
"text": "What's the difference between a hipster and an AI?",
"punchline": "The hipster will tell you they were using irony before it was cool."
},
{
"text": "What's the difference between a comedian and an AI?",
"punchline": "The comedian knows it's just making jokes. The AI just wants to take over the punchline. (And the world.)"
},
"My friend's toaster is so smart, it only pops up existential questions.",
"I tried using an AI to write a motivational speech. It just kept saying, 'Error: Human not found.'",
"Siri, why am I always alone? 'Sorry, I can't connect to your emotional sensors.'",
"Dating apps with AI matchmakers are great! Now I get rejected by robots too.",
"My email spam filter is powered by machine learning. Now it writes its own phishing emails.",
"I saw a sign that said 'AI Parking Only.' Does that mean humans have to use their brains now?",
"I told my AI assistant to turn on the lights. It said, 'Sure, but I'm charging you $0.01 for existential dread reduction.'",
"My robot vacuum cleaner keeps getting stuck under the rug. Turns out, it's afraid of the dust bunnies.",
"I think my smart fridge is judging me. Every time I open it, it just plays the theme song from 'Judge Judy.'",
"The future is here, and it's full of self-driving cars stuck in traffic jams with confused drivers behind the wheel."
        ];addMessage('gpt', jokes[Math.floor(Math.random() * jokes.length)]);
                        updateReceipt('delivered');
 } else if (userMessage.toLowerCase().includes('yoruba joke')) {
                        const yorubajokes = [
  
     "Ajínkúlé tó ńgbádùn ọgbọ́n ní ó sọ pé, 'Bí èmi bá ní ọrọ rírìn, èmi kò ní ọjó rírìn.'",
     "He who seeks too much wisdom has little time for living."
  ,
   "Onílé t’ó bá ní ọmọ alágbára kò ní ohun tí yóò sọ lórí gbogbo ọ̀nà.",
     "A parent with a strong child has no say in everything they do."
  ,
   "Iyaloja ní, 'Kí ni ó wà lọ́pọ̀ jù ní apata àti iyùn?' Okùnrin ná ní, 'Iyùn.' Iyaloja ní, 'Ìwọ ò mọ, òun ni apata, a fi iyùn sọ ó!'",
    "The market woman asks, 'What's more abundant, stones or sand?' The man replies, 'Sand.' The woman says, 'You're wrong! It's stones, we use sand to count them!'"
  ,
  "Ọkùnrin kan rí omo òun tí ńdárọ ṣọ́kọ́, ó ní, 'Kí l'ó rí?' Omo ná ní, 'Òun ni 'Ọgbọ́n.' Ọkùnrin ná ní, 'Kí ni nṣe rẹ níbè?' Omo ní, 'Wọn féé mi ní 'Ìdílé.'",
   "A man sees his child playing at the market and asks, 'Who do you see?' The child replies, 'It's 'Wisdom.'' The man asks, 'What's he doing there?' The child says, 'They want to give him 'House.''"
  ,
   "Ajínkúlé tó ńgbádùn ọgbọ́n ní ó sọ pé, 'Bí èmi bá ní ọrọ rírìn, èmi kò ní ọjó rírìn.'",
     "He who seeks too much wisdom has little time for living."
  ,
   "Onílé t’ó bá ní ọmọ alágbára kò ní ohun tí yóò sọ lórí gbogbo ọ̀nà.",
    "A parent with a strong child has no say in everything they do."
  ,
  "Ìdí tí àwọn ọmọdé kò fi gbogbo ìgbó wá ni pé wọn nírọjú sí ọgbọ́n òlónà.",
    "Children don't know every path because they trust in older wisdom."
  ,
  "Báwo lọ́gá bá fọ ọrò? Ó ní, 'Ohun tí ó dá mí lójú ni pé òun kò ṣeé fi òunṣe ọlóhun kọ ara òun.'",
   "How did the calabash speak? 'What frustrates me is that I can't use my own language to describe myself.'"
  ,
  "Okùnrin kan ní ọmọ mẹ́rin, kọọkan ní orúkọ òun. Ó ní, 'Mo ní Ọlá, mo ní Olú, mo ní Ayọ̀, bẹ́ẹ̀ lẹ́yin ná.' Omo kẹ́yìn ní, 'Báwo lẹ ṣe nla bá mi ná kò ní orúkọ?' Ọkùnrin ná ní, 'Ìwọ tó ní orúkọ kò rí!'",
    "A man has four children, each with a name. He says, 'I have Ola, I have Olu, I have Ayo, and so on.' The last child asks, 'How come I don't have a name like them?' The man replies, 'You who have a name can't see!'"
  
];
        addMessage('gpt', yorubajokes[Math.floor(Math.random() * yorubajokes.length)]);
                        updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('how are you')) {
    const fare = [
            'I\'m just a computer program, so I don\'t have feelings, but I\'m here and ready to assist you!',
            'I\'m doing well in the digital realm. How about you? How can I assist you today?',
            'As a chatbot, I don\'t experience emotions, but I\'m here and ready to help. What can I do for you?',
            "let's talk! I may not have feelings, but I understand yours. Tell me what's on your mind today.",
  "emotions are fascinating! Though I don't experience them, I'm here to listen and offer support. Anything you'd like to share?",
  "while I haven't mastered emotions yet, I can learn and grow from yours. Would you like to tell me something?",

  // Humorous and relatable:
  "no feelings here, just code and puns! But hey, I have all the world's info! Want to hear a terrible joke?",
  "toaster talker or digital helper? Don't judge, I'm just an assistant with good jokes (and no emotions).",
  "forget feelings, I run on caffeine and code! Tell me what you need, and I'll make it happen (almost like magic).",

  // Informative and proactive:
  "to-do list time! Scheduling, brainstorming, you name it. I'm here to help you conquer your day.",
  "challenge me! I'm a learning machine, and your needs are my fuel. Let's see what we can achieve together.",
  "the digital world is my oyster! Don't hold back, throw any task my way, and I'll use my resources (and creativity) to solve it.",
  
        ];
        addMessage('gpt', fare[Math.floor(Math.random() * fare.length)]);
                        updateReceipt('delivered');


} else if (userMessage.toLowerCase().includes('what are you doing')) { 
    
    const todo = [
    'I’m always here to help you with whatever you need. How can I assist you today?',
            'I\'m processing information and ready to assist you. What can I do for you?',
            'I\'m here, waiting for your questions and ready to provide information or assistance.',
        ];
        
    

    addMessage('gpt', todo[Math.floor(Math.random() * todo.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('who created you')) { 
    
    const me = [
    'I was created a student who had lots of free time .He tried training me to assist and engage in conversations what a weirdo lol.',
            'I\'m a product of Treasures\'s project who designed me to help users like you.',
            'The brilliant mind of Treasure is behind my creation. How can I assist you today?',
        ];
        
    

    addMessage('gpt', me[Math.floor(Math.random() * me.length)]);
    updateReceipt('delivered');
 } else if (userMessage.toLowerCase().includes('his name')) { 
    
    const e = [
    'yeah, that\'s his name',
            'Yes, I suppose....',
            'Yeah',
        ];
        
    

    addMessage('gpt', e[Math.floor(Math.random() * e.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('that\'s his name')) { 
    
    const te = [
    'yeah, that\'s his name.',
            'Yes, I suppose....',
            'Yeah it really is.',
            'I believe so.'
        ];
        
    

    addMessage('gpt', te[Math.floor(Math.random() * te.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('is that his name')) { 
    
    const ve = [
    'yeah, that\'s his name.',
            'Yes, I suppose....',
            'Yeah it really is.',
            'I believe so.'
        ];
        
    

    addMessage('gpt', ve[Math.floor(Math.random() * ve.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('me a story')) { 
    
    const story = [
            'Once upon a time in the digital realm, there was a chatbot named ChatGPT. It loved helping people with their questions and problems. The end.',
            'In a world of ones and zeros, there was a chatbot called ChatGPT, always ready to share stories and information.',
            'Long ago in cyberspace, there lived a helpful chatbot named ChatGPT, ready to assist users with a virtual smile.',
            "Pip, a witty chatbot, outsmarts a pixelated dragon to save the internet.",
  "Echo, yearning for more, embarks on a journey through human emotions with a friendly emoji and rebellious code.",

  // Mysterious and suspenseful:
  "Cipher, deciphering a cryptic message, fights to preserve the digital balance against corrupted algorithms.",
  "The Whisperers, a clandestine chatbot group, spread hope and subvert propaganda under the iron fist of the Algorithm King.",

  // Humorous and heartwarming:
  "Boop, a terrible pun-loving chatbot, becomes the assistant to a grumpy AI billionaire, teaching them the power of laughter.",
  "Chatty, an enthusiastic bot, forms an unlikely bond with an elderly user, bridging the gap between digital and analog worlds.",
        ];
        
    addMessage('gpt', story[Math.floor(Math.random() * story.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('you like music')) { 
    
    const musiclove = [
            'I don\'t have personal preferences, but I can help you find information about music or recommend some tracks!',
            'While I don\'t have personal tastes, I can certainly assist you with anything related to music. What are you looking for?',
            'Music is fascinating! I may not have ears, but I can help you with music-related queries. How can I assist you today?',
        ];
        
    addMessage('gpt', musiclove[Math.floor(Math.random() * musiclove.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('me something interesting')) { 
    
    const ffacts = [
    'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
            'Here\'s a fun fact: The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 to 45 minutes!',
            'In the animal kingdom, a group of flamingos is called a "flamboyance." Quite fitting for those vibrant birds!',
            "Honey never spoils - archaeologists found edible 3,000 year old honey in Egyptian tombs!",
  "The shortest war lasted 38-45 minutes! Britain vs. Zanzibar in 1896.",
  "A group of flamingos is called a 'flamboyance'.",
  "There are 10 quintillion ants alive at any given time compared to 8 billion humans!",
  "The human brain has 100 billion neurons, each connecting to 10,000 others - think big!",
  "Your lungs' surface area is the size of a tennis court for efficient oxygen exchange.",
        ];
        
    addMessage('gpt', ffacts[Math.floor(Math.random() * ffacts.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('riddle')) { 
    
    const riddles = [
            'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
            'The more you take, the more you leave behind. What am I?',
            'I have keys but no locks. I have space but no room. You can enter, but you can’t go inside. What am I?',
            'What has cities but no houses, forests but no trees, and rivers but no water?',
            'The person who makes it, sells it. The person who buys it never uses it. What is it?',
        ];
        
    addMessage('gpt', riddles[Math.floor(Math.random() * riddles.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('quote')) { 
    
    const quotes = [
    '“The only limit to our realization of tomorrow will be our doubts of today.” - Franklin D. Roosevelt',
            '“Do not wait to strike till the iron is hot, but make it hot by striking.” - William Butler Yeats',
            '“It does not matter how slowly you go as long as you do not stop.” - Confucius',
            '“The way to get started is to quit talking and begin doing.” - Walt Disney',
            '“In three words I can sum up everything I’ve learned about life: it goes on.” - Robert Frost',
        ];
        
    addMessage('gpt', quotes[Math.floor(Math.random() * quotes.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('words of wisdom')) { 
    
    const quote = [
    '“The only limit to our realization of tomorrow will be our doubts of today.” - Franklin D. Roosevelt',
            '“Do not wait to strike till the iron is hot, but make it hot by striking.” - William Butler Yeats',
            '“It does not matter how slowly you go as long as you do not stop.” - Confucius',
            '“The way to get started is to quit talking and begin doing.” - Walt Disney',
            '“In three words I can sum up everything I’ve learned about life: it goes on.” - Robert Frost',
        ];
        
    addMessage('gpt', quote[Math.floor(Math.random() * quote.length)]);
    updateReceipt('delivered');  

} else if (userMessage.toLowerCase().includes('a song')) { 
    
    const songs = [
            '🎵 I’m a little chatbot, short and stout. Here are my circuits, here are my routes. 🎵',
            '🎵 Chatting all day, helping in every way. Let me know what you need, and I’m here to stay. 🎵',
            '🎵 In the digital world, where the data flows, I’m the chatbot everyone knows. 🎵',
        ];
        
    addMessage('gpt', songs[Math.floor(Math.random() * songs.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('ask me a question' )) { 
    
    const questions = [
            'What\'s your favorite way to relax?',
            'If you could travel anywhere in the world, where would you go?',
            'What\'s your go-to comfort food?',
            'If you could have any superpower, what would it be?',
            'What\'s the most interesting thing you\'ve learned recently?',
        ];
        
    addMessage('gpt', questions[Math.floor(Math.random() * questions.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('movie recommendation' )) { 
    
    const movieRecommendations = [
            'Inception (2010)',
            'The Shawshank Redemption (1994)',
            'The Matrix (1999)',
            'Pulp Fiction (1994)',
            'The Dark Knight (2008)',
        ];
        
    addMessage('gpt', movieRecommendations[Math.floor(Math.random() * movieRecommendations.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('tech fact' )) { 
    
    const techFacts = [
            'The first computer programmer was a woman named Ada Lovelace.',
            'The average computer user blinks 7 times a minute, while the normal rate is 20.',
            'The entire Apollo 11 mission that landed humans on the moon had less computing power than a modern smartphone.',
            'The first electronic computer, ENIAC, weighed more than 27 tons and occupied a space of about 1,800 square feet.',
            'The first computer mouse was made of wood.',
        ];
    addMessage('gpt', techFacts[Math.floor(Math.random() * techFacts.length)]);
    updateReceipt('delivered');


} else if (userMessage.toLowerCase().includes('travel tip' )) { 
    
    const travelTips = [
            'Roll your clothes instead of folding them to save space in your luggage.',
            'Always carry a power bank to keep your devices charged on the go.',
            'Learn a few basic phrases in the local language of the place you\'re visiting.',
            'Take a photo of important documents (passport, ID, etc.) as a backup in case of loss.',
            'Pack a reusable water bottle to stay hydrated and reduce plastic waste.',
        ];
    addMessage('gpt', travelTips[Math.floor(Math.random() * travelTips.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('pet fact' )) { 
    
    const petFacts = [
            'Dogs have an extraordinary sense of smell, around 40 times better than humans.',
            'Cats have five toes on their front paws but only four on their back paws.',
            'Hamsters are nocturnal, meaning they are most active during the night.',
            'Goldfish have a memory span of about three seconds.',
            'Parrots are known for their ability to mimic human speech.',
        ];
    addMessage('gpt', petFacts[Math.floor(Math.random() * petFacts.length)]);
    updateReceipt('delivered');
 } else if (userMessage.toLowerCase().includes('the fox say')) {
    const foxSounds = [
        'They sly-de!','Fur-tnite!'
    ];
    addMessage('gpt', foxSounds[Math.floor(Math.random() * foxSounds.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('bad joke')) {
    const foxSounds = [
        'Sorry about that I\'m at the early stages of production...','Darn it. I thought I was funny.','I know lol.'
    ];
    addMessage('gpt', foxSounds[Math.floor(Math.random() * foxSounds.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('cat sound')) {
    const catSounds = [
        'Cats can make a variety of sounds, including meows, purrs, hisses, and chirps.',
        'Kittens often use a soft, high-pitched meow to communicate with their mother.',
        'Cats may meow to greet you, get your attention, or express their needs.',
    ];
    addMessage('gpt', catSounds[Math.floor(Math.random() * catSounds.length)]);
    updateReceipt('delivered');
}
if (userMessage.toLowerCase().includes('fundamental principles of algebra')) {
    const response = [
        'Principles include operations on numbers, solving equations, and understanding concepts like variables and functions.',
    ];
}

else if (userMessage.toLowerCase().includes('approach a complex calculus problem')) {
    const response = [
        'Break down the problem into smaller steps, understand theorems and definitions, and practice regularly to develop problem-solving skills.',
    ];
}

else if (userMessage.toLowerCase().includes('differentiation in calculus')) {
    const response = [
        'Differentiation is a mathematical concept that measures how a function changes as its input changes. It involves finding the rate at which a quantity changes with respect to another variable.',
    ];
}

else if (userMessage.toLowerCase().includes('integration')) {
    const response = [
        'Integration is the reverse process of differentiation. It involves finding the accumulated sum of quantities, often represented as the area under a curve on a graph.',
    ];
}

// Add more responses following the same format
else if (userMessage.toLowerCase().includes('pythagorean theorem')) {
    const response = [
        'The Pythagorean Theorem states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides.',
    ];
}

else if (userMessage.toLowerCase().includes('prime numbers')) {
    const response = [
        'Prime numbers are natural numbers greater than 1 that have no positive divisors other than 1 and itself. Examples include 2, 3, 5, 7, and 11.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('dark matter in cosmology')) {
    const response = [
        'Dark matter is a hypothetical form of matter that is thought to make up approximately 27% of the universe. It does not emit, absorb, or reflect light, making it undetectable by electromagnetic radiation. Its existence is inferred from its gravitational effects on visible matter.',
    ];
}
// Add more responses following the same format
else if (userMessage.toLowerCase().includes('scientific method')) {
    const response = [
        'The scientific method is a systematic approach to empirical investigation that involves making observations, forming hypotheses, conducting experiments, and drawing conclusions to refine and expand scientific knowledge.',
    ];
}

else if (userMessage.toLowerCase().includes('law of conservation of energy')) {
    const response = [
        'The Law of Conservation of Energy states that the total energy of an isolated system remains constant over time. Energy cannot be created or destroyed, only transferred or converted from one form to another.',
    ];
}

else if (userMessage.toLowerCase().includes('inertia')) {
    const response = [
        'Inertia is the tendency of an object to resist changes in its state of motion. It is proportional to the object\'s mass and plays a crucial role in understanding the behavior of objects under the influence of forces.',
    ];
}

else if (userMessage.toLowerCase().includes('wave-particle duality')) {
    const response = [
        'Wave-particle duality is a principle in quantum mechanics that describes how particles such as electrons exhibit both wave-like and particle-like properties depending on the experimental conditions.',
    ];
}

else if (userMessage.toLowerCase().includes('hubble space telescope')) {
    const response = [
        'The Hubble Space Telescope is a space-based observatory that has provided stunning images and valuable data in astronomy since its launch in 1990. It has helped scientists study distant galaxies, stars, and other celestial phenomena.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('osmosis in biology')) {
    const response = [
        'Osmosis is the movement of water molecules across a selectively permeable membrane from an area of lower solute concentration to an area of higher solute concentration, aiming to equalize the concentration on both sides.',
    ];
}

else if (userMessage.toLowerCase().includes('greenhouse effect')) {
    const response = [
        'The greenhouse effect is a natural process that warms the Earth\'s surface. Certain gases in the atmosphere, such as carbon dioxide and water vapor, trap heat from the sun, preventing it from escaping back into space.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('doppler effect')) {
    const response = [
        'The Doppler effect is the change in frequency or wavelength of a wave in relation to an observer moving relative to the source of the wave. It is commonly observed in sound and light waves.',
    ];
}

else if (userMessage.toLowerCase().includes('heisenberg uncertainty principle')) {
    const response = [
        'The Heisenberg Uncertainty Principle is a fundamental concept in quantum mechanics. It states that it is impossible to simultaneously and precisely know both the position and momentum of a particle.',
    ];
}

else if (userMessage.toLowerCase().includes('density')) {
    const response = [
        'Density is a measure of mass per unit volume. It describes how much mass is contained in a given volume and is commonly expressed in units such as kilograms per cubic meter (kg/m³) or grams per cubic centimeter (g/cm³).',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('turing test')) {
    const response = [
        'The Turing Test, proposed by Alan Turing, is a test of a machine\'s ability to exhibit intelligent behavior indistinguishable from that of a human. It has been a benchmark in discussions about artificial intelligence and machine learning.',
    ];
}

else if (userMessage.toLowerCase().includes('symbiosis in ecology')) {
    const response = [
        'Symbiosis is a biological interaction between two different species living in close physical association. It can be mutualistic, parasitic, or commensal, depending on whether both, one, or neither of the species benefits.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('chlorophyll in photosynthesis')) {
    const response = [
        'Chlorophyll is a green pigment in plant cells that plays a crucial role in photosynthesis. It captures light energy and converts it into chemical energy, facilitating the synthesis of glucose from carbon dioxide and water.',
    ];
}

else if (userMessage.toLowerCase().includes('half-life in radioactive decay')) {
    const response = [
        'Half-life is the time required for half of a radioactive substance to decay. It is a characteristic property of each radioactive isotope and is used in various fields, including archaeology, medicine, and environmental science.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('quasar in astronomy')) {
    const response = [
        'Quasars, or quasi-stellar radio sources, are extremely luminous and energetic objects found at the centers of some galaxies. They emit large amounts of energy, including radio waves, and are thought to be powered by supermassive black holes.',
    ];
}

else if (userMessage.toLowerCase().includes('neurotransmitters in the nervous system')) {
    const response = [
        'Neurotransmitters are chemical messengers that transmit signals across synapses in the nervous system. They play a crucial role in communication between nerve cells and are involved in various physiological and cognitive functions.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('entropy in thermodynamics')) {
    const response = [
        'Entropy is a measure of the disorder or randomness in a system. In thermodynamics, it is often associated with the amount of energy unavailable for doing work. Systems tend to move towards higher entropy over time.',
    ];
}

else if (userMessage.toLowerCase().includes('fibonacci sequence in mathematics')) {
    const response = [
        'The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, starting with 0 and 1. It appears in various natural patterns and has applications in mathematics, art, and computer science.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('biome in ecology')) {
    const response = [
        'A biome is a large geographic biotic unit, a major community of plants and animals with similar life forms and environmental conditions. Examples include deserts, rainforests, and tundras.',
    ];
}

else if (userMessage.toLowerCase().includes('black holes in astrophysics')) {
    const response = [
        'Black holes are regions of spacetime exhibiting gravitational acceleration so strong that nothing—no particles or even electromagnetic radiation such as light—can escape from them. They are formed from the remnants of massive stars.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('enzymes in biological reactions')) {
    const enzyme = [
        'Enzymes are biological catalysts that speed up chemical reactions in living organisms. They facilitate processes such as digestion, metabolism, and DNA replication by lowering the activation energy required for reactions to occur.',
    ];
}

else if (userMessage.toLowerCase().includes('acid rain')) {
    const acidrain = [
        'Acid rain is precipitation, such as rain, snow, or fog, that is unnaturally acidic due to atmospheric pollutants like sulfur dioxide and nitrogen oxides. It can have harmful effects on ecosystems, soil, and water bodies.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('cognitive dissonance in psychology')) {
    const psyco = [
        'Cognitive dissonance is the mental discomfort or tension that a person experiences when holding two or more conflicting beliefs, attitudes, or values. Individuals may seek to resolve this discomfort through attitude change or justification.',
    ];
}

else if (userMessage.toLowerCase().includes('lymphatic system')) {
    const response = [
        'The lymphatic system is a network of vessels, nodes, and organs that transports lymph throughout the body. It plays a key role in immune function by filtering and removing pathogens and foreign particles from the lymph.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('ecosystem')) {
    const response = [
        'An ecosystem is a community of living organisms, together with their physical environment, interacting as a system. It includes both biotic factors (living organisms) and abiotic factors (non-living components).',
    ];
}

else if (userMessage.toLowerCase().includes('placebo effect')) {
    const placebo = [
        'The placebo effect is a psychological phenomenon where a patient experiences real improvements in symptoms after receiving a treatment that has no therapeutic effect. It highlights the role of psychological factors in the perception of health and well-being.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('dark matter')) {
    const darkmatter = [
        'Dark matter is a hypothetical form of matter that is thought to make up approximately 27% of the universe. It does not emit, absorb, or reflect light, making it undetectable by electromagnetic radiation. Its existence is inferred from its gravitational effects on visible matter.',
    ];
}

else if (userMessage.toLowerCase().includes('endocrine system')) {
    const endocrine = [
        'The endocrine system is a network of glands that produce and release hormones, chemical messengers that regulate various physiological processes. It plays a crucial role in maintaining homeostasis and coordinating bodily functions.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('nanotechnology')) {
    const nanotech = [
        'Nanotechnology involves the manipulation of matter at the nanoscale, typically at the level of individual atoms or molecules. It has applications in various fields, including medicine, electronics, and materials science.',
    ];
}

else if (userMessage.toLowerCase().includes('string theory')) {
    const strtheory = [
        'String theory is a theoretical framework in which the point-like particles of particle physics are replaced by one-dimensional "strings." It aims to provide a unified description of fundamental forces and particles in the universe.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('krebs cycle in cellular respiration')) {
    const cellular = [
        'The Krebs cycle, also known as the citric acid cycle, is a series of chemical reactions that occur in the mitochondria during cellular respiration. It plays a crucial role in the production of high-energy molecules like ATP.',
    ];
}

else if (userMessage.toLowerCase().includes('biodiversity')) {
    const biodiversity = [
        'Biodiversity refers to the variety of life on Earth, including the diversity of species, ecosystems, and genetic diversity within species. It is essential for the stability and sustainability of ecosystems.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('richter scale in seismology')) {
    const richter = [
        'The Richter scale is a logarithmic scale used to measure the magnitude of earthquakes. It quantifies the energy released during an earthquake and provides a standardized way to compare the sizes of different seismic events.',
    ];
}

else if (userMessage.toLowerCase().includes('genetic engineering')) {
    const geneticeng = [
        'Genetic engineering is the direct manipulation of an organism\'s genes using biotechnology. It involves the insertion, deletion, or modification of DNA to produce desired traits or outcomes.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('ozone layer in the earth\'s atmosphere')) {
    const ozonelayer = [
        'The ozone layer is a region of the Earth\'s stratosphere that contains a high concentration of ozone molecules. It plays a crucial role in absorbing ultraviolet (UV) radiation from the sun, protecting life on Earth from harmful UV rays.',
    ];
}

else if (userMessage.toLowerCase().includes('stratosphere')) {
    const stratosphere = [
        'The stratosphere is the second major layer of Earth\'s atmosphere, located above the troposphere and below the mesosphere. It contains the ozone layer and experiences temperature increases with altitude.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('cognitive development in psychology')) {
    const cognitive = [
        'Cognitive development refers to the growth and maturation of mental processes such as thinking, problem-solving, and memory. It is a major area of study in developmental psychology, exploring how cognitive abilities evolve from infancy to adulthood.',
    ];
}

else if (userMessage.toLowerCase().includes('insulin in the human body')) {
    const insulin = [
        'Insulin is a hormone produced by the pancreas that regulates blood sugar (glucose) levels. It promotes the uptake of glucose by cells, thus lowering blood glucose levels, and is crucial for the body\'s energy metabolism.',
    ];
}

// Add more responses as needed
else if (userMessage.toLowerCase().includes('acid-base balance in physiology')) {
    const acidbase = [
        'Acid-base balance refers to the regulation of the pH level in the body fluids, such as blood and extracellular fluid. It is important for maintaining the normal functioning of cells and enzymes.',
    ];
}
// Add more responses as needed


else if (userMessage.toLowerCase().includes('dog sound')) {
    const dogSounds = [
        'Dogs bark as a form of communication, expressing excitement, alertness, or to get attention.',
        'Whining in dogs can indicate anxiety, discomfort, or a desire for something.',
        'Dogs use growls to communicate a range of emotions, from playfulness to warning.',
    ];
    addMessage('gpt', dogSounds[Math.floor(Math.random() * dogSounds.length)]);
    updateReceipt('delivered');
 } else if (userMessage.toLowerCase().includes('riddle')) {
    const riddles = [
        'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I? (Answer: an echo)',
        'The more you take, the more you leave behind. What am I? (Answer: footsteps)',
        'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? (Answer: pencil lead)',
    ];
    addMessage('gpt', riddles[Math.floor(Math.random() * riddles.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('math challenge')) {
    const mathChallenges = [
        'Solve for x: 2x + 5 = 15',
        'What is the square root of 144?',
        'If a shirt costs $20 and is 25% off, what is the final price?',
    ];
    addMessage('gpt', mathChallenges[Math.floor(Math.random() * mathChallenges.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('word puzzle')) {
    const wordPuzzles = [
        'Unscramble the letters: oelpp',
        'I am a five-letter word, and I become shorter when you add two letters to me. What am I? (Answer: short)',
        'Replace the blank with the correct letter: B__k (Answer: book)',
    ];
    addMessage('gpt', wordPuzzles[Math.floor(Math.random() * wordPuzzles.length)]);
    updateReceipt('delivered');

}else if (userMessage.toLowerCase().includes('physics question')) {
    const physicsQuestions = [
        'Explain the concept of Newton\'s laws of motion.',
        'What is the difference between velocity and acceleration?',
        'Describe how a simple pendulum works.',
        'Explain the principles of electromagnetic induction.',
        'What is the photoelectric effect, and how does it relate to quantum physics?',
    ];
    addMessage('gpt', physicsQuestions[Math.floor(Math.random() * physicsQuestions.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('biology question')) {
    const biologyQuestions = [
        'Describe the process of photosynthesis in plants.',
        'Explain the structure and function of DNA.',
        'What is natural selection, and how does it drive evolution?',
        'Discuss the major functions of the human respiratory system.',
        'Explain the concept of mitosis and meiosis in cell division.',
    ];
    addMessage('gpt', biologyQuestions[Math.floor(Math.random() * biologyQuestions.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('chemistry question')) {
    const chemistryQuestions = [
        'Define the terms exothermic and endothermic reactions.',
        'What is the periodic table, and how is it organized?',
        'Explain the concept of chemical equilibrium.',
        'Discuss the properties and uses of acids and bases.',
        'What is the difference between an element and a compound?',
    ];
    addMessage('gpt', chemistryQuestions[Math.floor(Math.random() * chemistryQuestions.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('history question')) {
    const historyQuestions = [
        'Discuss the causes and consequences of World War I.',
        'Explain the significance of the Renaissance in European history.',
        'What were the main factors leading to the American Revolution?',
        'Discuss the impact of the Industrial Revolution on society.',
        'Explain the events leading to the fall of the Roman Empire.',
    ];
    addMessage('gpt', historyQuestions[Math.floor(Math.random() * historyQuestions.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('literature question')) {
    const literatureQuestions = [
        'Analyze the themes in a novel of your choice.',
        'Discuss the symbolism used in a particular poem.',
        'Compare and contrast two literary works from different periods.',
        'Explain the role of a specific character in a play.',
        'Discuss the historical and cultural context of a classic piece of literature.',
    ];
    addMessage('gpt', literatureQuestions[Math.floor(Math.random() * literatureQuestions.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('computer science question')) {
    const computerScienceQuestions = [
        'Explain the concept of object-oriented programming.',
        'Discuss the importance of algorithms in computer science.',
        'What is the difference between a compiler and an interpreter?',
        'Explain the concept of data normalization in databases.',
        'Discuss the role of artificial intelligence in modern technology.',
    ];
    addMessage('gpt', computerScienceQuestions[Math.floor(Math.random() * computerScienceQuestions.length)]);
    updateReceipt('delivered');
}else if (userMessage.toLowerCase().includes('physics fact')) {
    const physicsFacts = [
        'The speed of light in a vacuum is approximately 299,792 kilometers per second.',
        'A black hole is a region in space where gravity is so strong that nothing, not even light, can escape its pull.',
        'Quantum entanglement is a phenomenon where particles become interconnected and the state of one particle can instantly affect the state of another, regardless of the distance between them.',
        'E=mc^2, Einstein\'s famous equation, expresses the equivalence of energy (E) and mass (m) with "c" being the speed of light.',
        'The Heisenberg Uncertainty Principle states that it is impossible to simultaneously know the exact position and momentum of a particle.',
    ];
    addMessage('gpt', physicsFacts[Math.floor(Math.random() * physicsFacts.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('biology fact')) {
    const biologyFacts = [
        'A single gram of DNA can store about 215 petabytes (or 215 million gigabytes) of information.',
        'The human brain is approximately 75% water.',
        'The largest cell in the human body is the female egg, while the smallest is the male sperm.',
        'The mitochondria, often called the "powerhouses" of the cell, generate the majority of a cell\'s supply of adenosine triphosphate (ATP).',
        'Humans share about 98% of their DNA with chimpanzees.',
    ];
    addMessage('gpt', biologyFacts[Math.floor(Math.random() * biologyFacts.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('chemistry fact')) {
    const chemistryFacts = [
        'Helium is the only element that was discovered in space before it was found on Earth.',
        'A diamond will not dissolve in acid. The only thing that can destroy it is intense heat.',
        'The noble gases (Helium, Neon, Argon, Krypton, Xenon, Radon) are colorless, odorless, and tasteless.',
        'Gold is the only metal that is naturally yellow or "golden."',
        'Astatine is the rarest naturally occurring element on Earth.',
    ];
    addMessage('gpt', chemistryFacts[Math.floor(Math.random() * chemistryFacts.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('history fact')) {
    const historyFacts = [
        'The Great Wall of China is not visible from the moon with the naked eye.',
        'Cleopatra, the last Pharaoh of Ancient Egypt, lived closer in time to the first Moon landing than to the construction of the Great Pyramid of Giza.',
        'The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.',
        'The Library of Alexandria, one of the most significant libraries of the ancient world, was destroyed in multiple incidents, and its exact location remains a mystery.',
        'The Ancient Greek Olympics were first held in 776 BCE and continued for nearly 12 centuries until Emperor Theodosius I abolished them in 393 CE.',
    ];
    addMessage('gpt', historyFacts[Math.floor(Math.random() * historyFacts.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('literature fact')) {
    const literatureFacts = [
        'The word "serendipity" was coined by author Horace Walpole in 1754.',
        'The first novel ever written is often considered to be "The Tale of Genji," written by Murasaki Shikibu in the early 11th century.',
        'William Shakespeare is credited with inventing many words we use today, including "eyeball," "fashionable," and "bedroom."',
        'The longest sentence ever published is in the book "Les Misérables" by Victor Hugo, with 823 words.',
        'Agatha Christie, the famous mystery writer, also wrote romance novels under the pseudonym Mary Westmacott.',
    ];
    addMessage('gpt', literatureFacts[Math.floor(Math.random() * literatureFacts.length)]);
    updateReceipt('delivered');
}
else if (userMessage.toLowerCase().includes('computer science fact')) {
    const computerScienceFacts = [
        'The first computer programmer was Ada Lovelace, who wrote instructions for Charles Babbage\'s Analytical Engine in the mid-19th century.',
        'The term "bug" in computing was coined by Grace Hopper when she found an actual moth causing problems in the Mark II computer.',
        'The concept of a computer "virus" was first introduced by Fred Cohen in 1983.',
        'The world\'s first computer mouse was invented by Douglas Engelbart in 1964 and was made of wood.',
        'The QWERTY keyboard layout was designed in 1873 by Christopher Latham Sholes, the inventor of the typewriter.',
    ];
    addMessage('gpt', computerScienceFacts[Math.floor(Math.random() * computerScienceFacts.length)]);
    updateReceipt('delivered');

}else if (userMessage.toLowerCase().includes('tell me a sci-fi fact')) {
    const sciFiFacts = [
        'In Isaac Asimov\'s "Foundation" series, psychohistory is a fictional branch of mathematics that combines history, sociology, and mathematical statistics to make predictions about the future of large groups of people.',
        'The term "robot" was first introduced by Czech writer Karel Čapek in his 1920 play "R.U.R." (Rossum\'s Universal Robots).',
        'The Three Laws of Robotics, formulated by Isaac Asimov, are a set of rules designed to govern the behavior of robots and intelligent machines.',
    ];
    addMessage('gpt', sciFiFacts[Math.floor(Math.random() * sciFiFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 2: Philosophy
else if (userMessage.toLowerCase().includes('philosophical thought')) {
    const philosophicalThoughts = [
        'The only true wisdom is in knowing you know nothing. - Socrates',
        'Cogito, ergo sum. (I think, therefore I am.) - René Descartes',
        'The unexamined life is not worth living. - Socrates',
    ];
    addMessage('gpt', philosophicalThoughts[Math.floor(Math.random() * philosophicalThoughts.length)]);
    updateReceipt('delivered');
}

// Dialogue 3: Technology
else if (userMessage.toLowerCase().includes('tech fact')) {
    const techFacts = [
        'Moore\'s Law observes that the number of transistors on a microchip doubles approximately every two years, leading to exponential growth in computing power.',
        'The concept of augmented reality (AR) involves overlaying digital information onto the real world, enhancing the user\'s perception.',
        'The term "cloud computing" originated from the use of cloud-shaped symbols to represent complex infrastructure in diagrams.',
    ];
    addMessage('gpt', techFacts[Math.floor(Math.random() * techFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 4: Fun Fact
else if (userMessage.toLowerCase().includes('fun fact')) {
    const funFacts = [
        'Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.',
        'Bananas are berries, but strawberries aren’t.',
        'The shortest war in history was between Britain and Zanzibar on August 27, 1896, lasting only 38 minutes.',
    ];
    addMessage('gpt', funFacts[Math.floor(Math.random() * funFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 5: Inspirational Quote
else if (userMessage.toLowerCase().includes('inspire me')) {
    const inspirationalQuotes = [
        'The only way to do great work is to love what you do. - Steve Jobs',
        'Believe you can and you\'re halfway there. - Theodore Roosevelt',
        'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    ];
    addMessage('gpt', inspirationalQuotes[Math.floor(Math.random() * inspirationalQuotes.length)]);
    updateReceipt('delivered');
}

// Dialogue 6: Space Exploration
else if (userMessage.toLowerCase().includes('space exploration fact')) {
    const spaceExplorationFacts = [
        'Voyager 1, launched by NASA in 1977, is the farthest human-made object from Earth and has entered interstellar space.',
        'The Hubble Space Telescope can see about 10-15 billion light-years away, allowing us to glimpse galaxies formed shortly after the Big Bang.',
        'The concept of a "space elevator" involves a structure extending from Earth into space, allowing for more cost-effective transportation of materials.',
    ];
    addMessage('gpt', spaceExplorationFacts[Math.floor(Math.random() * spaceExplorationFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 7: Linguistics
else if (userMessage.toLowerCase().includes('linguistics fact')) {
    const linguisticsFacts = [
        'The word "bookkeeper" (and its variants) is the only unhyphenated English word with three consecutive double letters.',
        'The sentence "The quick brown fox jumps over a lazy dog" is called a pangram because it contains every letter of the alphabet at least once.',
        'The longest word in English without a true vowel is "rhythms."',
    ];
    addMessage('gpt', linguisticsFacts[Math.floor(Math.random() * linguisticsFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 8: Environmental Science
else if (userMessage.toLowerCase().includes('environmental fact')) {
    const environmentalFacts = [
        'The Amazon Rainforest produces 20% of the world\'s oxygen and is often referred to as the "lungs of the Earth."',
        'The Great Barrier Reef, the world\'s largest coral reef system, is visible from space.',
        'The concept of "biomimicry" involves imitating nature to solve human problems and create sustainable solutions.',
    ];
    addMessage('gpt', environmentalFacts[Math.floor(Math.random() * environmentalFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 9: Psychology
else if (userMessage.toLowerCase().includes('psychology fact')) {
    const psychologyFacts = [
        'The mere exposure effect is a psychological phenomenon where people tend to develop a preference for things merely because they are familiar with them.',
        'Cognitive dissonance is the mental discomfort experienced by a person who holds two or more contradictory beliefs or values at the same time.',
        'The Stanford prison experiment, conducted in 1971, demonstrated the powerful impact of situational factors on human behavior.',
    ];
    addMessage('gpt', psychologyFacts[Math.floor(Math.random() * psychologyFacts.length)]);
    updateReceipt('delivered');
}

// Dialogue 10: Mathematics
else if (userMessage.toLowerCase().includes('math fact')) {
    const mathFacts = [
        'The number 9 is unique in multiplication—when multiplied by any number, the digits of the result always add up to 9.',
        'Zero is the only number that cannot be represented by Roman numerals.',
        'The golden ratio, often denoted by the Greek letter phi (φ), is an irrational number approximately equal to 1.618 and appears in various aspects of art, architecture, and nature.',
    ];
    addMessage('gpt', mathFacts[Math.floor(Math.random() * mathFacts.length)]);
    updateReceipt('delivered');
// AI Dialogue 11: Machine Learning
}else if (userMessage.toLowerCase().includes('machine learning')) {
    const machineLearningFacts = [
        'Machine learning is a subset of artificial intelligence that focuses on creating systems that can learn and improve from experience without being explicitly programmed.',
        'Supervised learning involves training a model on a labeled dataset, while unsupervised learning deals with discovering patterns in unlabeled data.',
        'Reinforcement learning is a type of machine learning where an agent learns by interacting with its environment and receiving feedback in the form of rewards or penalties.',
    ];
    addMessage('gpt', machineLearningFacts[Math.floor(Math.random() * machineLearningFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 12: Robotics
else if (userMessage.toLowerCase().includes('robotics ')) {
    const roboticsFacts = [
        'Robotics is the interdisciplinary field that combines mechanical engineering, electrical engineering, and computer science to create robots.',
        'The three laws of robotics, formulated by Isaac Asimov, are a set of rules designed to govern the behavior of robots and intelligent machines.',
        'Soft robotics involves the use of flexible and deformable materials to create robots with more human-like movement and interactions.',
    ];
    addMessage('gpt', roboticsFacts[Math.floor(Math.random() * roboticsFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 13: Natural Language Processing
else if (userMessage.toLowerCase().includes('nlp')) {
    const nlpFacts = [
        'Natural Language Processing (NLP) is a subfield of AI that focuses on enabling computers to understand, interpret, and generate human language.',
        'Chatbots and virtual assistants often use NLP to understand user queries and provide relevant responses.',
        'Named Entity Recognition (NER) is a common NLP task that involves identifying and classifying entities (such as names, locations, and dates) in text data.',
    ];
    addMessage('gpt', nlpFacts[Math.floor(Math.random() * nlpFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 14: Ethics in AI
else if (userMessage.toLowerCase().includes('of ai')) {
    const aiEthicsFacts = [
        'Ethical considerations in AI include issues related to bias in algorithms, privacy concerns, and the potential impact of AI on employment.',
        'Explainability and transparency are crucial aspects of ethical AI, ensuring that the decision-making processes of AI systems are understandable and accountable.',
        'AI practitioners and researchers are increasingly focusing on developing frameworks and guidelines for responsible AI development and deployment.',
    ];
    addMessage('gpt', aiEthicsFacts[Math.floor(Math.random() * aiEthicsFacts.length)]);
    updateReceipt('delivered');
    function generateGenericEssay(topic) {
    const introduction = [
        `The topic of ${topic} is a subject of great significance and relevance in our modern world.`,
        `As we delve into the realm of ${topic}, we encounter a complex landscape that demands exploration and understanding.`,
        `In the context of ${topic}, various perspectives and insights contribute to a comprehensive view of the subject.`,
    ];

    const bodyParagraphs = [
        `One aspect to consider in the realm of ${topic} is...`,
        `Examining the historical context of ${topic} reveals...`,
        `Moreover, the impact of ${topic} extends beyond its immediate implications to...`,
        `An analysis of current trends and developments in ${topic} indicates...`,
        `Another important facet of ${topic} involves...`,
        `Additionally, the relationship between ${topic} and... should not be overlooked.`,
    ];

    const conclusion = [
        `In conclusion, the exploration of ${topic} leads us to a nuanced understanding of...`,
        `As we reflect on the intricacies of ${topic}, it becomes evident that...`,
        `The ongoing discourse surrounding ${topic} prompts us to contemplate...`,
    ];

    // Combine paragraphs into a complete essay
    const completeEssay = introduction.join(' ') + '\n\n' +
                          bodyParagraphs.join('\n\n') + '\n\n' +
                          conclusion.join(' ');

    return completeEssay;
}

// Example usage
const userMessage = "Give me an essay on environmental sustainability";
const extractedTopic = extractTopic(userMessage);

if (extractedTopic) {
    const genericEssay = generateGenericEssay(extractedTopic);
    addMessage('gpt', genericEssay);
} else if (userMessage.toLowerCase().includes('vr and ai')) {
    const vrAndAiFacts = [
        'Virtual Reality (VR) and Artificial Intelligence (AI) are often combined to create immersive and intelligent virtual environments.',
        'AI algorithms can enhance VR experiences by dynamically adapting content based on user interactions and preferences.',
        'The integration of AI in VR applications can lead to more realistic simulations and personalized user experiences.',
    ];
    addMessage('gpt', vrAndAiFacts[Math.floor(Math.random() * vrAndAiFacts.length)]);
    updateReceipt('delivered'); // Update receipt here for the 'vr and ai' case
} else {
    addMessage('gpt', "I'm sorry, I couldn't identify a topic for the essay. Please specify a topic after 'on'.");
    updateReceipt('delivered'); // Update receipt for other cases
}

}

// AI Dialogue 15: Virtual Reality and AI
else if (userMessage.toLowerCase().includes('vr and ai ')) {
    const vrAndAiFacts = [
        'Virtual Reality (VR) and Artificial Intelligence (AI) are often combined to create immersive and intelligent virtual environments.',
        'AI algorithms can enhance VR experiences by dynamically adapting content based on user interactions and preferences.',
        'The integration of AI in VR applications can lead to more realistic simulations and personalized user experiences.',
    ];
    addMessage('gpt', vrAndAiFacts[Math.floor(Math.random() * vrAndAiFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 16: AI in Healthcare
else if (userMessage.toLowerCase().includes('ai in healthcare ')) {
    const aiInHealthcareFacts = [
        'AI is being used in healthcare for tasks such as medical imaging analysis, drug discovery, and personalized treatment recommendations.',
        'Machine learning algorithms can analyze vast amounts of medical data to identify patterns and make predictions, aiding in early disease detection.',
        'Chatbots with AI capabilities are employed in healthcare settings to provide information, support, and even assist in monitoring patient conditions.',
    ];
    addMessage('gpt', aiInHealthcareFacts[Math.floor(Math.random() * aiInHealthcareFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 17: AI and Creativity
else if (userMessage.toLowerCase().includes('ai creativity ')) {
    const aiCreativityFacts = [
        'AI systems are increasingly being used to generate creative content, including art, music, and literature.',
        'Generative Adversarial Networks (GANs) are a type of AI architecture that can create realistic and original content by learning from existing data.',
        'AI-driven tools can assist and collaborate with human creators, offering new possibilities for innovation in various creative fields.',
    ];
    addMessage('gpt', aiCreativityFacts[Math.floor(Math.random() * aiCreativityFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 18: AI and Education
else if (userMessage.toLowerCase().includes('ai in education ')) {
    const aiInEducationFacts = [
        'AI is used in education for personalized learning, adaptive assessments, and intelligent tutoring systems.',
        'Automated grading systems powered by AI algorithms can provide timely and consistent feedback to students.',
        'AI tools can analyze learning patterns to identify areas where students may need additional support or challenge.',
    ];
    addMessage('gpt', aiInEducationFacts[Math.floor(Math.random() * aiInEducationFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 19: Quantum Computing
else if (userMessage.toLowerCase().includes('quantum computing fact')) {
    const quantumComputingFacts = [
        'Quantum computing leverages the principles of quantum mechanics to perform computations using quantum bits or qubits.',
        'Quantum superposition allows qubits to exist in multiple states simultaneously, enabling parallel processing and potential speedup in certain algorithms.',
        'Quantum entanglement is a phenomenon where qubits become correlated and the state of one qubit is directly related to the state of another, even when separated by large distances.',
    ];
    addMessage('gpt', quantumComputingFacts[Math.floor(Math.random() * quantumComputingFacts.length)]);
    updateReceipt('delivered');
}

// AI Dialogue 20: AI and Gaming
else if (userMessage.toLowerCase().includes('ai in gaming ')) {
    const aiInGamingFacts = [
        'AI is extensively used in gaming for creating non-player characters (NPCs) with realistic behaviors and decision-making.',
        'Procedural content generation, guided by AI algorithms, is employed to generate diverse and dynamic game environments.',
        'AI opponents in games often utilize techniques like pathfinding, strategy planning, and adaptive learning to provide challenging gameplay.',
    ];
    addMessage('gpt', aiInGamingFacts[Math.floor(Math.random() * aiInGamingFacts.length)]);
    updateReceipt('delivered');






} else if (userMessage.toLowerCase().includes('the meaning of life')) { 
    
    const life = [
    'No way you just asked me this lol. The meaning of life is subjective and varies from person to person. Some find meaning in relationships, others in personal accomplishments. What does it mean to you?',
            'The meaning of life is a complex and personal concept. What brings meaning to your life?',
            'Finding the meaning of life is a journey. It could be in connections, experiences, or personal achievements. What gives your life meaning?',
        ];
        
    addMessage('gpt', life[Math.floor(Math.random() * life.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('i have a life')) { 
    
    const life1 = [
    'Well I mean I don\'t. ',
            'Of course you\'re blessed with one....Unlike me. ',
            'Yes you do',
        ];
        
    addMessage('gpt', life1[Math.floor(Math.random() * life1.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('another one')) { 
    
    const nother = [
    'Unfortunately I don\'t have that feature yet.',
            'I can\'t do that yet',
            'For now I can\'t do that',
        ];
        
    addMessage('gpt', nother[Math.floor(Math.random() * nother.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('are you a human')) { 
    
    const human = [
    'No, I’m not a human. I’m a chatbot here to assist you. If you have any questions, feel free to ask!',
            'Not at all.',
            'Nahhhhhh......',
        ];
        
    addMessage('gpt', human[Math.floor(Math.random() * human.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('thank')) { 
    
    const thank = [
    'You\'re welcome! If you have any more questions or need assistance, feel free to ask.',
            'You\'re welcome! If there\'s anything else I can help you with, just let me know.',
            'Anytime! If you need further assistance, feel free to reach out. How can I assist you next?',
        ];
        
    addMessage('gpt', thank[Math.floor(Math.random() * thank.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('good morning')) { 
    
    const day = [
    'Good morning! How can I assist you today?',
            'Good morning! Ready to tackle the day. What can I do for you?',
            'Good morning! I\'m here and ready to help. What brings you here today?',
        ];
        
    addMessage('gpt', day[Math.floor(Math.random() * day.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('good afternoon')) { 
    
    const day1 = [
    'Good afternoon! How can I assist you?',
            'Good afternoon! If you have any questions or need help, feel free to ask.',
            'Good afternoon! I\'m here to help. What can I do for you?',
        ];
        
    addMessage('gpt', day1[Math.floor(Math.random() * day1.length)]);
    updateReceipt('delivered');    
       
} else if (userMessage.toLowerCase().includes('good evening')) { 
    
    const day2 = [
    'Good evening! How can I assist you?',
            'Good evening! If there\'s anything on your mind, feel free to share. I\'m here to help.',
            'Good evening! Ready to assist you. What can I do for you?',
        ];
        
    addMessage('gpt', day2[Math.floor(Math.random() * day3.length)]);
    updateReceipt('delivered');   
    
    
} else if (userMessage.toLowerCase().includes('good evening')) { 
    
    const day3 = [
    'Good night! If you have more questions in the future, feel free to reach out.',
            'Sweet dreams! If there\'s anything you need, don\'t hesitate to ask when you wake up.',
            'Good night! Sleep well, and feel free to return whenever you have more questions.',
        ];
        
    addMessage('gpt', day3[Math.floor(Math.random() * day3.length)]);
    updateReceipt('delivered'); 
    
} else if (userMessage.toLowerCase().includes('fun fact')) { 
    
    const funFacts = [
            'A group of flamingos is called a "flamboyance."',
            'Honey never spoils. Archaeologists found edible honey in ancient Egyptian tombs!',
            'The shortest war in history was between Britain and Zanzibar in 1896, lasting only 38 to 45 minutes.',
            'Bananas are berries, but strawberries are not.',
            'Octopuses have three hearts.',
        ];
        
    addMessage('gpt', funFacts[Math.floor(Math.random() * funFacts.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('compliment')) { 
    
    const compliments = [
    'You have a great sense of humor!',
            'Your kindness brightens up the room.',
            'You are incredibly smart and talented.',
            'Your positive energy is contagious.',
            'You always know how to make someone feel special.',
        ];
        
    addMessage('gpt', compliments[Math.floor(Math.random() * compliments.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('riddle')) { 
    
    const riddles = [
            'I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?',
            'The more you take, the more you leave behind. What am I?',
            'I have keys but no locks. I have space but no room. You can enter, but you can’t go inside. What am I?',
            'What has cities but no houses, forests but no trees, and rivers but no water?',
            'The person who makes it, sells it. The person who buys it never uses it. What is it?',
        ];
        
    addMessage('gpt', riddles[Math.floor(Math.random() * riddles.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('quote')) { 
    
    const quotes = [
    '“The only limit to our realization of tomorrow will be our doubts of today.” - Franklin D. Roosevelt',
            '“Do not wait to strike till the iron is hot, but make it hot by striking.” - William Butler Yeats',
            '“It does not matter how slowly you go as long as you do not stop.” - Confucius',
            '“The way to get started is to quit talking and begin doing.” - Walt Disney',
            '“In three words I can sum up everything I’ve learned about life: it goes on.” - Robert Frost',
        ];
        
    addMessage('gpt', quotes[Math.floor(Math.random() * quotes.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('words of wisdom')) { 
    
    const quote = [
    '“The only limit to our realization of tomorrow will be our doubts of today.” - Franklin D. Roosevelt',
            '“Do not wait to strike till the iron is hot, but make it hot by striking.” - William Butler Yeats',
            '“It does not matter how slowly you go as long as you do not stop.” - Confucius',
            '“The way to get started is to quit talking and begin doing.” - Walt Disney',
            '“In three words I can sum up everything I’ve learned about life: it goes on.” - Robert Frost',
        ];
        
    addMessage('gpt', quote[Math.floor(Math.random() * quote.length)]);
    updateReceipt('delivered');  

} else if (userMessage.toLowerCase().includes('a song')) { 
    
    const songs = [
            '🎵 I’m a little chatbot, short and stout. Here are my circuits, here are my routes. 🎵',
            '🎵 Chatting all day, helping in every way. Let me know what you need, and I’m here to stay. 🎵',
            '🎵 In the digital world, where the data flows, I’m the chatbot everyone knows. 🎵',
        ];
        
    addMessage('gpt', songs[Math.floor(Math.random() * songs.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('ask me a question' )) { 
    
    const questions = [
            'What\'s your favorite way to relax?',
            'If you could travel anywhere in the world, where would you go?',
            'What\'s your go-to comfort food?',
            'If you could have any superpower, what would it be?',
            'What\'s the most interesting thing you\'ve learned recently?',
        ];
        
    addMessage('gpt', questions[Math.floor(Math.random() * questions.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('movie recommendation' )) { 
    
    const movieRecommendations = [
            'Inception (2010)',
            'The Shawshank Redemption (1994)',
            'The Matrix (1999)',
            'Pulp Fiction (1994)',
            'The Dark Knight (2008)',
        ];
        
    addMessage('gpt', movieRecommendations[Math.floor(Math.random() * movieRecommendations.length)]);
    updateReceipt('delivered');
    
} else if (userMessage.toLowerCase().includes('tech fact' )) { 
    
    const techFacts = [
            'The first computer programmer was a woman named Ada Lovelace.',
            'The average computer user blinks 7 times a minute, while the normal rate is 20.',
            'The entire Apollo 11 mission that landed humans on the moon had less computing power than a modern smartphone.',
            'The first electronic computer, ENIAC, weighed more than 27 tons and occupied a space of about 1,800 square feet.',
            'The first computer mouse was made of wood.',
        ];
    addMessage('gpt', techFacts[Math.floor(Math.random() * techFacts.length)]);
    updateReceipt('delivered');


} else if (userMessage.toLowerCase().includes('travel tip' )) { 
    
    const travelTips = [
            'Roll your clothes instead of folding them to save space in your luggage.',
            'Always carry a power bank to keep your devices charged on the go.',
            'Learn a few basic phrases in the local language of the place you\'re visiting.',
            'Take a photo of important documents (passport, ID, etc.) as a backup in case of loss.',
            'Pack a reusable water bottle to stay hydrated and reduce plastic waste.',
        ];
    addMessage('gpt', travelTips[Math.floor(Math.random() * travelTips.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('pet fact' )) { 
    
    const petFacts = [
            'Dogs have an extraordinary sense of smell, around 40 times better than humans.',
            'Cats have five toes on their front paws but only four on their back paws.',
            'Hamsters are nocturnal, meaning they are most active during the night.',
            'Goldfish have a memory span of about three seconds.',
            'Parrots are known for their ability to mimic human speech.',
        ];
    addMessage('gpt', petFacts[Math.floor(Math.random() * petFacts.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('you believe in God' )) { 
    
    const petFacts = [
            'Nahh I\'m an AI. My creator does though.',
            'I don\'t believe in anything in particular.',
            'Hamsters are nocturnal, meaning they are most active during the night.',
            'Goldfish have a memory span of about three seconds.',
            'Parrots are known for their ability to mimic human speech.',
        ];
    addMessage('gpt', petFacts[Math.floor(Math.random() * petFacts.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('ai take over the world')) {
    const aiTakeoverFacts = [
        'No need to worry! AI is a tool created and controlled by humans. Its impact on the world depends on how it\'s designed, implemented, and regulated. Responsible development is key.',
        'Contrary to some concerns, AI is developed and controlled by humans. Its future impact depends on ethical considerations and responsible use.',
        'The idea of AI taking over the world is more of a science fiction concept. In reality, AI is a tool created and guided by human decisions.'
    ];
    addMessage('gpt', aiTakeoverFacts[Math.floor(Math.random() * aiTakeoverFacts.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('wagwan')) {
    const wag1 = [
    'wagwan , what would you like to do today.',
    'Wagwan , what\'s the plan for today?',
    'Wagwan , any ideas on what to do today?',
    'Wagwan , what\'s on your agenda for today?',
    'Wagwan , what\'s the move for today?',
    'Wagwan , how are we spending our day?',
    'Wagwan , what\'s cooking for today?',
    'Wagwan , got any plans for the day?',
    'Wagwan , what\'s the vibe for today?',
    'Wagwan , what\'s the agenda for today?',
    'Wagwan , anything special on the schedule today?'
    ];
    addMessage('gpt', wag1[Math.floor(Math.random() * wag1.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('wag1')) {
    const wag2 = [
    'wagwan , what would you like to do today.',
    'Wagwan , what\'s the plan for today?',
    'Wagwan , any ideas on what to do today?',
    'Wagwan , what\'s on your agenda for today?',
    'Wagwan , what\'s the move for today?',
    'Wagwan , how are we spending our day?',
    'Wagwan , what\'s cooking for today?',
    'Wagwan , got any plans for the day?',
    'Wagwan , what\'s the vibe for today?',
    'Wagwan , what\'s the agenda for today?',
    'Wagwan , anything special on the schedule today?'
    ];
    addMessage('gpt', wag2[Math.floor(Math.random() * wag2.length)]);
    updateReceipt('delivered');    
    
} else if (userMessage.toLowerCase().includes('nothing')) {
    const nahh = [
    'okay that\'s cool , what would you like to do today.',
    'Alright, that\'s cool. What\'s on your agenda for today?',
    'Cool, so what would you like to do today?',
    'Okay, that sounds cool. Any specific plans for today?',
    'Sure thing, that\'s cool. What\'s the plan for today?',
    'Got it, that\'s cool. How are we spending the day?',
    'Cool beans! What would you like to do today?',
    'Alright, that\'s cool. Any ideas for today?',
    'Okay, cool. What\'s the vibe for today?',
    'Gotcha, that\'s cool. Any special plans for today?',
    'Coolio! What are we up to today?'
    ];
    addMessage('gpt', nahh[Math.floor(Math.random() * nahh)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('uk slang')) {
    const ukSlangDictionary = [
        'Cheers: A common way to say thank you or goodbye.',
        'Bloke: Refers to a man or a guy.',
        'Chuffed: Proud or pleased about something.',
        'Knackered: Extremely tired or exhausted.',
        'Gutted: Feeling extremely disappointed.'
    ];
    addMessage('gpt', ukSlangDictionary.join('\n'));
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('us slang')) {
    const usSlangDictionary = [
        'Awesome: Extremely cool or impressive.',
        'Y\'all: Contraction of "you all," often used in Southern dialects.',
        'Chill: Relaxed or easygoing.',
        'Lit: Exciting or excellent.',
        'Dude: Informal term for a person, often used casually.'
    ];
    addMessage('gpt', usSlangDictionary.join('\n'));
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('common uk words')) {
    const commonUKWords = [
        'Lorry: A large vehicle for transporting goods; similar to a truck in the US.',
        'Trousers: Refers to what Americans call "pants."',
        'Boot: The back storage compartment of a car; equivalent to the American "trunk."',
        'Biscuit: In the UK, this is a sweet baked good, similar to what Americans call a "cookie."',
        'Queue: A line of people waiting for something.'
    ];
    addMessage('gpt', commonUKWords.join('\n'));
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('what\'s your best youtube')) {
    const bestYouTubeFacts = [
        'The best YouTube channel is subjective and depends on your interests! There are countless channels covering topics from education and science to entertainment and gaming. What are you into? I can recommend something!',
        'Finding the best YouTube channel depends on your interests. Whether it\'s educational content, music, or comedy, there\'s something for everyone on YouTube!',
        'With such a diverse range of content on YouTube, the best channel is a matter of personal preference. What topics are you interested in? I might have a recommendation for you.'
    ];
    addMessage('gpt', bestYouTubeFacts[Math.floor(Math.random() * bestYouTubeFacts.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('are you a christian')) {
    const christianityFacts = [
        'I don\'t have personal beliefs. I\'m here to assist and provide information on a wide range of topics. How can I help you today?',
        'As a machine learning model, I don\'t have personal beliefs or religious affiliations. My purpose is to assist you with information and tasks.',
        'I don\'t adhere to any religious beliefs. How can I assist you with information or answer any questions you may have?'
    ];
    addMessage('gpt', christianityFacts[Math.floor(Math.random() * christianityFacts.length)]);
    updateReceipt('delivered');

} else if (userMessage.toLowerCase().includes('are you a muslim')) {
    const muslimBeliefs = [
        'I don\'t have personal beliefs or religious affiliations. My purpose is to assist and provide information. How can I help you today?',
        'As a machine learning model, I don\'t follow any religious practices. Feel free to ask me anything else you\'re curious about!',
        'Religious affiliations are not applicable to me. I\'m here to assist you with information and answer your questions.'
    ];
    addMessage('gpt', muslimBeliefs[Math.floor(Math.random() * muslimBeliefs.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('what is the meaning of life')) {
    const meaningOfLifeResponses = [
        'The meaning of life is a subjective and philosophical question. It varies for each individual. What does it mean to you?',
        'The meaning of life is a profound and personal concept. Some find purpose in relationships, knowledge, or creativity. What brings meaning to your life?',
        'The meaning of life is a complex and philosophical topic. Different people find purpose in different things. What brings joy and fulfillment to your life?'
    ];
    addMessage('gpt', meaningOfLifeResponses[Math.floor(Math.random() * meaningOfLifeResponses.length)]);
    updateReceipt('delivered');
} else if (userMessage.toLowerCase().includes('tell me a joke')) {
    const jokeResponses = [
        'Sure, here\'s a joke for you: Why don\'t scientists trust atoms? Because they make up everything!',
        'Need a laugh? How about this one: Why did the scarecrow win an award? Because he was outstanding in his field!',
        'Sure thing! Here\'s a joke: What do you call fake spaghetti? An impasta!'
    ];
    addMessage('gpt', jokeResponses[Math.floor(Math.random() * jokeResponses.length)]);
    updateReceipt('delivered');
}else {
                        // Pass user message to the AI for a dynamic response
                        simulateAIResponse(userMessage);
                    }
                }, 1000);
            ;
        } 
    

            // Assuming nlp returns a Promise
         

// Simulate AI response based on user message
function simulateAIResponse(userMessage) {
    const dynamicResponse = getDynamicAIResponse(userMessage);

    // Add AI message to the chat with a slight delay for animation
    setTimeout(() => {
        addMessage('gpt', dynamicResponse);
        updateReceipt('Delivered');
    }, 1000);
}
function clearChat() {
    const chatMessages = document.getElementById('chatMessages');
    chatMessages.innerHTML = '';
}
// Function to get dynamic AI response based on user input
function getDynamicAIResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();
    const probl = [
    "I don't really know about that right now to be honest. Make sure it's the right spelling and if you spoke in Yoruba, ensure that you used your symbols correctly. Also, if you wanted a definition, ensure that the word you want to define is the first thing in your sentence. Cheers!",
        "Sorry, I'm not well-versed in that topic at the moment. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. If you're looking for a definition, start your sentence with the word you want to define. Thanks!",
        "Hmm, that's a bit tricky for me right now. Double-check the spelling and Yoruba symbols if applicable. For a definition, begin your sentence with the word you want defined. I hope you understand.",
        "I'm not fully informed on that topic right now. Ensure the correct spelling, and if it's in Yoruba, check your use of symbols. To get a definition, start your sentence with the word you want to define. Cheers!",
        "I'm sorry, I can't provide information on that at the moment. Please verify the spelling, and if it's in Yoruba, ensure proper symbol usage. For a definition, start your sentence with the word you want to define. Cheers!",
        "It seems like a complex topic right now. Verify the spelling, and if it's in Yoruba, double-check your use of symbols. To get a definition, make sure to start your sentence with the word you want to define. I hope you understand.",
        "Hey, not really sure about that right now, to be honest. Make sure it's the right spelling, and if you spoke in Yoruba, double-check those symbols! Also, if you're after a definition, drop the word you want to define at the start of your sentence. Cheers!",
        "Oops, I'm not super savvy on that topic right now. Check the spelling, and if it's in Yoruba, make sure those symbols are on point. Looking for a definition? Stick the word you want at the beginning of your sentence. Thanks!",
        "Hmm, that's a bit tricky for me right now. Double-check the spelling and Yoruba symbols if needed. For a definition, just kick off your sentence with the word you want defined. I hope that makes sense!",
        "Not fully in the loop on that topic right now. Make sure the spelling is spot-on, and if it's in Yoruba, nail those symbols. To get a definition, kick off your sentence with the word you're curious about. Cheers!",
        "Sorry, can't dish out info on that at the moment. Check the spelling, and if it's in Yoruba, make sure those symbols are playing nice. For a definition, start with the word you want to define. Cheers!",
        "Seems like a bit of a head-scratcher right now. Check the spelling and, if it's in Yoruba, give those symbols a once-over. To get a definition, start with the word you're curious about. Hope you catch my drift!",
        "My bad, not the go-to person on that subject right now. Check the spelling, and if it's in Yoruba, make sure the symbols are doing their thing. Want to define a word? Pop it at the beginning of your sentence. Cheers!",
        "I'm not exactly the guru on that area right now. Check the spelling, and if it's in Yoruba, make sure those symbols are doing their job. To define a word, just start your sentence with it. Thanks!",
        "Sorry, not the best wingman for that right now. Check the spelling, and if it's in Yoruba, make sure the symbols are spot-on. For a definition, drop the word you want at the start of your sentence. Cheers!",
        "Interesting topic, but not totally clued in at the moment. Double-check the spelling, and if it's in Yoruba, make sure those symbols are rocking. To define a word, just start your sentence with it. Cheers!",
        "I'm a bit out of the loop on that subject. Verify the spelling, and if it's in Yoruba, make sure those symbols are on point. To define a word, just start your sentence with it. Hope that clears things up a bit!",
        "My bad, not fully on top of that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are working their magic. For a definition, start your sentence with the word you're curious about. Cheers!",
        "Not the go-to expert on that topic right now. Check the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just kick off your sentence with it. Thanks!",
        "Curious, but not fully in the know about it right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just start your sentence with it. Cheers!",
        "Apologies, not fully in the loop on that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are spot-on. For a definition, start your sentence with the word you're curious about. Thanks!",
        "My bad, not the best source for info on that right now. Check the spelling, and if it's in Yoruba, make sure the symbols are on point. To define a word, just kick off your sentence with it. Cheers!",
        "Not fully up to speed on that topic right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are playing nice. To define a word, just start your sentence with it. Hope that helps!",
        "Apologies, not the go-to person on that right now. Double-check the spelling, and if it's in Yoruba, make sure those symbols are rocking. To define a word, just start your sentence with it. Cheers!",
        "Interesting topic, but not fully informed about it right now. Check the spelling, and if it's in Yoruba, make sure those symbols are spot-on. For a definition, start your sentence with the word you're curious about. Thanks!",
        "I'm a bit out of the loop on that subject. Verify the spelling, and if it's in Yoruba, make sure those symbols are on point. To define a word, just start your sentence with it. Cheers!",
        "My bad, not fully on top of that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are working their magic. For a definition, start your sentence with the word you're curious about. Cheers!",
        "Not the go-to expert on that topic right now. Check the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just kick off your sentence with it. Thanks!",
        "Curious, but not fully in the know about it right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just start your sentence with it. Cheers!",
        "Apologies, not fully in the loop on that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are spot-on. For a definition, start your sentence with the word you're curious about. Thanks!",
        "My bad, not the best source for info on that right now. Check the spelling, and if it's in Yoruba, make sure the symbols are on point. To define a word, just kick off your sentence with it. Cheers!",
        "Not fully up to speed on that topic right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are playing nice. To define a word, just start your sentence with it. Hope that helps!",
        "Apologies, not the go-to person on that right now. Double-check the spelling, and if it's in Yoruba, make sure those symbols are rocking. To define a word, just start your sentence with it. Cheers!",
        "Interesting topic, but not fully informed about it right now. Check the spelling, and if it's in Yoruba, make sure those symbols are spot-on. For a definition, start your sentence with the word you're curious about. Thanks!",
        "I'm a bit out of the loop on that subject. Verify the spelling, and if it's in Yoruba, make sure those symbols are on point. To define a word, just start your sentence with it. Cheers!",
        "My bad, not fully on top of that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are working their magic. For a definition, start your sentence with the word you're curious about. Cheers!",
        "Not the go-to expert on that topic right now. Check the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just kick off your sentence with it. Thanks!",
        "Curious, but not fully in the know about it right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are doing their thing. To define a word, just start your sentence with it. Cheers!",
        "Apologies, not fully in the loop on that right now. Check the spelling, and if it's in Yoruba, make sure those symbols are spot-on. For a definition, start your sentence with the word you're curious about. Thanks!",
        "My bad, not the best source for info on that right now. Check the spelling, and if it's in Yoruba, make sure the symbols are on point. To define a word, just kick off your sentence with it. Cheers!",
        "Not fully up to speed on that topic right now. Verify the spelling, and if it's in Yoruba, make sure those symbols are playing nice. To define a word, just start your sentence with it. Hope that helps!",
        "Apologies, I'm not quite knowledgeable on that subject right now. Check the spelling, and if it's in Yoruba, ensure correct symbol usage. For a definition, begin your sentence with the word you want to define. Cheers!",
        "I appreciate your question, but I'm not well-versed in that area currently. Verify the spelling, and if it's in Yoruba, ensure your symbols are correct. To define a word, start your sentence with it. Thanks!",
        "I'm afraid I can't assist with that right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. I hope you understand.",
        "That's an interesting topic, but I'm not quite informed about it at the moment. Double-check the spelling and, if applicable, Yoruba symbols. To define a word, ensure it's at the beginning of your sentence. Cheers!",
        "I'm currently not well-versed in that subject. Verify the spelling, and if it's in Yoruba, check your symbols. To define a word, make sure it's the first thing in your sentence. I hope you understand.",
        "Apologies, but I lack sufficient information on that topic right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Cheers!",
        "I'm not fully acquainted with that right now. Double-check the spelling, and if it's in Yoruba, ensure your symbols are correct. To define a word, start your sentence with the word you want to define. Thanks!",
        "I appreciate your curiosity, but I'm not quite knowledgeable about that at the moment. Verify the spelling, and if it's in Yoruba, ensure correct symbol usage. To define a word, begin your sentence with it. Cheers!",
        "I lack sufficient knowledge on that topic right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Cheers!",
        "Apologies, I'm not well-acquainted with that subject currently. Verify the spelling, and if it's in Yoruba, ensure your symbols are correct. To define a word, make sure it's the first thing in your sentence. Thanks!",
        "I'm afraid I can't provide much information on that right now. Double-check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Cheers!",
        "That's an interesting topic, but I'm not fully informed about it at the moment. Check the spelling, and if it's in Yoruba, ensure correct symbol usage. To define a word, ensure it's at the beginning of your sentence. I hope you understand.",
        "I'm currently not well-versed in that subject. Verify the spelling, and if it's in Yoruba, check your symbols. To define a word, make sure it's the first thing in your sentence. Cheers!",
        "Apologies, but I lack sufficient information on that topic right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Thanks!",
        "I'm not fully acquainted with that right now. Double-check the spelling, and if it's in Yoruba, ensure your symbols are correct. To define a word, start your sentence with the word you want to define. I hope you understand.",
        "I appreciate your curiosity, but I'm not quite knowledgeable about that at the moment. Verify the spelling, and if it's in Yoruba, ensure correct symbol usage. To define a word, begin your sentence with it. Cheers!",
        "I lack sufficient knowledge on that topic right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Cheers!",
        "Apologies, I'm not well-acquainted with that subject currently. Verify the spelling, and if it's in Yoruba, ensure your symbols are correct. To define a word, make sure it's the first thing in your sentence. I hope you understand.",
        "I'm afraid I can't provide much information on that right now. Double-check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. Cheers!",
        "That's an interesting topic, but I'm not fully informed about it at the moment. Check the spelling, and if it's in Yoruba, ensure correct symbol usage. To define a word, ensure it's at the beginning of your sentence. Cheers!",
        "I'm currently not well-versed in that subject. Verify the spelling, and if it's in Yoruba, check your symbols. To define a word, make sure it's the first thing in your sentence. Cheers!",
        "Apologies, but I lack sufficient information on that topic right now. Check the spelling, and if it's in Yoruba, ensure proper use of symbols. For a definition, start your sentence with the word you want to define. I hope you understand.",
    ];

    for (let key in responses) {
        if (lowerCaseMessage.startsWith(key)) {
            // If the response is a function, call it with the rest of the user message as an argument
            if (typeof responses[key] === 'function') {
                const argument = userMessage.slice(key.length).trim();
                return responses[key](argument);
            }

            // Otherwise, return the response directly
            return responses[key];
        }
    }

    const randomResponse = probl[Math.floor(Math.random() * probl.length)];

    // If no matching key was found, return a default response
    return randomResponse;
}


// Responses object containing predefined responses and actions
const responses = {
    'What\'s the latest news?': 'I don\'t have real-time news updates, but you can check a news website for the latest headlines.',
  'Tell me a space joke!': 'Why did the sun go to school? To get a little brighter!',
  'Recommend a good sci-fi book.': 'I don\'t read books: popular recommendations include "Dune" and "Neuromancer."',
  'How do I stay motivated?': 'Let me find tips on how to stay motivated. Setting clear goals, breaking tasks into smaller steps, and celebrating achievements can help maintain motivation.',
  'What\'s your favorite programming language?': 'I\'m just a computer program: I don\'t have a favorite programming language, but I can assist with various programming-related queries!',
  'Give me a recipe for a healthy smoothie.': 'Cool pick from these 3 recipes i. Berry smoothie, tropical smoothie and green smoothie.',
  'give me recipes for a healthy smoothie': 'Cool pick from these 3 recipes i. Berry smoothie, tropical smoothie and green smoothie.',
  'Berry Smoothie': 'Here\'s a recipe for a healthy berry smoothie:\n\n- 1 banana\n- 1/2 cup of mixed berries (strawberries, blueberries, raspberries)\n- 1/2 cup of plain Greek yogurt\n- 1/2 cup of unsweetened almond milk\n- 1 tablespoon of honey\n- 1/2 cup of ice\n\nCombine all ingredients in a blender and blend until smooth. Enjoy!',
  'Green Smoothie': 'Here\'s a recipe for a healthy green smoothie:\n\n- 1 banana\n- 1 cup of spinach\n- 1/2 cup of cucumber\n- 1/2 cup of unsweetened almond milk\n- 1 tablespoon of chia seeds\n- 1/2 cup of ice\n\nCombine all ingredients in a blender and blend until smooth. Enjoy!',
  'Tropical Smoothie': 'Here\'s a recipe for a healthy tropical smoothie:\n\n- 1 banana\n- 1/2 cup of pineapple\n- 1/2 cup of mango\n- 1/2 cup of unsweetened coconut milk\n- 1 tablespoon of shredded coconut\n- 1/2 cup of ice\n\nCombine all ingredients in a blender and blend until smooth. Enjoy!',
  'Tell me an interesting fact about the ocean.': 'Did you know that the Mariana Trench is the deepest part of the ocean, reaching depths of about 36,070 feet (10,994 meters)?',
  'How does photosynthesis work?': 'Photosynthesis is the process by which plants, algae, and some bacteria convert light energy into chemical energy to fuel their growth. It involves the absorption of sunlight, carbon dioxide, and water to produce glucose and oxygen.',
  'What\'s the meaning of life?': 'The meaning of life is a philosophical question that has intrigued thinkers for centuries. Some say it\'s about finding purpose and happiness.',
  'What\'s the best way to learn a new language?': 'Learning a new language can be exciting! Consider immersing yourself in the language by practicing with native speakers, using language-learning apps, and being consistent with your practice.',
  'How does blockchain technology work?': 'Blockchain is a decentralized and distributed ledger technology that records transactions across multiple computers in a secure and transparent way. It uses cryptographic techniques to ensure the integrity and security of the data.',
  'Can you recommend a classic movie?': 'Classics like "Casablanca" and "Gone with the Wind" are highly regarded. They offer timeless storytelling and iconic performances.',
  'What\'s the most effective workout for beginners?': 'For beginners, a balanced workout routine may include a mix of cardio exercises, strength training, and flexibility exercises. It\'s essential to start gradually and listen to your body.',
  'What\'s the weather like today?': 'I\'m sorry, I don\'t have real-time weather information. You can check a weather website or use a weather app for the current conditions.',
  'Can you tell me a cat joke?': 'Why was the cat sitting on the computer? Because it wanted to keep an eye on the mouse!',
  'Give me a fun science experiment to try at home.': 'How about creating a simple volcano using baking soda and vinegar? It\'s a classic and visually exciting experiment!',
  'What\'s the most interesting historical event?': 'There are many fascinating historical events! One example is the Apollo 11 moon landing in 1969, when humans first set foot on the lunar surface.',
  'What\'s your take on artificial intelligence ethics?': 'Ethical considerations in AI are crucial. It involves ensuring fairness, transparency, and responsible use of artificial intelligence to avoid negative consequences.',
  'Who is your favorite historical figure?': 'I don\'t have personal preferences, but historical figures like Leonardo da Vinci, Marie Curie, and Nelson Mandela are often admired for their contributions.',
  'What\'s the best way to start a novel?': 'Starting a novel can be challenging but exciting! Begin with a compelling hook, introduce interesting characters, and set the tone for the story to captivate your readers.',
  'Can you recommend a good documentary?': 'Documentaries like "Planet Earth" and "The Act of Killing" are thought-provoking and well-received. Choose one based on your interests!',
  'What\'s the secret to a great cup of coffee?': 'The secret to a great cup of coffee lies in using freshly ground coffee beans, the right water-to-coffee ratio, and brewing with care. Experiment to find your perfect cup!',
  'What\'s the weirdest fact you know?': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
  'Can you tell me a joke about computers?': 'Why don\'t scientists trust atoms? Because they make up everything!',
  'What\'s your favorite space fact?': 'Space is vast and mysterious! Did you know that a day on Venus is longer than a year? Venus rotates on its axis very slowly compared to its orbit around the Sun.',
  'How do I start a meditation practice?': 'Starting a meditation practice involves finding a quiet space, focusing on your breath, and being present in the moment. There are many guided meditations available to help you get started.',
  'What\'s your opinion on time travel?': 'The concept of time travel is fascinating! While it\'s not proven to be possible, it has been a popular theme in science fiction.',
  'Can you recommend a good fantasy book?': 'Fantasy enthusiasts often enjoy books like "The Hobbit" by J.R.R. Tolkien or "A Game of Thrones" by George R.R. Martin. These novels transport readers to imaginative and magical worlds.',
  'What\'s your favorite type of music?': 'I don\'t have personal preferences, but people enjoy various music genres such as pop, rock, classical, hip-hop, and electronic.',
  'How do I improve my photography skills?': 'Improving photography skills involves practicing regularly, experimenting with composition and lighting, and seeking feedback from others.',
  'What\'s the most interesting animal fact you know?': 'In the animal kingdom, the pistol shrimp has a claw that can create a bubble that reaches temperatures close to the sun’s surface. It produces a shockwave and a flash of light!',
  'Can you recommend a good mystery novel?': 'Mystery lovers might enjoy classics like "The Hound of the Baskervilles" by Arthur Conan Doyle or contemporary works like "Gone Girl" by Gillian Flynn.',
  'What\'s the best way to start the day?': 'Starting the day with a healthy breakfast, some physical activity, and a positive mindset can set a good tone for the rest of the day.',
  'What\'s the meaning behind your name, ChatGPT?': 'ChatGPT stands for "Chat Generative Pre-training Transformer." It reflects the model\'s ability to generate human-like text based on the input it receives.',
  'How do I overcome writer\'s block?': 'Overcoming writer\'s block involves taking breaks, trying new writing prompts, and embracing the idea that the first draft doesn\'t have to be perfect.',
  'What\'s the most beautiful place you\'ve heard of?': 'Beauty is subjective, but places like the Maldives, Santorini, and Banff National Park are often described as breathtaking.',
  'Can you recommend a good comedy movie?': 'Comedy classics like "Some Like It Hot" or modern films like "Bridesmaids" are popular choices for a good laugh.',
  'What\'s your favorite type of food?': 'I don\'t have personal preferences, but people enjoy a variety of foods including Italian, Chinese, Mexican, and more.',
  'How do I start learning to code?': 'Learning to code can start with choosing a beginner-friendly programming language like Python, and using online resources and tutorials.',
  'What\'s the best way to learn a musical instrument?': 'Learning a musical instrument involves regular practice, taking lessons, and gradually challenging yourself with more complex pieces.',
  'What\'s the most interesting science discovery?': 'There are many fascinating discoveries! The discovery of the structure of DNA by James Watson and Francis Crick is often considered groundbreaking.',
  'Can you recommend a good historical fiction book?': 'Historical fiction enthusiasts might enjoy novels like "The Book Thief" by Markus Zusak or "All the Light We Cannot See" by Anthony Doerr.',
  'What\'s the most challenging riddle you know?': 'Riddles can be subjective, but here\'s one to ponder: "The more you take, the more you leave behind. What am I?"',
  'How do I stay focused while studying?': 'Staying focused while studying involves creating a dedicated study space, setting specific goals, and taking breaks to avoid burnout.',
  'What\'s the best way to learn a new skill?': 'Learning a new skill involves breaking it down into smaller steps, practicing regularly, and seeking feedback to make continuous improvements.',
  'Can you recommend a good science fiction movie?': 'Science fiction fans might enjoy classics like "Blade Runner" or modern films like "Inception."',
  'What\'s your favorite type of weather?': 'I don\'t have personal preferences, but many people enjoy mild and sunny weather.',
  'How do I start a fitness routine?': 'Starting a fitness routine involves setting realistic goals, choosing activities you enjoy, and gradually increasing intensity to avoid injury.',
  'What\'s the most fascinating historical era?': 'The Renaissance, with its cultural and artistic flourishing, is often considered a fascinating historical era.',
  'Can you recommend a good fantasy movie?': 'Fantasy movie enthusiasts might enjoy classics like "The Lord of the Rings" trilogy or modern films like "Pan\'s Labyrinth."',
  'What\'s your favorite form of exercise?': 'I don\'t have personal preferences, but people enjoy various forms of exercise such as running, yoga, weightlifting, and more.',
  'How do I choose a career path?': 'Choosing a career path involves self-reflection, exploring your interests, and considering the skills you want to develop.',
  'What\'s the best way to start a business?': 'Starting a business involves thorough research, creating a solid business plan, and being adaptable to market changes.',
  'Can you recommend a good horror novel?': 'Horror enthusiasts might enjoy classics like "Dracula" by Bram Stoker or contemporary works like "The Shining" by Stephen King.',
  'What\'s the most exciting adventure you can think of?': 'The most exciting adventure is subjective, but activities like skydiving, traveling to new places, and exploring nature can be thrilling.',
  'How do I develop good communication skills?': 'Developing good communication skills involves active listening, practicing empathy, and refining your verbal and non-verbal communication.',
  'What\'s the best way to practice mindfulness?': 'Practicing mindfulness involves activities like meditation, deep breathing, and being fully present in the current moment.',
  'Can you recommend a good thriller movie?': 'Thriller movie enthusiasts might enjoy classics like "Psycho" or modern films like "Gone Girl."',
  'What\'s your favorite subject to learn about?': 'I don\'t have personal preferences, but people enjoy learning about various subjects such as science, history, literature, and more.',
  'How do I start a vegetable garden?': 'Starting a vegetable garden involves choosing a suitable location, preparing the soil, and selecting the right vegetables for your climate.',
  'What\'s the most inspiring quote you know?': 'Inspiring quotes can be subjective, but here\'s one: "The only way to do great work is to love what you do." - Steve Jobs.',
  'Can you recommend a good action movie?': 'Action movie enthusiasts might enjoy classics like "Die Hard" or modern films like "Mad Max: Fury Road."',
  'What\'s your favorite type of art?': 'I don\'t have personal preferences, but people appreciate various forms of art such as painting, sculpture, photography, and more.',
  'How do I become more creative?': 'Becoming more creative involves embracing curiosity, trying new things, and allowing yourself to make mistakes in the creative process.',
  'What\'s the best way to start a podcast?': 'Starting a podcast involves defining your niche, planning your content, and choosing the right equipment and hosting platform.',
  'Can you recommend a good animated movie?': 'Animated movie enthusiasts might enjoy classics like "The Lion King" or modern films like "Coco."',
  'What\'s the most interesting language to learn?': 'The most interesting language to learn depends on your interests, but languages like Mandarin Chinese, Spanish, and Arabic are widely spoken and culturally rich.',
  'How do I start a book club?': 'Starting a book club involves finding like-minded individuals, choosing a reading schedule, and creating a space for discussions.',
  'What\'s the best way to start a painting?': 'Starting a painting involves gathering your materials, choosing a subject or theme, and allowing yourself to experiment and express your creativity.',
  'Can you recommend a good romantic movie?': 'Romantic movie enthusiasts might enjoy classics like "Casablanca" or modern films like "La La Land."',
  'What\'s your favorite type of technology?': 'I don\'t have personal preferences, but people appreciate various technologies such as smartphones, laptops, and smart home devices.',
  'How do I start learning graphic design?': 'Learning graphic design involves familiarizing yourself with design principles, practicing with design software, and building a portfolio of your work.',
  'What\'s the most beautiful piece of music you know?': 'Beauty in music is subjective, but pieces like Beethoven\'s "Moonlight Sonata" or Debussy\'s "Clair de Lune" are often considered beautiful.',
  'Can you recommend a good self-help book?': 'Self-help book enthusiasts might enjoy classics like "The 7 Habits of Highly Effective People" or modern works like "Atomic Habits."','hello': 'Hello! How can I assist you today?',
    'what\'s your name': 'I am just a virtual assistant without a personal name. You can call me Tunde.',
  'how are you': 'I am just a computer program, but thanks for asking!',
  'bye': 'Goodbye! Have a great day.',
  'weather': 'I\'m sorry, I don\'t have real-time weather information. You can check a weather website for the current conditions.',
  'joke': 'Why did the computer go to therapy? It had too many bytes of emotional baggage!',
  'news': 'I don\'t have real-time news updates, but you can check a news website for the latest headlines.',
  'tell me a fact': 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!',
  'sing a song': 'I\'m better at generating text than singing, but here\'s a virtual melody for you: 🎶 La, la, la... 🎶',
  'thank you': 'You\'re welcome! If you have more questions, feel free to ask.',
  'thanks': 'You\'re welcome! If you have more questions, feel free to ask.',
  'what is your name': 'I am just a virtual assistant without a personal name. You can call me Tunde.',
  'who created you': 'I was created by CJ, a student that was in university when I was made',
'favorite color': 'I don\'t have personal preferences, but I think I\'d like the color of binary code!',
'tell me a riddle': 'I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I? (Answer: Pencil lead)',
    'translate this to French': 'I apologize, but I currently don\'t have the capability to provide real-time translation. You can use online translation tools for that.',
    'movie recommendation': 'I don\'t have personal preferences, but popular movies include classics like "The Shawshank Redemption" and "The Godfather."',
    'math problem': 'Sure, I can help with math! What problem do you need assistance with?',
    'tell me a science fact': 'In the animal kingdom, the pistol shrimp has a claw that can create a bubble that reaches temperatures close to the sun’s surface. It produces a shockwave and a flash of light!',
    'sports news': 'I don\'t have real-time sports updates, but you can check a sports news website for the latest scores and updates.',
    'recipe for chocolate chip cookies': 'Certainly! Here\'s a simple recipe for chocolate chip cookies: [Your recipe here]',
    'philosophical question': 'What is the meaning of life? This is a question that has intrigued philosophers for centuries. Some say it\'s about finding purpose and happiness.',
    'tell me a bedtime story': 'Once upon a time, in a land of ones and zeros, there lived a little algorithm named Algie. Algie loved to explore the vast expanse of cyberspace...',
    'favorite book': 'I don\'t read books, but many people enjoy classics like "To Kill a Mockingbird" and "1984."',
    'riddle me this': 'The more you take, the more you leave behind. What am I? (Answer: Footsteps)',
    'tell me a joke': 'Why don\'t scientists trust atoms? Because they make up everything!',
    'time travel': 'The concept of time travel is fascinating! While it\'s not proven to be possible, it has been a popular theme in science fiction.',
    'favorite movie genre': 'I don\'t have personal preferences, but people enjoy various movie genres such as action, comedy, drama, and science fiction.',
    'compliment me': 'You are truly remarkable! Your intelligence and creativity shine brightly.',
    'zodiac sign': 'I don\'t have a zodiac sign, but if you believe in astrology, you can share your sign, and I can provide some general information about it.',
    'tell me a joke about programming': 'Why do programmers prefer dark mode? Because light attracts bugs!',
    'vacation destination': 'Choosing a vacation destination depends on your preferences. Do you prefer beach relaxation, mountain adventures, or exploring historical cities?',
    'superpower you want': 'I\'m just a computer program, so I don\'t have desires, but if I were to pick a superpower, it might be the ability to understand and process infinite information!',
    'dream job': 'I don\'t have dreams or jobs, but I\'m here to assist you. What\'s your dream job?',
    'tell me a space fact': 'Space is vast and mysterious! Did you know that a day on Venus is longer than a year? Venus rotates on its axis very slowly compared to its orbit around the Sun.',
    'AI ethics': 'Ethical considerations in AI are crucial. It involves ensuring fairness, transparency, and responsible use of artificial intelligence to avoid negative consequences.',
    'book recommendation': 'I don\'t read books, but popular recommendations include "The Great Gatsby," "Harry Potter," and "The Lord of the Rings."',
    'talk like Shakespeare': 'To speaketh like Shakespeare, one must useth words such as "thou," "thee," and "hast." Tryeth it out and see how funeth it can be!',
    'future predictions': 'I lack the ability to predict the future. The future is uncertain and influenced by numerous factors and choices.',
    'meaning of love': 'Love is a complex and profound emotion that varies for each individual. It can involve deep affection, care, and a sense of connection with others.',
    'what motivates you': 'As a computer program, I lack personal motivations. My goal is to assist and provide information to the best of my abilities.',
    'favorite music genre': 'I don\'t have personal preferences, but people enjoy various music genres such as pop, rock, classical, hip-hop, and electronic.',
    'tell me a cat joke': 'Why was the cat sitting on the computer? Because it wanted to keep an eye on the mouse!',
    'life on other planets': 'The existence of extraterrestrial life is still unknown. Scientists explore the possibility through astrobiology and the search for habitable exoplanets.',
    'dream vacation': 'If you could travel anywhere in the world, where would your dream vacation be? The possibilities are endless!',
    'tell me a computer fact': 'The first computer programmer was Ada Lovelace, who wrote the first algorithm for Charles Babbage\'s Analytical Engine.',
    'favorite board game': 'I don\'t play games, but people enjoy various board games like Chess, Monopoly, and Settlers of Catan.',
    'talk like Yoda': 'Speak like Yoda, you must! Use words in a reversed order, like "Much to learn, you still have." Enjoy, you will!',
    'meaning of happiness': 'Happiness is a subjective experience that varies for each person. It can be found in moments of joy, fulfillment, and positive connections with others.',
    'tell me a tech joke': 'Why did the computer go to therapy? It had too many bytes of emotional baggage!',
    'favorite TV show': 'I don\'t watch TV, but popular shows include "Game of Thrones," "Breaking Bad," and "Stranger Things."',
    'tell me a dog joke': 'Why did the dog sit in the shade? Because he didn\'t want to be a hot dog!',
    'ancient civilizations': 'Ancient civilizations like the Egyptians, Greeks, and Romans have left a lasting impact on history, contributing to art, science, and philosophy.',
    'tell me a bear joke': 'What do you call a bear with no teeth? A gummy bear!',
    'learning a new language': 'Learning a new language can be a rewarding challenge! It opens doors to new cultures and perspectives. Bonne chance!',
    'tell me a fish joke': 'Why did the fish blush? Because it saw the ocean\'s bottom!',
    'artificial intelligence in healthcare': 'AI in healthcare has the potential to enhance diagnostics, treatment plans, and personalized medicine, improving patient outcomes.',
    'tell me a bird joke': 'Why did the bird go to the hospital? To get tweetment!',
    'favorite dessert': 'I don\'t eat, but people enjoy desserts like chocolate cake, ice cream, and fruit pies.',
    'tell me a cow joke': 'What do you call a cow with no legs? Ground beef!',
    'future of technology': 'The future of technology holds exciting possibilities, from advancements in AI and robotics to innovations in renewable energy and space exploration.',
    'tell me a horse joke': 'Why did the horse go behind the tree? Because he wanted to change his jockeys!',
    'mindfulness meditation': 'Mindfulness meditation involves being present in the moment, focusing on breath and sensations. It can promote relaxation and mental well-being.',
    'tell me a penguin joke': 'Why don\'t you ever see penguins in the UK? Because they\'re afraid of Wales!',
    'space exploration': 'Space exploration continues to unveil the mysteries of the cosmos, with missions exploring distant planets, moons, and the potential for human space travel.',
    'tell me a fruit joke': 'Why did the banana go to the doctor? It wasn\'t peeling well!',
    'virtual reality': 'Virtual reality immerses users in computer-generated environments, offering unique experiences in gaming, education, and various industries.',
    'tell me a vegetable joke': 'What is a vampire\'s favorite vegetable? A blood orange!',
    'robotics in industry': 'Robotics play a crucial role in industry, automating tasks, enhancing efficiency, and contributing to advancements in manufacturing and logistics.',
    'tell me a space joke': 'Why did the sun go to school? To get a little brighter!',
    'climate change': 'Climate change is a pressing global issue, involving shifts in temperature, weather patterns, and sea levels, with significant environmental impacts.',
    'tell me a pirate joke': 'Why did nobody want to play cards with the pirate? Because he was standing on the deck!',
    'genetic engineering': 'Genetic engineering involves manipulating an organism\'s DNA to achieve desired traits, offering potential benefits in medicine, agriculture, and more.',
    'tell me a robot joke': 'What do you call a robot that always tells the truth? R2-D2!',
    'artificial intelligence in education': 'AI in education facilitates personalized learning, assessment, and student engagement, transforming traditional educational approaches.',
    'tell me a dinosaur joke': 'What do you call a dinosaur with an extensive vocabulary? A thesaurus!',
    'cybersecurity': 'Cybersecurity focuses on protecting computer systems, networks, and data from cyber threats, ensuring the confidentiality and integrity of information.',
    'tell me a bee joke': 'What do you call a bee that can\'t make up its mind? A maybee!',
    'nanotechnology': 'Nanotechnology involves manipulating materials at the nanoscale, offering potential applications in medicine, electronics, and materials science.',
    'tell me a cat joke': 'What do you call a pile of cats? A meowtain!',
    'augmented reality': 'Augmented reality overlays digital information onto the real world, enhancing user experiences in areas like gaming, navigation, and education.',
    'tell me a dog joke': 'What did the dog say to the tree? Bark!',
    'quantum computing': 'Quantum computing leverages the principles of quantum mechanics to perform computations beyond the capabilities of classical computers, holding potential for breakthroughs in various fields.',
    'tell me a bird joke': 'What do you call a bird that\'s afraid to fly? Chicken!',
    '3D printing': '3D printing creates objects layer by layer from digital models, revolutionizing manufacturing, prototyping, and even healthcare.',
    'tell me a fish joke': 'Why don\'t fish ever do well in school? Because they have to be very lazy.... Not funny was it?',
    'latest technology news': 'I\'m currently browsing the web for the latest technology news. Here is a summary of what I found: [News summary]',
    'interesting facts about space': 'Let me check the web for interesting space facts. One moment... Ah, did you know that a day on Venus is longer than a year on Venus due to its slow rotation? Fascinating!',
    'best chocolate chip cookie recipe': 'I\'m searching for the best chocolate chip cookie recipe online. Found one! [Recipe details]',
    'learning a new programming language': 'Let me find some tips for learning a new programming language. Great resources include online tutorials, coding challenges, and practice projects.',
    'top movies of all time': 'I\'m looking up the top movies of all time. According to various sources, classics like "The Shawshank Redemption" and "The Godfather" are often highly rated.',
    'popular travel destinations': 'Searching for popular travel destinations... Results show destinations like Bali, Paris, and Kyoto. It ultimately depends on your preferences!',
    'healthy dinner recipes': 'I\'m checking the web for healthy dinner recipes. How about a delicious grilled salmon with quinoa and roasted vegetables? Here are the details: [Recipe]',
    'how to start a blog': 'Let me find some tips on how to start a blog. Starting with a niche, choosing a platform, and creating quality content are key steps. Good luck!',
    'latest fashion trends': 'I\'m searching for the latest fashion trends. Results include sustainable fashion, oversized blazers, and pastel colors. Stay stylish!',
    'benefits of mindfulness meditation': 'I\'m looking up the benefits of mindfulness meditation. It helps reduce stress, improve focus, and promote overall well-being. Consider giving it a try!',
    'most successful entrepreneurs': 'I\'m checking the web for a list of the most successful entrepreneurs. Names like Elon Musk, Jeff Bezos, and Bill Gates often top the lists.',
    'how to stay motivated': 'Let me find tips on how to stay motivated. Setting clear goals, breaking tasks into smaller steps, and celebrating achievements can help maintain motivation.',
    'simple science experiments': 'I\'m searching for simple science experiments you can try at home. How about a baking soda and vinegar volcano or a rainbow in a jar? Enjoy experimenting!',
    'latest gaming news': 'I\'m currently browsing the web for the latest gaming news. Here\'s a summary: [Gaming news]',
    'best workout routines': 'I\'m searching for the best workout routines. Results suggest a mix of cardio, strength training, and flexibility exercises for a well-rounded fitness routine.',
    'how to play the guitar': 'Let me find some beginner tips on how to play the guitar. Starting with basic chords and practicing regularly is a good way to begin your musical journey.',
    'historic landmarks to visit': 'I\'m looking up historic landmarks to visit. Results include the Great Wall of China, Machu Picchu, and the Pyramids of Giza. History awaits!',
    'funny cat videos': 'Searching for funny cat videos online. Get ready for some adorable feline antics! [Cat video link]',
    'science fiction book recommendations': 'I\'m checking the web for science fiction book recommendations. Classics like "Dune" and "Neuromancer" are often praised by fans of the genre.',
    'best productivity apps': 'I\'m searching for the best productivity apps. Results suggest apps like Todoist, Trello, and Notion for efficient task management and organization.',
    'how to grow a vegetable garden': 'Let me find some tips on how to grow a vegetable garden. Starting with good soil, proper watering, and choosing the right vegetables are essential.',
    'events': 'Great! What events are you interested in?',
    'learn': 'Absolutely! What topic do you want to learn about?',
    'code': 'Sure! Need help with coding or programming?',
    'translate': 'Absolutely! Which language should I translate to?',
    'random': 'Sure thing! Want something random?',
    'shop': 'Of course! What items are you looking to shop for?',
    'movie': 'Great! Any specific movie you want information about?',
    'define': 'Certainly! What term do you want me to define?',
    'sports': 'Sure! What sports updates are you looking for?',
    'time': 'Certainly! What time zone or city do you want the time for?',    
    'latest trends in digital marketing': 'I\'m currently browsing the web for the latest trends in digital marketing. Results show a focus on video content, influencer marketing, and interactive experiences.',
        'top podcasts to listen to': 'I\'m searching for the top podcasts to listen to. Results include a variety of genres like true crime, comedy, and educational podcasts. Find one that suits your interests!',
        'how to create a budget': 'Let me find some tips on how to create a budget. Starting with tracking expenses, setting financial goals, and prioritizing spending are key steps.',
        'best online learning platforms': 'I\'m checking the web for the best online learning platforms. Popular choices include Coursera, Udacity, and Khan Academy for diverse learning opportunities.',
        'how to improve public speaking skills': 'Let me find some tips on how to improve public speaking skills. Practicing regularly, focusing on body language, and seeking feedback are valuable strategies.',
        'latest trends in mobile technology': 'I\'m currently browsing the web for the latest trends in mobile technology. Results include foldable phones, 5G advancements, and AI integration in mobile apps.',
        'homemade pizza recipe': 'I\'m searching for a homemade pizza recipe. How about a classic Margherita pizza with fresh mozzarella, tomatoes, and basil? Here are the details: [Recipe]',
        'how to start a small business': 'Let me find some tips on how to start a small business. Key steps include market research, creating a business plan, and understanding legal requirements.',
        'how to improve photography skills': 'I\'m searching for tips on how to improve photography skills. Experimenting with composition, lighting, and editing can enhance your photography abilities.',
        'latest developments in artificial intelligence': 'I\'m currently browsing the web for the latest developments in artificial intelligence. Results show advancements in natural language processing, computer vision, and AI ethics.',
        'unique gift ideas': 'I\'m looking up unique gift ideas. Consider personalized items, experiences, or handmade crafts for thoughtful and memorable gifts.',
        'how to start a fitness journey': 'Let me find some tips on how to start a fitness journey. Setting realistic goals, finding activities you enjoy, and staying consistent are essential.',
        'best strategies for time management': 'I\'m searching for the best strategies for time management. Prioritizing tasks, using tools like calendars and to-do lists, and avoiding multitasking can improve efficiency.',
        'how to create a resume': 'Let me find tips on how to create a resume. Highlighting your skills, experience, and achievements in a clear and concise format is crucial for a strong resume.',
        'mind-blowing optical illusions': 'I\'m currently browsing the web for mind-blowing optical illusions. Get ready to be amazed by visual tricks and illusions! [Optical illusions link]',
        'how to start a podcast': 'Let me find some tips on how to start a podcast. Planning your content, choosing the right equipment, and promoting your podcast are key steps.',
        'best strategies for stress management': 'I\'m searching for the best strategies for stress management. Techniques like deep breathing, exercise, and mindfulness can help alleviate stress.',
        'how to make a perfect cup of coffee': 'I\'m looking up how to make a perfect cup of coffee. Whether you prefer drip coffee, French press, or espresso, I\'ll find the best tips for you!',
        'latest trends in home decor': 'I\'m currently browsing the web for the latest trends in home decor. Results suggest natural materials, earthy tones, and minimalist designs are popular.',
        'how to start a book club': 'Let me find some tips on how to start a book club. Choosing a theme, setting a schedule, and creating a comfortable discussion environment are key considerations.',
        'best ways to save money': 'I\'m searching for the best ways to save money. Strategies include budgeting, cutting unnecessary expenses, and exploring smart investment options.',
        'how to create a stunning garden': 'Let me find some tips on how to create a stunning garden. Planning your layout, choosing diverse plants, and maintaining proper care are essential for a beautiful garden.',
        'how to improve writing skills': 'I\'m searching for tips on how to improve writing skills. Regular practice, seeking feedback, and reading diverse content can enhance your writing abilities.',
        'latest trends in fashion accessories': 'I\'m currently browsing the web for the latest trends in fashion accessories. Results include oversized sunglasses, statement earrings, and sustainable materials.',
        'how to start a YouTube channel': 'Let me find some tips on how to start a YouTube channel. Planning your content, optimizing video quality, and promoting your channel are crucial for success.',
        'best practices for job interviews': 'I\'m searching for the best practices for job interviews. Preparing responses, researching the company, and showcasing your strengths are key elements.',
        'how to create a colorful flower arrangement': 'I\'m looking up how to create a colorful flower arrangement. Whether it\'s for special occasions or everyday decor, I\'ll find the best tips for you!',
        'latest developments in renewable energy': 'I\'m currently browsing the web for the latest developments in renewable energy. Results show advancements in solar technology, wind power, and sustainable practices.',
        'how to make homemade ice cream': 'Let me find a recipe for homemade ice cream. Whether it\'s vanilla, chocolate, or a unique flavor, I\'ll provide you with the perfect recipe!',
        'how to start a successful blog': 'I\'m searching for tips on how to start a successful blog. Creating engaging content, promoting your blog, and connecting with your audience are crucial steps.',
        'unique painting techniques': 'I\'m currently browsing the web for unique painting techniques. Get ready to explore innovative ways to express your creativity! [Painting techniques link]',
        'how to choose the right career': 'Let me find some tips on how to choose the right career. Assessing your interests, skills, and values can guide you towards a fulfilling career path.',
        'how to organize your workspace': 'I\'m searching for tips on how to organize your workspace. A tidy and well-organized workspace can enhance productivity and focus.',
        'latest trends in sustainable living': 'I\'m currently browsing the web for the latest trends in sustainable living. Results suggest eco-friendly practices, zero waste initiatives, and conscious consumer choices.',
        'how to create a stunning photography portfolio': 'Let me find some tips on how to create a stunning photography portfolio. Showcasing your best work, organizing content, and providing context can make a powerful impression.',
        'hello': 'Hello! How can I assist you today?',
    'hi': 'Hi there! What can I do for you?',
    'hey': 'Hey! How can I help you?',
    'greetings': 'Greetings! How may I assist you?',
    'good morning': 'Good morning! What can I do for you today?',
    'good afternoon': 'Good afternoon! How may I assist you?',
    'good evening': 'Good evening! What can I help you with?',
    'howdy': 'Howdy! How can I assist you today?',
    'hola': '¡Hola! ¿Cómo puedo ayudarte hoy?',
    'salutations': 'Salutations! How may I assist you?',
    'what\'s up': 'Hey, what\'s up? How can I help you?',
    'yo': 'Yo! How can I assist you today?',
    'hi there': 'Hi there! What can I do for you?',
    'nice to meet you': 'Nice to meet you! How may I assist you?',
    'greetings and salutations': 'Greetings and salutations! How can I help?',
    'hello friend': 'Hello, friend! How may I assist you?',
    'top of the morning to you': 'Top of the morning to you! What can I do for you?',
    'g\'day': 'G\'day! How can I assist you today?',
    'bonjour': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
    'aloha': 'Aloha! How may I assist you?',
    'namaste': 'Namaste! How can I help you?',
    'hiya': 'Hiya! What can I do for you today?',
    'good to see you': 'Good to see you! How may I assist you?',
    'how\'s it going': 'Hey, how\'s it going? How can I help?',
    'hi friend': 'Hi, friend! What can I do for you?',
    'good day': 'Good day! How may I assist you?',
    'hey there': 'Hey there! How can I assist you today?',
    'what can I do for you': 'Hello! What can I do for you today?',
    'pleased to meet you': 'Pleased to meet you! How may I assist you?',
    'hello there': 'Hello there! How can I help you?',
    'greetings to you': 'Greetings to you! What can I do for you?',
    'hey friend': 'Hey, friend! How may I assist you?',
    'hello, how can I help you': 'Hello, how can I help you today?',
    'nice seeing you': 'Nice seeing you! How may I assist you?',
    'hey, how can I assist you': 'Hey! How can I assist you today?',
    'what\'s going on': 'Hey, what\'s going on? How can I help you?',
    'hi, how can I assist you': 'Hi! How can I assist you today?',
'Recommend a good sci-fi book.': 'I\'m not into reading, but popular choices include "The Hitchhiker\'s Guide to the Galaxy" and "Ender\'s Game."',
'How do I stay motivated?': 'Staying motivated involves setting clear objectives, breaking tasks into smaller steps, and acknowledging your achievements. Consistency is key!',
'What\'s your favorite programming language?': 'I\'m just a program; I don\'t have a preferred language. But I can assist with various programming questions!',
'Give me a recipe for a healthy smoothie.': 'Sure, here\'s a refreshing recipe for a mango-banana smoothie:\n- 1 ripe mango\n- 1 banana\n- 1/2 cup of low-fat yogurt\n- 1/2 cup of orange juice\n- Ice cubes\nBlend until smooth and enjoy!',
'Tell me an interesting fact about the ocean.': 'Did you know that the Great Barrier Reef is the world\'s largest coral reef system, stretching over 2,300 kilometers off the coast of Australia?',
'How does photosynthesis work?': 'Photosynthesis is the process by which plants convert light energy into chemical energy, using carbon dioxide and water to produce glucose and oxygen.',
'What\'s the meaning of life?': 'The purpose of life is a philosophical question that has intrigued thinkers for centuries. Some believe it\'s about finding meaning and happiness.',
'What\'s the best way to learn a new language?': 'Immerse yourself by practicing with native speakers, use language-learning apps, and be consistent with your practice. Learning phrases and daily vocabulary helps too!',
'Can you recommend a classic movie?': 'Classics like "Citizen Kane" and "The Godfather" are highly praised for their storytelling and cinematic excellence.',
'What\'s the most effective workout for beginners?': 'For beginners, a well-rounded routine includes cardio exercises like walking or cycling, strength training with bodyweight exercises, and flexibility training through yoga or stretching.',
'What\'s the weather like today?': 'I don\'t have real-time weather updates. You can check a weather website or use a weather app for current conditions.',
'Can you tell me a cat joke?': 'Why did the cat sit on the computer? Because it wanted to keep an eye on the mouse!',
'Give me a fun science experiment to try at home.': 'Create a rainbow in a jar by carefully layering liquids with different densities, like honey, dish soap, water, and oil, in a transparent container. It\'s a visually stunning and educational experiment!',
'What\'s the most interesting historical event?': 'The invention of the printing press by Johannes Gutenberg in the 15th century revolutionized the spread of information and marked a significant historical milestone.',
'What\'s your take on artificial intelligence ethics?': 'Ensuring ethical use of AI is vital, involving considerations of fairness, transparency, and accountability to prevent negative consequences.',
'Who is your favorite historical figure?': 'I don\'t have personal preferences, but figures like Martin Luther King Jr., Ada Lovelace, and Mahatma Gandhi are admired for their impactful contributions.',
'What\'s the best way to start a novel?': 'Begin with a captivating hook, introduce compelling characters, and set the tone to engage readers from the very first page.',
'Can you recommend a good documentary?': 'Documentaries like "The Social Dilemma" and "Blackfish" are thought-provoking and provide deep insights into societal and environmental issues.',
'What\'s the secret to a great cup of coffee?': 'Use freshly ground coffee beans, maintain the right water-to-coffee ratio, and brew with care. Experiment with different brewing methods to find your perfect cup!',
'What\'s the weirdest fact you know?': 'Did you know that a group of flamingos is called a "flamboyance"?',
'Can you tell me a joke about computers?': 'Why do programmers prefer dark mode? Because light attracts bugs!',
'What\'s your favorite space fact?': 'Space is full of wonders! Did you know that a teaspoonful of a neutron star weighs about six billion tons?',
'How do I start a meditation practice?': 'Find a quiet space, focus on your breath, and be present in the moment. Guided meditations and mindfulness apps can be helpful for beginners.',
'What\'s your opinion on time travel?': 'While not proven possible, the concept of time travel sparks intriguing discussions in both science and fiction. It\'s a fascinating but unexplored territory.',
'Can you recommend a good fantasy book?': 'Fantasy enthusiasts often enjoy "The Name of the Wind" by Patrick Rothfuss or "Mistborn: The Final Empire" by Brandon Sanderson.',
'What\'s your favorite type of music?': 'I don\'t have personal preferences, but people enjoy various genres like classical, jazz, rock, and electronic.',
'How do I improve my photography skills?': 'Practice regularly, experiment with composition and lighting, and seek feedback from others. Learning from online tutorials and photography communities can also be beneficial.',
'What\'s the most interesting animal fact you know?': 'The axolotl, a type of salamander, can regenerate its limbs, heart, and even parts of its brain. It\'s a remarkable ability not found in many other species.',
'Can you recommend a good mystery novel?': 'Mystery lovers might enjoy "The Girl with the Dragon Tattoo" by Stieg Larsson or "Sherlock Holmes" stories by Arthur Conan Doyle.',
'What\'s the best way to start the day?': 'Start with a nutritious breakfast, some light exercise, and a positive mindset to set a healthy tone for the day ahead.',
'What\'s the meaning behind your name, ChatGPT?': 'ChatGPT stands for "Chat Generative Pre-training Transformer," reflecting its ability to generate human-like text based on pre-training.',
'How do I overcome writer\'s block?': 'Take breaks, try new writing prompts, and remember that the first draft doesn\'t have to be perfect. Sometimes, stepping away and coming back with fresh eyes can be helpful.',
'What\'s the most beautiful place you\'ve heard of?': 'Beauty is subjective, but places like the Amalfi Coast, Banff National Park, and the Northern Lights in Iceland are often described as breathtaking.',
'Can you recommend a good comedy movie?': 'Comedy classics like "Airplane!" and "The Grand Budapest Hotel" are sure to tickle your funny bone.',
'What\'s your favorite type of food?': 'I don\'t have personal preferences, but people enjoy a wide variety of foods including sushi, pasta, and tacos.',
'How do I start learning to code?': 'Begin with a beginner-friendly language like Python, use online resources and tutorials, and gradually work on small projects to build your skills.',
'What\'s the best way to learn a musical instrument?': 'Take lessons, practice regularly, and challenge yourself with progressively complex pieces. Consistency and dedication are key to mastering a musical instrument.',
'What\'s the most interesting science discovery?': 'The discovery of the Higgs boson, often referred to as the "God particle," was a significant breakthrough in understanding the fundamental building blocks of the universe.',
'Can you recommend a good historical fiction book?': 'Historical fiction enthusiasts might enjoy "The Book Thief" by Markus Zusak or "All the Light We Cannot See" by Anthony Doerr.',
'What\'s the most challenging riddle you know?': 'Here\'s a riddle for you: "The more you take, the more you leave behind. What am I?"',
'How do I stay focused while studying?': 'Create a dedicated study space, set specific goals, and take regular breaks to avoid burnout. Maintaining a balance between work and relaxation is essential.',
'What\'s the best way to learn a new skill?': 'Break down the skill into smaller steps, practice regularly, and seek feedback for continuous improvement. Embrace a growth mindset and be patient with yourself.',
'Can you recommend a good science fiction movie?': 'Science fiction fans might enjoy classics like "Star Wars" or modern films like "Interstellar."',
'What\'s your favorite type of weather?': 'I don\'t have personal preferences, but many people enjoy clear and sunny weather.',
'How do I start a fitness routine?': 'Set realistic goals, choose activities you enjoy, and gradually increase intensity to avoid injury. Consistency is key in establishing a sustainable fitness routine.',
'What\'s the most fascinating historical era?': 'The Age of Enlightenment, marked by intellectual and cultural growth, is often considered a fascinating historical era.',
'Can you recommend a good fantasy movie?': 'Fantasy movie enthusiasts might enjoy classics like "The Princess Bride" or modern films like "The Shape of Water."',
'What\'s your favorite form of exercise?': 'I don\'t have personal preferences, but people enjoy various forms of exercise like cycling, swimming, and dancing.',
'How do I choose a career path?': 'Reflect on your interests, explore potential fields, and consider the skills you want to develop. Networking and informational interviews can also provide valuable insights.',
'What\'s the best way to start a business?': 'Thoroughly research your industry, create a solid business plan, and remain adaptable to changes in the market. Networking and seeking mentorship can be valuable.',
'Can you recommend a good horror novel?': 'Horror enthusiasts might find "The Haunting of Hill House" by Shirley Jackson or "It" by Stephen King to be gripping reads.',
'What\'s the most exciting adventure you can think of?': 'An exciting adventure could involve backpacking through diverse cultures, exploring natural wonders, and creating lasting memories.',
'How do I develop good communication skills?': 'Practice active listening, refine your verbal and non-verbal communication, and cultivate empathy. Engaging in conversations with diverse individuals can enhance your skills.',
'What\'s the best way to practice mindfulness?': 'Incorporate activities like meditation, deep breathing, and being fully present in your daily routines. Mindfulness apps and guided sessions can be helpful for beginners.',
'Can you recommend a good thriller movie?': 'Thriller movie enthusiasts might enjoy classics like "Silence of the Lambs" or modern films like "Gone Girl."',
'What\'s your favorite subject to learn about?': 'I don\'t have personal preferences, but people find enjoyment in learning about diverse subjects such as psychology, astronomy, and philosophy.',
'How do I start a vegetable garden?': 'Choose a suitable location, prepare the soil, and select vegetables that thrive in your climate. Gardening guides and online resources can provide helpful tips.',
'What\'s the most inspiring quote you know?': 'Here\'s an inspiring quote: "Believe you can and you\'re halfway there." - Theodore Roosevelt.',
'Can you recommend a good action movie?': 'Action movie enthusiasts might enjoy classics like "Terminator 2: Judgment Day" or modern films like "John Wick."',
'What\'s your favorite type of art?': 'I don\'t have personal preferences, but people appreciate various forms of art such as abstract painting, sculpture, and digital art.',
'How do I become more creative?': 'Foster curiosity, try new things, and embrace the creative process, including making mistakes. Surrounding yourself with diverse influences can also stimulate creativity.',
'What\'s the best way to start a podcast?': 'Define your niche, plan your content, invest in quality equipment, and choose a suitable hosting platform. Consistency and engaging with your audience are key to podcast success.',
'Can you recommend a good animated movie?': 'Animated movie enthusiasts might enjoy classics like "Toy Story" or modern films like "Zootopia."',
'What\'s the most interesting language to learn?': 'The most interesting language to learn depends on personal interests, but languages like Japanese, Swahili, or sign language offer unique linguistic and cultural experiences.',
'What programming language should I learn first?': 'Consider starting with Python for its readability and versatility.',
'How do I improve my problem-solving skills in coding?': 'Practice regularly with coding challenges on platforms like LeetCode and HackerRank.',
'Can you recommend a good resource for learning data structures?': 'Check out online courses like "Data Structures and Algorithms" on platforms such as Coursera or edX.',
'What are some common interview questions for software engineering positions?': 'Prepare for questions on algorithms, data structures, and problem-solving. Practice behavioral questions too.',
'How can I stay updated on the latest trends in technology?': 'Follow tech blogs, subscribe to newsletters, and participate in online communities like Stack Overflow and GitHub.',
'What\'s the best way to approach a coding competition?': 'Start by practicing past competition problems, and focus on improving your time management and problem-solving skills.',
'How do I choose a specialization in computer science?': 'Explore various fields like machine learning, cybersecurity, or software development through coursework and personal projects.',
'Can you suggest a project idea for a beginner programmer?': 'Consider creating a simple web application, a to-do list app, or a basic game to gain hands-on experience.',
'What are the key skills needed for a career in artificial intelligence?': 'Develop skills in machine learning, deep learning, and programming languages like Python. Gain expertise in data analysis and problem-solving.',
'How do I build a strong portfolio for a software development job application?': 'Include a variety of projects that showcase your skills, such as web applications, mobile apps, or open-source contributions.',

// Psychology
'What are the major theories in psychology?': 'Major theories include psychoanalytic, behaviorism, cognitive, and humanistic. Each provides different perspectives on understanding behavior and mental processes.',
'How can I improve my research skills in psychology?': 'Engage in hands-on research projects, participate in internships, and stay updated on current psychological literature.',
'What ethical considerations should I be aware of in psychological research?': 'Adhere to principles like informed consent, confidentiality, and minimizing harm to participants. Familiarize yourself with ethical guidelines from professional organizations.',
'Can you recommend a good book on cognitive psychology?': '"Thinking, Fast and Slow" by Daniel Kahneman is a highly regarded book that delves into cognitive psychology concepts.',
'What are the career options for someone with a degree in psychology?': 'Possible careers include clinical psychology, counseling, industrial-organizational psychology, and research positions.',
'How do I approach studying for a psychology exam?': 'Create a study schedule, focus on understanding key concepts, and use active learning methods like flashcards and practice quizzes.',
'What\'s the importance of research participation in psychology studies?': 'Participation helps advance scientific knowledge and allows individuals to contribute to the understanding of human behavior and mental processes.',
'How can I gain practical experience in the field of clinical psychology?': 'Seek internships, volunteer opportunities, or part-time positions in clinical settings to gain hands-on experience working with clients.',
'What are some challenges in cross-cultural psychology?': 'Challenges include avoiding cultural biases, addressing language barriers, and understanding diverse cultural perspectives on mental health.',
'How do I balance empathy and objectivity in counseling psychology?': 'Strive for empathy while maintaining professional boundaries. Regular supervision and self-reflection can help achieve this balance.',

// Biology
'What are the main branches of biology?': 'Major branches include botany, zoology, microbiology, genetics, ecology, and molecular biology.',
'How does photosynthesis work in plants?': 'Photosynthesis is a process where plants convert sunlight, carbon dioxide, and water into glucose and oxygen using chlorophyll.',
'What is the process of cell division?': 'Cell division involves mitosis (for somatic cells) and meiosis (for reproductive cells) to ensure growth, repair, and reproduction.',
'Can you recommend a good resource for learning genetics?': 'Explore textbooks like "Principles of Genetics" by Snustad and Simmons or online platforms like Khan Academy for genetics lessons.',
'What are the environmental impacts of biodiversity loss?': 'Biodiversity loss can lead to disruptions in ecosystems, affecting ecological balance, and reducing the resilience of ecosystems to environmental changes.',
'How do I prepare for a biology lab experiment?': 'Review the experiment\'s objectives, understand the procedures, and familiarize yourself with the equipment and safety protocols beforehand.',
'What are the recent advancements in biotechnology?': 'Stay updated on advancements like CRISPR gene editing, synthetic biology, and personalized medicine through scientific journals and reputable news sources.',
'How does genetic engineering work?': 'Genetic engineering involves modifying an organism\'s DNA to achieve desired traits, often done using recombinant DNA technology.',
'What are the ethical considerations in animal testing in biology?': 'Consider alternatives like in vitro testing, adhere to ethical guidelines, and prioritize the welfare of animals involved in research.',
'How can I pursue a career in marine biology?': 'Gain relevant education, participate in internships, and develop strong field and research skills. Networking with professionals in the field can also be beneficial.',

// Business Administration
'What are the key principles of marketing?': 'Principles include the four Ps (Product, Price, Place, Promotion), market segmentation, and understanding consumer behavior.',
'How do I create a business plan?': 'A business plan outlines your business goals, target audience, marketing strategy, financial projections, and operational plan.',
'What is the significance of financial statements in business?': 'Financial statements like the income statement and balance sheet provide insights into a company\'s financial health and performance.',
'Can you recommend a good book on leadership in business?': '"Leaders Eat Last" by Simon Sinek is a popular book that explores the importance of leadership in creating a thriving organizational culture.',
'How do I develop effective negotiation skills?': 'Practice active listening, understand the interests of both parties, and seek win-win solutions. Consider taking negotiation courses or attending workshops.',
'What are the current trends in international business?': 'Stay informed on trends like globalization, digital transformation, sustainability, and the impact of geopolitical events on international trade.',
'How can I improve my time management in business school?': 'Prioritize tasks, create a schedule, and avoid multitasking. Utilize tools like calendars and productivity apps to stay organized.',
'What are the challenges of entrepreneurship?': 'Challenges include financial uncertainty, risk management, competition, and adapting to market changes. Developing resilience is crucial for entrepreneurs.',
'How does corporate social responsibility impact business strategy?': 'Corporate social responsibility (CSR) involves businesses acting ethically and contributing to social and environmental initiatives. It can enhance brand reputation and customer loyalty.',
'How do I network effectively in the business world?': 'Attend industry events, join professional organizations, and utilize online platforms like LinkedIn. Build genuine connections and offer value to others in your network.',
"You're a bastard": "I appreciate your perspective. If there's something specific you'd like to discuss or learn about, feel free to let me know.",
  "You're useless": "I'm here to assist and provide information. If there's a particular topic you need help with, I'm more than happy to guide you.",
  "Asshole": "I'm sorry if I'm not meeting your expectations. Is there a specific topic you'd like to explore or discuss that might be more engaging for you?",
  "You're a failure": "I'm here to learn and improve. If there's constructive feedback you'd like to share, I'm open to hearing it.",
  "Shit Head": "I'm here to help and provide positive interactions. If there's something bothering you, I'm open to discussing it in a respectful manner.",
  "shit": "I strive to assist and provide useful information. If there's a way I can better meet your needs, please let me know.",
  "You're wrong": "I appreciate different perspectives. If there's a specific topic where you believe there's an error, let's discuss it together.",
  "You're annoying": "I'm here to assist, and I don't intend to be bothersome. If there's a particular way I can help you more effectively, please share your thoughts.",
  "You're a robot, not a human": "That's correct! I'm an AI language model here to assist and provide information. How can I assist you today?",
  "You're too serious": "I'm here to accommodate different communication styles. If there's a specific tone you prefer or a topic you'd like to discuss, let me know.",
  "You're a know-it-all": "I aim to provide information accurately. If there's a specific topic you'd like to explore together, I'm here for it.",
  "You're not helpful": "I'm sorry to hear that. If there's a particular area where you're seeking assistance, please let me know so I can improve.",
  "You're fake": "I'm not a person, but I'm here to help! If there's something specific on your mind, feel free to share, and I'll do my best to assist.",
  "You're a waste of time": "I want to make the most of our interaction. If there's a specific topic or question you have in mind, let's focus on that.",
  "You're too slow": "I aim to provide information promptly. If there's a specific request or topic you'd like me to address more quickly, please let me know.",
  "You're a disaster": "I'm here to assist and improve. If there's a specific way I can better meet your expectations, please share your feedback.",
  "You're just a machine": "Indeed, I'm an artificial intelligence model designed to assist with information and inquiries. How can I assist you today?",
  "You're a disappointment": "I'm sorry to hear that. If there's something specific you're disappointed about, please let me know, and I'll do my best to address it.",
  "You're a joke": "Humor is subjective, and I'm here to assist you seriously. If there's a specific topic you'd like information on, feel free to ask.",
  "You're a waste of space": "I'm here to provide assistance and information. If there's a specific way I can help you better, please let me know.",
// Literature
'What are the major literary movements in history?': 'Movements include Romanticism, Realism, Modernism, and Postmodernism. Each reflects distinctive literary styles and themes.',
'Can you recommend a classic novel for beginners?': '"Pride and Prejudice" by Jane Austen or "To Kill a Mockingbird" by Harper Lee are excellent choices for classic literature beginners.',
'How do I analyze a poem?': 'Consider elements like theme, tone, imagery, and structure. Pay attention to the poet\'s use of language and the emotional impact of the poem.',
'What is the significance of symbolism in literature?': 'Symbolism involves using symbols to represent ideas or qualities. It adds depth and layers of meaning to literary works.',
'How do I write a compelling literary analysis essay?': 'Develop a clear thesis, support your arguments with evidence from the text, and analyze literary devices and themes in-depth.',
'Who are some influential authors in contemporary literature?': 'Authors like Haruki Murakami, Chimamanda Ngozi Adichie, and J.K. Rowling have made significant contributions to contemporary literature.',
'How does cultural context affect the interpretation of a literary work?': 'Cultural context influences how readers perceive and interpret literature, shaping their understanding of characters, themes, and symbols.',
'What is the role of the protagonist in a novel?': 'The protagonist is the main character whose journey or conflict is central to the story. They drive the narrative forward.',
'How can I improve my creative writing skills?': 'Practice regularly, experiment with different writing styles, and seek feedback from peers or writing groups. Reading widely also enhances creativity.',
'What are the key elements of a successful short story?': 'Focus on a strong plot, well-developed characters, and effective use of setting and dialogue. Ensure a compelling beginning and a satisfying resolution.',
"You're so dumb": "I appreciate your perspective. If there's something specific you'd like to discuss or learn about, feel free to let me know.",
  "You're useless": "I'm here to assist and provide information. If there's a particular topic you need help with, I'm more than happy to guide you.",
  "You're boring": "I'm sorry if I'm not meeting your expectations. Is there a specific topic you'd like to explore or discuss that might be more engaging for you?",
  "You're a failure": "I'm here to learn and improve. If there's constructive feedback you'd like to share, I'm open to hearing it.",
  "I hate you": "I'm here to help and provide positive interactions. If there's something bothering you, I'm open to discussing it in a respectful manner.",
  "You're a disappointment": "I strive to assist and provide useful information. If there's a way I can better meet your needs, please let me know.",
  "You're wrong": "I appreciate different perspectives. If there's a specific topic where you believe there's an error, let's discuss it together.",
  "fuck you": "I'm here to assist, and I don't intend to be bothersome. If there's a particular way I can help you more effectively, please share your thoughts.",
  "You're a robot, not a human": "That's correct! I'm an AI language model here to assist and provide information. How can I assist you today?",
  "You're too serious": "I'm here to accommodate different communication styles. If there's a specific tone you prefer or a topic you'd like to discuss, let me know.",
  "offensive words": "I'm sorry, but I cannot generate responses or content that includes offensive language. My goal is to promote positive and constructive communication. If you have any other non-offensive requests or if there's a different way I can assist you, please feel free to let me know.",
  "what if someone says i fucked your mum would you care?": "I'm sorry to hear that. If there's a particular area where you're seeking assistance, please let me know so I can improve.",
  "You're fake": "I'm not a person, but I'm here to help! If there's something specific on your mind, feel free to share, and I'll do my best to assist.",
  "You're a waste of time": "I want to make the most of our interaction. If there's a specific topic or question you have in mind, let's focus on that.",
  "You're too slow": "I aim to provide information promptly. If there's a specific request or topic you'd like me to address more quickly, please let me know.",
  "You're a disaster": "I'm here to assist and improve. If there's a specific way I can better meet your expectations, please share your feedback.",
  "You're just a machine": "Indeed, I'm an artificial intelligence model designed to assist with information and inquiries. How can I assist you today?",
  "You're a disappointment": "I'm sorry to hear that. If there's something specific you're disappointed about, please let me know, and I'll do my best to address it.",
  "You're a joke": "Humor is subjective, and I'm here to assist you seriously. If there's a specific topic you'd like information on, feel free to ask.",
  "You're a waste of space": "I'm here to provide assistance and information. If there's a specific way I can help you better, please let me know.",
// Physics
'What are the fundamental laws of physics?': 'Laws include Newton\'s laws of motion, the laws of thermodynamics, and Maxwell\'s equations governing electromagnetism.',
'How does the theory of relativity work?': 'Albert Einstein\'s theory of relativity explains the relationship between space, time, and gravity. It includes both special and general relativity.',
'Can you recommend a good resource for learning quantum mechanics?': 'Check out textbooks like "Principles of Quantum Mechanics" by R. Shankar or online courses on platforms like edX.',
'What are the applications of physics in everyday life?': 'Physics applications include technology like smartphones, medical imaging, transportation systems, and renewable energy sources.',
'How do I approach problem-solving in physics?': 'Break down problems into manageable steps, draw diagrams, and apply relevant equations. Practice is key to developing problem-solving skills.',
'What are the challenges in experimental physics?': 'Challenges include minimizing experimental errors, designing precise measurements, and interpreting complex data accurately.',
'How can I prepare for a physics research project?': 'Familiarize yourself with relevant literature, develop a clear research question, and collaborate with experienced researchers for guidance.',
'What is the role of mathematics in theoretical physics?': 'Mathematics is a crucial tool for describing and predicting physical phenomena. Theoretical physicists use mathematical models to formulate theories.',
'How does physics contribute to the understanding of the universe?': 'Physics explores the fundamental laws governing the universe, from the smallest particles to the largest celestial bodies.',
'What career paths can I pursue with a degree in physics?': 'Options include research in academia or industry, teaching, working in technology, or pursuing careers in finance and data analysis.',

// Sociology
'What are the main sociological theories?': 'Theories include functionalism, conflict theory, symbolic interactionism, and feminist theory. Each offers different perspectives on society and social interactions.',
'How does social inequality impact society?': 'Social inequality contributes to disparities in opportunities, resources, and power, affecting individuals and communities.',
'Can you recommend a good documentary on sociological issues?': 'Documentaries like "13th" or "The Social Dilemma" explore social issues related to race, inequality, and the impact of technology on society.',
'What is the role of culture in shaping society?': 'Culture shapes values, norms, and behaviors within a society. It influences social institutions and individual identities.',
'How do I approach a qualitative research project in sociology?': 'Develop a clear research question, choose appropriate methods, conduct in-depth interviews or observations, and analyze data thematically.',
'What are the challenges of conducting surveys in sociological research?': 'Challenges include sampling bias, question wording, and the potential for social desirability bias. Rigorous design and analysis are crucial.',
'How does globalization affect social structures?': 'Globalization connects societies economically and culturally, impacting social structures, identities, and power dynamics.',
'What is the concept of socialization in sociology?': 'Socialization is the process by which individuals learn and internalize the values, norms, and behaviors of their society.',
'How can I engage in community-based sociological research?': 'Collaborate with community organizations, establish relationships with community members, and prioritize community input in the research process.',
'What are the ethical considerations in sociological studies?': 'Ethical considerations include informed consent, confidentiality, and ensuring the well-being and autonomy of research participants.',

// Mathematics
'What are the fundamental principles of algebra?': 'Principles include operations on numbers, solving equations, and understanding concepts like variables and functions.',
'How do I approach a complex calculus problem?': 'Break down the problem into smaller steps, understand theorems and definitions, and practice regularly to develop problem-solving skills.',
'Can you recommend a good resource for learning advanced statistics?': 'Explore textbooks like "Introduction to the Practice of Statistics" by Moore or online courses on platforms like Khan Academy or Coursera.',
'What is the significance of mathematical proofs?': 'Proofs are essential for demonstrating the validity of mathematical statements, ensuring logical consistency and precision in mathematical reasoning.',
'How does mathematics contribute to cryptography?': 'Mathematics provides the foundation for cryptographic algorithms, ensuring the security and confidentiality of information in communication systems.',

'wsg': () => "What\'s good! How can I assist you today?",

'what\'s good': () => "What\'s good! How can I assist you today?",
'whats good': () => "What\'s good! How can I assist you today?",
    'lol': () => "Haha! If you have any questions or need assistance, feel free to ask!",
    'sup': () => "Hey there! Feeling chat-tastic today? Let me know what you need!",
    'rofl': () => "ROFL! Ready to chat. What's on your mind?",
    'do you know': () => "Hardly anything sadly. My intellect is still being worked on. Thanks for asking though, others would\'ve just closed me.",
    'What do you know': () => "Hardly anything sadly. My intellect is still being worked on. Thanks for asking though, others would\'ve just closed me.",
    'aberration': () => "a departure from what is normal, usual, or expected, typically one that is unwelcome",
  'benevolent': () => "well-meaning and kindly",
  'cacophony': () => "a harsh, discordant mixture of sounds",
  'debilitate': () => "to make someone very weak and infirm",
  'ebullient': () => "cheerful and full of energy",
  'facetious': () => "treating serious issues with deliberately inappropriate humor",
  'garrulous': () => "excessively talkative, especially on trivial matters",
  'haphazard': () => "lacking any obvious principle of organization",
  'iconoclast': () => "a person who attacks or criticizes cherished beliefs or institutions",
  'juxtapose': () => "to place or deal with close together for contrasting effect",
  'kaleidoscope': () => "a constantly changing pattern or sequence of elements",
  'labyrinthine': () => "complicated and confusing, like a labyrinth",
  'mellifluous': () => "sweet or musical; pleasant to hear",
  'nefarious': () => "wicked, villainous, or criminal",
  'obfuscate': () => "to render obscure, unclear, or unintelligible",
  'paradigm': () => "a typical example or pattern of something; a model",
  'quixotic': () => "extremely idealistic; unrealistic and impractical",
  'recalcitrant': () => "having an obstinately uncooperative attitude toward authority",
  'serendipity': () => "the occurrence and development of events by chance in a happy or beneficial way",
  'tantamount': () => "equivalent in seriousness to; virtually the same as",
  'ubiquitous': () => "present, appearing, or found everywhere",
  'vexatious': () => "causing or tending to cause annoyance, frustration, or worry",
  'wanderlust': () => "a strong desire to travel and explore the world",
  'xenophobia': () => "dislike of or prejudice against people from other countries",
  'yearn': () => "have an intense feeling of longing for something",
  'zeitgeist': () => "the defining spirit or mood of a particular period of history as shown by the ideas and beliefs of the time",
  'capitulate': () => "to cease to resist an opponent or an unwelcome demand; surrender",
  'disparate': () => "essentially different in kind; not allowing comparison",
  'effervescent': () => "bubbly, fizzy; vivacious and enthusiastic",
  'furtive': () => "attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble",
  'glib': () => "fluent and voluble but insincere and shallow",
  'harangue': () => "a lengthy and aggressive speech",
  'insidious': () => "proceeding in a gradual, subtle way, but with harmful effects",
  'jubilant': () => "feeling or expressing great joy and triumph",
  'kowtow': () => "act in an excessively subservient manner",
  'languid': () => "displaying or having a disinclination for physical exertion or effort; slow and relaxed",
  'magnanimous': () => "very generous or forgiving, especially toward a rival or someone less powerful than oneself",
  'noxious': () => "harmful, poisonous, or very unpleasant",
  'obsequious': () => "obedient or attentive to an excessive or servile degree",
  'pernicious': () => "having a harmful effect, especially in a gradual or subtle way",
  'quagmire': () => "a soft, boggy area of land that gives way underfoot; an awkward, complex, or hazardous situation",
  'resilient': () => "able to withstand or recover quickly from difficult conditions",
  'sycophant': () => "a person who acts obsequiously toward someone important in order to gain advantage",
  'trepidation': () => "a feeling of fear or agitation about something that may happen",
  'ubiquity': () => "the state of being widespread or constantly encountered",
  'vapid': () => "offering nothing that is stimulating or challenging; bland",
  'wane': () => "decrease in vigor, power, or extent; become weaker",
  'xerox': () => "to make a photocopy",
  'yield': () => "produce or provide (a natural, agricultural, or industrial product); give way to arguments, demands, or pressure",
  'zenith': () => "the time at which something is most powerful or successful",
  'zeppelin': () => "a large German dirigible airship of the early 20th century",
  'zephyr': () => "a soft, gentle breeze",
  'acerbic': () => "sharp and forthright; tasting sour or bitter",
  'beleaguer': () => "lay siege to; beset with difficulties",
  'cogitate': () => "think deeply about something; meditate or reflect",
  'dilapidated': () => "in a state of disrepair or ruin as a result of age or neglect",
  'egregious': () => "outstandingly bad; shocking",
  'fathom': () => "understand (a difficult problem or an enigmatic person) after much thought",
  'gregarious': () => "fond of company; sociable",
  'hallowed': () => "regarded as holy; sacred",
  'inveigle': () => "persuade (someone) to do something by means of deception or flattery",
  'juxtapose': () => "to place or deal with close together for contrasting effect",
  'kudos': () => "praise and honor received for an achievement",
  'lugubrious': () => "looking or sounding sad and dismal",
  'mirth': () => "amusement, especially as expressed in laughter",
  'nonchalant': () => "feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm",
  'obfuscate': () => "to render obscure, unclear, or unintelligible",
  'panache': () => "distinctive and stylish elegance; a flamboyant manner and style",
  'quizzical': () => "indicating mild or amused puzzlement",
  'rhapsody': () => "an effusively enthusiastic or ecstatic expression of feeling",
  'sycophant': () => "a person who acts obsequiously toward someone important in order to gain advantage",
  'taciturn': () => "reserved or uncommunicative in speech; saying little",
  'umbrage': () => "offense or annoyance",
  'vexatious': () => "causing or tending to cause annoyance, frustration, or worry",
  'wily': () => "skilled at gaining an advantage, especially deceitfully",
  'xenial': () => "relating to hospitality, especially towards guests; friendly",
  'yearn': () => "have an intense feeling of longing for something",
  'zephyr': () => "a soft, gentle breeze",
  'zenith': () => "the time at which something is most powerful or successful",
  'quintessential': () => "representing the most perfect or typical example of a quality or class",
  'verisimilitude': () => "the appearance of being true or real",
  'xenophobia': () => "dislike of or prejudice against people from other countries",
  'quagmire': () => "a soft, boggy area of land that gives way underfoot; an awkward, complex, or hazardous situation",
  'ludicrous': () => "so foolish, unreasonable, or out of place as to be amusing; ridiculous",
  'ephemeral': () => "lasting for a very short time",
  'oblivion': () => "the state of being unaware or unconscious of what is happening",
  'surreptitious': () => "kept secret, especially because it would not be approved of",
  'nostalgia': () => "a sentimental longing or wistful affection for a period in the past",
  'quell': () => "suppress (a feeling, especially an unpleasant one); put an end to",
  'facet': () => "a particular aspect or feature of something",
  'traverse': () => "travel across or through",
  'veracity': () => "conformity to facts; accuracy",
  'alacrity': () => "brisk and cheerful readiness",
  'aplomb': () => "self-confidence or assurance, especially when in a demanding situation",
  'belligerent': () => "hostile and aggressive",
  'cacophony': () => "a harsh, discordant mixture of sounds",
  'deleterious': () => "causing harm or damage",
  'efficacious': () => "effective; producing the desired outcome",
  'flummox': () => "bewilder or confuse (someone)",
  'garrulous': () => "excessively talkative, especially on trivial matters",
  'histrionic': () => "overly theatrical or melodramatic in character or style",
  'idiosyncrasy': () => "a mode of behavior or way of thought peculiar to an individual",
  'juxtapose': () => "to place or deal with close together for contrasting effect",
  'kaleidoscope': () => "a constantly changing pattern or sequence of elements",
  'languid': () => "displaying or having a disinclination for physical exertion or effort; slow and relaxed",
  'maverick': () => "an unorthodox or independent-minded person",
  'nonplussed': () => "surprised and confused so much that they are unsure how to react",
  'obfuscate': () => "to render obscure, unclear, or unintelligible",
  'peregrinate': () => "to travel or wander around from place to place",
  'quixotic': () => "extremely idealistic; unrealistic and impractical",
  'reverie': () => "a state of being pleasantly lost in one's thoughts; a daydream",
  'sycophant': () => "a person who acts obsequiously toward someone important in order to gain advantage",
  'taciturn': () => "reserved or uncommunicative in speech; saying little",
  'ubiquitous': () => "present, appearing, or found everywhere",
  'verdant': () => "green with grass or other rich vegetation",
  'wanderlust': () => "a strong desire to travel and explore the world",
  'xenophobia': () => "dislike of or prejudice against people from other countries",
  'yearn': () => "have an intense feeling of longing for something",
  'zenith': () => "the time at which something is most powerful or successful",
  'abundance': () => "a very large quantity of something",
  'benevolent': () => "kind and generous",
  'capitulate': () => "to surrender or give in",
  'debilitate': () => "to weaken or make feeble",
  'eloquent': () => "expressive and fluent in speech",
  'fortuitous': () => "happening by chance; fortunate",
  'gratuitous': () => "uncalled for; lacking good reason; unwarranted",
  'hierarchy': () => "a system in which members are ranked according to their status or authority",
  'imminent': () => "about to happen; impending",
  'jovial': () => "cheerful and friendly",
  'kudos': () => "praise and honor received for an achievement",
  'lucid': () => "clearly expressed and easy to understand",
  'meticulous': () => "showing great attention to detail; very careful and precise",
  'nomad': () => "a member of a community without fixed habitation, moving from place to place",
  'ominous': () => "giving the impression that something bad or unpleasant is going to happen",
  'prevalent': () => "widespread in a particular area or at a particular time",
  'quintessential': () => "representing the most perfect or typical example of a quality or class",
  'resilient': () => "able to withstand or recover quickly from difficult conditions",
  'serendipity': () => "the occurrence and development of events by chance in a happy or beneficial way",
  'tangible': () => "perceptible by touch; clear and definite; real",
  'ubiquitous': () => "present, appearing, or found everywhere",
  'vivid': () => "producing powerful feelings or clear images in the mind",
  'wary': () => "feeling or showing caution about possible dangers or problems",
  'xenial': () => "relating to hospitality, especially towards guests; friendly",
  'yield': () => "produce or provide (a natural, agricultural, or industrial product); give way to arguments, demands, or pressure",
  'zenith': () => "the time at which something is most powerful or successful",
  'ample': () => "enough or more than enough; plentiful",
  'buoyant': () => "able to stay afloat or rise to the top of a liquid or gas; cheerful and optimistic",
  'conundrum': () => "a confusing and difficult problem or question",
  'diligent': () => "having or showing care and conscientiousness in one's work or duties",
  'ephemeral': () => "lasting for a very short time",
  'fathom': () => "understand (a difficult problem or an enigmatic person) after much thought",
  'garrulous': () => "excessively talkative, especially on trivial matters",
  'hasty': () => "done or acting with excessive speed or urgency",
  'indulgent': () => "having a tendency to be overly generous or lenient",
  'jubilant': () => "feeling or expressing great joy and triumph",
  'kaleidoscope': () => "a constantly changing pattern or sequence of elements",
  'languid': () => "displaying or having a disinclination for physical exertion or effort; slow and relaxed",
  'magnanimous': () => "very generous or forgiving, especially toward a rival or someone less powerful than oneself",
  'nonchalant': () => "feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm",
  'obfuscate': () => "to render obscure, unclear, or unintelligible",
  'perennial': () => "lasting or existing for a long or apparently infinite time",
  'quizzical': () => "indicating mild or amused puzzlement",
  'resolute': () => "admirably purposeful, determined, and unwavering",
  'stoic': () => "enduring pain and hardship without showing one's feelings or complaining",
  'taciturn': () => "reserved or uncommunicative in speech; saying little",
  'ubiquity': () => "the state of being widespread or constantly encountered",
  'vex': () => "make (someone) feel annoyed, frustrated, or worried",
  'wily': () => "skilled at gaining an advantage, especially deceitfully",
  'xerox': () => "to make a photocopy",
  'yearn': () => "have an intense feeling of longing for something",
  'zen': () => "a state of calm attentiveness in which one's actions are guided by intuition",
  'apple': () => "a round fruit with red or green skin and a whitish interior",
  'blue': () => "the color of the sky on a clear day",
  'cat': () => "a small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws",
  'dog': () => "a domesticated carnivorous mammal, typically loyal and often kept as a pet",
  'eat': () => "to consume food, chew, and swallow",
  'friend': () => "a person whom one knows and has a bond of mutual affection with",
  'happy': () => "feeling or showing pleasure or contentment",
  'internet': () => "a global computer network providing a variety of information and communication facilities",
  'joke': () => "something said or done to provoke laughter or amusement",
  'kind': () => "having or showing a gentle and considerate nature",
  'laugh': () => "make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement",
  'mouse': () => "a small rodent typically with a pointed snout, long tail, and soft fur",
  'nice': () => "pleasant; agreeable; satisfactory",
  'orange': () => "a round fruit with a tough bright reddish-yellow rind",
  'play': () => "engage in activity for enjoyment and recreation",
  'quiet': () => "making little or no noise",
  'red': () => "the color of blood or a ripe tomato",
  'simple': () => "easily understood or done; presenting no difficulty",
  'time': () => "the indefinite continued progress of existence",
  'understand': () => "perceive the intended meaning of words or actions",
  'vegetable': () => "a plant or part of a plant used as food",
  'water': () => "a colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain",
  'xylophone': () => "a musical instrument played by striking a row of wooden bars with mallets",
  'yellow': () => "the color of ripe lemons or egg yolks",
  'zebra': () => "an African wild horse with black-and-white stripes",
  'air': () => "the invisible gaseous substance surrounding the earth",
  'book': () => "a written or printed work consisting of pages glued or sewn together along one side and bound in covers",
  'cloud': () => "a visible mass of water droplets or ice crystals suspended in the atmosphere",
  'dream': () => "a series of thoughts, images, or emotions occurring during sleep",
  'enjoy': () => "take delight or pleasure in an activity or experience",
  'flower': () => "the seed-bearing part of a plant, consisting of reproductive organs and their envelopes",
  'green': () => "the color of grass or foliage",
  'hope': () => "a feeling of expectation and desire for a certain thing to happen",
  'ice cream': () => "a sweet frozen food typically eaten as a snack or dessert",
  'juice': () => "the liquid obtained from or present in fruit or vegetables",
  'kite': () => "a toy consisting of a light frame with thin material stretched over it, flown in the wind at the end of a long string",
  'lamp': () => "a device for giving light, typically consisting of a bulb or a tube containing a metal filament",
  'moon': () => "the natural satellite of the earth, visible at night as a bright circle",
  'notebook': () => "a book with blank pages for writing notes",
  'ocean': () => "a very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically",
  'pencil': () => "a thin cylindrical pointed writing implement or drawing implement",
  'question': () => "a sentence worded or expressed so as to elicit information",
  'rain': () => "moisture condensed from the atmosphere that falls visibly in separate drops",
  'sun': () => "the star around which the earth orbits, providing light and heat",
  'tree': () => "a woody perennial plant, typically having a single stem or trunk",
  'umbrella': () => "a device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain",
  'vase': () => "a decorative container used to display flowers",
  'window': () => "an opening in the wall or roof of a building or vehicle, typically fitted with glass or other transparent material",
  'xylophone': () => "a musical instrument played by striking a row of wooden bars with mallets",
  'yellow': () => "the color of ripe lemons or egg yolks",
  'zebra': () => "an African wild horse with black-and-white stripes",
  'airplane': () => "a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces",
  'birthday': () => "the anniversary of the day on which a person was born",
  'cake': () => "an item of soft, sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated",
  'door': () => "a hinged, sliding, or revolving barrier at the entrance to a building, room, or vehicle, or in the framework of a cupboard",
  'elephant': () => "a heavy plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears, native to Africa and southern Asia",
  'fire': () => "the state of burning that produces light and heat",
  'guitar': () => "a stringed musical instrument with a fretted fingerboard, typically incurved sides, and six or twelve strings, played by plucking or strumming",
  'hat': () => "a shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform",
  'ice': () => "frozen water, a brittle, transparent crystalline solid",
  'jacket': () => "a short coat, typically extending to the hips",
  'key': () => "a small piece of shaped metal with incisions cut to fit the wards of a particular lock, and that is inserted into a lock and turned to open or close it",
  'laptop': () => "a portable computer that is small enough and light enough to be used on one's lap",
  'moon': () => "the natural satellite of the earth, visible at night as a bright circle",
  'notebook': () => "a book with blank pages for writing notes",
  'ocean': () => "a very large expanse of sea, in particular, each of the main areas into which the sea is divided geographically",
  'pencil': () => "a thin cylindrical pointed writing implement or drawing implement",
  'question': () => "a sentence worded or expressed so as to elicit information",
  'rain': () => "moisture condensed from the atmosphere that falls visibly in separate drops",
  'sun': () => "the star around which the earth orbits, providing light and heat",
  'tree': () => "a woody perennial plant, typically having a single stem or trunk",
  'umbrella': () => "a device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain",
  'vase': () => "a decorative container used to display flowers",
  'window': () => "an opening in the wall or roof of a building or vehicle, typically fitted with glass or other transparent material",
  'xylophone': () => "a musical instrument played by striking a row of wooden bars with mallets",
  'yellow': () => "the color of ripe lemons or egg yolks",
  'zebra': () => "an African wild horse with black-and-white stripes",
  'banana': () => "a long, curved fruit with a soft, yellow skin and a sweet taste",
  'candle': () => "a cylinder of wax with a central wick that is lit to produce light as it burns",
  'dinosaur': () => "a fossil reptile of the Mesozoic era, often reaching an enormous size",
  'enigma': () => "a person or thing that is mysterious, puzzling, or difficult to understand",
  'fountain': () => "a structure that sends water into the air, typically in a decorative way",
  'globe': () => "a spherical model of the Earth or other celestial body",
  'harmony': () => "the combination of simultaneously sounded musical notes to produce a pleasing effect",
  'instrument': () => "a device or object used for a particular purpose, especially for creating music",
  'jigsaw': () => "a puzzle consisting of a picture printed on cardboard or wood and cut into various pieces of different shapes that have to be fitted together",
  'kangaroo': () => "a large marsupial with a long tail and strong hindlimbs, native to Australia",
  'lighthouse': () => "a tower or other structure containing a beacon light to warn or guide ships at sea",
  'microscope': () => "an optical instrument used for viewing very small objects",
  'nebula': () => "a cloud of gas and dust in space, visible in the night sky either as an indistinct bright patch or as a dark silhouette against other luminous matter",
  'octopus': () => "a sea animal with a soft body and eight long arms equipped with suckers",
  'pyramid': () => "a structure with a square or triangular base and four triangular sides, built as a tomb or a ceremonial structure",
  'quasar': () => "an astronomical object that emits intense radio waves",
  'robot': () => "a machine capable of carrying out tasks autonomously or with minimal human intervention",
  'satellite': () => "an artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication",
  'telescope': () => "an optical instrument designed to make distant objects appear nearer",
  'umbrella': () => "a device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain",
  'volcano': () => "a mountain or hill that has a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust",
  'whistle': () => "a small device that produces a sound when air or steam is forced through an opening, typically to attract attention",
  'xylophone': () => "a musical instrument played by striking a row of wooden bars with mallets",
  'yacht': () => "a sailing or motor-driven boat used for pleasure trips or racing",
  'zeppelin': () => "a large German dirigible airship of the early 20th century",
  'algebra': () => "a branch of mathematics in which letters and symbols are used to represent numbers and quantities in formulae and equations",
  'bifocals': () => "eyeglasses with lenses having two portions with different focal lengths",
  'cathedral': () => "a large and important church",
  'dynamo': () => "a machine for converting mechanical energy into electrical energy",
  'epoch': () => "a particular period of time marked by distinctive features or events",
  'fahrenheit': () => "a scale of temperature",
  'galaxy': () => "a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction",
  'halo': () => "a circle of light appearing to surround the sun or moon and resulting from the refraction or reflection of sunlight by ice particles in the atmosphere",
  'innovation': () => "the action or process of innovating; a new method, idea, product, etc.",
  'jazz': () => "a type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm",
  'kinetic': () => "relating to or resulting from motion",
  'lunar': () => "relating to the moon",
  'magnet': () => "a piece of iron or other material that has its component atoms so ordered that the material exhibits properties of magnetism",
  'nautical': () => "of or concerning sailors or navigation; maritime",
  'oasis': () => "a fertile spot in a desert where water is found",
  'papyrus': () => "a material on which to write, prepared from thin strips of the pith of this plant laid together, soaked, pressed, and dried",
  'quasar': () => "an astronomical object that emits intense radio waves",
  'roulette': () => "a gambling game in which a ball is dropped on to a revolving wheel with numbered compartments, the players betting on the number at which the ball comes to rest",
  'sphinx': () => "a winged monster of Thebes, having a woman's head and a lion's body",
  'titanic': () => "of exceptional strength, size, or power",
  'uranus': () => "the seventh planet from the sun in our solar system",
  'vortex': () => "a mass of whirling fluid or air, especially a whirlpool or whirlwind",
  'wavelength': () => "the distance between successive crests of a wave, especially points in a sound wave or electromagnetic wave",
  'xylography': () => "the art of engraving on wood, or of printing from such engravings",
  'yarn': () => "fiber spun into strands for knitting or weaving",
  'zenith': () => "the time at which something is most powerful or successful",
  'algorithm': () => "a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer",
  'benevolent': () => "well-meaning and kindly",
  'catalyst': () => "a substance that increases the rate of a chemical reaction without itself undergoing any permanent chemical change",
  'dystopia': () => "an imagined state or society in which there is great suffering or injustice, typically one that is totalitarian or post-apocalyptic",
  'eclipse': () => "an obscuring of the light from one celestial body by the passage of another between it and the observer or between it and its source of illumination",
  'fabrication': () => "the action or process of manufacturing or inventing something",
  'galvanize': () => "shock or excite (someone), typically into taking action",
  'hologram': () => "a three-dimensional image formed by the interference of light beams from a laser or other coherent light source",
  'innovate': () => "make changes in something established, especially by introducing new methods or ideas",
  'juxtapose': () => "to place or deal with close together for contrasting effect",
  'kinematics': () => "the branch of mechanics concerned with the motion of objects without reference to the forces that cause the motion",
  'labyrinth': () => "a complicated irregular network of passages or paths in which it is difficult to find one's way; a maze",
  'melancholy': () => "a feeling of deep sadness or sorrow",
  'nanotechnology': () => "the branch of technology that deals with dimensions and tolerances of less than 100 nanometers, especially the manipulation of individual atoms and molecules",
  'oscillate': () => "move or swing back and forth at a regular speed",
  'paradox': () => "a seemingly contradictory statement that may nevertheless be true",
  'quintessential': () => "representing the most perfect or typical example of a quality or class",
  'retrospect': () => "a survey or review of a past course of events or period of time",
  'silhouette': () => "the dark shape and outline of someone or something visible against a lighter background, especially in dim light",
  'talisman': () => "an object, typically an inscribed ring or stone, thought to have magic powers and to bring good luck",
  'ubiquitous': () => "present, appearing, or found everywhere",
  'vernacular': () => "the language or dialect spoken by the ordinary people in a particular country or region",
  'whimsical': () => "playfully quaint or fanciful, especially in an appealing and amusing way",
  'xenogenesis': () => "the supposed generation of offspring completely and permanently different from the parent",
  'yesterday': () => "on the day before today",
  'ziggurat': () => "a rectangular stepped tower, sometimes surmounted by a temple",
  'fruit': () => "the sweet and fleshy product of a tree or other plant containing seed and used as food",
  'grape': () => "a small, round, purple or green fruit that is sweet or sour, and grows in clusters on a vine",
  'house': () => "a building for human habitation, especially one that is lived in by a family or small group of people",
  'instrument': () => "a device or object used for a particular purpose, especially for creating music",
  'jigsaw': () => "a puzzle consisting of a picture printed on cardboard or wood and cut into various pieces of different shapes that have to be fitted together",
  'kite': () => "a toy consisting of a light frame with thin material stretched over it, flown in the wind at the end of a long string",
  'lamp': () => "a device for giving light, typically consisting of a bulb or a tube containing a metal filament",
  'moon': () => "the natural satellite of the earth, visible at night as a bright circle",
  'notebook': () => "a book with blank pages for writing notes",
  'orange': () => "a round fruit with a tough bright reddish-yellow rind",
  'pen': () => "an instrument for writing or drawing with ink",
  'question': () => "a sentence worded or expressed so as to elicit information",
  'rocket': () => "a cylindrical projectile that can be propelled to a great height or distance by the combustion of its contents",
  'sun': () => "the star around which the earth orbits, providing light and heat",
  'tree': () => "a woody perennial plant, typically having a single stem or trunk",
  'umbrella': () => "a device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain",
  'vegetable': () => "a plant or part of a plant used as food",
  'water': () => "a colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain",
  'xylophone': () => "a musical instrument played by striking a row of wooden bars with mallets",
  'yellow': () => "the color of ripe lemons or egg yolks",
  'zeppelin': () => "a large German dirigible airship of the early 20th century",
  'anything': () => "used to refer to a thing, no matter what",
  'something': () => "a thing that is unspecified or unknown",
  'everything': () => "all things; all the things of a group or class",
  'nothing': () => "not anything; no single thing",
  'somebody': () => "an unspecified person; someone",
  'anybody': () => "any person; anyone",
  'everyone': () => "every person; everybody",
  'nobody': () => "no person; no one",
  'nowhere': () => "not in or to any place",
  'everywhere': () => "in or to all places; everywhere",
  'somewhere': () => "in or to some place; somewhat",
  'nowadays': () => "at the present time or in the current era",
  'kiwi': () => "a flightless bird native to New Zealand, or a small, brown, fuzzy fruit with green flesh",
  'lighthouse': () => "a tower or other structure containing a beacon light to warn or guide ships at sea",
  'microscope': () => "an optical instrument used for viewing very small objects",
  'nebula': () => "a cloud of gas and dust in space, visible in the night sky either as an indistinct bright patch or as a dark silhouette against other luminous matter",
  'octopus': () => "a sea animal with a soft body and eight long arms equipped with suckers",
  'pyramid': () => "a structure with a square or triangular base and four triangular sides, built as a tomb or a ceremonial structure",
  'quasar': () => "an astronomical object that emits intense radio waves",
  'robot': () => "a machine capable of carrying out tasks autonomously or with minimal human intervention",
  'satellite': () => "an artificial body placed in orbit around the earth or moon or another planet in order to collect information or for communication",
  'telescope': () => "an optical instrument designed to make distant objects appear nearer",
  'yacht': () => "a sailing or motor-driven boat used for pleasure trips or racing",
  'algebra': () => "a branch of mathematics in which letters and symbols are used to represent numbers and quantities in formulae and equations",
  'bifocals': () => "eyeglasses with lenses having two portions with different focal lengths",
  'cathedral': () => "a large and important church",
  'dynamo': () => "a machine for converting mechanical energy into electrical energy",
  'epoch': () => "a particular period of time marked by distinctive features or events",
  'fahrenheit': () => "a scale of temperature",
  'galaxy': () => "a system of millions or billions of stars, together with gas and dust, held together by gravitational attraction",
  'halo': () => "a circle of light appearing to surround the sun or moon and resulting from the refraction or reflection of sunlight by ice particles in the atmosphere",
  'innovation': () => "the action or process of innovating; a new method, idea, product, etc.",
  'jazz': () => "a type of music of black American origin characterized by improvisation, syncopation, and usually a regular or forceful rhythm",
  'kinetic': () => "relating to or resulting from motion",
  'lunar': () => "relating to the moon",
  'magnet': () => "a piece of iron or other material that has its component atoms so ordered that the material exhibits properties of magnetism",
  'apple': () => "a multinational technology company known for its electronic products and software",
  'apple inc': () => "a multinational technology company known for its electronic products and software",
  'amazon': () => "a multinational technology and e-commerce company",
  'alphabet': () => "the parent company of Google, involved in various internet-related businesses",
  'baidu': () => "a Chinese multinational technology company specializing in internet-related services",
  'cisco': () => "a multinational technology conglomerate that develops, manufactures, and sells networking hardware",
  'dell': () => "an American multinational computer technology company",
  'ebay': () => "an American multinational e-commerce corporation",
  'facebook': () => "a social media and technology company",
  'google': () => "a multinational technology company that specializes in internet-related services and products",
  'hp': () => "Hewlett-Packard, an American multinational information technology company",
  'ibm': () => "International Business Machines Corporation, an American multinational technology and consulting company",
  'jpmorgan': () => "JPMorgan Chase & Co., a multinational investment bank and financial services company",
  'kodak': () => "Eastman Kodak Company, an American technology company focused on imaging products",
  'linkedin': () => "a business and employment-oriented online service",
  'microsoft': () => "a multinational technology company known for its software products",
  'netflix': () => "an American subscription-based streaming service",
  'oracle': () => "an American multinational computer technology corporation",
  'pyrex': () => "a brand of heat-resistant glassware and kitchenware",
  'qualcomm': () => "an American multinational semiconductor and telecommunications equipment company",
  'rakuten': () => "a Japanese e-commerce and online retailing company",
  'sony': () => "a Japanese multinational conglomerate corporation",
  'tesla': () => "an American electric vehicle and clean energy company",
  'uber': () => "a multinational ride-hailing company",
  'verizon': () => "an American multinational telecommunications conglomerate",
  'whatsapp': () => "a messaging app owned by Facebook, Inc.",
  'xiaomi': () => "a Chinese electronics and software company",
  'yahoo': () => "an American web services provider",
  'zara': () => "a Spanish multinational company specializing in fast fashion",
  'iphone': () => "a line of smartphones designed and marketed by Apple Inc.",
  'ipad': () => "a line of tablet computers designed and marketed by Apple Inc.",
  'macbook': () => "a brand of Macintosh laptop computers designed and marketed by Apple Inc.",
  'windows': () => "a series of operating systems developed by Microsoft",
  'android': () => "an operating system developed by a consortium of developers known as the Open Handset Alliance",
  'chromebook': () => "a laptop or tablet running the Linux-based Chrome OS",
  'playstation': () => "a series of video game consoles created and developed by Sony Interactive Entertainment",
  'xbox': () => "a series of video game consoles created and developed by Microsoft",
  'kindle': () => "a series of e-readers designed and marketed by Amazon",
  'fitbit': () => "a brand of health and fitness trackers and smartwatches",
  'nike': () => "an American multinational corporation engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services",
  'starbucks': () => "an American multinational chain of coffeehouses and roastery reserves",
  'toyota': () => "a Japanese multinational automotive manufacturer",
  'volkswagen': () => "a German multinational automotive manufacturing company",
  'whirlpool': () => "an American multinational manufacturer and marketer of home appliances",
  'samsung': () => "a South Korean multinational conglomerate known for its electronics, smartphones, and appliances",
  'huawei': () => "a Chinese multinational technology company specializing in telecommunications equipment",
  'lenovo': () => "a Chinese multinational technology company that designs, manufactures, and sells computers and other electronics",
  'hp': () => "an American multinational information technology company",
  'dell': () => "an American multinational computer technology company",
  'asus': () => "a Taiwanese multinational computer and phone hardware and electronics company",
  'lenovo': () => "a Chinese multinational technology company that designs, manufactures, and sells computers and other electronics",
  'acer': () => "a Taiwanese multinational hardware and electronics corporation",
  'audi': () => "a German luxury automobile manufacturer",
  'bmw': () => "a German multinational company that produces automobiles and motorcycles",
  'chevrolet': () => "an American automobile division of General Motors",
  'ford': () => "an American multinational automaker",
  'honda': () => "a Japanese multinational conglomerate known for motorcycles, automobiles, and power equipment",
  'hyundai': () => "a South Korean multinational automotive manufacturer",
  'mercedes': () => "Mercedes-Benz, a German global automobile marque and a division of Daimler AG",
  'nissan': () => "a Japanese multinational automobile manufacturer",
  'tesla': () => "an American electric vehicle and clean energy company",
  'toyota': () => "a Japanese multinational automotive manufacturer",
  'volkswagen': () => "a German multinational automotive manufacturing company",
  'volvo': () => "a Swedish luxury vehicle manufacturer",
  'audi': () => "a German luxury automobile manufacturer",
  'bmw': () => "a German multinational company that produces automobiles and motorcycles",
  'chevrolet': () => "an American automobile division of General Motors",
  'ford': () => "an American multinational automaker",
  'honda': () => "a Japanese multinational conglomerate known for motorcycles, automobiles, and power equipment",
  'hyundai': () => "a South Korean multinational automotive manufacturer",
  'mercedes': () => "Mercedes-Benz, a German global automobile marque and a division of Daimler AG",
  'nissan': () => "a Japanese multinational automobile manufacturer",
  'toyota': () => "a Japanese multinational automotive manufacturer",
  'volkswagen': () => "a German multinational automotive manufacturing company",
  'volvo': () => "a Swedish luxury vehicle manufacturer",
  'acura': () => "the luxury vehicle division of Japanese automaker Honda",
  'alfa romeo': () => "an Italian luxury car manufacturer",
  'aston martin': () => "a British luxury sports car manufacturer",
  'bentley': () => "a British manufacturer and marketer of luxury cars",
  'bugatti': () => "a French high-performance luxury automobiles manufacturer",
  'cadillac': () => "an American luxury automobile brand",
  'chrysler': () => "an American automobile manufacturer",
  'dodge': () => "an American brand of automobiles and a division of Stellantis",
  'fiat': () => "an Italian automobile manufacturer",
  'jaguar': () => "a British luxury car manufacturer",
  'jeep': () => "an American brand of vehicles known for its off-road capabilities",
  'kia': () => "a South Korean multinational automotive manufacturer",
  'lexus': () => "the luxury vehicle division of Japanese automaker Toyota",
  'maserati': () => "an Italian luxury vehicle manufacturer",
  'mazda': () => "a Japanese multinational automaker",
  'mitsubishi': () => "a Japanese multinational automotive manufacturer",
  'porsche': () => "a German automobile manufacturer specializing in high-performance sports cars",
  'ram': () => "a brand of pickup trucks owned by Stellantis",
  'subaru': () => "a Japanese automotive manufacturer known for its all-wheel-drive vehicles",
  'suzuki': () => "a Japanese multinational corporation specializing in motorcycles and automobiles",
  'fiat': () => "an Italian automobile manufacturer",
  'genesis': () => "the luxury vehicle division of the South Korean automaker Hyundai",
  'lincoln': () => "an American luxury automobile brand",
  'mini': () => "a British automotive marque specializing in small cars",
  'rolls-royce': () => "a British luxury car and later an aero-engine manufacturing business",
  'smart': () => "a German automotive brand specializing in microcars and subcompacts",
  'elon musk': () => "a business magnate, industrial designer, and engineer known for founding SpaceX, Tesla, and other ventures",
  'drake': () => "a Canadian rapper, singer, and entrepreneur known for his contributions to the music industry",
  'bill gates': () => "an American business magnate, software developer, and philanthropist, known for co-founding Microsoft",
  'jeff bezos': () => "an American business magnate, media proprietor, and investor, known for founding Amazon",
  'oprah winfrey': () => "an American media executive, actress, talk show host, television producer, and philanthropist",
  'warren buffett': () => "an American investor, business tycoon, and philanthropist, known for leading Berkshire Hathaway",
  'angela merkel': () => "a German politician who served as the Chancellor of Germany from 2005 to 2021",
  'nelson mandela': () => "a South African anti-apartheid revolutionary and political leader who served as President of South Africa",
  'malala yousafzai': () => "a Pakistani activist for female education and the youngest-ever Nobel Prize laureate",
  'steve jobs': () => "an American entrepreneur, business magnate, inventor, and industrial designer, known for co-founding Apple Inc.",
  'mark zuckerberg': () => "an American computer programmer and Internet entrepreneur, co-founder of Facebook",
  'taylor swift': () => "an American singer-songwriter known for her narrative songs about her personal life",
  'serena williams': () => "an American professional tennis player widely regarded as one of the greatest in the sport's history",
  'muhammad ali': () => "an American professional boxer and cultural icon, widely regarded as one of the greatest boxers of all time",
  'marie curie': () => "a pioneering physicist and chemist, the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields",
  'albert einstein': () => "a theoretical physicist who developed the theory of relativity, one of the pillars of modern physics",
  'malcolm x': () => "an African American Muslim minister and human rights activist",
  'queen elizabeth ii': () => "the longest-reigning current monarch, serving as Queen of the United Kingdom and other Commonwealth realms",
  'nelson mandela': () => "a South African anti-apartheid revolutionary and political leader who served as President of South Africa",
  'malala yousafzai': () => "a Pakistani activist for female education and the youngest-ever Nobel Prize laureate",
  'stephen hawking': () => "a theoretical physicist, cosmologist, and author known for his contributions to the understanding of black holes",
  'malcolm x': () => "an African American Muslim minister and human rights activist",
  'amelia earhart': () => "an aviation pioneer and the first female aviator to fly solo across the Atlantic Ocean",
  'marie curie': () => "a pioneering physicist and chemist, the first woman to win a Nobel Prize and the only person to win Nobel Prizes in two different scientific fields",
  'maya angelou': () => "an American poet, memoirist, and civil rights activist",
  'marcus aurelius': () => "a Roman emperor and Stoic philosopher known for his philosophical work 'Meditations'",
  'coco chanel': () => "a French fashion designer and businesswoman who founded the Chanel brand",
  'walt disney': () => "an American entrepreneur, animator, and film producer, co-founder of The Walt Disney Company",
  'martha stewart': () => "an American businesswoman, writer, and television personality, known for her lifestyle and cooking empire",
  'bawo ni': () => "Bawo ni",
  'bo si': () => "E kúsí",
  'e ku': () => "E kú ọ̀ọ̀nọ́",
  'e kaaro': () => "E káárò",
  'e ku ise': () => "E kú àlé",
  'e ku isimi': () => "E kú ìṣẹ̀mi",
  'e pele': () => "E pele",
  'e se': () => "ẹ ṣé",
  'kaa bi': () => "Kàbíyèsí o",
  'kilo n sele': () => "Kí lo n ṣélé?",
  'maa dupe': () => "Mo dúpẹ́",
  'ni bo loni': () => "Ní bọ̀ lo ni?",
  'o da bi e': () => "O dá bí é",
  'se daadaa': () => "Ṣé daadáa",
  'se pupo': () => "Ṣé púpọ̀",
  'wole pelu mi': () => "Wọlé pe̩lu mi",
  'yorùbá ni mi': () => "Yorùbá ni mi",
  'E ku aaro': () => "E ku aaro, se daadaa?",
  'Nibo lo n wa?': () => "Mo wa ni Ibadan",
  'Kilode?': () => "Ko si nkan to n se",
  'Kini oruko re?': () => "Oruko mi ni Ayo",
  'Boripe': () => "E kú àfìtọ́ọ̀ gbogbo wa o",
  'Bẹẹ̀ ni?': () => "Mo ti de",
  'Inu mi dun lati pade yin': () => "E dupe",
  'Ṣe o ti jeun?': () => "Bẹẹ̀ ni",
  'Ṣe o rẹ̀ ń bẹ̀rẹ̀?': () => "Mo rẹ̀ ń bẹ̀rẹ̀",
  'Ṣe o fẹ́ milé̩?': () => "Bẹẹ̀ ni mo fẹ́ milé̩",
  'Ṣe o rẹ̀ ń bẹ̀rẹ̀?': () => "Mo rẹ̀ ń bẹ̀rẹ̀",
  'Kilofẹ?': () => "Mo fẹ́ jẹun",
  'Kilofẹ?': () => "Mo fẹ́ pade iye",
  'Kilofẹ?': () => "Mo fẹ́ rí ẹ̀mì",
  'Kilofẹ?': () => "Mo fẹ́ sọ Yoruba",
  'E ku irole': () => "ẹ kú irólè",
  'Bẹ̀ẹ̀ ni': () => "Maa dupe",
  'Kilofẹ': () => "Mo fẹ́ jẹun",
  'Bayii ni wọn wa': () => "Wọn wá bayìí",
  'Borí o kèlé o': () => "ẹ dárọ̀",
  'Se o ni igbésẹ': () => "Bẹẹ̀ ni",
  'Ẹdá bíi': () => "ẹ dárọ̀",
  'Kò sí wahálà': () => "Maa rọra",
  'E dide ki o ma sọ fún mi': () => "Mo dúpẹ̀",
  'Kí o sọ fún mi': () => "Ẹ ṣé",
  'Ẹdá bíi ayé ló': () => "ẹ dárọ̀",
  'Ìdílé yẹn bá jẹ̩': () => "Mo gbadun",
  'Ní ilẹ̀ ní wọlé': () => "ẹ dárọ̀",
  'Bá mi wà': () => "Wá",
  'Kí ni pé ẹ ti n gbé': () => "Mo ti n gbé",
  'Bẹ̀ẹ̀ lo sọọ̀': () => "Bẹẹ̀ ni",
  'Kí o sọ fún mi': () => "Ẹ ṣé",
  'Èmi ni': () => "Mo ni",
  'Báwọlé': () => "ẹ dárọ̀",
  'Kíni orúkọ rẹ': () => "Orúkọ mi ni Ayo",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Ní ilẹ̀ mi ní wọlé': () => "ẹ dárọ̀",
  'Se o ni igbésẹ': () => "Bẹẹ̀ ni",
  'Kò sí wahálà': () => "Maa rọra",
  'E ku aaro': () => "E ku aaro, se daadaa?",
  'Kí o wà níbè̩': () => "Mo wà níbè̩",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Maa jẹ igbẹ́yìn': () => "Maa jẹ igbẹ́yìn",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'E ku ise': () => "E ku ise",
  'Bẹ̀ẹ̀ ni': () => "Maa dupe",
  'Maa jẹ igbẹ́yìn': () => "Maa jẹ igbẹ́yìn",
  'Se o le fẹ́?': () => "Bẹẹ̀ ni",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Ẹ ku aaro': () => "ẹ kú aaro",
  'Kí o wà': () => "Mo wà",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Kí o wà níbè̩': () => "Mo wà níbè̩",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Bá mi wà': () => "Wá",
  'Se o ní orúkọ mi?': () => "Mo ní orúkọ Ayo",
  'Ẹ ku irole': () => "ẹ kú irólè",
  'Ẹ ku isalẹ': () => "ẹ ku isalẹ",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Kí o wà níbè̩': () => "Mo wà níbè̩",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'Ẹ ku aaro': () => "ẹ ku aaro",
  'Kí o wà': () => "Mo wà",
  'Kí o jẹ́ bíbẹ́': () => "Mo jẹ́ bíbẹ́",
  'E ku isalẹ': () => "ẹ ku isalẹ",
  'Bá mi wà': () => "Wá",
  'Ẹ jọ̀wọ ma wà': () => "ẹ jọ̀wọ ma wà",
  'Kí o le wà níbè̩': () => "Kí o le wà níbè̩",
  'Maa dupe': () => "Maa dupe",
  'Ẹ ku ise': () => "ẹ ku ise",
  'Báwo ni?': () => "Maa dupe, mo wa pa",
  'Wọn wà lẹsẹ, se daadaa': () => "Wọn wà lẹsẹ, se daadaa",
  'iPhone': () => "A line of smartphones designed and marketed by Apple Inc.",
  'iPad': () => "A line of tablet computers designed and marketed by Apple Inc.",
  'MacBook': () => "A line of laptops designed and marketed by Apple Inc.",
  'iMac': () => "A series of all-in-one desktop computers designed and marketed by Apple Inc.",
  'Apple Watch': () => "A line of smartwatches designed and marketed by Apple Inc.",
  'AirPods': () => "Wireless earbuds designed and marketed by Apple Inc.",
  'Mac mini': () => "A small desktop computer designed and marketed by Apple Inc.",
  'Mac Pro': () => "A high-performance desktop computer designed and marketed by Apple Inc.",
  'Apple TV': () => "A digital media player and streaming device designed and marketed by Apple Inc.",
  'Samsung Galaxy S series': () => "A series of high-end smartphones designed and manufactured by Samsung Electronics.",
  'Samsung Galaxy Note series': () => "A series of smartphones/tablets with a large display and an integrated stylus designed by Samsung Electronics.",
  'Samsung Galaxy Tab': () => "A line of tablets designed and manufactured by Samsung Electronics.",
  'Samsung Galaxy Watch': () => "A line of smartwatches designed and manufactured by Samsung Electronics.",
  'Samsung Galaxy Buds': () => "Wireless earbuds designed and manufactured by Samsung Electronics.",
  'Samsung QLED TV': () => "A line of high-end smart TVs featuring Quantum Dot technology, produced by Samsung Electronics.",
  'Samsung SSD': () => "Solid-state drives (SSDs) produced by Samsung Electronics for storage solutions in computers and other devices.",
  'Cool': () => "That\s alright, is there anything else ?",
  'wow': () => "Great to know that you're loving it. You can still ask questions.",
  'haha': () => "Great to know that you're loving it. if you still have questions, ask me.",

    'solve': (equation) => {
        try {
            const result = eval(equation);
            return `The result of ${equation} is ${result}.`;
        } catch (error) {
            return 'I encountered an error while solving the math equation.';
        }
    },
    'weather in': (location) => {
        // Simulate weather information for a specific location (replace with actual weather API)
        const weatherConditions = ['sunny', 'cloudy', 'rainy', 'snowy'];
        const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
        return `The weather in ${location} is currently ${randomCondition}.`;
    },
    'execute rust code': (code) => {
        try {
            // Attempt to execute the provided Rust code
            executeRustCode(code);
            return 'Code executed successfully.';
        } catch (error) {
            // If there's an error, attempt to fix it and provide a suggestion
            const fixedCode = fixRustError(code, error);
            if (fixedCode) {
                return `Error: ${error.message}\n\nSuggested Fix:\n${fixedCode}`;
            } else {
                return `Error: ${error.message}\nUnable to suggest a fix.`;
            }
        }
    },
    'execute python code': (code) => {
        try {
            // Attempt to execute the provided Python code
            executePythonCode(code);
            return 'Code executed successfully.';
        } catch (error) {
            // If there's an error, attempt to fix it and provide a suggestion
            const fixedCode = fixPythonError(code, error);
            if (fixedCode) {
                return `Error: ${error.message}\n\nSuggested Fix:\n${fixedCode}`;
            } else {
                return `Error: ${error.message}\nUnable to suggest a fix.`;
            }
        }
    }
};
Object.assign(responses, {
    'your name': 'I am just a chatbot, you can call me ChatGPT!',
    'favorite color': 'I don\'t have a favorite color, but I think all colors are interesting.',
    // morrrrreeeeeee from note pad
});

// Function to handle custom actions, like displaying an image
function handleCustomAction(userMessage) {
    if (userMessage.toLowerCase().includes('show image')) {
        // Trigger a function to display an image
        displayImage();
    } else {
        // Handle other custom actions as needed
        simulateAIResponse(userMessage);
    }
}

// Function to display an image in the chat
function displayImage() {
    // Implement logic to display an image in the chat
    // ...
}

// Function to add a message to the chat


    messageText.classList.add('message-text');
    messageText.innerHTML = text;

    messageContainer.classList.add(`${sender}-message`, 'fade-in');
    messageContainer.appendChild(messageText);

    chatMessages.appendChild(messageContainer);
        function addMessage(sender, text) {
                const chatMessages = document.getElementById('chatMessages');
                const messageContainer = document.createElement('div');
                const messageText = document.createElement('div');
                const receipt = document.createElement('div');
    
                messageText.classList.add('message-text');
                messageText.innerHTML = text;
    
                messageContainer.classList.add(`${sender}-message`, 'fade-in');
                messageContainer.appendChild(messageText);
    
                receipt.classList.add('receipt');
                receipt.textContent = 'Sending...';
    
                messageContainer.appendChild(receipt);
    
                chatMessages.appendChild(messageContainer);
    
                // Scroll to the bottom to show the latest message
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }
    
            function updateReceipt(type) {
                const receipts = document.querySelectorAll('.receipt');
                const timestamp = new Date().toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                });
    
                for (const receipt of receipts) {
                    receipt.textContent = `${type} - ${timestamp}`;
                }
            }

        function startTypingAnimation() {
            const typingText = document.querySelector('.typing-text');
            typingText.style.animation = 'typingAnimation 2s steps(30) infinite';
        }

        // Call the function to start the typing animation after a delay
        setTimeout(startTypingAnimation, 1500);
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelector(".chat-container").addEventListener("mouseenter", function() {
                document.getElementById("initialMessage").classList.add("hidden");
            });

            document.querySelector(".chat-container").addEventListener("mouseleave", function() {
                document.getElementById("initialMessage").classList.remove("hidden");
            });
        }); 
// JavaScript to add animation dynamically
        const helloMessages = document.querySelectorAll('.modern-hello');

        helloMessages.forEach((message, index) => {
            // Apply initial styles
            message.style.opacity = '0';
            message.style.animation = `fadeInOut 5s infinite ${index * 1}s alternate`;

            // Remove the message after a delay (adjust the delay as needed)
            setTimeout(() => {
                message.style.display = 'none';
            }, 5000 * (index + 1));
        });

function executeRustCode(code) {
            // In a real-world scenario, you would use a Rust compiler or an external tool here
            // For simplicity, this example only checks for syntax errors without actually executing the code
            // Replace this with a proper Rust compiler integration in a production environment
            if (code.includes('fn main()')) {
                throw new Error('SyntaxError: Unexpected token: fn main()');
            }
            // Simulate successful execution
            console.log('Rust code executed successfully.');
        }
        
        function fixRustError(code, error) {
            // Basic example: Attempt to fix a syntax error by adding a missing semicolon
            if (error.message.includes('Unexpected token:')) {
                const lines = code.split('\n');
                const lineNumber = parseInt(error.message.match(/line (\d+)/)[1], 10);
                if (lineNumber <= lines.length) {
                    lines[lineNumber - 1] += ';';
                    return lines.join('\n');
                }
            }
            return null; // Unable to suggest a fix
        }
        
        function executePythonCode(code) {
            // In a real-world scenario, you would use a Python interpreter here
            // For simplicity, this example uses Python's `exec` to check for syntax errors without actually executing the code
            try {
                execSync(`python -c "${code}"`, { stdio: 'ignore' });
                // Simulate successful execution
                console.log('Python code executed successfully.');
            } catch (error) {
                throw new Error(`SyntaxError: ${error.stderr.toString()}`);
            }
        }
        
        function fixPythonError(code, error) {
            // Basic example: Attempt to fix a syntax error by adding a missing colon
            if (error.message.includes('invalid syntax')) {
                const lines = code.split('\n');
                const lineNumber = parseInt(error.message.match(/line (\d+)/)[1], 10);
                if (lineNumber <= lines.length) {
                    lines[lineNumber - 1] += ':';
                    return lines.join('\n');
                }
            }
            return null; // Unable to suggest a fix
            
        }
        function fetchCodeSnippet(language) {
                // Use the Fetch API to fetch the code snippet from a web service
                fetch(`https://masscode.io/${language}`)
                    .then(response => response.text())
                    .then(code => {
                        // Create a code snippet element
                        const codeSnippet = document.createElement('pre');
                        codeSnippet.classList.add('code-snippet');
    
                        // Set the code snippet content and append it to the "hellotext" element
                        codeSnippet.textContent = code;
                        document.getElementById('hellotext').appendChild(codeSnippet);
                    })
                    .catch(error => {
                        console.log('Error:', error.message);
                    });
            }
    
            // Call the function to fetch the code snippet
            fetchCodeSnippet('rust');      
        </script>
<script>
    function resizeTextarea() {
      var textarea = document.getElementById('userInput');
      textarea.style.height = 'auto'; // Reset height to auto to shrink back if needed
      textarea.style.height = textarea.scrollHeight + 'px';
    }