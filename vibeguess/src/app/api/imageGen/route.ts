import { experimental_generateImage as generateImage } from 'ai'
import { luma } from '@ai-sdk/luma'
import * as fs from 'fs'
import { PLACES } from './place'
import { existsSync } from 'fs'
import path from 'path'

for (const place of PLACES) {
    const placePath = path.join(process.cwd(), `public/image-${place.id}.png`)
    console.log(placePath)
    if (!existsSync(placePath)) {
        const { image } = await generateImage({
            model: luma.image('photon-flash-1', { maxPollAttempts: 500 }),
            prompt: place.imagePrompt,
            aspectRatio: '4:3',
        })


        const filename = `image-${place.id}.png`
        const publicPath = `${process.cwd()}/public/${filename}`
        fs.writeFileSync(publicPath, image.uint8Array)

        console.log(`Image Saved to: `, publicPath)
    } else {
        console.log('Image already exists');
    }
}