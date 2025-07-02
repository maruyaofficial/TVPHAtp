// TVPHatp app.js with health check, error handling, and retry support

// ---- Health Check Function ----
async function checkManifestHealth(manifestUrl) {
    try {
        const res = await fetch(manifestUrl, { method: 'HEAD' });
        return res.ok;
    } catch (e) {
        console.error("Health check failed for", manifestUrl, e);
        return false;
    }
}

// ---- ChannelPlayer Class ----
class ChannelPlayer {
    constructor() {
        this.filteredChannels = window.channelList || [];
        this.currentIndex = 0;
        this.channelNumberInput = '';
        this.channelNumberTimeout = null;
        this.elements = {
            video: document.getElementById('videoElement'),
            channelNumberDisplay: document.getElementById('channelNumberDisplay')
        };

        this.shakaPlayer = new shaka.Player(this.elements.video);

        this.setupKeyboardControls();
        this.playCurrentChannel();
    }

    async playCurrentChannel() {
        const channel = this.filteredChannels[this.currentIndex];

        if (!channel) {
            this.showError("Invalid channel");
            return;
        }

        const isHealthy = await checkManifestHealth(channel.manifest);

        if (!isHealthy) {
            this.showError("This channel is offline or unavailable.");
            return;
        }

        try {
            this.elements.video.src = '';
            this.elements.video.load();

            await this.shakaPlayer.load(channel.manifest);
            this.hideError();
            this.showChannelInfo(channel);
        } catch (error) {
            console.error("Shaka playback error:", error);
            this.showError("Playback error. Try another channel.");
        }
    }

    selectChannel(index) {
        this.currentIndex = index;
    }

    showChannelInfo(channel) {
        console.log(`Now playing: ${channel.name}`);
        // You can enhance this to update UI with more info
    }

    showError(message) {
        const errorBox = document.getElementById('errorNotification');
        if (errorBox) {
            errorBox.textContent = message || "Error";
            errorBox.classList.add('show');
        }
    }

    hideError() {
        const errorBox = document.getElementById('errorNotification');
        if (errorBox) {
            errorBox.classList.remove('show');
        }
    }

    setupKeyboardControls() {
        window.addEventListener('keydown', (e) => {
            if (e.key >= '0' && e.key <= '9') {
                this.channelNumberInput += e.key;
                this.showChannelNumberDisplay();

                if (this.channelNumberTimeout) clearTimeout(this.channelNumberTimeout);
                this.channelNumberTimeout = setTimeout(() => this.processChannelNumberInput(), 2000);
            } else if (e.key === 'Enter') {
                this.playCurrentChannel();
            } else if (e.key === ' ') {
                this.elements.video.paused ? this.elements.video.play() : this.elements.video.pause();
            } else if (e.key.toLowerCase() === 'm') {
                this.elements.video.muted = !this.elements.video.muted;
            }
        });
    }

    processChannelNumberInput() {
        const channelNumber = parseInt(this.channelNumberInput);

        if (channelNumber >= 1 && channelNumber <= this.filteredChannels.length) {
            this.selectChannel(channelNumber - 1);
            this.playCurrentChannel();
            console.log(`Switched to channel ${channelNumber}: ${this.filteredChannels[channelNumber - 1].name}`);
        } else {
            console.warn(`Invalid channel number: ${channelNumber}`);
        }

        this.channelNumberInput = '';
        this.hideChannelNumberDisplay();
        this.channelNumberTimeout = null;
    }

    showChannelNumberDisplay() {
        if (this.elements.channelNumberDisplay) {
            this.elements.channelNumberDisplay.textContent = this.channelNumberInput;
            this.elements.channelNumberDisplay.classList.add('show');
        }
    }

    hideChannelNumberDisplay() {
        if (this.elements.channelNumberDisplay) {
            this.elements.channelNumberDisplay.classList.remove('show');
        }
    }

    destroy() {
        if (this.shakaPlayer) {
            this.shakaPlayer.destroy();
        }
    }
}

// ---- Global Retry & Error Handlers ----
function retryCurrentChannel() {
    if (window.channelPlayer) {
        window.channelPlayer.playCurrentChannel();
    }
}

function closeErrorNotification() {
    if (window.channelPlayer) {
        window.channelPlayer.hideError();
    }
}

// ---- App Init ----
document.addEventListener('DOMContentLoaded', () => {
    window.channelPlayer = new ChannelPlayer();
    document.getElementById('loadingSpinner')?.classList.add('hidden');
});

window.addEventListener('beforeunload', () => {
    if (window.channelPlayer) {
        window.channelPlayer.destroy();
    }
});

console.log('Channel Player with Shaka Player support loaded successfully');
