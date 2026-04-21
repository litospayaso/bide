import { css, html } from 'lit';
import { state, query } from 'lit/decorators.js';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import Page from '../../shared/page';

export default class PageCamera extends Page {
  static styles = [
    Page.styles,
    css`
      :host {
        display: block;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        background-color: #000;
        font-family: 'Inter', system-ui, -apple-system, sans-serif;
      }

      .camera-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      .video-feed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
      }

      .reference-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: 2;
        pointer-events: none;
        user-select: none;
        -webkit-user-drag: none;
      }

      .bottom-menu {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 24px 16px;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 16px;
        background: rgba(20, 20, 20, 0.4);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 24px 24px 0 0;
        box-sizing: border-box;
      }

      .actions-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }

      .action-btn {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        backdrop-filter: blur(4px);
      }

      .action-btn:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.05);
      }

      .action-btn:active {
        transform: scale(0.95);
      }

      .action-btn.primary {
        width: 72px;
        height: 72px;
        background: linear-gradient(135deg, #FF6B6B, #FF8E53);
        border: none;
        box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
      }

      .action-btn.primary:hover {
        box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
      }

      /* Icons via simplified SVG */
      .icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      .primary .icon {
        width: 32px;
        height: 32px;
      }

      .slider-container {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        color: white;
        font-size: 14px;
        font-weight: 500;
      }

      input[type=range] {
        -webkit-appearance: none;
        width: 100%;
        background: transparent;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background: #ffffff;
        cursor: pointer;
        margin-top: -8px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      }
      input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 4px;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 2px;
      }
    `
  ];

  @query('#camera-feed')
  private videoElement!: HTMLVideoElement;

  @state()
  private referenceImageUri: string | null = null;

  @state()
  private transparency: number = 0.5;

  @state()
  private imageSize: number = 100;

  @state()
  private offsetX: number = 0;

  @state()
  private offsetY: number = 0;

  private isDragging: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private initialX: number = 0;
  private initialY: number = 0;

  private mediaStream: MediaStream | null = null;

  async connectedCallback() {
    super.connectedCallback();
    await this.initCamera();
  }

  disconnectedCallback() {
    this.stopCamera();
    super.disconnectedCallback();
  }

  private async initCamera() {
    try {
      this.mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      if (this.videoElement) {
        this.videoElement.srcObject = this.mediaStream;
      }
    } catch (err) {
      console.error('Error accessing the camera', err);
    }
  }

  private stopCamera() {
    if (this.mediaStream) {
      this.mediaStream.getTracks().forEach(track => track.stop());
    }
  }

