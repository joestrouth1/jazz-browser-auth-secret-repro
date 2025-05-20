// @ts-check
import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    env: {
        schema: {
            JAZZ_CLOUD_KEY: envField.string({
                access: 'public',
                context: 'client'
            })
        }
    }
});
