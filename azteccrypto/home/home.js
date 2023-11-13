document.addEventListener('DOMContentLoaded', function() {
    // Existing code for the hamburger menu
    document.getElementById('hamburger-menu').addEventListener('click', function() {
        var nav = document.querySelector('nav.sidebar');
        if (nav.style.left === '0px') {
            nav.style.left = '-100%'; // Hide sidebar
        } else {
            nav.style.left = '0px'; // Show sidebar
        }
    });

    // Function to toggle peel-back effect
    function togglePeelBack() {
        document.body.classList.toggle('peel-back-active');
    }

    // Get the new start links
    var startLinkMain = document.getElementById('start-link-main');
    var startLinkSidebar = document.getElementById('start-link-sidebar');

    // Event listeners for the new start links
    if (startLinkMain) startLinkMain.addEventListener('click', togglePeelBack);
    if (startLinkSidebar) startLinkSidebar.addEventListener('click', togglePeelBack);

    // Re-enable scrolling and reset start button when any link in the peel-back panel is clicked
    var peelBackPanel = document.getElementById('peel-back-panel');
    peelBackPanel.addEventListener('click', function(event) {
        if(event.target.tagName === 'A') {
            document.body.classList.remove('peel-back-active');
        }
    });

    // Get the 'Connect' button
    var connectBtn = document.getElementById('connect-btn');
    connectBtn.addEventListener('click', function() {
        window.location.href = 'https://quickswap.exchange/#/swap?inputCurrency=ETH&outputCurrency=0xe5087395862a208071A7909687a6c4Fe30458F1e&swapIndex=1'; // Redirect to buy_sell.html
    });

    // Get all 'Learn More' buttons in the FAQ section
    var faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'info.html'; // Redirect to info.html
        });
    });

    var faqButtons = document.querySelectorAll('learn-more-btn');
    faqButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = 'info.html'; // Redirect to info.html
        });
    });

    // Fade-in effect for the roadmap section
    const roadmapSection = document.querySelector('.roadmap-section');

    function checkFadeIn() {
        const position = roadmapSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (position < windowHeight - 100) { // Adjust the 100px offset as needed
            roadmapSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Initial check if the section is already in view
});
