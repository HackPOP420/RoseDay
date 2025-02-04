function revealMessage() {
    const message = document.getElementById('message');
    const proposalText = document.getElementById('proposalText');
    const backgroundMusic = document.getElementById('backgroundMusic');

    message.style.display = 'block';
    proposalText.style.display = 'block';

    // Smooth scroll to the proposal text
    proposalText.scrollIntoView({ behavior: 'smooth' });

    // Play background music on interaction
    backgroundMusic.play();
}

function acceptProposal() {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <h1 style="color: #ff0066; font-size: 3rem;">
            💝 Happiest Valentine's My Love! 💝<br>
            Let's Make Forever Memories Together! 💑
        </h1>
        <p> माझ्या प्रिय ,

तू 'होय' म्हणालीस त्या क्षणी... माझ्या जगण्याला एक नवा अर्थ मिळाला. हा गुलाब आणि तुझ्या हसऱ्याचा उजेड आता माझ्या आयुष्याचा सर्वात सुंदर भाग झाला आहेस. तुझ्या हातात हा गुलाब सोपवताना माझे हृदय धडधडत होतं, पण आता ती धडधड माझ्या सुखाच्या लयीत बदलली आहे. तू माझ्या जवळ आहेस या भावनेपेक्षा मोठं आनंद आज काहीच नाही! 💖

तुला माहिती आहे का? तू जेव्हा माझ्या डोळ्यात डोळे घालून हसलीस तेव्हा असं वाटलं, की हे क्षण मी माझ्या हृदयात कोरून ठेवायचे. तुझं "होय" हा शब्द आता माझ्या प्रत्येक श्वासाचा ठसा बनून राहील. आजपासून माझी प्रत्येक स्वप्नं, प्रत्येक ध्येय तुझ्यासोबत साध्य करायचं ठरवलंय. तुझ्या हाताचा स्पर्श म्हणजे माझ्या आत्म्याला सापडलेली शांती...

आज रोझ डे निमित्त तुला हा गुलाब दिला, पण खरं तर तूच माझ्या जीवनाची फुलबाग आहेस. तुझ्या प्रेमाच्या सावलीत मी वाढत राहीन, आणि तुझ्या आधाराने आपण एकमेकांच्या स्वप्नांना पंख देऊ. कधीकधी वाटेल, की तू माझ्यासाठीच निसर्गाने घडवली गेली आहेस... तुझ्या सोबतचा प्रत्येक दिवस म्हणजे एक व्हॅलेंटाइन डे! 🌸

आता जेव्हा तू माझ्या बाजूला आहेस, तेव्हा जगण्याचा आनंद दुप्पट झाला आहे. चाहूल लागली तरी तुझ्या हातात हात घालून चालू, आणि आनंदाच्या वेळेत तुझ्या खांद्यावर डोके ठेवून हसू. तू माझी आधारस्तंभ आणि सर्वस्व आहेस. आजपासून माझं "मी" नाही, फक्त "आपण" आहे... आणि हे "आपण" हे शब्द माझ्या जीवनातील सर्वात गोड अक्षर आहे.

धन्यवाद, की तू माझ्या प्रेमाला फुलवलंस. आता फक्त एकच इच्छा आहे—या गुलाबासारखं आपलं प्रेम कधीही मरू नये. तू माझ्यासोबत राहा नेहमी... आणि मी तुला प्रत्येक दिवशी नव्या प्रेमाने सजवेन. ❤️<p>
    `;

    // Add fireworks effect
    setInterval(() => {
        const firework = document.createElement('div');
        firework.style.position = 'fixed';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 100 + 'vh';
        firework.innerHTML = ['🫂','💕'][Math.floor(Math.random()*2)];
        firework.style.fontSize = Math.random() * 30 + 20 + 'px';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 1000);
    }, 100);
}