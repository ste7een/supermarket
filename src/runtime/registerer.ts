import { defineNuxtPlugin } from '#app'
import { useAppManager } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
    const appManager = useAppManager()
    // Settings App
    appManager.addApp({
        "name": "Supermarket",
        "title": "سوبرماركيت",
        "icon": "i-ps:cart-supermarket",
        "size": "min-w-xl min-h-xl max-w-xl max-h-xl",
    })
})
