document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        'title': {
            bn: 'উৎসববন্ধু',
            en: 'Utsavbandhu',
            hi: 'उत्सवबंधु'
        },
        'subtitle': {
            bn: 'পুজোর পথে, আপনার বন্ধু!',
            en: 'Your companion on the path of Puja!',
            hi: 'पूजा के रास्ते पर, आपका साथी!'
        },
        'nav-home': {
            bn: 'হোম',
            en: 'Home',
            hi: 'होम'
        },
        'nav-guide': {
            bn: 'পুজো ট্যুর গাইড',
            en: 'Puja Tour Guide',
            hi: 'पूजा टूर गाइड'
        },
        'nav-contact': {
            bn: 'যোগাযোগ',
            en: 'Contact',
            hi: 'संपर्क करें'
        },
        'hero-title': {
            bn: 'দুর্গাপুজো হোক নিরাপদ, সহজ ও স্মরণীয়!',
            en: 'Let\'s make Durga Puja safe, easy, and memorable!',
            hi: 'दुर्गा पूजा को सुरक्षित, आसान और यादगार बनाएं!'
        },
        'hero-description': {
            bn: 'লাইভ ভিড় আপডেট, নিরাপদ পথ, পরিবেশ-বান্ধব প্যান্ডেল এবং আরও অনেক কিছু – সব এক প্ল্যাটফর্মে।',
            en: 'Live crowd updates, safe routes, eco-friendly pandals, and more—all on one platform.',
            hi: 'लाइव भीड़ अपडेट, सुरक्षित रास्ते, पर्यावरण-अनुकूल पंडाल, और बहुत कुछ – सब एक ही प्लेटफॉर्म पर।'
        },
        'cta-explore': {
            bn: 'এখনই দেখুন',
            en: 'Explore Now',
            hi: 'अभी देखें'
        },
        'emergency-title': {
            bn: 'জরুরী সহায়তা',
            en: 'Emergency Help',
            hi: 'आपातकालीन सहायता'
        },
        'emergency-desc': {
            bn: 'কাছাকাছি হাসপাতাল এবং থানা সহ এক-ট্যাপ সাহায্য।',
            en: 'One-tap assistance including nearby hospitals and police stations.',
            hi: 'आस-पास के अस्पतालों और पुलिस स्टेशनों सहित एक-टैप सहायता।'
        },
        'guide-title': {
            bn: 'পুজো ট্যুর গাইড',
            en: 'Puja Tour Guide',
            hi: 'पूजा टूर गाइड'
        },
        'guide-desc': {
            bn: 'আপনার পুজো ভ্রমণকে আরও রঙিন ও স্মরণীয় করে তুলুন – সেরা প্যান্ডেল ও উৎসবের পথে আপনাকে নিয়ে যাবে আমাদের গাইড!',
            en: 'Make your Puja journey more colorful and memorable—our guide will take you to the best pandals and festival routes!',
            hi: 'अपनी पूजा यात्रा को और भी रंगीन और यादगार बनाएं – हमारा गाइड आपको सर्वश्रेष्ठ पंडालों और त्योहार के रास्तों पर ले जाएगा!'
        },
        'volunteer-title': {
            bn: 'স্বেচ্ছাসেবক হোন',
            en: 'Be a Volunteer',
            hi: 'स्वयंसेवक बनें'
        },
        'volunteer-desc': {
            bn: 'পূজার দিনগুলিতে সাহায্য করার জন্য স্বেচ্ছাসেবক হিসাবে যোগ দিন।',
            en: 'Join as a volunteer to help out during the Puja days.',
            hi: 'पूजा के दिनों में मदद करने के लिए एक स्वयंसेवक के रूप में शामिल हों।'
        },
        'contact-title': {
            bn: 'যোগাযোগ',
            en: 'Contact',
            hi: 'संपर्क करें'
        },
        'contact-desc': {
            bn: 'সহজে হারানো জিনিস বা নিখোঁজ ব্যক্তিদের রিপোর্ট করুন বা খুঁজে বের করুন।',
            en: 'Easily report or find lost items or missing persons.',
            hi: 'आसानी से खोई हुई वस्तुओं या लापता व्यक्तियों की रिपोर्ट करें या ढूंढें।'
        },
        'cta-view': {
            bn: 'দেখুন',
            en: 'View',
            hi: 'देखें'
        },
        'footer-text': {
            bn: '© 2025 PujaSathi | মা আসেন ভক্তির সাগরে, আনন্দে ভরে প্রতিটি অন্তর |',
            en: '© 2025 PujaSathi | Maa comes in a sea of devotion, filling every heart with joy |',
            hi: '© 2025 PujaSathi | माँ भक्ति के सागर में आती हैं, हर दिल को आनंद से भर देती हैं |'
        },
        'privacy': {
            bn: 'Privacy Policy',
            en: 'Privacy Policy',
            hi: 'गोपनीयता नीति'
        },
        'terms': {
            bn: 'Terms of Service',
            en: 'Terms of Service',
            hi: 'सेवा की शर्तें'
        }
    };

    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-key]');
    
    const updateContent = (lang) => {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[key] && translations[key][lang]) {
                element.textContent = translations[key][lang];
            }
        });
        document.documentElement.lang = lang;
        langButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');
    };

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            updateContent(lang);
        });
    });

    // Fade-in effect logic
    const fadeElements = document.querySelectorAll('.fade-in');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
