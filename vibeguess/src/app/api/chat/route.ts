import { experimental_generateImage as generateImage } from 'ai'
import { luma } from '@ai-sdk/luma'
import * as fs from 'fs'


console.log('PLEASE');

const { image } = await generateImage({
    model: luma.image('photon-flash-1', { maxPollAttempts: 500 }),
    prompt: 'Geographically accurate image at mount everest',
    aspectRatio: '4:3',
})


const filename = `image-${Date.now()}.png`
const publicPath = `${process.cwd()}/public/${filename}`
fs.writeFileSync(publicPath, image.uint8Array)

console.log(`Image Saved to: `, publicPath)
