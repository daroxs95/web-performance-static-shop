import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                cart: 'cart.html',
                checkout: 'checkout.html',
                contact: 'contact.html',
                detail: 'detail.html',
                index: 'index.html',
                shop: 'shop.html',
            }
        }
    }
})