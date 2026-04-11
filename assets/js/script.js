/* ============================================
   BIRTHDAY WEBSITE - MAIN SCRIPT WITH YOUTUBE
   ============================================ */

class BirthdayWebsite {
  constructor() {
    this.currentScene = 1;
    this.isAnimating = false;
    this.confetti = null;
    this.isEnvelopeOpened = false;
    
    this.init();
  }

  init() {
    console.log('🎉 Initializing Birthday Website');
    this.setupElements();
    this.setupConfetti();
    this.attachEventListeners();
    this.startOpeningAnimation();
  }



  setupElements() {
    this.scenes = document.querySelectorAll('.scene');
    this.openBtn = document.querySelector('.open-btn');
    this.openEnvelopeBtn = document.querySelector('.open-envelope-btn');
    this.envelope = document.querySelector('.envelope');
    this.messagePaper = document.querySelector('.message-paper');
    
    console.log('✅ Elements setup:', { scenes: this.scenes.length });
  }



  setupConfetti() {
    const canvas = document.createElement('canvas');
    canvas.id = 'confetti-canvas';
    document.body.appendChild(canvas);
    this.confetti = new Confetti('confetti-canvas');
    console.log('✅ Confetti setup ready');
  }

  attachEventListeners() {
    // Hold down "Buka Pesan" button with loading animation
    let holdTimeout;
    const startHold = () => {
      clearTimeout(holdTimeout);
      this.openBtn.classList.remove('reversing');
      this.openBtn.classList.add('loading', 'active');
      holdTimeout = setTimeout(() => {
        console.log('Button "Buka Pesan" held for 2 seconds');
        this.openBtn.classList.remove('loading', 'active');
        this.goToScene(2);
      }, 2000);
    };

    const cancelHold = () => {
      if (this.openBtn.classList.contains('active')) {
        clearTimeout(holdTimeout);
        this.openBtn.classList.remove('loading', 'active');
        this.openBtn.classList.add('reversing');
      }
    };

    // Handle reverse animation completion
    const btnProgress = this.openBtn.querySelector('.btn-progress');
    if (btnProgress) {
      btnProgress.addEventListener('transitionend', () => {
        if (this.openBtn.classList.contains('reversing')) {
          this.openBtn.classList.remove('reversing', 'loading');
        }
      }, {once: false});
    }

    // Mouse events
    this.openBtn.addEventListener('mousedown', startHold);
    this.openBtn.addEventListener('mouseup', cancelHold);
    this.openBtn.addEventListener('mouseleave', cancelHold);

    // Touch events
    this.openBtn.addEventListener('touchstart', startHold);
    this.openBtn.addEventListener('touchend', cancelHold);
    this.openBtn.addEventListener('touchcancel', cancelHold);
    
    // Hold down "Buka Amplop" button with loading animation
    let holdTimeoutEnvelope;
    const startHoldEnvelope = () => {
      clearTimeout(holdTimeoutEnvelope);
      this.openEnvelopeBtn.classList.remove('reversing');
      this.openEnvelopeBtn.classList.add('loading', 'active');
      holdTimeoutEnvelope = setTimeout(() => {
        console.log('Button "Buka Amplop" held for 2 seconds');
        this.openEnvelopeBtn.classList.remove('loading', 'active');
        this.openEnvelope();
      }, 2000);
    };

    const cancelHoldEnvelope = () => {
      if (this.openEnvelopeBtn.classList.contains('active')) {
        clearTimeout(holdTimeoutEnvelope);
        this.openEnvelopeBtn.classList.remove('loading', 'active');
        this.openEnvelopeBtn.classList.add('reversing');
      }
    };

    // Handle reverse animation completion
    const envelopeBtnProgress = this.openEnvelopeBtn.querySelector('.btn-progress');
    if (envelopeBtnProgress) {
      envelopeBtnProgress.addEventListener('transitionend', () => {
        if (this.openEnvelopeBtn.classList.contains('reversing')) {
          this.openEnvelopeBtn.classList.remove('reversing', 'loading');
        }
      }, {once: false});
    }

    // Mouse events
    this.openEnvelopeBtn.addEventListener('mousedown', startHoldEnvelope);
    this.openEnvelopeBtn.addEventListener('mouseup', cancelHoldEnvelope);
    this.openEnvelopeBtn.addEventListener('mouseleave', cancelHoldEnvelope);

    // Touch events
    this.openEnvelopeBtn.addEventListener('touchstart', startHoldEnvelope);
    this.openEnvelopeBtn.addEventListener('touchend', cancelHoldEnvelope);
    this.openEnvelopeBtn.addEventListener('touchcancel', cancelHoldEnvelope);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' && this.currentScene < 3) {
        this.goToScene(this.currentScene + 1);
      }
      if (e.key === 'ArrowLeft' && this.currentScene > 1) {
        this.goToScene(this.currentScene - 1);
      }

    });

    // Note bar close button
    const noteBarClose = document.getElementById('note-bar-close');
    if (noteBarClose) {
      noteBarClose.addEventListener('click', () => {
        this.closeNoteBar();
      });
    }

    // Note button to reopen note bar
    const noteButton = document.getElementById('note-button');
    if (noteButton) {
      noteButton.addEventListener('click', () => {
        this.openNoteBar();
      });
    }
    
    console.log('✅ Event listeners attached');
  }

  startOpeningAnimation() {
    // Trigger glow animation for title
    const title = document.querySelector('.opening-title');
    setTimeout(() => {
      if (title) {
        title.classList.add('glow-text');
        console.log('✅ Title glow animation started');
      }
    }, 1500);
  }

  goToScene(sceneNumber) {
    if (this.isAnimating || sceneNumber === this.currentScene) return;
    if (sceneNumber < 1 || sceneNumber > 3) return;

    console.log(`Transitioning to Scene ${sceneNumber}`);
    this.isAnimating = true;

    const direction = sceneNumber > this.currentScene ? 'next' : 'prev';

    this.scenes.forEach((scene, index) => {
      const sceneNum = index + 1;
      
      if (sceneNum === this.currentScene) {
        scene.classList.remove('active');
        scene.classList.add(direction);
      } else if (sceneNum === sceneNumber) {
        scene.classList.remove(direction, 'prev');
        scene.classList.add('active');
      }
    });

    this.currentScene = sceneNumber;

    setTimeout(() => {
      this.isAnimating = false;
    }, 800);
  }

  openEnvelope() {
    if (this.isEnvelopeOpened || this.isAnimating) {
      console.log('⚠️ Envelope already opened or animation in progress');
      return;
    }

    console.log('Opening envelope...');
    this.isEnvelopeOpened = true;

    // Disable button
    this.openEnvelopeBtn.disabled = true;

    // Animation envelope
    if (this.envelope) {
      this.envelope.classList.add('opened');
      console.log('✅ Envelope animation started');
    }

    // Go to scene 3 when envelope animation completes (0.8s)
    setTimeout(() => {
      this.goToScene(3);
      console.log('✅ Transitioning to message scene');
    }, 800);

    // Animate message lines after scene transition
    setTimeout(() => {
      this.animateMessage();
      console.log('✅ Message animation started');
    }, 1000);
  }

  animateMessage() {
    const lines = document.querySelectorAll('.message-line');
    console.log(`Animating ${lines.length} message lines`);
    
    lines.forEach((line, index) => {
      // Reset animation
      line.style.animation = 'none';
      
      // Trigger reflow
      void line.offsetWidth;
      
      // Apply animation
      line.style.animation = `lineReveal 0.8s ease-out forwards`;
      line.style.animationDelay = `${index * 0.2}s`;
    });
  }



  closeNoteBar() {
    const noteBar = document.getElementById('note-bar');
    const noteButton = document.getElementById('note-button');
    if (noteBar) {
      noteBar.style.animation = 'noteBarOut 0.5s ease-in forwards';
      setTimeout(() => {
        noteBar.style.display = 'none';
        // Show note button after note bar is hidden
        if (noteButton) {
          noteButton.style.display = 'flex';
          noteButton.style.animation = 'fadeIn 0.5s ease-out';
        }
      }, 500);
    }
  }

  openNoteBar() {
    const noteBar = document.getElementById('note-bar');
    const noteButton = document.getElementById('note-button');
    
    if (noteBar) {
      // Hide note button
      if (noteButton) {
        noteButton.style.display = 'none';
      }
      // Show and animate note bar
      noteBar.style.display = 'block';
      noteBar.style.animation = 'slideInRight 0.5s ease-out';
    }
  }

  isMobile() {
    return window.innerWidth <= 768;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('📄 DOM Content Loaded');
    window.birthdayWebsite = new BirthdayWebsite();
  });
} else {
  console.log('📄 DOM Already Loaded');
  window.birthdayWebsite = new BirthdayWebsite();
}

// Prevent some default behaviors
document.addEventListener('contextmenu', (e) => {
  if (e.target.closest('button')) {
    e.preventDefault();
  }
});

console.log('✅ Script loaded successfully');
