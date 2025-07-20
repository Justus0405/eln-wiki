import { onMounted, onUnmounted } from 'vue'

// Stops minecraft textures from being blurry
// Properties are in style.css under .pixelated-images img
export function usePixelatedImages() {
    onMounted(() => {
        document.body.classList.add('pixelated-images')
    })
    onUnmounted(() => {
        document.body.classList.remove('pixelated-images')
    })
}