  private async pickImage() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });
      if (image.dataUrl) {
        this.referenceImageUri = image.dataUrl;
      }
    } catch (error) {
      console.error('Error selecting image', error);
    }
  }

  private handleSliderChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.transparency = Number(input.value) / 100;
  }

  private handleSizeSliderChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.imageSize = Number(input.value);
  }

  private handlePointerDown(e: PointerEvent) {
    if (!this.referenceImageUri) return;
    this.isDragging = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
    this.initialX = this.offsetX;
    this.initialY = this.offsetY;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  private handlePointerMove(e: PointerEvent) {
    if (!this.isDragging) return;
    const dx = e.clientX - this.startX;
    const dy = e.clientY - this.startY;
    this.offsetX = this.initialX + dx;
    this.offsetY = this.initialY + dy;
  }

  private handlePointerUp(e: PointerEvent) {
    this.isDragging = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
  }

  private resetAdjustments() {
    this.offsetX = 0;
    this.offsetY = 0;
    this.imageSize = 100;
    this.transparency = 0.5;
  }

  private async takeScreenshot() {
    if (!this.videoElement) return;

    // Create a temporary canvas
    const canvas = document.createElement('canvas');
    const vw = this.videoElement.videoWidth;
    const vh = this.videoElement.videoHeight;
    canvas.width = vw;
    canvas.height = vh;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw the video frame
    ctx.drawImage(this.videoElement, 0, 0, vw, vh);

    // If there's a reference image, draw it over the video
    if (this.referenceImageUri) {
        return new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = () => {
                ctx.globalAlpha = this.transparency;
                
                // Calculate dimensions to match object-fit: contain logic roughly
                // Or simply draw it adapting to the canvas dimensions
                const imgRatio = img.width / img.height;
                const canvasRatio = vw / vh;
                let baseDrawWidth = vw;
                let baseDrawHeight = vh;

                if (imgRatio > canvasRatio) {
                    baseDrawHeight = vw / imgRatio;
                } else {
                    baseDrawWidth = vh * imgRatio;
                }

                const scaleFactor = this.imageSize / 100;
                const finalDrawWidth = baseDrawWidth * scaleFactor;
                const finalDrawHeight = baseDrawHeight * scaleFactor;
                
                // Map CSS offsets to video/canvas coordinates
                const rect = this.videoElement.getBoundingClientRect();
                const scaleX = vw / rect.width;
                const scaleY = vh / rect.height;

                const offsetX = (vw - finalDrawWidth) / 2 + (this.offsetX * scaleX);
                const offsetY = (vh - finalDrawHeight) / 2 + (this.offsetY * scaleY);

                ctx.drawImage(img, offsetX, offsetY, finalDrawWidth, finalDrawHeight);
                this.downloadCanvas(canvas);
                resolve();
            };
            img.src = this.referenceImageUri as string;
        });
    } else {
        this.downloadCanvas(canvas);
    }
  }

  private downloadCanvas(canvas: HTMLCanvasElement) {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `bide-drawing-${new Date().getTime()}.png`;
      link.href = dataUrl;
      link.click();
  }

  render() {
    return html`
      <div 
        class="camera-container"
        @pointerdown="${this.handlePointerDown}"
        @pointermove="${this.handlePointerMove}"
        @pointerup="${this.handlePointerUp}"
        style="touch-action: none;"
      >
        <!-- Live Camera Feed -->
        <video id="camera-feed" class="video-feed" autoplay playsinline muted></video>

        <!-- Reference Image Overlay -->
        ${this.referenceImageUri ? html`
          <img 
            src="${this.referenceImageUri}" 
            class="reference-overlay" 
            style="opacity: ${this.transparency}; transform: translate(${this.offsetX}px, ${this.offsetY}px) scale(${this.imageSize / 100}); transform-origin: center center;"
            alt="Reference overlay"
          />
        ` : ''}

        <!-- Bottom Menu / Action Bar -->
        <div class="bottom-menu" @pointerdown="${(e: PointerEvent) => e.stopPropagation()}">
          ${this.referenceImageUri ? html`
            <div class="slider-container">
              <span>Opac.</span>
              <input 
                type="range" 
                min="0" max="100" 
                .value="${(this.transparency * 100).toString()}" 
                @input="${this.handleSliderChange}"
              />
            </div>
            <div class="slider-container">
              <span>Size</span>
              <input 
                type="range" 
                min="10" max="300" 
                .value="${this.imageSize.toString()}" 
                @input="${this.handleSizeSliderChange}"
              />
            </div>
          ` : ''}

          <div class="actions-row">
            <!-- Add Image Button -->
            <button class="action-btn" @click="${this.pickImage}" title="Add Reference">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M19,21H5c-1.1,0-2-0.9-2-2V5c0-1.1,0.9-2,2-2h14c1.1,0,2,0.9,2,2v14C21,20.1,20.1,21,19,21z M5,19h14V5H5V19z"/>
                <path d="M7,12l3,4l4-5l5,7H5L7,12z"/>
              </svg>
            </button>

            <!-- Screenshot Button -->
            <button class="action-btn primary" @click="${this.takeScreenshot}" title="Take Screenshot">
              <svg class="icon" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="8"/>
              </svg>
            </button>
            
            <!-- Reset Button -->
            <button class="action-btn" title="Reset" @click="${this.resetAdjustments}">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z"/>
              </svg>
            </button>
            
            <!-- Close Button -->
            <button class="action-btn" title="Clear Image" @click="${() => this.referenceImageUri = null}">
              <svg class="icon" viewBox="0 0 24 24">
                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'page-camera': PageCamera;
  }
}
